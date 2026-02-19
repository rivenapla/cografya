/* ==============================================
   UYGULAMA MANTIĞI (DERSLER & KONULAR)
   ============================================== */

let map = null;
let currentMarkers = [];
let currentMountain = null;
let score = { correct: 0, wrong: 0, shown: 0 };

// Mevcut soru için kaç kez yanlış girildiğini takip eder
let wrongAttempts = 0;
const MAX_WRONG_ATTEMPTS = 3;

// --- İPUCU SİSTEMİ ---
let hintTokens = 3;        // Session başına 3 ipucu hakkı
let hintLevel = 0;         // 0=hiç kullanılmadı, 1=ilk harf, 2=harf deseni

// DOM Elementleri
const menuArea = document.getElementById('menu-area');
const gameArea = document.getElementById('game-area');
const backBtn = document.getElementById('back-btn');
const currentTitle = document.getElementById('current-title');

// --- TARİH QUIZ DURUM DEĞİŞKENLERİ ---
let currentQuiz = [];
let questionIndex = 0;

// Geçmiş sorular için kayıt: { item, userAnswer, status: 'correct'|'wrong'|'shown' }
let quizHistory = [];
// Geçmişe bakma modunda hangi index'teyiz (-1 = aktif mod)
let historyViewIndex = -1;
let currentHistoryItem = null;
// Quiz bittiğinde bekleyen setTimeout'ların nextQuestion çağırmasını önler
let quizFinished = false;

renderMenu(appData.main);

