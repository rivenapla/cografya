/* ==============================================
   UYGULAMA MANTIĞI (DERSLER & KONULAR)
   ============================================== */

let map = null;
let currentMarkers = [];
let currentMountain = null;
let score = { correct: 0, wrong: 0 };

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

    currentQuiz = mixedQuestions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    quizHistory = [];
    historyViewIndex = -1;
    quizFinished = false;

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

    // Tarih sorusu ise butonları ve UI'yi ayarla
    if (item.q) {
        document.querySelector('.btn-check').style.display = 'block';
        document.querySelector('.btn-giveup').style.display = 'block';
        document.getElementById('btn-finish').style.display = 'block';
        document.querySelector('.btn-close').style.display = 'block';
        updateHistoryQuizUI(false);
    } else {
        // Coğrafya: tarih özel buton/elementleri gizle
        const prevBtn = document.getElementById('btn-prev-question');
        if (prevBtn) prevBtn.style.display = 'none';
        const progressEl = document.getElementById('quiz-progress');
        if (progressEl) progressEl.style.display = 'none';
        document.getElementById('btn-finish').style.display = 'none';
        document.querySelector('.btn-check').style.display = 'block';
        document.querySelector('.btn-giveup').style.display = 'block';
        document.querySelector('.btn-close').style.display = 'block';
    }

    input.focus();
}

// --- TARİH QUIZ UI (ilerleme + önceki soru butonu) ---
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
    input.readOnly = false;
    input.value = "";

    document.querySelector('.btn-check').style.display = 'block';
    document.querySelector('.btn-giveup').style.display = 'block';
    document.getElementById('btn-finish').style.display = 'block';
    document.querySelector('.btn-close').style.display = 'block';

    closeModal();
    nextQuestion();
}

// --- CEVAP KONTROL ---
function checkAnswer() {
    const userText = document.getElementById('user-answer').value.toLocaleLowerCase('tr').trim();
    const feedback = document.getElementById('feedback');

    const correctAnswers = currentMountain.a || currentMountain.names;

    if (correctAnswers.includes(userText)) {
        feedback.style.color = "#27ae60";
        feedback.innerHTML = "<b>DOĞRU!</b>";

        const pinElement = document.getElementById(`marker-${currentMountain.id}`);
        if (pinElement) pinElement.classList.add('correct');

        score.correct++;

        if (currentMountain.q) {
            // Geçmişte bu soruyu güncelle ya da ekle
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
        feedback.style.color = "#e74c3c";
        feedback.innerHTML = "<b>YANLIŞ!</b>";
        document.getElementById('question-modal').classList.add('apply-shake');
        setTimeout(() => document.getElementById('question-modal').classList.remove('apply-shake'), 500);
        score.wrong++;

        if (currentMountain.q) {
            const existingIdx = quizHistory.findIndex(h => h.item.id === currentMountain.id);
            if (existingIdx === -1) {
                quizHistory.push({ item: currentMountain, userAnswer: userText, status: 'wrong' });
            } else if (quizHistory[existingIdx].status !== 'correct') {
                quizHistory[existingIdx].userAnswer = userText;
                quizHistory[existingIdx].status = 'wrong';
            }
        }
    }
    updateScore();
}

function showAnswer() {
    const input = document.getElementById('user-answer');
    const feedback = document.getElementById('feedback');

    const correctAnswer = (currentMountain.a ? currentMountain.a[0] : currentMountain.names[0]).toUpperCase();

    input.value = correctAnswer;
    feedback.innerHTML = "Cevap gösterildi.";
    feedback.style.color = "#f39c12";

    const pinElement = document.getElementById(`marker-${currentMountain.id}`);
    if (pinElement) pinElement.classList.add('passive');

    score.wrong++;

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
    input.readOnly = false;

    document.querySelector('.btn-check').style.display = 'block';
    document.querySelector('.btn-giveup').style.display = 'block';
    document.getElementById('btn-finish').style.display = 'block';
    document.querySelector('.btn-close').style.display = 'block';

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

    closeModal();
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
        <button id="btn-prev-question" style="display:none;" class="btn-prev">◀ Önceki Soru</button>
        <button class="btn-check" onclick="checkAnswer()">KONTROL ET</button>
        <button class="btn-giveup" onclick="showAnswer()">CEVABI GÖSTER</button>
        <button id="btn-finish" onclick="finishQuiz()" class="btn-finish" style="display:none;">✓ Bitir</button>
        <button class="btn-close" onclick="closeModal()">İPTAL</button>
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
}

function resetScore() {
    score.correct = 0;
    score.wrong = 0;
    updateScore();
}

function resetHistoryQuiz() {
    currentQuiz = [];
    questionIndex = 0;
    quizHistory = [];
    historyViewIndex = -1;
    currentHistoryItem = null;
    quizFinished = false;
    resetScore();
}

document.getElementById("user-answer").addEventListener("keypress", function (e) {
    if (e.key === "Enter") checkAnswer();
});

function startQuiz(quizId) {
    currentQuiz = [...appData.quizData[quizId]].sort(() => Math.random() - 0.5);
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
            updateHistoryQuizUI(false);
        }
    } else {
        // Quiz bitti — otomatik sonuç göster
        quizFinished = true;
        const wrongItems = quizHistory.filter(h => h.status === 'wrong');
        const shownItems = quizHistory.filter(h => h.status === 'shown');
        const correctCount = quizHistory.filter(h => h.status === 'correct').length;
        showResultScreen(correctCount, wrongItems.length, shownItems.length, [...wrongItems, ...shownItems]);
    }
}
