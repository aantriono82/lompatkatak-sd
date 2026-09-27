/* Mesin permainan murni: aturan, pengacakan, dan perhitungan hasil. */
(function (root) {
  'use strict';

  const CONFIG = Object.freeze({
    lives: 8,
    questionsPerRound: 10,
    secondsPerQuestion: Object.freeze({
      'kelas-1-2': 45,
      'kelas-3-4': 55,
      'kelas-5-6': 70
    }),
    defaultSecondsPerQuestion: 45,
    passingThresholdPercent: 60,
    pointsPerCorrect: 10,
    lifeBonusPoints: 2,
    maxSpeedBonusPoints: 12
  });

  function shuffled(items, random = Math.random) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function validateQuestion(question) {
    if (!question || typeof question.text !== 'string' || !Array.isArray(question.options)) {
      throw new Error('Format soal tidak valid.');
    }
    if (question.options.length < 3 || question.options.length > 4 ||
        question.options.some(option => typeof option !== 'string') ||
        !Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      throw new Error('Soal harus memiliki 3 atau 4 pilihan dan indeks jawaban yang benar.');
    }
  }

  function prepareQuestions(bank, random = Math.random, count = null) {
    if (!Array.isArray(bank) || !bank.length) throw new Error('Bank soal kosong.');
    const pool = shuffled(bank, random);
    const selected = typeof count === 'number' && count > 0 && count < pool.length
      ? pool.slice(0, count)
      : pool;

    return selected.map(question => {
      validateQuestion(question);
      const choices = shuffled(question.options.map((text, index) => ({ text, index })), random);
      return {
        ...question,
        options: choices.map(choice => choice.text),
        answer: choices.findIndex(choice => choice.index === question.answer)
      };
    });
  }

  function selectBalancedQuestions(questionList, count = CONFIG.questionsPerRound, random = Math.random) {
    if (!Array.isArray(questionList) || !questionList.length) throw new Error('Bank soal kosong.');
    const grouped = {};
    questionList.forEach(question => {
      const key = question.operation || 'campuran';
      (grouped[key] ||= []).push(question);
    });
    const keys = Object.keys(grouped);
    if (keys.length < 2) return prepareQuestions(questionList, random, count);

    const base = Math.floor(count / keys.length);
    let remainder = count % keys.length;
    const selected = [];
    shuffled(keys, random).forEach(key => {
      const take = base + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder -= 1;
      selected.push(...shuffled(grouped[key], random).slice(0, take));
    });
    return prepareQuestions(selected, random, count);
  }

  class Round {
    constructor(questions, options = {}) {
      this.questions = questions;
      this.index = 0;
      this.lives = options.lives ?? CONFIG.lives;
      this.level = options.level || 'kelas-1-2';
      const seconds = CONFIG.secondsPerQuestion[this.level] || CONFIG.defaultSecondsPerQuestion;
      this.secondsPerQuestion = options.secondsPerQuestion ?? seconds;
      this.correct = 0;
      this.answers = [];
      this.status = 'playing';
      this.bonus = 0;
      this.bonusDetails = { life: 0, speed: 0, total: 0 };
    }

    get pointsPerQuestion() {
      return this.questions.length ? Math.round(100 / this.questions.length) : 0;
    }

    get baseScore() {
      return this.questions.length ? Math.round((this.correct / this.questions.length) * 100) : 0;
    }

    get score() { return this.baseScore + this.bonus; }

    get percentage() {
      return this.questions.length ? Math.round((this.correct / this.questions.length) * 100) : 0;
    }

    get isWon() {
      return this.lives > 0 && this.percentage >= CONFIG.passingThresholdPercent;
    }

    calculateBonus(elapsedMs = 0) {
      if (!this.isWon) {
        this.bonus = 0;
        this.bonusDetails = { life: 0, speed: 0, total: 0 };
        return this.bonusDetails;
      }
      const lifeBonus = Math.max(0, this.lives) * CONFIG.lifeBonusPoints;
      const allowedMs = this.questions.length * this.secondsPerQuestion * 1000;
      const remainingRatio = allowedMs ? Math.max(0, allowedMs - elapsedMs) / allowedMs : 0;
      const speedBonus = Math.round(remainingRatio * CONFIG.maxSpeedBonusPoints);
      this.bonus = lifeBonus + speedBonus;
      this.bonusDetails = { life: lifeBonus, speed: speedBonus, total: this.bonus };
      return this.bonusDetails;
    }

    get question() { return this.questions[this.index]; }

    answer(choice) {
      if (this.status !== 'playing') return null;
      const question = this.question;
      if (choice !== null && (!Number.isInteger(choice) || choice < 0 || choice >= question.options.length)) {
        throw new Error('Pilihan jawaban tidak valid.');
      }
      const correct = choice === question.answer;
      if (correct) this.correct += 1;
      else this.lives -= 1;
      const result = { questionId: question.id, choice, correct, timedOut: choice === null };
      this.answers.push(result);
      this.status = 'feedback';
      return result;
    }

    advance() {
      if (this.status !== 'feedback') return false;
      if (this.lives <= 0 || this.index >= this.questions.length - 1) {
        this.status = 'ended';
        return false;
      }
      this.index += 1;
      this.status = 'playing';
      return true;
    }

    finish() { this.status = 'ended'; }
  }

  const api = { CONFIG, shuffled, prepareQuestions, selectBalancedQuestions, Round };
  root.FrogEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