function renderMenu(items) {
    menuArea.innerHTML = "";
    menuArea.style.display = 'grid';
    gameArea.style.display = 'none';

    const currentMenuId = findMenuIdByItems(items);
    const parentId = findParentMenuId(currentMenuId);

    if (currentMenuId === "main") {
        backBtn.style.display = 'none';
        currentTitle.innerText = "Dersler";
    } else {
        backBtn.style.display = 'inline-block';
        backBtn.innerText = "← Geri Dön";
        backBtn.onclick = () => {
            if (parentId && appData[parentId]) {
                renderMenu(appData[parentId]);
                updateTitleForMenu(parentId);
            } else {
                renderMenu(appData.main);
                currentTitle.innerText = "Dersler";
            }
        };
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<span>${item.icon}</span><h2>${item.title}</h2><p>${item.desc}</p>`;

        if (item.type !== "none") {
            card.onclick = () => handleSelection(item);
        } else {
            card.style.opacity = "0.5";
            card.style.cursor = "default";
        }

        menuArea.appendChild(card);
    });
}

function handleSelection(item) {
    if (item.id === "tarih") {
        renderHistorySelection();
        currentTitle.innerText = "Tarih Konu Seçimi";
    } else if (appData[item.id]) {
        renderMenu(appData[item.id]);
        currentTitle.innerText = item.title;
    } else if (item.type === "game") {
        const parentId = findParentMenuId(item.id);
        startGame(item.id, item.title, parentId);
    }
}

function renderHistorySelection() {
    menuArea.innerHTML = `
        <div class="selection-container">
            <p class="hint-text" style="margin-bottom:15px;">Çalışmak istediğin konuları seç ve karıştır!</p>
            <div id="topic-list" class="topic-grid">
                ${appData.tarih.map(topic => `
                    <label class="topic-item">
                        <input type="checkbox" name="history-topic" value="${topic.id}">
                        <span class="topic-box">
                            <span class="topic-icon">${topic.icon}</span>
                            <span class="topic-name">${topic.title}</span>
                        </span>
                    </label>
                `).join('')}
            </div>
            <button class="btn-start-mixed" onclick="startMixedQuiz()">Seçili Konuları Başlat 🚀</button>
        </div>
    `;
    backBtn.style.display = 'inline-block';
    backBtn.onclick = () => renderMenu(appData.main);
}

// Gerçek rastgele karıştırma (Fisher-Yates algoritması)
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startMixedQuiz() {
    const selectedCheckboxes = document.querySelectorAll('input[name="history-topic"]:checked');
    let mixedQuestions = [];
    let selectedIcons = [];

    if (selectedCheckboxes.length === 0) {
        alert("Lütfen en az bir konu seç!");
        return;
    }

    selectedCheckboxes.forEach(cb => {
        const topicId = cb.value;
        const topic = appData.tarih.find(t => t.id === topicId);
        if (topic) selectedIcons.push(topic.icon);

        if (appData.quizData[topicId]) {
            const questionsWithTitle = appData.quizData[topicId].map(q => ({
                ...q,
                topicTitle: topic.title,
                id: Math.random().toString(36).substr(2, 9)
            }));
            mixedQuestions = [...mixedQuestions, ...questionsWithTitle];
        }
    });

    currentQuiz = shuffleArray(mixedQuestions);
    questionIndex = 0;
    quizHistory = [];
    historyViewIndex = -1;
    quizFinished = false;
    hintTokens = 3;

    // İlerleme çubuğunu sıfırla
    const fill = document.getElementById('modal-progress-fill');
    if (fill) fill.style.width = '0%';

    const overlay = document.getElementById('shuffle-overlay');
    const iconEl = document.getElementById('dynamic-shuffle-icon');
    overlay.style.display = 'flex';

    let iconIdx = 0;
    const iconInterval = setInterval(() => {
        iconEl.innerText = selectedIcons[iconIdx % selectedIcons.length];
        iconIdx++;
    }, 70);

    setTimeout(() => {
        clearInterval(iconInterval);
        overlay.style.display = 'none';
        document.getElementById('map').style.display = 'none';
        document.getElementById('game-area').style.display = 'block';

        backBtn.style.display = 'inline-block';
        backBtn.innerText = "← Geri Dön";
        backBtn.onclick = () => {
            resetHistoryQuiz();
            gameArea.style.display = 'none';
            menuArea.style.display = 'grid';
            renderMenu(appData.main);
            currentTitle.innerText = "Dersler";
        };

        nextQuestion();
    }, 1600);
}

// --- YARDIMCI FONKSIYONLAR ---

function findMenuIdByItems(items) {
    for (let key in appData) {
        if (appData[key] === items) return key;
    }
    return "main";
}

function findParentMenuId(childId) {
    if (childId === "main") return null;

    for (let parentKey in appData) {
        if (Array.isArray(appData[parentKey])) {
            if (appData[parentKey].some(item => item.id === childId)) {
                return parentKey;
            }
        }
    }
    return "main";
}

function updateTitleForMenu(menuId) {
    const parentId = findParentMenuId(menuId);
    if (parentId && appData[parentId]) {
        const menuObj = appData[parentId].find(item => item.id === menuId);
        if (menuObj) currentTitle.innerText = menuObj.title;
    } else {
        currentTitle.innerText = "Dersler";
    }
}

// --- HARİTA BAŞLATMA (COĞRAFYA) ---
function startGame(gameId, title, parentId) {
    resetScore();

    menuArea.style.display = 'none';
    gameArea.style.display = 'block';
    currentTitle.innerText = title;

    document.getElementById('map').style.display = 'block';

    if (map) {
        map.remove();
        map = null;
    }

    backBtn.style.display = 'inline-block';
    backBtn.innerText = "← Geri Dön";
    backBtn.onclick = () => {
        gameArea.style.display = 'none';
        menuArea.style.display = 'grid';
        resetScore();

        if (parentId && appData[parentId]) {
            renderMenu(appData[parentId]);
            updateTitleForMenu(parentId);
        } else {
            renderMenu(appData.main);
            currentTitle.innerText = "Dersler";
        }
    };

    const startZoom = window.innerWidth < 768 ? 5 : 6;
    map = L.map('map').setView([39.0, 35.0], startZoom);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    }).addTo(map);

    placePins(gameId);
}

function placePins(gameId) {
    const pinsData = appData.gameData[gameId];
    currentMarkers = [];
    if (!pinsData) return;

    pinsData.forEach(item => {
        let pinColor = '#3498db';
        let pinIcon = '';
        let pinClass = 'pin-body';

        if (item.type === 'cikarim') {
            pinColor = '#7f8c8d';
            pinIcon = '⛏️';
        } else if (item.type === 'isleme') {
            pinColor = '#e74c3c';
            pinIcon = '🏭';
            pinClass = 'pin-body factory-pin';
        }

        const premiumIcon = L.divIcon({
            className: 'custom-leaflet-icon',
            html: `
                <div class="premium-pin" id="marker-${item.id}">
                    <div class="${pinClass}" style="background-color: ${pinColor};">
                        <span class="pin-number" style="font-size: 14px;">${item.label === 'F' ? pinIcon : item.label}</span>
                    </div>
                </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 42],
            popupAnchor: [0, -40]
        });

        const marker = L.marker([item.lat, item.lng], { icon: premiumIcon }).addTo(map);

        marker.on('click', () => {
            const element = document.getElementById(`marker-${item.id}`);
            if (element && element.classList.contains('correct')) return;
            openQuestion(item, marker);
        });

        currentMarkers.push({ leafletMarker: marker, dataId: item.id });
    });
}

