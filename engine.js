/* Mesin ronde: progres dihitung dari slot yang dikuasai, bukan jumlah percobaan. */
(function (root) {
  'use strict';

  const CONFIG = Object.freeze({
    lives: 8,
    target: 20,
    pointsPerCorrect: 10,
    pointsPerWrong: 5,
    retryDelay: Object.freeze({ min: 3, max: 5 }),
    secondsPerPhase: Object.freeze({ A: 45, B: 55, C: 70 }),
    slotCounts: Object.freeze({
      A: Object.freeze({ penjumlahan: 10, pengurangan: 10 }),
      B: Object.freeze({ penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 }),
      C: Object.freeze({ penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 })
    })
  });

  const PHASES = Object.freeze({
    A: Object.freeze({ label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', description: 'Tambah dan kurang sampai 20', seconds: 45 }),
    B: Object.freeze({ label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', description: 'Operasi bilangan sampai 1.000', seconds: 55 }),
    C: Object.freeze({ label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', description: 'Operasi bilangan sampai 1.000', seconds: 70 })
  });

  function shuffled(items, random = Math.random) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function randomInt(min, max, random = Math.random) {
    return min + Math.floor(random() * (max - min + 1));
  }

  function validateQuestion(question) {
    if (!question || typeof question.text !== 'string' || !Array.isArray(question.options)) {
      throw new Error('Format soal tidak valid.');
    }
    if (question.options.length !== 3 || question.options.some(option => typeof option !== 'string') ||
        !Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      throw new Error('Soal harus memiliki tiga pilihan dan indeks jawaban yang benar.');
    }
    if (new Set(question.options).size !== question.options.length) throw new Error('Pilihan jawaban harus unik.');
  }

  function prepareQuestions(questionList, random = Math.random) {
    if (!Array.isArray(questionList) || !questionList.length) throw new Error('Bank soal kosong.');
    return shuffled(questionList, random).map(question => {
      validateQuestion(question);
      const correctChoice = question.options[question.answer];
      const distractors = shuffled(question.options.filter((_, index) => index !== question.answer), random);
      const choices = shuffled([correctChoice, ...distractors], random);
      return { ...question, options: choices, answer: choices.indexOf(correctChoice) };
    });
  }

  class Round {
    constructor(initialQuestions, options = {}) {
      if (!Array.isArray(initialQuestions) || !initialQuestions.length) throw new Error('Ronde tidak memiliki soal.');
      this.questions = initialQuestions.slice();
      this.index = 0;
      this.lives = options.lives ?? CONFIG.lives;
      this.phase = options.phase || 'A';
      this.level = this.phase;
      this.target = options.target ?? CONFIG.target;
      this.secondsPerQuestion = options.secondsPerQuestion ?? CONFIG.secondsPerPhase[this.phase] ?? CONFIG.secondsPerPhase.A;
      this.variantFactory = typeof options.variantFactory === 'function' ? options.variantFactory : null;
      this.random = options.random || Math.random;
      this.correct = 0;
      this._score = 0;
      this.answers = [];
      this.slots = new Map();
      this.usedQuestionKeys = new Set();
      this.shownQuestionKeys = new Set();
      this.presentedCount = 0;
      this.nextInitialIndex = 0;
      this.retryQueue = [];
      this.status = 'playing';
      this.currentItem = null;

      this.questions.forEach((question, index) => {
        validateQuestion(question);
        const slotId = question.slotId || 'slot-' + index;
        const slot = { id: slotId, operation: question.operation, format: question.format || 'direct', negative: Boolean(question.negative), tier: question.tier || 1, question, attempts: [], complete: false, questionKeys: [] };
        this.slots.set(slotId, slot);
        this.usedQuestionKeys.add(question.uniqueKey || question.id || slotId);
        this.questions[index] = { ...question, slotId, retry: false, retryNumber: 0 };
      });
      this.currentItem = this.questions[0];
      this.shownQuestionKeys.add(this.currentItem.uniqueKey || this.currentItem.id);
      this.nextInitialIndex = 1;
    }

    get pointsPerQuestion() { return CONFIG.pointsPerCorrect; }
    get baseScore() { return this._score; }
    get score() { return Math.max(0, this._score); }
    get attempts() { return this.answers.length; }
    get wrongCount() { return this.answers.filter(result => !result.correct).length; }
    get accuracy() { return this.attempts ? Math.round(this.correctAttempts / this.attempts * 100) : 0; }
    get correctAttempts() { return this.answers.filter(result => result.correct).length; }
    get percentage() { return this.target ? Math.round((this.correct / this.target) * 100) : 0; }
    get isWon() { return this.lives > 0 && this.correct >= this.target; }
    get question() { return this.currentItem; }
    calculateBonus() { return { life: 0, speed: 0, total: 0 }; }

    answer(choice) {
      if (this.status !== 'playing' || !this.currentItem) return null;
      const question = this.currentItem;
      if (choice !== null && (!Number.isInteger(choice) || choice < 0 || choice >= question.options.length)) {
        throw new Error('Pilihan jawaban tidak valid.');
      }
      const correct = choice === question.answer;
      const slot = this.slots.get(question.slotId);
      const attempt = { questionId: question.id, question, choice, correct, timedOut: choice === null, slotId: question.slotId, retry: Boolean(question.retry) };
      slot.attempts.push(attempt);
      slot.questionKeys.push(question.uniqueKey || question.id);
      this.answers.push(attempt);
      this.presentedCount += 1;
      if (correct) {
        if (!slot.complete) { slot.complete = true; this.correct += 1; }
        this._score += CONFIG.pointsPerCorrect;
      } else {
        this.lives -= 1;
        this._score = Math.max(0, this._score - CONFIG.pointsPerWrong);
        if (this.lives > 0 && this.variantFactory) {
          const delay = randomInt(CONFIG.retryDelay.min, CONFIG.retryDelay.max, this.random);
          this.retryQueue.push({ slot, due: this.presentedCount + delay, retryNumber: slot.attempts.length });
        }
      }
      this.status = 'feedback';
      return attempt;
    }

    pickNextItem() {
      const dueIndex = this.retryQueue.findIndex(item => item.due <= this.presentedCount);
      if (dueIndex >= 0) {
        const retry = this.retryQueue.splice(dueIndex, 1)[0];
        const variant = this.variantFactory?.(retry.slot, retry.retryNumber, this.usedQuestionKeys);
        if (variant) {
          this.usedQuestionKeys.add(variant.uniqueKey || variant.id);
          this.shownQuestionKeys.add(variant.uniqueKey || variant.id);
          return { ...variant, slotId: retry.slot.id, retry: true, retryNumber: retry.retryNumber };
        }
      }
      if (this.nextInitialIndex < this.questions.length) {
        const next = this.questions[this.nextInitialIndex++];
        this.shownQuestionKeys.add(next.uniqueKey || next.id);
        return next;
      }
      if (this.retryQueue.length) {
        const retry = this.retryQueue.shift();
        const variant = this.variantFactory?.(retry.slot, retry.retryNumber, this.usedQuestionKeys);
        if (variant) {
          this.usedQuestionKeys.add(variant.uniqueKey || variant.id);
          this.shownQuestionKeys.add(variant.uniqueKey || variant.id);
          return { ...variant, slotId: retry.slot.id, retry: true, retryNumber: retry.retryNumber };
        }
      }
      return null;
    }

    advance() {
      if (this.status !== 'feedback') return false;
      if (this.lives <= 0 || this.correct >= this.target) { this.status = 'ended'; return false; }
      const next = this.pickNextItem();
      if (!next) { this.status = 'ended'; return false; }
      this.currentItem = next;
      this.index = this.presentedCount;
      this.status = 'playing';
      return true;
    }

    unresolvedSlots() {
      return Array.from(this.slots.values()).filter(slot => !slot.complete).map(slot => ({
        id: slot.id,
        operation: slot.operation,
        format: slot.format,
        negative: slot.negative,
        tier: slot.tier
      }));
    }

    shownKeys() { return Array.from(this.shownQuestionKeys); }

    finish() { this.status = 'ended'; }
  }

  const api = { CONFIG, PHASES, shuffled, randomInt, prepareQuestions, validateQuestion, Round };
  root.FrogEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
