// Node.js/서버 없이 로컬 파일(file://)로 더블클릭해서 실행해도 작동되도록 전역 객체로부터 데이터를 읽어옵니다.
const { alphabets, vocabularies, conversations, quizzes, culturalCards } = window.spanishData;

// ==========================================================================
// 1. Application State Manager
// ==========================================================================
const state = {
  // Navigation
  currentView: 'home-view',
  
  // Daily Streak
  streakCount: 0,
  lastStudyDate: '',
  
  // Progress Trackers (IDs stored in Sets for quick uniqueness check)
  learntAlphabets: new Set(),
  learntVocabs: new Set(),
  learntConvs: new Set(),
  
  // Quiz State
  currentQuizIndex: 0,
  quizScore: 0,
  quizTimer: null,
  quizTimeRemaining: 15,
  quizHighScore: 0,
  
  // Vocabulary State
  currentVocabCategory: 'saludos',
  currentVocabCardIndex: 0,
  isCardFlipped: false,
  
  // Conversation State
  currentConvId: 'greet',
  
  // Unlocked Rewards
  unlockedCards: ['flamenco'] // 'flamenco' unlocked by default as a starter reward
};

// ==========================================================================
// 2. Local Storage Sync
// ==========================================================================
function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem('hola_spanish_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.streakCount = parsed.streakCount || 0;
      state.lastStudyDate = parsed.lastStudyDate || '';
      state.quizHighScore = parsed.quizHighScore || 0;
      
      if (parsed.learntAlphabets) state.learntAlphabets = new Set(parsed.learntAlphabets);
      if (parsed.learntVocabs) state.learntVocabs = new Set(parsed.learntVocabs);
      if (parsed.learntConvs) state.learntConvs = new Set(parsed.learntConvs);
      if (parsed.unlockedCards) state.unlockedCards = parsed.unlockedCards;
    }
  } catch (e) {
    console.error("Local storage loading error:", e);
  }
}

function saveStateToStorage() {
  try {
    const dataToSave = {
      streakCount: state.streakCount,
      lastStudyDate: state.lastStudyDate,
      quizHighScore: state.quizHighScore,
      learntAlphabets: Array.from(state.learntAlphabets),
      learntVocabs: Array.from(state.learntVocabs),
      learntConvs: Array.from(state.learntConvs),
      unlockedCards: state.unlockedCards
    };
    localStorage.setItem('hola_spanish_state', JSON.stringify(dataToSave));
  } catch (e) {
    console.error("Local storage saving error:", e);
  }
}

// ==========================================================================
// 3. Marketing Hook: Gamification & Streak Logics
// ==========================================================================
function checkAndTriggerDailyStreak() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  if (!state.lastStudyDate) {
    // New user's first action
    state.streakCount = 1;
    state.lastStudyDate = today;
    triggerFireAnimation();
  } else if (state.lastStudyDate !== today) {
    const lastDate = new Date(state.lastStudyDate);
    const currDate = new Date(today);
    const diffTime = Math.abs(currDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Consecutive day study
      state.streakCount += 1;
      triggerFireAnimation();
    } else if (diffDays > 1) {
      // Streak broken
      state.streakCount = 1;
    }
    state.lastStudyDate = today;
  }
  
  // Streak milestones rewards check
  if (state.streakCount >= 3 && !state.unlockedCards.includes('sagrada')) {
    unlockCultureCard('sagrada');
  }
  
  saveStateToStorage();
  updateHeaderAndDashboard();
}

function triggerFireAnimation() {
  const container = document.getElementById('streak-badge-container');
  if (container) {
    container.classList.add('streak-pop');
    setTimeout(() => container.classList.remove('streak-pop'), 600);
  }
}

function unlockCultureCard(cardId) {
  if (!state.unlockedCards.includes(cardId)) {
    state.unlockedCards.push(cardId);
    saveStateToStorage();
    
    // Confetti effect for rewards
    triggerConfettiCelebration();
    
    // Highlight the reward collection list
    setTimeout(() => {
      alert(`🎉 축하합니다! 새로운 스페인 문화 카드 [${culturalCards.find(c => c.id === cardId).title}]를 획득하셨습니다! 대시보드에서 확인해보세요.`);
    }, 500);
  }
}