// --- MODAL AÇMA ---
function openQuestion(item, markerObject = null) {
    currentMountain = item;
    currentMountain.markerRef = markerObject;
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('question-modal').style.display = 'block';

    const topicLabel = document.getElementById('topic-label');
    if (topicLabel) {
        if (item.topicTitle) {
            topicLabel.innerText = item.topicTitle;
            topicLabel.style.display = 'block';
        } else {
            topicLabel.style.display = 'none';
        }
    }

    const qTitle = document.getElementById('q-title');
    if (item.q) {
        qTitle.innerText = item.q;
    } else {
        qTitle.innerText = (item.label || "?") + " numaralı yer neresidir?";
    }

    const input = document.getElementById('user-answer');
    input.value = "";
    input.readOnly = false;
    document.getElementById('feedback').innerText = "";
    wrongAttempts = 0;
    hintLevel = 0;

    // Tarih sorusu ise butonları ve UI'yi ayarla
    if (item.q) {
        document.querySelector('.btn-check').style.display = 'block';
        document.querySelector('.btn-giveup').style.display = 'inline-block';
        document.getElementById('btn-finish').style.display = 'block';
        document.querySelector('.btn-close').style.display = 'inline-block';
        updateHintButton();
        updateHistoryQuizUI(false);
    } else {
        // Coğrafya: tarih özel buton/elementleri gizle
        const prevBtn = document.getElementById('btn-prev-question');
        if (prevBtn) prevBtn.style.display = 'none';
        const progressEl = document.getElementById('quiz-progress');
        if (progressEl) progressEl.style.display = 'none';
        document.getElementById('btn-finish').style.display = 'none';
        document.getElementById('hint-area').style.display = 'none';
        document.querySelector('.btn-check').style.display = 'block';
        document.querySelector('.btn-giveup').style.display = 'inline-block';
        document.querySelector('.btn-close').style.display = 'inline-block';
    }

    input.focus();
}

// --- TARİH QUIZ UI (ilerleme + önceki soru butonu) ---

function updateProgressBar() {
    const fill = document.getElementById('modal-progress-fill');
    if (!fill || currentQuiz.length === 0) return;
    const pct = ((questionIndex) / currentQuiz.length) * 100;
    fill.style.width = pct + '%';

    // Renk: başlangıç mavi, ortada sarıya, sona doğru yeşile
    if (pct < 50) {
        fill.style.background = 'linear-gradient(90deg, #3498db, #2ecc71)';
    } else if (pct < 85) {
        fill.style.background = 'linear-gradient(90deg, #f39c12, #27ae60)';
    } else {
        fill.style.background = 'linear-gradient(90deg, #27ae60, #2ecc71)';
    }
}

function updateHistoryQuizUI(isHistoryView) {
    const prevBtn = document.getElementById('btn-prev-question');
    const progressEl = document.getElementById('quiz-progress');

    if (progressEl) {
        const total = currentQuiz.length;
        const current = isHistoryView ? (historyViewIndex + 1) : (questionIndex);
        progressEl.innerText = `${current} / ${total}`;
        progressEl.style.display = 'block';
    }

    if (prevBtn) {
        if (quizHistory.length > 0 && !isHistoryView) {
            prevBtn.style.display = 'inline-block';
            prevBtn.innerText = "◀ Önceki Soru";
            prevBtn.onclick = goToPrevQuestion;
        } else if (isHistoryView) {
            prevBtn.style.display = quizHistory.indexOf(currentHistoryItem) > 0 ? 'inline-block' : 'none';
            if (quizHistory.indexOf(currentHistoryItem) > 0) {
                prevBtn.innerText = "◀ Önceki Soru";
                prevBtn.onclick = goToPrevInHistory;
            }
        } else {
            prevBtn.style.display = 'none';
        }
    }
}

function goToPrevQuestion() {
    historyViewIndex = quizHistory.length - 1;
    currentHistoryItem = quizHistory[historyViewIndex];
    showHistoryQuestion(historyViewIndex);
}

// --- İPUCU SİSTEMİ FONKSİYONLARI ---

