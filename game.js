(function () {
  'use strict';

  const { CONFIG, PHASES, Round } = window.FrogEngine || {};
  const labels = ['A', 'B', 'C'];
  const START_POINT = Object.freeze({ x: 14, y: 91, platformY: 91 });
  const levelInfo = window.FROG_LEVELS || {};
  const subjectInfo = window.FROG_SUBJECTS || { matematika: { label: 'Matematika', phaseInfo: levelInfo } };
  const questionFactory = window.FrogQuestions || {};
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stage = document.querySelector('#split-stage');
  const template = document.querySelector('#board-template');
  const accessibilityStatus = document.querySelector('#accessibility-status');
  const boards = [];
  let focusedBoard = null;
  let sound = true;
  let audioContext = null;
  let animFrameId = null;

  const headerPlayerInput = document.querySelector('#header-player-input');

  function getStoredPlayerName() {
    try { return localStorage.getItem('ngarai_player_name') || ''; } catch (_) { return ''; }
  }

  const profileStorageKey = 'ngarai_math_profiles_v1';
  function profileKey(name) { return String(name || '').trim().toLocaleLowerCase('id-ID').replace(/\s+/g, ' '); }
  function readProfiles() {
    try {
      const value = JSON.parse(localStorage.getItem(profileStorageKey) || '{}');
      return value && typeof value === 'object' ? value : {};
    } catch (_) { return {}; }
  }
  function writeProfiles(profiles) {
    try { localStorage.setItem(profileStorageKey, JSON.stringify(profiles)); } catch (_) {}
  }
  function getProfile(name, subject, phase) {
    const profiles = readProfiles();
    const key = profileKey(name);
    if (phase === undefined) { phase = subject; subject = 'matematika'; }
    const legacyProfile = subject === 'matematika' ? profiles[key]?.[phase] : null;
    return profiles[key]?.[subject]?.[phase] || legacyProfile || { lastRoundKeys: [], carry: [] };
  }
  function saveProfile(name, subject, phase, data) {
    const profiles = readProfiles();
    const key = profileKey(name);
    if (!key) return;
    profiles[key] ||= {};
    profiles[key][subject] ||= {};
    profiles[key][subject][phase] = { lastRoundKeys: Array.from(new Set(data.lastRoundKeys || [])), carry: Array.isArray(data.carry) ? data.carry : [] };
    writeProfiles(profiles);
  }
  function clearProfile(name) {
    const profiles = readProfiles();
    delete profiles[profileKey(name)];
    writeProfiles(profiles);
  }

  function syncPlayerName(name) {
    const cleanName = String(name || '').trim().slice(0, 20);
    try { localStorage.setItem('ngarai_player_name', cleanName); } catch (_) {}
    if (headerPlayerInput && headerPlayerInput.value !== cleanName) headerPlayerInput.value = cleanName;
    boards.forEach(board => {
      board.playerName = cleanName;
      if (board.el.startPlayerInput && board.el.startPlayerInput.value !== cleanName) board.el.startPlayerInput.value = cleanName;
      if (board.el.resultPlayerName) board.el.resultPlayerName.textContent = cleanName || 'Pemain';
    });
  }

  if (headerPlayerInput) {
    headerPlayerInput.value = getStoredPlayerName();
    headerPlayerInput.addEventListener('input', event => syncPlayerName(event.target.value));
  }

  const formatTime = milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
  };

  function announce(message) {
    if (accessibilityStatus) accessibilityStatus.textContent = message;
  }

  function cleanForSpeech(value) {
    return String(value || '')
      .replace(/×/g, ' kali ').replace(/÷/g, ' bagi ').replace(/−/g, ' minus ')
      .replace(/\//g, ' per ').replace(/\s+/g, ' ').trim();
  }

  function formatText(element, value) {
    if (element) element.textContent = value == null ? '' : String(value);
  }

  function phaseInfoFor(subject, phase) {
    return subjectInfo[subject]?.phaseInfo?.[phase] || levelInfo[phase];
  }

  let croakAudioBuffer = null;
  let croakAudioLoading = false;
  const croakAudio = new Audio('assets/frog-croak.mp3');
  croakAudio.preload = 'none';
  croakAudio.volume = .65;

  function loadCroakAudioBuffer() {
    // fetch(file://...) is blocked by the browser's CORS rules. The Audio
    // element fallback below still works when the game is opened directly.
    if (window.location.protocol === 'file:' || !audioContext || croakAudioBuffer || croakAudioLoading) return;
    croakAudioLoading = true;
    fetch('assets/frog-croak.mp3').then(response => {
      if (!response.ok) throw new Error('Audio katak tidak tersedia.');
      return response.arrayBuffer();
    }).then(buffer => audioContext.decodeAudioData(buffer)).then(decoded => {
      croakAudioBuffer = decoded;
    }).catch(() => {}).finally(() => { croakAudioLoading = false; });
  }

  function initAudio() {
    if (!sound) return;
    try {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (AudioClass && !audioContext) audioContext = new AudioClass();
      if (audioContext?.state === 'suspended') audioContext.resume().catch(() => {});
      loadCroakAudioBuffer();
    } catch (_) {}
  }

  function tone(frequency, duration, delay = 0, type = 'sine') {
    if (!sound || !audioContext) return;
    try {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const at = audioContext.currentTime + delay;
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, at);
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(.07, at + .012);
      gain.gain.exponentialRampToValueAtTime(.001, at + duration);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.onended = () => { try { oscillator.disconnect(); gain.disconnect(); } catch (_) {} };
      oscillator.start(at);
      oscillator.stop(at + duration + .02);
    } catch (_) {}
  }

  function croakSound() {
    if (!sound) return;
    if (audioContext && croakAudioBuffer) {
      try {
        const source = audioContext.createBufferSource();
        const gain = audioContext.createGain();
        gain.gain.value = .7;
        source.buffer = croakAudioBuffer;
        source.connect(gain).connect(audioContext.destination);
        source.start(0);
        return;
      } catch (_) {}
    }
    try { croakAudio.currentTime = 0; croakAudio.play().catch(() => {}); } catch (_) {}
  }

  function correctSound() { tone(523, .12); tone(659, .13, .1); tone(784, .2, .2); }
  function wrongSound() { tone(220, .15, 0, 'triangle'); tone(147, .25, .14, 'triangle'); }
  function finishSound(won) {
    if (won) [523, 659, 784, 1047].forEach((frequency, index) => tone(frequency, .25, index * .13));
    else wrongSound();
  }

  class GameBoard {
    constructor(root, team) {
      this.root = root;
      this.team = team;
      this.label = team.label;
      this.selectedLevel = 'A';
      this.selectedSubject = 'matematika';
      this.round = null;
      this.remainingMs = (phaseInfoFor(this.selectedSubject, this.selectedLevel)?.seconds || CONFIG.secondsPerPhase.A) * 1000;
      this.elapsedMs = 0;
      this.lastFrame = 0;
      this.paused = false;
      this.session = 0;
      this.facingAngle = 0;
      this.isAnswering = false;
      this.lastClockSeconds = null;
      this.lastTimerProgress = null;
      this.lastElapsedSecond = null;
      this.waypoints = [];
      this.currentWaypoint = { x: START_POINT.x, y: START_POINT.y, worldX: START_POINT.x, worldY: START_POINT.y, label: 'START', start: true };
      this.lastCorrectWaypoint = this.currentWaypoint;
      this.routeDirection = 1;
      this.cameraShiftY = 0;
      this.playerName = getStoredPlayerName();

      this.el = {
        pond: root.querySelector('.pond'),
        shockwave: root.querySelector('.pond-shockwave'),
        flash: root.querySelector('.pond-flash'),
        questionBox: root.querySelector('.question-box'),
        questionCounter: root.querySelector('.question-counter'),
        questionIllustration: root.querySelector('.question-illustration'),
        questionText: root.querySelector('.question-box h2'),
        answerField: root.querySelector('.answer-field'),
        routeLayer: root.querySelector('.route-layer'),
        buttons: Array.from(root.querySelectorAll('.answer-pad')),
        homePlatform: root.querySelector('.home-platform'),
        frog: root.querySelector('.frog'),
        frogImg: root.querySelector('.frog > img'),
        finishSign: root.querySelector('.finish-sign'),
        feedback: root.querySelector('.feedback'),
        timeGroup: root.querySelector('.time-group'),
        countdown: root.querySelector('.countdown'),
        timerProgress: root.querySelector('.timer-progress'),
        secondsValue: root.querySelector('.seconds-value'),
        elapsedValue: root.querySelector('.elapsed'),
        livesValue: root.querySelector('.lives-value'),
        scoreValue: root.querySelector('.score-value'),
        settingsButton: root.querySelector('.settings-button'),
        homeButton: root.querySelector('.home-button'),
        startScreen: root.querySelector('.start-screen'),
        startButton: root.querySelector('.start-button'),
        startCountdown: root.querySelector('.start-countdown'),
        countdownStage: root.querySelector('.countdown-stage'),
        countdownNumber: root.querySelector('.countdown-number'),
        levelButtons: Array.from(root.querySelectorAll('.phase-picker .level-option')),
        selectedLevelLabel: root.querySelector('.selected-level-label'),
        selectedLevelTime: root.querySelector('.selected-level-time'),
        selectedQuestionCount: root.querySelector('.selected-question-count'),
        headingSuffix: root.querySelector('.heading-suffix'),
        sceneLevelLabel: root.querySelector('.scene-level-label'),
        sceneTopic: root.querySelector('.scene-topic'),
        resultScreen: root.querySelector('.result-screen'),
        resultTitle: root.querySelector('.result-screen h2'),
        resultMessage: root.querySelector('.result-message'),
        resultIcon: root.querySelector('.trophy'),
        resultScore: root.querySelector('.result-score'),
        resultScoreDetail: root.querySelector('.result-score-detail'),
        resultCorrect: root.querySelector('.result-correct'),
        resultAttempts: root.querySelector('.result-attempts'),
        resultAccuracy: root.querySelector('.result-accuracy'),
        resultTime: root.querySelector('.result-time'),
        retryButton: root.querySelector('.retry-button'),
        resultHomeButton: root.querySelector('.result-home-button'),
        reportButton: root.querySelector('.report-button'),
        confetti: root.querySelector('.confetti'),
        startPlayerInput: root.querySelector('.start-player-input'),
        resultPlayerName: root.querySelector('.result-player-name'),
        subjectButtons: Array.from(root.querySelectorAll('.subject-picker .subject-option')),
        frogIdleSource: 'assets/frogi.png',
        frogJumpSource: 'assets/froge.png'
      };

      const required = ['pond', 'questionBox', 'questionCounter', 'questionText', 'answerField', 'frog', 'frogImg', 'feedback', 'timeGroup', 'countdown', 'timerProgress', 'secondsValue', 'elapsedValue', 'livesValue', 'scoreValue', 'settingsButton', 'startScreen', 'startButton', 'resultScreen', 'resultTitle', 'resultMessage', 'resultScore', 'resultCorrect', 'resultTime', 'retryButton', 'reportButton', 'startCountdown', 'countdownNumber'];
      const missing = required.filter(key => !this.el[key]);
      if (missing.length || this.el.buttons.length !== 3 || !this.el.levelButtons.length) throw new Error('Elemen papan belum lengkap: ' + missing.join(', '));

      root.classList.add(team.className);
      this.el.startPlayerInput.value = this.playerName;
      this.el.resultPlayerName.textContent = this.playerName || 'Pemain';
      this.bindEvents();
      this.el.levelButtons.forEach(button => {
        const icon = button.querySelector('.level-icon');
        if (icon && window.FrogIllustrations) icon.innerHTML = window.FrogIllustrations.getIllustration('icon-' + button.dataset.level);
      });
      this.el.subjectButtons.forEach(button => {
        const icon = button.querySelector('.level-icon');
        if (icon && window.FrogIllustrations) icon.innerHTML = window.FrogIllustrations.getIllustration('icon-subject-' + button.dataset.subject);
      });
      this.selectLevel(this.selectedLevel, false);
      this.updateStartDetails();
      this.hud();
      this.clock(true);
    }

    bindEvents() {
      this.el.levelButtons.forEach(button => button.addEventListener('click', () => this.selectLevel(button.dataset.level)));
      this.el.subjectButtons.forEach(button => button.addEventListener('click', () => this.selectSubject(button.dataset.subject)));
      this.el.startButton.addEventListener('click', () => this.startGame(this.selectedLevel));
      this.el.retryButton.addEventListener('click', () => this.startGame(this.selectedLevel));
      this.el.resultHomeButton?.addEventListener('click', () => this.goHome());
      this.el.homeButton.addEventListener('click', () => this.goHome());
      this.el.buttons.forEach((button, index) => button.addEventListener('click', () => { focusedBoard = this; initAudio(); void this.choose(index); }));
      this.el.settingsButton.addEventListener('click', () => openDialog(settingsDialog, this));
      this.el.reportButton.addEventListener('click', () => buildReport(this));
      this.el.startPlayerInput.addEventListener('input', event => syncPlayerName(event.target.value));
      this.el.startPlayerInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') { event.preventDefault(); this.startGame(this.selectedLevel); }
      });
      this.root.addEventListener('pointerdown', () => { focusedBoard = this; }, { passive: true });
      this.root.addEventListener('focus', () => { focusedBoard = this; }, true);
    }

    isActive() { return Boolean(this.round && ['playing', 'feedback', 'countdown'].includes(this.round.status)); }

    selectSubject(subject, shouldAnnounce = true) {
      const info = subjectInfo[subject];
      if (!info?.phaseInfo || !questionFactory.createRoundQuestions) return false;
      this.selectedSubject = subject;
      this.el.subjectButtons.forEach(button => {
        const active = button.dataset.subject === subject;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      this.selectLevel(this.selectedLevel, false);
      if (shouldAnnounce) announce(this.label + ': ' + info.label + ' dipilih.');
      return true;
    }

    selectLevel(level, shouldAnnounce = true) {
      const info = phaseInfoFor(this.selectedSubject, level);
      if (!info || !questionFactory.createRoundQuestions) return false;
      this.selectedLevel = level;
      this.el.levelButtons.forEach(button => {
        const active = button.dataset.level === level;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      formatText(this.el.selectedLevelLabel, info.shortLabel || info.label);
      formatText(this.el.selectedLevelTime, info.seconds);
      formatText(this.el.sceneLevelLabel, info.shortLabel || info.label);
      formatText(this.el.sceneTopic, info.description);
      formatText(this.el.headingSuffix, ' · ' + subjectInfo[this.selectedSubject].label + ' · ' + (info.shortLabel || info.label));
      this.updateStartDetails();
      if (shouldAnnounce) announce(this.label + ': ' + info.label + ' dipilih. ' + info.description + '.');
      return true;
    }

    updateStartDetails() {
      formatText(this.el.selectedQuestionCount, CONFIG.target);
    }

    hud() {
      formatText(this.el.livesValue, this.round ? this.round.lives : CONFIG.lives);
      formatText(this.el.scoreValue, this.round ? this.round.score : 0);
    }

    clock(force = false) {
      const totalSeconds = this.round?.secondsPerQuestion || phaseInfoFor(this.selectedSubject, this.selectedLevel).seconds;
      const totalMs = totalSeconds * 1000;
      const seconds = Math.max(0, Math.ceil(this.remainingMs / 1000));
      const timerProgress = Math.max(0, Math.min(1, this.remainingMs / totalMs));
      const progressBucket = Math.round(timerProgress * 100);
      const elapsedSecond = Math.floor(this.elapsedMs / 1000);

      // The game loop runs at display refresh rate for smooth jumps. Text and
      // SVG updates only need to happen when their visible value changes.
      if (force || this.lastClockSeconds !== seconds) {
        formatText(this.el.secondsValue, seconds);
        this.el.countdown.classList.toggle('urgent', seconds <= 5);
        this.el.countdown.setAttribute('aria-label', seconds + ' detik tersisa');
        this.lastClockSeconds = seconds;
      }
      if (force || this.lastTimerProgress !== progressBucket) {
        this.el.timerProgress.style.strokeDashoffset = String(213.63 * (1 - timerProgress));
        this.lastTimerProgress = progressBucket;
      }
      if (force || this.lastElapsedSecond !== elapsedSecond) {
        formatText(this.el.elapsedValue, formatTime(this.elapsedMs));
        this.lastElapsedSecond = elapsedSecond;
      }
    }

    clearFrog() {
      this.el.frog.getAnimations?.({ subtree: true }).forEach(animation => animation.cancel());
      const waypoint = this.currentWaypoint || START_POINT;
      this.el.frog.style.left = waypoint.x + '%';
      this.el.frog.style.top = waypoint.y + '%';
      this.el.frog.style.transform = 'translate(-50%,-55%) rotate(' + (this.facingAngle || 0) + 'deg)';
      this.el.frog.className = 'frog idle';
      this.el.frogImg.src = this.el.frogIdleSource;
    }

    resetRoute() {
      this.el.routeLayer?.replaceChildren();
      this.currentWaypoint = { x: START_POINT.x, y: START_POINT.y, worldX: START_POINT.x, worldY: START_POINT.y, label: 'START', start: true };
      this.lastCorrectWaypoint = this.currentWaypoint;
      this.waypoints = [this.currentWaypoint];
      this.routeDirection = 1;
      this.cameraShiftY = 0;
      this.el.answerField.style.transform = '';
      this.el.pond.style.backgroundPosition = 'center center';
      this.el.homePlatform.style.left = this.currentWaypoint.x + '%';
      this.el.homePlatform.style.top = START_POINT.platformY + '%';
    }

    clampPosition(value, minimum, maximum) {
      return Math.max(minimum, Math.min(maximum, value));
    }

    layoutAnswerPlatforms() {
      if (!this.round || !this.el.buttons.length) return;
      const origin = this.currentWaypoint || { x: START_POINT.x, y: START_POINT.y, worldX: START_POINT.x, worldY: START_POINT.y };
      const originWorldX = origin.worldX ?? origin.x;
      const originWorldY = origin.worldY ?? origin.y;
      const direction = this.routeDirection;
      const jitter = () => (Math.random() * 8) - 4;
      const offsets = [
        { x: 25, y: -10 },
        { x: 4, y: -29 },
        { x: -22, y: -48 }
      ];
      const camera = Math.max(0, 56 - originWorldY);
      origin.y = origin.start ? originWorldY + camera : this.clampPosition(originWorldY + camera, 8, 82);
      if (this.el.frog && !this.isAnswering) this.el.frog.style.top = origin.y + '%';
      const positions = offsets.map((offset, index) => {
        const worldX = this.clampPosition(originWorldX + direction * offset.x + jitter(), 12, 88);
        const worldY = originWorldY + offset.y + jitter() * .25;
        return { worldX, worldY, x: worldX, y: this.clampPosition(worldY + camera, 8, 82), index };
      });
      const xRange = Math.max(...positions.map(position => position.x)) - Math.min(...positions.map(position => position.x));
      const sortedX = positions.map(position => position.x).sort((a, b) => a - b);
      const minimumGap = Math.min(sortedX[1] - sortedX[0], sortedX[2] - sortedX[1]);
      if (xRange < 18 || minimumGap < 16) {
        const fallbackX = direction > 0 ? [20, 50, 80] : [80, 50, 20];
        positions.forEach((position, index) => {
          position.worldX = fallbackX[index];
          position.x = fallbackX[index];
        });
      }
      this.avoidSceneSigns(positions, camera);
      this.el.routeLayer?.querySelectorAll('.route-platform').forEach(trail => {
        const worldX = Number(trail.dataset.worldX);
        const worldY = Number(trail.dataset.worldY);
        if (Number.isFinite(worldX) && Number.isFinite(worldY)) {
          trail.style.left = worldX + '%';
          trail.style.top = this.clampPosition(worldY + camera, 8, 88) + '%';
        }
      });
      this.activePlatformPositions = positions;
      positions.forEach((position, index) => {
        const button = this.el.buttons[index];
        button.style.left = position.x + '%';
        button.style.top = position.y + '%';
      });
      this.cameraShiftY = camera;
      const backgroundCamera = this.clampPosition(camera, 0, 80);
      this.el.pond.style.backgroundPosition = 'center ' + (50 + backgroundCamera * .7) + '%';
    }

    avoidSceneSigns(positions, camera) {
      const pondRect = this.el.pond.getBoundingClientRect();
      const signs = [this.root.querySelector('.level-sign'), this.el.finishSign].filter(Boolean).map(sign => {
        const rect = sign.getBoundingClientRect();
        return {
          left: (rect.left - pondRect.left) / pondRect.width * 100,
          right: (rect.right - pondRect.left) / pondRect.width * 100,
          top: (rect.top - pondRect.top) / pondRect.height * 100,
          bottom: (rect.bottom - pondRect.top) / pondRect.height * 100
        };
      });
      const firstButton = this.el.buttons[0];
      const platformRect = firstButton?.getBoundingClientRect();
      const halfWidth = platformRect ? platformRect.width / pondRect.width * 50 : 9.5;
      const halfHeight = platformRect ? platformRect.height / pondRect.height * 50 : 7.5;
      const hitsSign = position => signs.some(sign =>
        position.x + halfWidth > sign.left && position.x - halfWidth < sign.right &&
        position.y + halfHeight > sign.top && position.y - halfHeight < sign.bottom
      );
      positions.forEach(position => {
        if (!hitsSign(position)) return;
        const candidates = [
          { x: position.x + 28, y: position.y + 18 },
          { x: position.x - 28, y: position.y + 18 },
          { x: position.x, y: position.y + 24 },
          { x: 50, y: 40 }
        ];
        const safe = candidates.find(candidate => {
          candidate.x = this.clampPosition(candidate.x, 12, 88);
          candidate.y = this.clampPosition(candidate.y, 8, 82);
          return !hitsSign(candidate);
        });
        if (safe) {
          position.x = safe.x;
          position.worldX = safe.x;
          position.y = safe.y;
          position.worldY = safe.y - camera;
        }
      });

      const overlapsPlatform = (left, right) =>
        Math.abs(left.x - right.x) < halfWidth * 2 + 2 &&
        Math.abs(left.y - right.y) < halfHeight * 2 + 2;
      const safeSlots = [
        [{ x: 20, y: 48 }, { x: 50, y: 28 }, { x: 80, y: 8 }],
        [{ x: 80, y: 48 }, { x: 50, y: 28 }, { x: 20, y: 8 }]
      ];
      positions.forEach((position, index) => {
        if (!positions.slice(0, index).some(previous => overlapsPlatform(position, previous))) return;
        const candidates = safeSlots[index % safeSlots.length].concat(safeSlots[(index + 1) % safeSlots.length]);
        const safe = candidates.find(candidate => {
          candidate.x = this.clampPosition(candidate.x, 12, 88);
          candidate.y = this.clampPosition(candidate.y, 8, 82);
          return !hitsSign(candidate) && !positions.slice(0, index).some(previous => overlapsPlatform(candidate, previous));
        });
        if (safe) {
          position.x = safe.x;
          position.worldX = safe.x;
          position.y = safe.y;
          position.worldY = safe.y - camera;
        }
      });
    }

    preserveWaypoint(button, position, label) {
      // Waypoint disimpan di state permainan, tetapi platform tahap lama
      // sengaja tidak dirender agar pilihan soal sebelumnya tidak mengganggu.
    }

    showQuestion() {
      if (!this.round || this.round.status !== 'playing') return;
      const question = this.round.question;
      this.remainingMs = this.round.secondsPerQuestion * 1000;
      this.lastClockSeconds = null;
      this.lastTimerProgress = null;
      this.lastElapsedSecond = null;
      const retryLabel = question.retry ? ' · Latihan ulang' : '';
      this.el.questionCounter.textContent = 'Soal ' + (this.round.presentedCount + 1) + ' · dikuasai ' + this.round.correct + ' / ' + this.round.target + ' · ' + phaseInfoFor(this.selectedSubject, this.round.phase).shortLabel + retryLabel;
      formatText(this.el.questionText, question.text);

      if (question.illustration && window.FrogIllustrations) {
        this.el.questionIllustration.innerHTML = window.FrogIllustrations.getIllustration(question.illustration);
        this.el.questionIllustration.hidden = false;
      } else {
        this.el.questionIllustration.hidden = true;
        this.el.questionIllustration.innerHTML = '';
      }

      this.el.buttons.forEach((button, index) => {
        const exists = index < question.options.length;
        button.hidden = !exists;
        button.disabled = !exists;
        const answerLength = exists ? String(question.options[index]).length : 0;
        const answerSize = answerLength > 22 ? ' long-answer' : answerLength > 11 ? ' medium-answer' : '';
        button.className = 'answer-pad pad-' + ['a', 'b', 'c'][index] + answerSize;
        formatText(button.querySelector('.answer-text'), exists ? question.options[index] : '');
        formatText(button.querySelector('.answer-symbol'), '');
        button.setAttribute('aria-label', exists ? labels[index] + '. ' + cleanForSpeech(question.options[index]) : 'Pilihan tidak digunakan');
      });
      this.el.feedback.className = 'feedback';
      formatText(this.el.feedback, '');
      this.el.routeLayer?.replaceChildren();
      this.clearFrog();
      this.layoutAnswerPlatforms();
      this.hud();
      this.clock(true);
      announce(this.label + ': soal ' + (this.round.presentedCount + 1) + '. ' + cleanForSpeech(question.text) + '. Pilihan: ' + question.options.map((option, index) => labels[index] + ', ' + cleanForSpeech(option)).join('; ') + '.');
    }

    goHome() {
      if (this.round && this.isActive() && this.playerName) {
        saveProfile(this.playerName, this.selectedSubject, this.round.phase, { lastRoundKeys: this.round.shownKeys(), carry: this.round.unresolvedSlots() });
      }
      this.session += 1;
      this.paused = false;
      this.isAnswering = false;
      this.round = null;
      this.elapsedMs = 0;
      this.remainingMs = phaseInfoFor(this.selectedSubject, this.selectedLevel).seconds * 1000;
      this.lastClockSeconds = null;
      this.lastTimerProgress = null;
      this.lastElapsedSecond = null;
      this.resetRoute();
      this.clearFrog();
      this.el.startCountdown.hidden = true;
      this.el.answerField.hidden = true;
      this.el.questionBox.hidden = true;
      this.el.timeGroup.hidden = true;
      this.el.homeButton.hidden = true;
      this.el.settingsButton.hidden = false;
      this.el.resultScreen.hidden = true;
      this.el.startScreen.hidden = false;
      this.el.feedback.className = 'feedback';
      this.el.confetti.replaceChildren();
      this.hud();
      this.clock(true);
      ensureLoop();
      announce(this.label + ': kembali ke menu utama.');
    }

    startGame(level = this.selectedLevel) {
      if (this.isAnswering) return false;
      if (!this.selectLevel(level, false)) level = this.selectedLevel;
      const playerName = String(this.el.startPlayerInput.value || '').trim().slice(0, 20);
      if (!playerName) {
        this.el.startPlayerInput.focus();
        announce(this.label + ': tulis nama pemain terlebih dahulu.');
        return false;
      }
      syncPlayerName(playerName);
      const profile = getProfile(playerName, this.selectedSubject, level);
      const generated = questionFactory.createRoundQuestions(level, {
        subject: this.selectedSubject,
        excludeKeys: profile.lastRoundKeys,
        carry: profile.carry
      });
      this.session += 1;
      const sessionId = this.session;
      this.round = new Round(generated.questions, {
        phase: level,
        target: CONFIG.target,
        secondsPerQuestion: phaseInfoFor(this.selectedSubject, level).seconds,
        variantFactory: generated.variantFactory
      });
      this.round.status = 'countdown';
      this.elapsedMs = 0;
      this.remainingMs = this.round.secondsPerQuestion * 1000;
      this.lastClockSeconds = null;
      this.lastTimerProgress = null;
      this.lastElapsedSecond = null;
      this.paused = false;
      this.isAnswering = false;
      const info = phaseInfoFor(this.selectedSubject, level);
      this.el.headingSuffix.textContent = ' · ' + subjectInfo[this.selectedSubject].label + ' · ' + (info.shortLabel || info.label);
      this.el.sceneLevelLabel.textContent = info.shortLabel || info.label;
      this.el.sceneTopic.textContent = info.description;
      this.el.startScreen.hidden = true;
      this.el.resultScreen.hidden = true;
      this.el.questionBox.hidden = true;
      this.el.answerField.hidden = false;
      this.el.timeGroup.hidden = true;
      this.el.homeButton.hidden = false;
      this.el.settingsButton.hidden = false;
      this.el.buttons.forEach(button => { button.hidden = false; button.disabled = true; formatText(button.querySelector('.answer-text'), ''); });
      this.el.confetti.replaceChildren();
      this.resetRoute();
      this.clearFrog();
      this.hud();
      this.clock(true);
      focusedBoard = this;
      initAudio();
      ensureLoop();
      void this.playCountdown(sessionId);
      return true;
    }

    async playCountdown(sessionId) {
      this.el.startCountdown.hidden = false;
      const steps = [{ text: '3', duration: 650 }, { text: '2', duration: 650 }, { text: '1', duration: 650 }, { text: 'MULAI!', duration: 800 }];
      for (const step of steps) {
        if (sessionId !== this.session) return;
        this.el.countdownNumber.textContent = step.text;
        this.el.countdownNumber.classList.toggle('is-start', step.text === 'MULAI!');
        this.el.countdownStage.className = 'countdown-stage pop';
        if (step.text === 'MULAI!') { tone(880, .3); croakSound(); } else tone(390 + Number(step.text) * 70, .18, 0, 'triangle');
        announce(this.label + ': ' + step.text);
        if (!await this.waitActive(step.duration, sessionId)) return;
      }
      this.finishCountdown(sessionId);
    }

    async finishCountdown(sessionId) {
      if (sessionId !== this.session || !this.round) return;
      this.round.status = 'playing';
      this.el.questionBox.hidden = false;
      this.el.timeGroup.hidden = false;
      this.lastFrame = performance.now();
      this.showQuestion();
      this.el.startCountdown.classList.add('fade-out');
      await this.waitActive(280, sessionId);
      if (sessionId === this.session) { this.el.startCountdown.hidden = true; this.el.startCountdown.classList.remove('fade-out'); }
    }

    waitActive(milliseconds, sessionId) {
      return new Promise(resolve => {
        let previous = performance.now();
        let remaining = milliseconds;
        const step = now => {
          if (sessionId !== this.session) return resolve(false);
          if (!this.paused && !document.hidden) remaining -= now - previous;
          previous = now;
          if (remaining <= 0) return resolve(true);
          setTimeout(() => requestAnimationFrame(step), this.paused || document.hidden ? 100 : 0);
        };
        requestAnimationFrame(step);
      });
    }

    async faceTarget(choice, sessionId) {
      if (choice === null) return true;
      const frogRect = this.el.frog.getBoundingClientRect();
      const targetRect = this.el.buttons[choice].getBoundingClientRect();
      const angle = Math.atan2(targetRect.left + targetRect.width / 2 - (frogRect.left + frogRect.width / 2), -(targetRect.top + targetRect.height / 2 - (frogRect.top + frogRect.height / 2))) * 180 / Math.PI;
      this.facingAngle = angle;
      const targetTransform = 'translate(-50%,-55%) rotate(' + angle + 'deg)';
      if (!reducedMotion.matches && typeof this.el.frog.animate === 'function') {
        const animation = this.el.frog.animate([{ transform: 'translate(-50%,-55%) rotate(0deg)' }, { transform: targetTransform }], { duration: 130, easing: 'ease-out', fill: 'forwards' });
        try { await animation.finished; } catch (_) { return false; }
        if (sessionId !== this.session) return false;
        animation.cancel();
      }
      this.el.frog.style.transform = targetTransform;
      return true;
    }

    triggerShockwave(x, y) {
      if (reducedMotion.matches) return;
      const wave = document.createElement('span');
      wave.className = 'landing-ring';
      wave.style.left = x + '%';
      wave.style.top = y + '%';
      this.el.pond.append(wave);
      setTimeout(() => wave.remove(), 800);
    }

    triggerWrongFeedback(x, y) {
      const marker = document.createElement('span');
      marker.className = 'life-lost-heart';
      marker.textContent = '♥';
      marker.style.left = x + '%';
      marker.style.top = y + '%';
      this.el.pond.append(marker);
      setTimeout(() => marker.remove(), 900);
    }

    triggerCorrectFeedback(x, y, points) {
      const score = document.createElement('span');
      score.className = 'floating-score';
      score.textContent = '+' + points;
      score.style.left = x + '%';
      score.style.top = y + '%';
      this.el.pond.append(score);
      setTimeout(() => score.remove(), 1000);
    }

    async jumpToPoint(targetPoint, sessionId, options = {}) {
      if (!targetPoint) return this.waitActive(120, sessionId);
      const backward = Boolean(options.backward);
      const frog = this.el.frog;
      const pondRect = this.el.pond.getBoundingClientRect();
      const fromRect = frog.getBoundingClientRect();
      const fromX = (fromRect.left + fromRect.width / 2 - pondRect.left) / pondRect.width * 100;
      const fromY = (fromRect.top + fromRect.height * .55 - pondRect.top) / pondRect.height * 100;
      const toX = targetPoint.x;
      const toY = targetPoint.y;
      const lift = Math.max(12, Math.abs(toY - fromY) * (backward ? .46 : .38) + Math.abs(toX - fromX) * .08);
      this.lastLanding = { x: toX, y: toY };
      frog.classList.add('jumping');
      frog.classList.remove('idle');
      this.el.frogImg.src = this.el.frogJumpSource;
      croakSound();

      if (!reducedMotion.matches && typeof frog.animate === 'function') {
        const point = (progress, arc, scaleX, scaleY) => ({
          left: fromX + (toX - fromX) * progress + '%',
          top: fromY + (toY - fromY) * progress - lift * arc + '%',
          transform: 'translate(-50%,-55%) rotate(' + this.facingAngle + 'deg) scale(' + scaleX + ',' + scaleY + ')',
          offset: progress
        });
        const frames = backward
          ? [point(0, 0, 1, 1), point(.16, .22, .94, .96), point(.38, .7, 1.04, .9), point(.54, 1, 1.1, .84), point(.72, .66, 1.02, .92), point(.88, .18, .98, .98), point(1, 0, 1, 1)]
          : [point(0, 0, 1, 1), point(.16, .3, .95, .94), point(.38, .82, 1.05, .88), point(.52, 1, 1.1, .84), point(.7, .72, 1.04, .9), point(.86, .2, 1.01, .96), point(1, 0, 1, 1)];
        const animation = frog.animate(frames, { duration: backward ? 760 : 680, easing: 'linear', fill: 'forwards' });
        try { await animation.finished; } catch (_) { return false; }
        if (sessionId !== this.session) return false;
        animation.cancel();
      }
      frog.style.left = toX + '%';
      frog.style.top = toY + '%';
      frog.style.transform = 'translate(-50%,-55%) rotate(' + this.facingAngle + 'deg)';
      frog.classList.remove('jumping');
      this.el.frogImg.src = this.el.frogIdleSource;
      this.triggerShockwave(toX, toY);
      return sessionId === this.session;
    }

    async jump(choice, sessionId) {
      if (choice === null) return this.waitActive(120, sessionId);
      const button = this.el.buttons[choice];
      const position = this.activePlatformPositions?.[choice];
      if (!button || !position) return false;
      return this.jumpToPoint({ x: position.x, y: position.y }, sessionId);
    }

    async choose(choice) {
      if (!this.round || this.round.status !== 'playing' || this.paused || this.isAnswering) return false;
      if (choice !== null && choice >= this.round.question.options.length) return false;
      this.isAnswering = true;
      const sessionId = this.session;
      const question = this.round.question;
      const result = this.round.answer(choice);
      this.el.buttons.forEach(button => { button.disabled = true; });
      if (choice !== null) this.el.buttons[choice].classList.add('selected');
      if (choice !== null && !await this.faceTarget(choice, sessionId)) { this.isAnswering = false; return false; }
      if (!await this.jump(choice, sessionId)) { this.isAnswering = false; return false; }

      const selectedPosition = choice === null ? null : this.activePlatformPositions?.[choice];
      const landing = selectedPosition || (choice === null ? this.currentWaypoint : this.lastLanding) || START_POINT;
      this.el.buttons.forEach((button, index) => {
        if (index === question.answer) button.classList.add('correct');
        else if (index === choice) { button.classList.add('incorrect'); formatText(button.querySelector('.answer-symbol'), '×'); }
        else button.classList.add('muted');
      });
      this.hud();
      const points = result.correct ? CONFIG.pointsPerCorrect : CONFIG.pointsPerWrong;
      const message = result.correct ? 'Hebat! +' + points + ' poin' : result.timedOut ? 'Waktu habis. −' + points + ' poin' : 'Belum tepat. −' + points + ' poin';
      this.el.feedback.textContent = message;
      this.el.feedback.className = 'feedback visible' + (result.correct ? '' : ' error');
      if (result.correct) {
        const waypoint = { x: landing.x, y: landing.y, worldX: landing.worldX ?? landing.x, worldY: landing.worldY ?? landing.y, label: labels[choice], questionId: question.id };
        this.preserveWaypoint(this.el.buttons[choice], landing, labels[choice]);
        this.currentWaypoint = waypoint;
        this.lastCorrectWaypoint = waypoint;
        this.waypoints.push(waypoint);
        this.routeDirection *= -1;
        correctSound();
        this.triggerCorrectFeedback(landing.x, landing.y, points);
        if (this.round.correct >= this.round.target && this.el.finishSign) {
          const pondRect = this.el.pond.getBoundingClientRect();
          const finishRect = this.el.finishSign.getBoundingClientRect();
          const outPoint = {
            x: this.clampPosition((finishRect.left + finishRect.width / 2 - pondRect.left) / pondRect.width * 100, 10, 90),
            y: this.clampPosition((finishRect.top + finishRect.height + 22 - pondRect.top) / pondRect.height * 100, 14, 35),
            label: 'OUT'
          };
          if (!await this.waitActive(180, sessionId) || !await this.jumpToPoint(outPoint, sessionId)) { this.isAnswering = false; return false; }
          this.currentWaypoint = outPoint;
        }
      } else {
        wrongSound();
        this.el.frog.classList.add('sink');
        this.triggerWrongFeedback(landing.x, landing.y);
        if (!await this.waitActive(420, sessionId)) { this.isAnswering = false; return false; }
        this.el.frog.classList.remove('sink');
        if (choice !== null && !await this.jumpToPoint(this.lastCorrectWaypoint, sessionId, { backward: true })) { this.isAnswering = false; return false; }
      }
      this.hud();
      announce(this.label + ': ' + message + ' Jawaban yang benar: ' + cleanForSpeech(question.options[question.answer]) + '.');
      if (!await this.waitActive(result.correct ? 850 : 760, sessionId)) { this.isAnswering = false; return false; }
      if (this.round.advance()) { this.isAnswering = false; this.showQuestion(); }
      else { this.isAnswering = false; this.showResult(); }
      return true;
    }

    showResult() {
      if (!this.round) return;
      this.round.finish();
      this.paused = false;
      this.isAnswering = false;
      this.el.startCountdown.hidden = true;
      this.el.answerField.hidden = true;
      this.el.questionBox.hidden = true;
      this.el.timeGroup.hidden = true;
      this.el.homeButton.hidden = true;
      this.el.settingsButton.hidden = true;
      this.el.feedback.className = 'feedback';
      this.el.resultScreen.hidden = false;
      this.el.resultPlayerName.textContent = this.playerName || 'Pemain';
      const bonus = this.round.calculateBonus(this.elapsedMs);
      const won = this.round.isWon;
      const gameOver = this.round.lives === 0;
      saveProfile(this.playerName, this.selectedSubject, this.round.phase, {
        lastRoundKeys: this.round.shownKeys(),
        carry: won ? [] : this.round.unresolvedSlots()
      });
      this.el.resultTitle.textContent = won ? 'HEBAT!' : gameOver ? 'GAME OVER' : 'TETAP SEMANGAT!';
      this.el.resultMessage.textContent = won ? 'Kamu berhasil mencapai papan OUT!' : this.round.lives === 0 ? 'Nyawamu habis, tetapi kamu sudah belajar banyak.' : 'Slot yang belum dikuasai akan dilatih lagi pada ronde berikutnya.';
      this.el.resultIcon.textContent = won ? '🏆' : '🌱';
      this.el.resultScore.textContent = this.round.score;
      this.el.resultCorrect.textContent = this.round.correct + ' / ' + this.round.target;
      if (this.el.resultAttempts) this.el.resultAttempts.textContent = this.round.attempts;
      if (this.el.resultAccuracy) this.el.resultAccuracy.textContent = this.round.accuracy + '%';
      this.el.resultTime.textContent = formatTime(this.elapsedMs);
      this.el.resultScoreDetail.hidden = false;
      this.el.resultScoreDetail.textContent = won ? '10 poin per jawaban benar · 5 poin potongan per salah' : 'Target: ' + this.round.target + ' jawaban benar';
      this.makeConfetti(won);
      finishSound(won);
      announce(this.label + ': selesai. ' + this.round.correct + ' dari target ' + this.round.target + ' jawaban benar.');
      this.el.resultTitle.focus({ preventScroll: true });
      this.hud();
      ensureLoop();
    }

    makeConfetti(enabled) {
      this.el.confetti.replaceChildren();
      if (!enabled || reducedMotion.matches) return;
      const colors = ['#f7c85d', '#e7784a', '#73ab5c', '#fff4c7', '#8d6db4'];
      for (let index = 0; index < 26; index += 1) {
        const piece = document.createElement('i');
        piece.style.setProperty('--x', ((index * 37) % 100) + '%');
        piece.style.setProperty('--c', colors[index % colors.length]);
        piece.style.setProperty('--delay', -index * .16 + 's');
        this.el.confetti.append(piece);
      }
    }

    pause() {
      if (!this.isActive()) return;
      this.paused = true;
      this.el.frog.getAnimations?.({ subtree: true }).forEach(animation => animation.pause());
      ensureLoop();
    }

    resume() {
      if (!this.isActive() || document.hidden) return;
      this.paused = false;
      this.lastFrame = performance.now();
      this.el.frog.getAnimations?.({ subtree: true }).forEach(animation => animation.play());
      ensureLoop();
    }

    tick(now) {
      const delta = this.lastFrame ? Math.min(now - this.lastFrame, 100) : 0;
      this.lastFrame = now;
      if (!this.isActive() || this.paused || document.hidden) return;
      if (this.round.status === 'countdown') return;
      this.elapsedMs += delta;
      if (this.round.status === 'playing') {
        this.remainingMs = Math.max(0, this.remainingMs - delta);
        if (this.remainingMs === 0) void this.choose(null);
      }
      this.clock();
    }

    snapshot() {
      const level = this.round ? this.round.level : this.selectedLevel;
      return {
        status: this.round ? this.round.status : 'ready', subject: this.selectedSubject, subjectLabel: subjectInfo[this.selectedSubject].label, level, levelLabel: phaseInfoFor(this.selectedSubject, level).label, paused: this.paused,
        score: this.round ? this.round.score : 0, lives: this.round ? this.round.lives : CONFIG.lives,
        correct: this.round ? this.round.correct : 0, total: this.round ? this.round.target : CONFIG.target,
        elapsed: formatTime(this.elapsedMs), secondsRemaining: Math.ceil(this.remainingMs / 1000),
        question: this.isActive() ? { id: this.round.question.id, number: this.round.presentedCount + 1, text: this.round.question.text, options: this.round.question.options.map((text, index) => ({ index, label: labels[index], text })) } : null
      };
    }
  }

  const team = { label: 'Pemain', className: 'team-one' };
  const root = template.content.firstElementChild.cloneNode(true);
  stage.append(root);
  try { boards.push(new GameBoard(root, team)); }
  catch (error) { console.error('Gagal memuat papan permainan:', error); root.innerHTML = '<p class="load-error">Game belum siap. Muat ulang halaman.</p>'; }

  const settingsDialog = document.querySelector('#settings-dialog');
  const helpDialog = document.querySelector('#help-dialog');
  const reportDialog = document.querySelector('#report-dialog');
  const clearHistoryButton = document.querySelector('#clear-history-button');
  const dialogs = [settingsDialog, helpDialog, reportDialog];
  const pausedForDialog = new Map();
  let dialogBoard = null;

  dialogs.forEach(dialog => stage.appendChild(dialog));

  function openDialog(dialog, board = null) {
    if (dialog.open) return;
    const toPause = dialog === helpDialog ? boards.filter(item => item.isActive()) : board?.isActive() ? [board] : [];
    toPause.forEach(item => item.pause());
    pausedForDialog.set(dialog, toPause);
    dialogBoard = board;
    if (dialog === settingsDialog) {
      document.querySelector('#pause-note').textContent = board?.isActive() ? 'Permainan dijeda. Waktu tidak berjalan.' : 'Atur suara permainan.';
      document.querySelector('#quit-button').hidden = !board?.isActive();
    }
    dialog.showModal();
  }

  function closeDialog(dialog) { if (dialog.open) dialog.close(); }

  dialogs.forEach(dialog => dialog.addEventListener('close', () => {
    const toResume = pausedForDialog.get(dialog) || [];
    pausedForDialog.delete(dialog);
    if (!document.hidden && !dialogs.some(item => item.open)) toResume.forEach(item => item.resume());
    if (dialog === settingsDialog || dialog === reportDialog) dialogBoard = null;
    ensureLoop();
  }));

  document.querySelector('#help-button').addEventListener('click', () => openDialog(helpDialog));
  document.querySelector('#close-settings').addEventListener('click', () => closeDialog(settingsDialog));
  document.querySelector('#continue-button').addEventListener('click', () => { initAudio(); closeDialog(settingsDialog); });
  document.querySelector('#close-help').addEventListener('click', () => closeDialog(helpDialog));
  document.querySelector('#help-done').addEventListener('click', () => closeDialog(helpDialog));
  document.querySelector('#close-report').addEventListener('click', () => closeDialog(reportDialog));
  document.querySelector('#sound-toggle').addEventListener('change', event => { sound = event.target.checked; if (sound) initAudio(); });
  clearHistoryButton?.addEventListener('click', () => {
    const board = dialogBoard || boards[0];
    if (board?.isActive()) {
      announce('Selesaikan atau tinggalkan permainan sebelum menghapus riwayat.');
      return;
    }
    const name = board?.playerName || getStoredPlayerName();
    if (!name) {
      announce('Belum ada riwayat pemain yang bisa dihapus.');
      return;
    }
    if (window.confirm('Hapus riwayat latihan ' + name + ' untuk semua fase?')) {
      clearProfile(name);
      announce('Riwayat latihan ' + name + ' sudah dihapus.');
    }
  });
  document.querySelector('#header-home-button').addEventListener('click', () => { dialogs.forEach(closeDialog); boards.forEach(board => board.goHome()); });
  document.querySelector('.brand').addEventListener('click', event => { event.preventDefault(); dialogs.forEach(closeDialog); boards.forEach(board => board.goHome()); });
  document.querySelector('#settings-home-button').addEventListener('click', () => { closeDialog(settingsDialog); (dialogBoard ? [dialogBoard] : boards).forEach(board => board.goHome()); });
  document.querySelector('#quit-button').addEventListener('click', () => { if (!dialogBoard) return; dialogBoard.session += 1; closeDialog(settingsDialog); dialogBoard.showResult(); });

  const fullscreenButton = document.querySelector('#fullscreen-button');
  const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement;
  fullscreenButton.addEventListener('click', async () => {
    try {
      if (fullscreenElement()) { if (document.exitFullscreen) await document.exitFullscreen(); else await document.webkitExitFullscreen(); }
      else if (stage.requestFullscreen) await stage.requestFullscreen();
      else if (stage.webkitRequestFullscreen) await stage.webkitRequestFullscreen();
      else announce('Layar penuh tidak didukung browser ini.');
    } catch (_) { announce('Layar penuh tidak diizinkan browser ini.'); }
  });
  ['fullscreenchange', 'webkitfullscreenchange'].forEach(eventName => document.addEventListener(eventName, () => { fullscreenButton.title = fullscreenElement() ? 'Keluar layar penuh' : 'Layar penuh'; }));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) boards.forEach(board => board.pause());
    else if (!dialogs.some(dialog => dialog.open)) boards.forEach(board => board.resume());
    ensureLoop();
  });

  document.addEventListener('keydown', event => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || dialogs.some(dialog => dialog.open) || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
    const board = focusedBoard?.isActive() ? focusedBoard : boards.find(item => item.isActive());
    if (!board || board.paused) return;
    const key = event.key.toLowerCase();
    const index = { a: 0, b: 1, c: 2, '1': 0, '2': 1, '3': 2 }[key];
    if (index !== undefined && board.round.status === 'playing') { event.preventDefault(); initAudio(); void board.choose(index); }
    else if (key === 'escape') { event.preventDefault(); openDialog(settingsDialog, board); }
  });

  function buildReport(board) {
    if (!board?.round) return;
    const content = document.querySelector('#report-content');
    content.replaceChildren();
    const total = board.round.answers.length;
    const correct = board.round.correct;
    const masteredSlots = Array.from(board.round.slots.values());
    const summary = document.createElement('div');
    summary.className = 'report-summary-card';
    summary.innerHTML = `<div><span>POIN</span><b>${board.round.score}</b></div><div><span>DIKUASAI</span><b>${correct} / ${board.round.target}</b></div><div><span>PERCOBAAN</span><b>${total}</b></div><div><span>AKURASI</span><b>${board.round.accuracy}%</b></div><div class="report-summary-badge ${board.round.isWon ? 'passed' : 'failed'}">${board.round.isWon ? 'Tuntas!' : 'Perlu latihan'}</div>`;
    content.append(summary);
    const filters = document.createElement('div');
    filters.className = 'report-filters';
    const unresolved = masteredSlots.filter(slot => !slot.complete).length;
    const filterButtons = [['all', 'Semua Slot (' + masteredSlots.length + ')'], ['wrong', 'Perlu latihan (' + unresolved + ')'], ['correct', 'Sudah dikuasai (' + (masteredSlots.length - unresolved) + ')']].map(([type, text], index) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'report-filter-btn' + (index === 0 ? ' active' : ''); button.textContent = text; button.dataset.filter = type; filters.append(button); return button;
    });
    content.append(filters);
    const items = [];
    masteredSlots.forEach((slot, index) => {
      const firstAttempt = slot.attempts[0];
      const latestAttempt = slot.attempts[slot.attempts.length - 1];
      const question = firstAttempt?.question || latestAttempt?.question || slot.question;
      if (!question) return;
      const item = document.createElement('article');
      item.className = 'report-item';
      item.dataset.status = slot.complete ? 'correct' : 'wrong';
      const art = document.createElement('div'); art.className = 'report-illustration'; art.innerHTML = window.FrogIllustrations?.getIllustration(question.illustration || 'canyon-badge') || '';
      const body = document.createElement('div'); body.className = 'report-body';
      const title = document.createElement('h3');
      const statusText = slot.complete ? (slot.attempts.length > 1 ? 'Dikuasai · latihan ulang' : 'Dikuasai') : 'Perlu latihan';
      title.innerHTML = `<span class="report-status ${slot.complete ? '' : 'wrong'}">${statusText}</span>`;
      title.append(document.createTextNode((index + 1) + '. ' + question.text));
      const attempts = document.createElement('div');
      slot.attempts.forEach((attempt, attemptIndex) => {
        const row = document.createElement('p');
        row.textContent = 'Percobaan ' + (attemptIndex + 1) + ': ' + attempt.question.text + ' → ' + (attempt.choice == null ? 'Waktu habis' : attempt.question.options[attempt.choice]) + (attempt.correct ? ' · benar' : ' · belum tepat');
        attempts.append(row);
      });
      const solvedAttempt = slot.attempts.find(attempt => attempt.correct) || latestAttempt || firstAttempt || { question };
      const correctAnswer = document.createElement('p'); correctAnswer.innerHTML = '<strong>Jawaban benar: ' + solvedAttempt.question.options[solvedAttempt.question.answer] + '</strong>';
      const explanation = document.createElement('p'); explanation.className = 'explanation'; explanation.textContent = solvedAttempt.question.explanation;
      body.append(title, attempts, correctAnswer, explanation); item.append(art, body); content.append(item); items.push(item);
    });
    const applyFilter = type => { filterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === type)); items.forEach(item => { item.hidden = type !== 'all' && item.dataset.status !== type; }); };
    filterButtons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
    openDialog(reportDialog, board);
  }

  function isAnyBoardActive() { return boards.some(board => board.isActive() && !board.paused); }
  function startLoop() {
    if (animFrameId !== null) return;
    const loop = now => { animFrameId = null; if (!isAnyBoardActive() || document.hidden) return; boards.forEach(board => board.tick(now)); animFrameId = requestAnimationFrame(loop); };
    animFrameId = requestAnimationFrame(loop);
  }
  function stopLoop() { if (animFrameId !== null) { cancelAnimationFrame(animFrameId); animFrameId = null; } }
  function ensureLoop() { if (isAnyBoardActive() && !document.hidden) startLoop(); else stopLoop(); }

  ensureLoop();
})();