function triggerConfettiCelebration() {
  if (window.confetti) {
    window.confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================================================
// 4. TTS (Text-to-Speech) System (Hybrid High-Quality Model)
// ==========================================================================
// ==========================================================================
// 4. TTS (Text-to-Speech) System (Hybrid High-Quality Model)
// ==========================================================================
function speakSpanish(text) {
  // Record learning action to trigger Streak
  checkAndTriggerDailyStreak();

  // Detect Mobile/Tablet Devices (iOS or Android) to bypass strict mobile autoplay gesture policies
  const isMobile = /iPad|iPhone|iPod|Android/i.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isMobile) {
    // On Mobile: Directly trigger native SpeechSynthesis in the sync call stack to guarantee sound output
    speakLocalSynthesis(text);
  } else {
    // On Laptop/PC: Try High-Quality Google Translate TTS API
    try {
      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=es-ES&client=tw-ob&q=${encodeURIComponent(text)}`;
      const audio = new Audio(googleTtsUrl);
      
      let fallbackTriggered = false;
      const fallbackTimeout = setTimeout(() => {
        if (!fallbackTriggered) {
          fallbackTriggered = true;
          speakLocalSynthesis(text);
        }
      }, 1500); // 1.5 seconds timeout on desktop

      audio.play()
        .then(() => {
          clearTimeout(fallbackTimeout);
        })
        .catch((e) => {
          console.warn("Google TTS failed, falling back to Web Speech API:", e);
          clearTimeout(fallbackTimeout);
          if (!fallbackTriggered) {
            fallbackTriggered = true;
            speakLocalSynthesis(text);
          }
        });
    } catch (err) {
      console.warn("Audio object creation failed, using Web Speech API:", err);
      speakLocalSynthesis(text);
    }
  }
}

// Local Web Speech API SpeechSynthesis Fallback
function speakLocalSynthesis(text) {
  if (!('speechSynthesis' in window)) {
    console.warn("SpeechSynthesis is not supported in this browser.");
    return;
  }
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES';
  
  // OS-specific rate compensation (iOS Safari basic voice is exceptionally fast)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) {
    utterance.rate = 0.78; // Compensate faster native iOS voice to match desktop (approx 0.9)
  } else {
    utterance.rate = 0.9;  // Standard Desktop PC/Android
  }
  
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find(voice => voice.lang.startsWith('es-'));
  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 5. Views Controllers
// ==========================================================================

// Global Dashboard / Profile updater
function updateHeaderAndDashboard() {
  // Update streak count
  const streakCountVal = document.getElementById('streak-count-val');
  if (streakCountVal) {
    streakCountVal.textContent = state.streakCount;
  }
  
  // Overall progress calculation
  const totalItems = alphabets.length + Object.values(vocabularies).reduce((acc, cat) => acc + cat.cards.length, 0) + conversations.length;
  const currentProgress = state.learntAlphabets.size + state.learntVocabs.size + state.learntConvs.size;
  const progressPercent = Math.min(100, Math.round((currentProgress / totalItems) * 100));
  
  const progressPercentEl = document.getElementById('overall-progress-val');
  if (progressPercentEl) {
    progressPercentEl.textContent = `${progressPercent}%`;
  }
  
  // Update text stats
  const vocabCountEl = document.getElementById('stat-vocab-count');
  if (vocabCountEl) {
    const totalVocabs = Object.values(vocabularies).reduce((acc, cat) => acc + cat.cards.length, 0);
    vocabCountEl.textContent = `${state.learntVocabs.size}/${totalVocabs}`;
  }
  
  const quizScoreEl = document.getElementById('stat-quiz-score');
  if (quizScoreEl) {
    quizScoreEl.textContent = `${state.quizHighScore}/5`;
  }
  
  // Render cultural cards collection
  renderCultureCollectionGrid();
}

// Tab navigation handler
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.view-section');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      
      navItems.forEach(n => n.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      item.classList.add('active');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      state.currentView = targetId;
      
      // Stop quiz timer if leaving quiz view
      if (targetId !== 'quiz-view' && state.quizTimer) {
        clearInterval(state.quizTimer);
      }
      
      // Initialize view specific loaders
      if (targetId === 'home-view') {
        updateHeaderAndDashboard();
      } else if (targetId === 'alphabet-view') {
        renderAlphabetGrid();
      } else if (targetId === 'vocab-view') {
        renderVocabSelector();
        showVocabCard();
      } else if (targetId === 'conv-view') {
        renderConversationTabs();
        renderActiveConversation();
      }
    });
  });
}

// 5.1 Dashboard View - Culture Cards
function renderCultureCollectionGrid() {
  const grid = document.getElementById('culture-collection-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  culturalCards.forEach(card => {
    const isUnlocked = state.unlockedCards.includes(card.id);
    const cardEl = document.createElement('div');
    cardEl.className = `culture-collect-card ${isUnlocked ? '' : 'locked'}`;
    
    cardEl.innerHTML = `
      <div class="c-emoji">${isUnlocked ? card.emoji : '🔒'}</div>
      <div class="c-title">${card.title}</div>
      <span class="c-status-badge ${isUnlocked ? 'unlocked' : 'locked-status'}">
        ${isUnlocked ? '잠금해제' : '획득불가'}
      </span>
      ${isUnlocked ? '' : `<span class="material-symbols-rounded lock-overlay">lock</span>`}
    `;
    
    if (isUnlocked) {
      cardEl.addEventListener('click', () => {
        showCultureDetailModal(card);
      });
    } else {
      cardEl.addEventListener('click', () => {
        alert(`🔒 이 카드는 아직 잠겨 있습니다.\n지급 팁: ${card.benefit}`);
      });
    }
    
    grid.appendChild(cardEl);
  });
}

function showCultureDetailModal(card) {
  // Prevent duplicate modals
  const existingModal = document.querySelector('.culture-detail-overlay');
  if (existingModal) existingModal.remove();
  
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'culture-detail-overlay';
  
  modalOverlay.innerHTML = `
    <div class="culture-detail-sheet">
      <div class="c-detail-header">
        <div class="c-detail-title">
          <span>${card.emoji}</span>
          <h4>${card.title}</h4>
        </div>
        <button class="close-circle-btn">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
      <div class="c-detail-body">
        <p>${card.description}</p>
        <div class="c-detail-hint">💡 상식 획득 완료!</div>
      </div>
    </div>
  `;
  
  // Close triggers
  modalOverlay.querySelector('.close-circle-btn').addEventListener('click', () => {
    modalOverlay.remove();
  });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
  
  document.querySelector('.app-container').appendChild(modalOverlay);
}

// 5.2 Alphabet View
function renderAlphabetGrid() {
  const container = document.getElementById('alphabet-grid-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  alphabets.forEach(item => {
    const card = document.createElement('div');
    card.className = 'alphabet-card';
    if (state.learntAlphabets.has(item.letter)) {
      card.classList.add('active');
    }
    
    card.innerHTML = `
      <span class="letter-display">${item.letter.split(',')[0]}</span>
      <span class="letter-name">${item.name}</span>
    `;
    
    card.addEventListener('click', () => {
      // Highlight selection
      document.querySelectorAll('.alphabet-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      // Update Detail Drawer
      document.getElementById('panel-letter-title').textContent = `${item.letter} [${item.name}]`;
      document.getElementById('panel-word-sp').textContent = item.word;
      document.getElementById('panel-word-ko').textContent = item.meaning;
      document.getElementById('panel-tip-content').textContent = item.tip;
      
      // Show Detail Box
      document.getElementById('alphabet-detail-panel').classList.remove('hidden');
      
      // Add trigger to speak button
      const audioBtn = document.getElementById('panel-audio-btn');
      // Remove old listeners to avoid multiple events trigger
      const newAudioBtn = audioBtn.cloneNode(true);
      audioBtn.parentNode.replaceChild(newAudioBtn, audioBtn);
      
      newAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speakSpanish(item.word);
        
        // Save learning state
        state.learntAlphabets.add(item.letter);
        card.classList.add('active');
        
        // Reward checking for learning all alphabets
        if (state.learntAlphabets.size === alphabets.length && !state.unlockedCards.includes('siesta')) {
          unlockCultureCard('siesta');
        }
        
        saveStateToStorage();
      });
    });
    
    container.appendChild(card);
  });
}

function setupAlphabetDetailClose() {
  const closeBtn = document.getElementById('close-detail-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('alphabet-detail-panel').classList.add('hidden');
    });
  }
}

// 5.3 Vocabulary View
function renderVocabSelector() {
  const selector = document.getElementById('vocab-category-selector');
  if (!selector) return;
  
  selector.innerHTML = '';
  
  Object.keys(vocabularies).forEach(key => {
    const tab = document.createElement('button');
    tab.className = `cat-tab ${state.currentVocabCategory === key ? 'active' : ''}`;
    tab.innerHTML = `${vocabularies[key].emoji} ${vocabularies[key].title.split(' ')[0]}`;
    
    tab.addEventListener('click', () => {
      state.currentVocabCategory = key;
      state.currentVocabCardIndex = 0;
      state.isCardFlipped = false;
      document.getElementById('vocab-flashcard').classList.remove('flipped');
      
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      showVocabCard();
    });
    
    selector.appendChild(tab);
  });
}

function showVocabCard() {
  const categoryData = vocabularies[state.currentVocabCategory];
  if (!categoryData) return;
  
  const cardData = categoryData.cards[state.currentVocabCardIndex];
  if (!cardData) return;
  
  // Fill front card details
  document.getElementById('card-tag').textContent = categoryData.title.split(' ')[0];
  document.getElementById('card-difficulty').textContent = cardData.level || '초급';
  document.getElementById('card-word-sp').textContent = cardData.word;
  
  // Fill back card details
  document.getElementById('card-word-ko').textContent = cardData.meaning;
  
  const exampleParts = cardData.example.split(' (');
  document.getElementById('card-example-sp').textContent = exampleParts[0];
  document.getElementById('card-example-ko').textContent = exampleParts[1] ? `(${exampleParts[1]}` : '';
  document.getElementById('card-tip-text').textContent = cardData.tip;
  
  // Update pagination indicator
  document.getElementById('card-indicator-val').textContent = `${state.currentVocabCardIndex + 1} / ${categoryData.cards.length}`;
  
  // TTS triggers
  const speakBtn = document.getElementById('card-speak-btn');
  const newSpeakBtn = speakBtn.cloneNode(true);
  speakBtn.parentNode.replaceChild(newSpeakBtn, speakBtn);
  newSpeakBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent flipping when pressing audio button
    speakSpanish(cardData.word);
    
    // Mark as learnt
    const uniqueVocabId = `${state.currentVocabCategory}_${state.currentVocabCardIndex}`;
    state.learntVocabs.add(uniqueVocabId);
    saveStateToStorage();
  });
}

function setupVocabCardTriggers() {
  const card = document.getElementById('vocab-flashcard');
  const prevBtn = document.getElementById('prev-card-btn');
  const nextBtn = document.getElementById('next-card-btn');
  
  if (card) {
    card.addEventListener('click', () => {
      state.isCardFlipped = !state.isCardFlipped;
      card.classList.toggle('flipped', state.isCardFlipped);
      
      // Mark as learnt when card is flipped (proactive learning indicator)
      const uniqueVocabId = `${state.currentVocabCategory}_${state.currentVocabCardIndex}`;
      state.learntVocabs.add(uniqueVocabId);
      saveStateToStorage();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const cards = vocabularies[state.currentVocabCategory].cards;
      state.currentVocabCardIndex = (state.currentVocabCardIndex - 1 + cards.length) % cards.length;
      state.isCardFlipped = false;
      card.classList.remove('flipped');
      showVocabCard();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const cards = vocabularies[state.currentVocabCategory].cards;
      state.currentVocabCardIndex = (state.currentVocabCardIndex + 1) % cards.length;
      state.isCardFlipped = false;
      card.classList.remove('flipped');
      showVocabCard();
    });
  }
}

// 5.4 Conversation View
function renderConversationTabs() {
  const container = document.getElementById('conv-tabs-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  conversations.forEach(conv => {
    const tab = document.createElement('button');
    tab.className = `conv-tab ${state.currentConvId === conv.id ? 'active' : ''}`;
    tab.innerHTML = `${conv.icon} ${conv.title}`;
    
    tab.addEventListener('click', () => {
      state.currentConvId = conv.id;
      document.querySelectorAll('.conv-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderActiveConversation();
    });
    
    container.appendChild(tab);
  });
}

function renderActiveConversation() {
  const container = document.getElementById('dialogue-box-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const currentDialogue = conversations.find(c => c.id === state.currentConvId);
  if (!currentDialogue) return;
  
  currentDialogue.dialogue.forEach((line, idx) => {
    const bubble = document.createElement('div');
    // Alternating bubbles layout
    const isLeft = line.speaker === 'A' || line.speaker === 'C';
    bubble.className = `chat-bubble ${isLeft ? 'left' : 'right'}`;
    
    bubble.innerHTML = `
      <span class="chat-sender-name">${line.name}</span>
      <div class="chat-msg-body">
        <p class="chat-sp"><span class="material-symbols-rounded" style="font-size:16px;">volume_up</span>${line.sp}</p>
        <p class="chat-ko">${line.ko}</p>
        <div class="chat-bubble-tip">
          💡 ${line.tip}
        </div>
      </div>
    `;
    
    // Play single line sound and toggle study tips
    bubble.addEventListener('click', () => {
      speakSpanish(line.sp);
      
      const tipBox = bubble.querySelector('.chat-bubble-tip');
      tipBox.classList.toggle('show');
      
      // Save learning state
      state.learntConvs.add(`${state.currentConvId}_${idx}`);
      saveStateToStorage();
    });
    
    container.appendChild(bubble);
  });
}

// ==========================================================================
// 6. Interactive Quiz System
// ==========================================================================
function setupQuizSystem() {
  const startBtn = document.getElementById('start-quiz-btn');
  const nextBtn = document.getElementById('next-question-btn');
  const retryBtn = document.getElementById('retry-quiz-btn');
  const goRewardsBtn = document.getElementById('go-home-rewards-btn');
  
  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', loadNextQuestion);
  }
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      switchQuizScreen('quiz-intro-screen');
    });
  }
  if (goRewardsBtn) {
    goRewardsBtn.addEventListener('click', () => {
      // Navigate to Dashboard
      const homeTab = document.querySelector('.nav-item[data-target="home-view"]');
      if (homeTab) homeTab.click();
    });
  }
}

function startQuiz() {
  state.currentQuizIndex = 0;
  state.quizScore = 0;
  switchQuizScreen('quiz-active-screen');
  loadQuizQuestion();
  
  // Interaction check to log streak
  checkAndTriggerDailyStreak();
}

function switchQuizScreen(screenId) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

function loadQuizQuestion() {
  const qData = quizzes[state.currentQuizIndex];
  if (!qData) return;
  
  // Reset Timer
  clearInterval(state.quizTimer);
  state.quizTimeRemaining = 15;
  document.getElementById('quiz-timer-val').textContent = `⏰ 15s`;
  
  // Timer interval countdown
  state.quizTimer = setInterval(() => {
    state.quizTimeRemaining -= 1;
    document.getElementById('quiz-timer-val').textContent = `⏰ ${state.quizTimeRemaining}s`;
    
    if (state.quizTimeRemaining <= 0) {
      clearInterval(state.quizTimer);
      handleTimeout();
    }
  }, 1000);
  
  // Question text
  document.getElementById('quiz-question-indicator').textContent = `문제 ${state.currentQuizIndex + 1} / ${quizzes.length}`;
  document.getElementById('quiz-question-text').textContent = qData.question;
  
  // Progress bar fill
  const progressFill = document.getElementById('quiz-progress-fill-val');
  if (progressFill) {
    progressFill.style.width = `${((state.currentQuizIndex) / quizzes.length) * 100}%`;
  }
  
  // Reset explanation box
  const expBox = document.getElementById('quiz-explanation-panel');
  expBox.classList.add('hidden');
  expBox.className = 'quiz-explanation-box hidden';
  
  // Render options
  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = '';
  
  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleOptionSelection(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleOptionSelection(selectedIndex, clickedBtn) {
  // Stop timer
  clearInterval(state.quizTimer);
  
  const qData = quizzes[state.currentQuizIndex];
  const optionButtons = document.querySelectorAll('.option-btn');
  
  // Disable all option buttons
  optionButtons.forEach(btn => btn.disabled = true);
  
  const isCorrect = selectedIndex === qData.answer;
  const expBox = document.getElementById('quiz-explanation-panel');
  const statusText = document.getElementById('explanation-status-text');
  const bodyText = document.getElementById('explanation-body-text');
  
  if (isCorrect) {
    state.quizScore += 1;
    clickedBtn.classList.add('correct');
    statusText.textContent = "¡Excelente! 정답입니다! 🎉";
    expBox.classList.add('correct-box');
  } else {
    clickedBtn.classList.add('wrong');
    // Highlight correct answer
    optionButtons[qData.answer].classList.add('correct');
    statusText.textContent = "¡Qué pena! 오답입니다... 😢";
    expBox.classList.add('wrong-box');
  }
  
  bodyText.textContent = qData.explanation;
  expBox.classList.remove('hidden');
}

function handleTimeout() {
  const qData = quizzes[state.currentQuizIndex];
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.disabled = true);
  
  // Highlight correct answer
  optionButtons[qData.answer].classList.add('correct');
  
  const expBox = document.getElementById('quiz-explanation-panel');
  const statusText = document.getElementById('explanation-status-text');
  const bodyText = document.getElementById('explanation-body-text');
  
  statusText.textContent = "⏱️ 시간 초과!";
  expBox.classList.add('wrong-box');
  bodyText.textContent = qData.explanation;
  expBox.classList.remove('hidden');
}

function loadNextQuestion() {
  state.currentQuizIndex += 1;
  
  // Progress bar finish fill
  const progressFill = document.getElementById('quiz-progress-fill-val');
  if (progressFill) {
    progressFill.style.width = `${((state.currentQuizIndex) / quizzes.length) * 100}%`;
  }
  
  if (state.currentQuizIndex < quizzes.length) {
    loadQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  switchQuizScreen('quiz-result-screen');
  
  const scoreVal = document.getElementById('result-score-val');
  const titleVal = document.getElementById('result-title-val');
  const msgVal = document.getElementById('result-msg-val');
  const emojiVal = document.getElementById('result-emoji-val');
  
  scoreVal.textContent = `${state.quizScore} / ${quizzes.length}`;
  
  // Score high score update
  if (state.quizScore > state.quizHighScore) {
    state.quizHighScore = state.quizScore;
    saveStateToStorage();
  }
  
  if (state.quizScore === quizzes.length) {
    emojiVal.textContent = "emoji_events";
    titleVal.textContent = "¡Perfecto! 대단해요! 만점입니다!";
    msgVal.textContent = "스페인어로 기본적인 소통을 진행할 완벽한 능력을 입증하셨습니다! 보상으로 스페인 문화 카드 [타파스] 가 잠금해제 되었습니다.";
    unlockCultureCard('tapas');
  } else if (state.quizScore >= 3) {
    emojiVal.textContent = "workspace_premium";
    titleVal.textContent = "¡Muy bien! 훌륭한 결과입니다!";
    msgVal.textContent = "조금만 더 복습하면 완벽한 점수를 낼 수 있습니다. 계속 화이팅해요!";
  } else {
    emojiVal.textContent = "psychology";
    titleVal.textContent = "¡Ánimo! 다시 힘을 내볼까요?";
    msgVal.textContent = "틀린 것은 배움의 기회입니다. 알파벳과 단어장을 다시 살펴보고 도전해 보세요!";
  }
}

// ==========================================================================
// 7. Initialization Entry Point
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load local state
  loadStateFromStorage();
  
  // Setup elements & logic
  setupNavigation();
  setupAlphabetDetailClose();
  setupVocabCardTriggers();
  setupQuizSystem();
  
  // Pre-load default voice list for Chrome/Safari compatibility
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      // Reload voice trigger to fetch native voices list
      window.speechSynthesis.getVoices();
    };
  }
  
  // Initial Dashboard stats load
  updateHeaderAndDashboard();
});