// Düğmenin metnini ve durumunu günceller
function updateHintButton() {
    const btn = document.getElementById('btn-hint');
    const badge = document.getElementById('hint-token-badge');
    const label = btn ? btn.querySelector('.hint-text-label') : null;
    if (!btn) return;

    if (badge) badge.innerText = hintTokens;

    if (hintTokens <= 0) {
        if (label) label.innerText = 'İpucu Hakkı Kalmadı';
        btn.disabled = true;
    } else if (hintLevel === 0) {
        if (label) label.innerText = 'İpucu Kullan';
        btn.disabled = false;
    } else if (hintLevel === 1) {
        if (label) label.innerText = 'Daha Fazla İpucu';
        btn.disabled = false;
    } else {
        if (label) label.innerText = 'İpucu Kullanıldı';
        btn.disabled = true;
    }
}

function useHint() {
    if (hintTokens <= 0 || !currentMountain || !currentMountain.a) return;

    const correctAnswer = currentMountain.a[0];
    const feedback = document.getElementById('feedback');
    hintTokens--;
    hintLevel++;

    let hintText = '';

    if (hintLevel === 1) {
        // Seviye 1: İlk harf + kaç harfli olduğu
        const firstLetter = correctAnswer[0].toLocaleUpperCase('tr');
        const wordCount = correctAnswer.trim().split(/\s+/).length;
        const letterCount = correctAnswer.replace(/\s/g, '').length;
        hintText = `💡 <b>İpucu:</b> İlk harf <b style="color:#8e44ad; font-size:1.1rem;">${firstLetter}</b> — ${wordCount} kelime, toplam ${letterCount} harf`;
    } else if (hintLevel === 2) {
        // Seviye 2: Her kelimeyi ___ deseni olarak göster (ilk harf açık)
        const words = correctAnswer.trim().split(/\s+/);
        const pattern = words.map(word => {
            const first = word[0].toLocaleUpperCase('tr');
            const rest = '_ '.repeat(word.length - 1).trim();
            return `<b style="color:#8e44ad">${first}</b>${rest ? rest : ''}`;
        }).join('&nbsp;&nbsp;');
        hintText = `💡 <b>İpucu:</b> ${pattern}`;
    }

    feedback.style.color = '#8e44ad';
    feedback.innerHTML = hintText;
    updateHintButton();
}

function goToPrevInHistory() {
    historyViewIndex--;
    if (historyViewIndex < 0) historyViewIndex = 0;
    currentHistoryItem = quizHistory[historyViewIndex];
    showHistoryQuestion(historyViewIndex);
}

function showHistoryQuestion(idx) {
    const record = quizHistory[idx];
    if (!record) return;

    currentHistoryItem = record;
    currentMountain = record.item;

    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('question-modal').style.display = 'block';

    const topicLabel = document.getElementById('topic-label');
    if (topicLabel) {
        if (record.item.topicTitle) {
            topicLabel.innerText = record.item.topicTitle;
            topicLabel.style.display = 'block';
        } else {
            topicLabel.style.display = 'none';
        }
    }

    document.getElementById('q-title').innerText = record.item.q || "Soru";

    const input = document.getElementById('user-answer');
    const feedback = document.getElementById('feedback');
    const correctAnswer = (record.item.a ? record.item.a[0] : '').toUpperCase();

    input.value = correctAnswer;
    input.readOnly = true;

    if (record.status === 'correct') {
        feedback.style.color = "#27ae60";
        feedback.innerHTML = `<b>✓ DOĞRU</b> — Cevabın: ${record.userAnswer.toUpperCase()}`;
    } else if (record.status === 'wrong') {
        feedback.style.color = "#e74c3c";
        feedback.innerHTML = `<b>✗ YANLIŞ</b> — Cevabın: ${record.userAnswer ? record.userAnswer.toUpperCase() : '(boş)'}`;
    } else {
        feedback.style.color = "#f39c12";
        feedback.innerHTML = `<b>Cevap Gösterildi</b>`;
    }

    if (record.item.desc) {
        feedback.innerHTML += `<br><span style="font-size:0.9rem; color:#555;">${record.item.desc}</span>`;
    }

    const progressEl = document.getElementById('quiz-progress');
    if (progressEl) {
        progressEl.innerText = `${idx + 1} / ${currentQuiz.length}`;
        progressEl.style.display = 'block';
    }

    // Geçmiş modunda: cevap/cevabı göster gizle, önceki + bıraktığın yere dön göster
    document.querySelector('.btn-check').style.display = 'none';
    document.querySelector('.btn-giveup').style.display = 'none';
    document.getElementById('btn-finish').style.display = 'none';
    document.getElementById('hint-area').style.display = 'none';
    document.querySelector('.btn-close').style.display = 'none';

    const prevBtn = document.getElementById('btn-prev-question');
    if (prevBtn) {
        if (idx > 0) {
            prevBtn.style.display = 'inline-block';
            prevBtn.innerText = "◀ Önceki Soru";
            prevBtn.onclick = () => {
                historyViewIndex--;
                currentHistoryItem = quizHistory[historyViewIndex];
                showHistoryQuestion(historyViewIndex);
            };
        } else {
            prevBtn.style.display = 'none';
        }
    }

    feedback.innerHTML += `<br><br><button onclick="resumeQuiz()" style="
        background:#3498db; color:white; border:none; border-radius:8px;
        padding:10px 20px; font-weight:bold; cursor:pointer; margin-top:8px; font-size:1rem;
    ">Bıraktığın Yere Dön ▶</button>`;
}

