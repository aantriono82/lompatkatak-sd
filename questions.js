/* Generator soal Matematika. Semua kunci disusun secara kanonik agar soal komutatif tidak berulang. */
(function (root) {
  'use strict';

  const operations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian'];
  const phaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Tambah dan kurang sampai 20' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Operasi bilangan sampai 1.000' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Operasi bilangan sampai 1.000' }
  };
  const slotCounts = {
    A: { penjumlahan: 10, pengurangan: 10 },
    B: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 },
    C: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 }
  };

  function shuffled(items, random = Math.random) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [result[index], result[swap]] = [result[swap], result[index]];
    }
    return result;
  }

  function randomInt(min, max, random = Math.random) {
    return min + Math.floor(random() * (max - min + 1));
  }

  function formatNumber(value) {
    const absolute = Math.abs(value).toLocaleString('id-ID');
    return value < 0 ? '−' + absolute : absolute;
  }

  function symbol(operation) {
    return { penjumlahan: '+', pengurangan: '−', perkalian: '×', pembagian: '÷' }[operation];
  }

  function canonicalKey(operation, a, b) {
    const values = operation === 'penjumlahan' || operation === 'perkalian' ? [a, b].sort((x, y) => x - y) : [a, b];
    return operation + ':' + values[0] + ':' + values[1];
  }

  function maxFor(phase, operation, tier) {
    if (phase === 'A') return tier === 1 ? 10 : tier === 2 ? 15 : 20;
    if (phase === 'B') {
      if (operation === 'perkalian' || operation === 'pembagian') return tier === 1 ? 25 : tier === 2 ? 50 : 100;
      return tier === 1 ? 100 : tier === 2 ? 500 : 1000;
    }
    return tier === 1 ? 100 : tier === 2 ? 500 : 1000;
  }

  function operationValues(phase, operation, tier, negative, random = Math.random) {
    const cap = maxFor(phase, operation, tier);
    for (let attempt = 0; attempt < 5000; attempt += 1) {
      if (operation === 'penjumlahan') {
        const a = randomInt(0, cap, random);
        const b = randomInt(0, cap - a, random);
        if (a + b > 0) return { a, b, answer: a + b };
      } else if (operation === 'pengurangan') {
        if (negative) {
          const a = randomInt(0, Math.max(0, cap - 1), random);
          const b = randomInt(a + 1, cap, random);
          return { a, b, answer: a - b };
        }
        const a = randomInt(1, cap, random);
        const b = randomInt(0, a, random);
        if (a !== b) return { a, b, answer: a - b };
      } else if (operation === 'perkalian') {
        const a = randomInt(2, Math.min(50, cap), random);
        const b = randomInt(2, Math.min(50, cap), random);
        if (a * b <= cap) return { a, b, answer: a * b };
      } else if (operation === 'pembagian') {
        const divisor = randomInt(2, Math.min(25, Math.max(2, cap)), random);
        const quotient = randomInt(1, Math.max(1, Math.floor(cap / divisor)), random);
        const dividend = divisor * quotient;
        if (dividend <= cap) return { a: dividend, b: divisor, answer: quotient };
      }
    }
    if (operation === 'penjumlahan') return { a: 1, b: Math.max(1, cap - 1), answer: cap };
    if (operation === 'pengurangan') return negative ? { a: 0, b: 1, answer: -1 } : { a: 2, b: 1, answer: 1 };
    if (operation === 'perkalian') return { a: 2, b: 2, answer: 4 };
    return { a: 4, b: 2, answer: 2 };
  }

  function buildOptions(answer, cap, allowNegative, random = Math.random) {
    const candidates = [answer + 1, answer - 1, answer + 2, answer - 2, answer + 10, answer - 10, answer * 2, answer === 0 ? 1 : 0];
    const options = [];
    for (const value of shuffled(candidates, random)) {
      if (value === answer || options.includes(value)) continue;
      if (!allowNegative && value < 0) continue;
      if (Math.abs(value) > Math.max(cap, 20)) continue;
      options.push(value);
      if (options.length === 2) break;
    }
    let fallback = 0;
    while (options.length < 2) {
      const value = allowNegative ? fallback - 1 : fallback;
      fallback += 1;
      if (value !== answer && !options.includes(value)) options.push(value);
    }
    return shuffled([answer, ...options], random).map(formatNumber);
  }

  function storyText(operation, a, b, answer, negative, random = Math.random) {
    if (operation === 'penjumlahan') {
      const variants = [
        `Di tepi ngarai ada ${formatNumber(a)} bunga dan ${formatNumber(b)} bunga lagi. Berapa semuanya?`,
        `Katak mengumpulkan ${formatNumber(a)} batu pagi hari dan ${formatNumber(b)} batu sore hari. Berapa batu seluruhnya?`,
        `Ada ${formatNumber(a)} burung di pohon. Datang lagi ${formatNumber(b)} burung. Berapa burung sekarang?`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    if (operation === 'pengurangan') {
      if (negative) return `Suhu di puncak ngarai ${formatNumber(a)}°C lalu turun ${formatNumber(b)}°C. Berapa suhu sekarang?`;
      const variants = [
        `Katak membawa ${formatNumber(a)} batu kecil. Ia memberikan ${formatNumber(b)} batu. Sisa batunya …`,
        `Ada ${formatNumber(a)} daun. Tertiup ${formatNumber(b)} daun. Berapa daun yang tersisa?`,
        `Perpustakaan memiliki ${formatNumber(a)} buku. Sebanyak ${formatNumber(b)} dipinjam. Sisa buku …`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    if (operation === 'perkalian') {
      const variants = [
        `Ada ${formatNumber(a)} kelompok, setiap kelompok berisi ${formatNumber(b)} benda. Berapa jumlah benda?`,
        `${formatNumber(a)} baris masing-masing berisi ${formatNumber(b)} bibit. Berapa bibit seluruhnya?`,
        `Setiap kotak berisi ${formatNumber(b)} pensil. Jika ada ${formatNumber(a)} kotak, berapa pensil semuanya?`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    return `Sebanyak ${formatNumber(a)} benda dibagi rata ke dalam ${formatNumber(b)} kelompok. Setiap kelompok mendapat …`;
  }

  function directText(operation, a, b) { return `Berapa hasil dari ${formatNumber(a)} ${symbol(operation)} ${formatNumber(b)}?`; }

  function balanceAnswerPosition(question, desiredIndex) {
    const currentIndex = question.answer;
    if (currentIndex === desiredIndex) return question;
    [question.options[currentIndex], question.options[desiredIndex]] = [question.options[desiredIndex], question.options[currentIndex]];
    question.answer = desiredIndex;
    return question;
  }

  function balancedAnswerOrder(count, random) {
    const counts = [0, 0, 0];
    for (let index = 0; index < count; index += 1) counts[index % 3] += 1;
    const result = [];
    while (result.length < count) {
      let candidates = [0, 1, 2].filter(value => counts[value] > 0 && !(result.length >= 2 && result[result.length - 1] === value && result[result.length - 2] === value));
      if (!candidates.length) candidates = [0, 1, 2].filter(value => counts[value] > 0);
      const highest = Math.max(...candidates.map(value => counts[value]));
      candidates = shuffled(candidates.filter(value => counts[value] === highest), random);
      const chosen = candidates[0];
      result.push(chosen);
      counts[chosen] -= 1;
    }
    return result;
  }

  function createQuestion(phase, descriptor, usedKeys = new Set(), random = Math.random) {
    const operation = descriptor.operation;
    let values;
    let key;
    for (let attempt = 0; attempt < 5000; attempt += 1) {
      values = operationValues(phase, operation, descriptor.tier || 1, Boolean(descriptor.negative), random);
      key = canonicalKey(operation, values.a, values.b);
      if (!usedKeys.has(key)) break;
    }
    const cap = maxFor(phase, operation, descriptor.tier || 1);
    const allowNegative = phase === 'C' && operation === 'pengurangan';
    const options = buildOptions(values.answer, cap, allowNegative, random);
    const answerText = formatNumber(values.answer);
    const format = descriptor.format === 'story' ? 'story' : 'direct';
    const text = format === 'story' ? storyText(operation, values.a, values.b, values.answer, Boolean(descriptor.negative), random) : directText(operation, values.a, values.b);
    const explanation = `${formatNumber(values.a)} ${symbol(operation)} ${formatNumber(values.b)} = ${answerText}.`;
    return {
      id: `${phase}-${operation}-${Math.abs(hashCode(key + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey: key,
      phase,
      tingkat: phase,
      operation,
      format,
      a: values.a,
      b: values.b,
      result: values.answer,
      negative: Boolean(descriptor.negative),
      tier: descriptor.tier || 1,
      slotId: descriptor.slotId,
      text,
      options,
      answer: options.indexOf(answerText),
      explanation,
      illustration: operation === 'perkalian' ? 'groups' : operation === 'pembagian' ? 'sharing' : operation === 'pengurangan' ? 'number-line' : 'counting-pebbles'
    };
  }

  function hashCode(value) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
    return hash;
  }

  function scheduleFor(phase) {
    const schedule = [];
    const order = phase === 'A' ? ['penjumlahan', 'pengurangan'] : operations;
    const max = phase === 'A' ? 10 : 5;
    for (let index = 0; index < max; index += 1) order.forEach(operation => schedule.push(operation));
    return schedule;
  }

  function createRoundQuestions(phase, options = {}) {
    if (!phaseInfo[phase]) throw new Error('Fase tidak dikenal.');
    const random = options.random || Math.random;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry : [];
    const counts = slotCounts[phase];
    const carryByOperation = {};
    carried.forEach(slot => {
      if (!counts[slot.operation]) return;
      (carryByOperation[slot.operation] ||= []).push(slot);
    });
    const schedule = scheduleFor(phase);
    const answerPlan = balancedAnswerOrder(schedule.length, random);
    let storyCount = 0;
    let negativeCount = 0;
    const questions = [];
    schedule.forEach((operation, index) => {
      const carriedSlot = carryByOperation[operation]?.shift();
      const tier = carriedSlot?.tier || (index < 7 ? 1 : index < 14 ? 2 : 3);
      let negative = Boolean(carriedSlot?.negative);
      if (phase === 'C' && operation === 'pengurangan' && !carriedSlot && negativeCount < 2) {
        const remainingNegativeSlots = schedule.slice(index).filter(item => item === operation).length;
        if (negativeCount < 2 && remainingNegativeSlots <= 2 - negativeCount) negative = true;
      }
      if (negative) negativeCount += 1;
      const format = carriedSlot?.format || (storyCount < 8 ? 'story' : 'direct');
      if (format === 'story') storyCount += 1;
      const descriptor = { ...carriedSlot, operation, tier, negative, format, slotId: carriedSlot?.id || `${phase}-slot-${index + 1}` };
      const question = balanceAnswerPosition(createQuestion(phase, descriptor, excluded, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    });
    const variantFactory = (slot, retryNumber, usedKeys) => balanceAnswerPosition(createQuestion(phase, { operation: slot.operation, format: slot.format, negative: slot.negative, tier: slot.tier, slotId: slot.id, retryNumber }, usedKeys, random), (retryNumber || 1) % 3);
    return { questions, variantFactory, usedKeys: excluded };
  }

  const api = { phaseInfo, slotCounts, createRoundQuestions, canonicalKey, formatNumber };
  root.FROG_LEVELS = phaseInfo;
  root.FROG_QUESTIONS = { A: [], B: [], C: [] };
  root.FROG_QUESTION_BANK = [];
  root.FrogQuestions = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