function resumeQuiz() {
    historyViewIndex = -1;
    currentHistoryItem = null;

    const input = document.getElementById('user-answer');
    if (input) { input.readOnly = false; input.value = ""; }

    const btnCheck = document.querySelector('.btn-check');
    if (btnCheck) btnCheck.style.display = 'block';
    const btnGiveup = document.querySelector('.btn-giveup');
    if (btnGiveup) btnGiveup.style.display = 'inline-block';
    const btnFinish = document.getElementById('btn-finish');
    if (btnFinish) btnFinish.style.display = 'block';
    const hintArea = document.getElementById('hint-area');
    if (hintArea) hintArea.style.display = 'block';
    const btnClose = document.querySelector('.btn-close');
    if (btnClose) btnClose.style.display = 'inline-block';

    closeModal();
    nextQuestion();
}

// --- CEVAP KONTROL ---

// Cevap karşılaştırması için metni normalleştirir:
// küçük harf, baştaki/sondaki boşlukları siler, çoklu boşlukları tekleştirir
function normalizeText(text) {
    return text
        .toLocaleLowerCase('tr')
        .trim()
        .replace(/\s+/g, ' ');
}

// İki metinden biri diğerini içeriyorsa eşleşme say
// Ayrıca: kullanıcı en az 3 karakter yazdıysa, cevabın ilk kelimesiyle başlıyorsa da kabul et
function isAnswerMatch(userText, correctAnswer) {
    const u = normalizeText(userText);
    const a = normalizeText(correctAnswer);

    if (u.length < 2) return false; // Çok kısa girişleri reddet
    if (u === a) return true;
    if (a.includes(u)) return true;  // Kullanıcı cevabın bir parçasını yazdı
    if (u.includes(a)) return true;  // Kullanıcı cevabı kapsayan bir şey yazdı

    // Cevap birden fazla kelimeden oluşuyorsa, kullanıcı ilk anlamlı kelimeyi yazdıysa kabul et
    const aWords = a.split(' ');
    const uWords = u.split(' ');
    if (aWords.length > 1 && uWords.length >= 1) {
        // Kullanıcının yazdığı her kelime cevabın kelimelerinde geçiyorsa kabul et
        const allWordsMatch = uWords.every(uw => aWords.some(aw => aw.includes(uw) || uw.includes(aw)));
        if (allWordsMatch) return true;
    }

    return false;
}

function checkAnswer() {
    const userText = document.getElementById('user-answer').value;
    const feedback = document.getElementById('feedback');

    const correctAnswers = currentMountain.a || currentMountain.names;

    const isMatch = correctAnswers.some(ans => isAnswerMatch(userText, ans));

    if (isMatch) {
        feedback.style.color = "#27ae60";
        feedback.innerHTML = "<b>DOĞRU!</b>";

        const pinElement = document.getElementById(`marker-${currentMountain.id}`);
        if (pinElement) pinElement.classList.add('correct');

        score.correct++;
        updateScore();

        if (currentMountain.q) {
            const existingIdx = quizHistory.findIndex(h => h.item.id === currentMountain.id);
            if (existingIdx !== -1) {
                quizHistory[existingIdx] = { item: currentMountain, userAnswer: userText, status: 'correct' };
            } else {
                quizHistory.push({ item: currentMountain, userAnswer: userText, status: 'correct' });
            }
            setTimeout(() => { closeModal(); nextQuestion(); }, 1000);
        } else {
            setTimeout(closeModal, 850);
        }
    } else {
        wrongAttempts++;
        document.getElementById('question-modal').classList.add('apply-shake');
        setTimeout(() => document.getElementById('question-modal').classList.remove('apply-shake'), 500);

        if (wrongAttempts >= MAX_WRONG_ATTEMPTS && currentMountain.q) {
            // 3. yanlışta otomatik cevabı göster ve geç
            const correctAnswer = currentMountain.a[0];
            const input = document.getElementById('user-answer');
            input.value = correctAnswer.toLocaleUpperCase('tr');
            input.readOnly = true;

            feedback.style.color = "#e74c3c";
            feedback.innerHTML = `<b>Bilemedin!</b> Doğru cevap: <b style="color:#e74c3c">${correctAnswer.toLocaleUpperCase('tr')}</b>`;
            if (currentMountain.desc) {
                feedback.innerHTML += `<br><span style="font-size:0.9rem; color:#555;">${currentMountain.desc}</span>`;
            }

            // Sadece 1 yanlış say (kaç deneme yapılmış olursa olsun)
            score.wrong++;
            updateScore();

            const existingIdx = quizHistory.findIndex(h => h.item.id === currentMountain.id);
            if (existingIdx === -1) {
                quizHistory.push({ item: currentMountain, userAnswer: userText, status: 'wrong' });
            } else {
                quizHistory[existingIdx].userAnswer = userText;
                quizHistory[existingIdx].status = 'wrong';
            }

            setTimeout(() => { closeModal(); nextQuestion(); }, 2000);

        } else {
            // Normal yanlış — sayaçlara dokunma, sadece kalan hak göster
            const remaining = MAX_WRONG_ATTEMPTS - wrongAttempts;
            feedback.style.color = "#e74c3c";
            if (currentMountain.q) {
                feedback.innerHTML = `<b>YANLIŞ!</b> <span style="font-size:0.85rem; color:#c0392b;">(${remaining} hakkın kaldı)</span>`;
            } else {
                // Coğrafya: her yanlışı say (soru tekrar edilmiyor)
                score.wrong++;
                updateScore();
                feedback.innerHTML = `<b>YANLIŞ!</b>`;
            }
        }
    }
}
function showAnswer() {
    const input = document.getElementById('user-answer');
    const feedback = document.getElementById('feedback');

    const correctAnswer = (currentMountain.a ? currentMountain.a[0] : currentMountain.names[0]).toUpperCase();

    input.value = correctAnswer;
    input.readOnly = true;
    feedback.innerHTML = "Cevap gösterildi.";
    feedback.style.color = "#f39c12";

    const pinElement = document.getElementById(`marker-${currentMountain.id}`);
    if (pinElement) pinElement.classList.add('passive');

    score.shown++;

    if (currentMountain.desc) {
        feedback.innerHTML += `<br><span style="font-size:0.9rem; color:#555;">${currentMountain.desc}</span>`;
    }

    updateScore();

    if (currentMountain.q) {
        const existingIdx = quizHistory.findIndex(h => h.item.id === currentMountain.id);
        if (existingIdx === -1) {
            quizHistory.push({ item: currentMountain, userAnswer: '', status: 'shown' });
        } else {
            quizHistory[existingIdx].status = 'shown';
        }
        setTimeout(() => { closeModal(); nextQuestion(); }, 2000);
    }
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('question-modal').style.display = 'none';

    const input = document.getElementById('user-answer');
    if (input) input.readOnly = false;

    const btnCheck = document.querySelector('.btn-check');
    if (btnCheck) btnCheck.style.display = 'block';
    const btnGiveup = document.querySelector('.btn-giveup');
    if (btnGiveup) btnGiveup.style.display = 'inline-block';
    const btnFinish = document.getElementById('btn-finish');
    if (btnFinish) btnFinish.style.display = 'block';
    const hintArea = document.getElementById('hint-area');
    if (hintArea) hintArea.style.display = 'block';
    const btnClose = document.querySelector('.btn-close');
    if (btnClose) btnClose.style.display = 'inline-block';

    if (historyViewIndex !== -1) {
        historyViewIndex = -1;
        currentHistoryItem = null;
    }
}

// --- BİTİR BUTONU & SONUÇ EKRANI ---
function finishQuiz() {
    quizFinished = true;

    const wrongItems = quizHistory.filter(h => h.status === 'wrong');
    const shownItems = quizHistory.filter(h => h.status === 'shown');
    const correctCount = quizHistory.filter(h => h.status === 'correct').length;
    const wrongCount = wrongItems.length;
    const shownCount = shownItems.length;

    const reviewList = [...wrongItems, ...shownItems];

    // Modal zaten açık — direkt sonuç ekranına geç, closeModal çağırmıyoruz
    // çünkü showResultScreen zaten innerHTML'i yeniden yazar
    showResultScreen(correctCount, wrongCount, shownCount, reviewList);
}

function showResultScreen(correctCount, wrongCount, shownCount, reviewList) {
    // Modal'ı sonuç ekranı olarak kullan
    document.getElementById('modal-overlay').style.display = 'block';

    const modal = document.getElementById('question-modal');
    modal.style.display = 'block';
    modal.style.maxWidth = '500px';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';

    const total = correctCount + wrongCount + shownCount;

    // Konu bazlı gruplama (yanlış + cevap gösterildi)
    const groupedByTopic = {};
    reviewList.forEach(record => {
        const topic = record.item.topicTitle || 'Genel';
        if (!groupedByTopic[topic]) groupedByTopic[topic] = [];
        groupedByTopic[topic].push(record);
    });

    let reviewHTML = '';
    if (reviewList.length === 0) {
        reviewHTML = `
            <div style="background:#eafaf1; border-radius:12px; padding:20px; margin-top:15px; border:2px solid #27ae60;">
                <div style="font-size:3rem; margin-bottom:10px;">🏆</div>
                <p style="color:#27ae60; font-weight:bold; font-size:1.1rem;">Mükemmel! Hiç yanlışın yok!</p>
                <p style="color:#555; font-size:0.9rem; margin-top:5px;">Tüm soruları doğru cevapladın.</p>
            </div>
        `;
    } else {
        const topicBlocks = Object.entries(groupedByTopic).map(([topic, records]) => {
            const items = records.map(record => {
                const statusIcon = record.status === 'wrong' ? '❌' : '🟠';
                const statusLabel = record.status === 'wrong'
                    ? `<span style="color:#e74c3c; font-size:0.75rem; font-weight:bold;">YANLIŞ</span>`
                    : `<span style="color:#f39c12; font-size:0.75rem; font-weight:bold;">CEVAP GÖSTERİLDİ</span>`;
                const correctAns = (record.item.a ? record.item.a[0] : '').toUpperCase();
                return `
                    <div style="background:#fff; border-radius:8px; padding:10px 12px; margin-bottom:8px; border-left:4px solid ${record.status === 'wrong' ? '#e74c3c' : '#f39c12'}; text-align:left;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                            <span style="font-size:0.85rem; color:#2c3e50; font-weight:600;">${statusIcon} ${record.item.q || 'Soru'}</span>
                            ${statusLabel}
                        </div>
                        <div style="font-size:0.8rem; color:#27ae60;">✓ Doğru cevap: <b>${correctAns}</b></div>
                        ${record.userAnswer ? `<div style="font-size:0.8rem; color:#e74c3c;">✗ Senin cevabın: <b>${record.userAnswer.toUpperCase()}</b></div>` : ''}
                        ${record.item.desc ? `<div style="font-size:0.75rem; color:#7f8c8d; margin-top:4px;">${record.item.desc}</div>` : ''}
                    </div>
                `;
            }).join('');

            return `
                <div style="margin-bottom:15px;">
                    <div style="font-size:0.8rem; font-weight:800; color:#8e44ad; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px; padding:4px 10px; background:#f5eef8; border-radius:6px; display:inline-block;">
                        📚 ${topic}
                    </div>
                    ${items}
                </div>
            `;
        }).join('');

        reviewHTML = `
            <div style="margin-top:15px;">
                <p style="font-size:0.85rem; color:#7f8c8d; margin-bottom:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">Tekrar Çalışman Gereken Sorular</p>
                ${topicBlocks}
            </div>
        `;
    }

    modal.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:8px;">📊</div>
            <h3 style="color:#2c3e50; margin-bottom:16px; font-size:1.2rem;">Quiz Sonuçları</h3>

            <div style="display:flex; justify-content:center; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
                <div style="background:#eafaf1; border-radius:10px; padding:12px 18px; min-width:80px;">
                    <div style="font-size:1.6rem; font-weight:800; color:#27ae60;">${correctCount}</div>
                    <div style="font-size:0.75rem; color:#7f8c8d; font-weight:600;">DOĞRU</div>
                </div>
                <div style="background:#fdedec; border-radius:10px; padding:12px 18px; min-width:80px;">
                    <div style="font-size:1.6rem; font-weight:800; color:#e74c3c;">${wrongCount}</div>
                    <div style="font-size:0.75rem; color:#7f8c8d; font-weight:600;">YANLIŞ</div>
                </div>
                <div style="background:#fef9e7; border-radius:10px; padding:12px 18px; min-width:80px;">
                    <div style="font-size:1.6rem; font-weight:800; color:#f39c12;">${shownCount}</div>
                    <div style="font-size:0.75rem; color:#7f8c8d; font-weight:600;">CEVAP GÖSTERİLDİ</div>
                </div>
            </div>

            ${reviewHTML}

            <button onclick="closeResultScreen()" style="
                background:#2c3e50; color:white; border:none; border-radius:8px;
                padding:12px 30px; font-weight:bold; cursor:pointer; font-size:1rem;
                margin-top:10px; width:100%;
            ">Ana Menüye Dön</button>
        </div>
    `;
}

function closeResultScreen() {
    resetHistoryQuiz();
    document.getElementById('modal-overlay').style.display = 'none';
    const modal = document.getElementById('question-modal');
    modal.style.display = 'none';
    modal.style.maxWidth = '';
    modal.style.maxHeight = '';
    modal.style.overflowY = '';
    // HTML'i orijinal haline döndür
    modal.innerHTML = `
        <div id="topic-label"></div>
        <div id="quiz-progress" style="display:none;"></div>
        <h3 id="q-title">Soru</h3>
        <input type="text" id="user-answer" placeholder="Cevabı yazın..." autocomplete="off">
        <div id="hint-area" style="display:none;">
            <button id="btn-hint" onclick="useHint()">
                <span class="hint-icon">💡</span>
                <span class="hint-text-label">İpucu Kullan</span>
                <span id="hint-token-badge">3</span>
            </button>
        </div>
        <button class="btn-check" onclick="checkAnswer()">KONTROL ET</button>
        <div class="btn-row-secondary">
            <button id="btn-prev-question" style="display:none;" class="btn-secondary btn-prev">◀ Önceki</button>
            <button class="btn-secondary btn-giveup" onclick="showAnswer()">Cevabı Göster</button>
            <button id="btn-finish" onclick="finishQuiz()" class="btn-secondary btn-finish" style="display:none;">✓ Bitir</button>
            <button class="btn-secondary btn-close" onclick="closeModal()">İptal</button>
        </div>
        <p id="feedback"></p>
    `;
    // Enter tuşu dinleyicisini yeniden bağla
    document.getElementById("user-answer").addEventListener("keypress", function (e) {
        if (e.key === "Enter") checkAnswer();
    });

    gameArea.style.display = 'none';
    menuArea.style.display = 'grid';
    renderHistorySelection();
    currentTitle.innerText = "Tarih Konu Seçimi";
}

function updateScore() {
    document.getElementById('score-correct').innerText = score.correct;
    document.getElementById('score-wrong').innerText = score.wrong;
    const shownEl = document.getElementById('score-shown');
    if (shownEl) shownEl.innerText = score.shown;
}

function resetScore() {
    score.correct = 0;
    score.wrong = 0;
    score.shown = 0;
    updateScore();
}

function resetHistoryQuiz() {
    currentQuiz = [];
    questionIndex = 0;
    quizHistory = [];
    historyViewIndex = -1;
    currentHistoryItem = null;
    quizFinished = false;
    hintTokens = 3;
    hintLevel = 0;
    resetScore();
}

document.getElementById("user-answer").addEventListener("keypress", function (e) {
    if (e.key === "Enter") checkAnswer();
});

function startQuiz(quizId) {
    currentQuiz = shuffleArray(appData.quizData[quizId]);
    questionIndex = 0;
    quizHistory = [];
    historyViewIndex = -1;

    document.getElementById('map').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';

    nextQuestion();
}

function nextQuestion() {
    // Quiz zaten bitti veya sıfırlandıysa hiçbir şey yapma
    if (quizFinished || currentQuiz.length === 0) return;

    if (questionIndex < currentQuiz.length) {
        const currentItem = currentQuiz[questionIndex];
        questionIndex++;
        openQuestion(currentItem);
        if (currentItem.q) {
            updateProgressBar();
            updateHistoryQuizUI(false);
        }
    } else {
        // Quiz bitti — modal zaten açık olabilir, direkt sonuç göster
        quizFinished = true;
        const wrongItems = quizHistory.filter(h => h.status === 'wrong');
        const shownItems = quizHistory.filter(h => h.status === 'shown');
        const correctCount = quizHistory.filter(h => h.status === 'correct').length;
        showResultScreen(correctCount, wrongItems.length, shownItems.length, [...wrongItems, ...shownItems]);
    }
}
