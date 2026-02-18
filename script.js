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

// --- VERİ YAPISI (HIYERARŞİK MENÜ) ---


// Başlat (Dersler Menüsü ile)
renderMenu(appData.main);

function renderMenu(items) {
    menuArea.innerHTML = "";
    menuArea.style.display = 'grid';
    gameArea.style.display = 'none';
    
    // Geri Butonu Kontrolü
    const currentMenuId = findMenuIdByItems(items);
    const parentId = findParentMenuId(currentMenuId);

    if (currentMenuId === "main") {
        backBtn.style.display = 'none';
        currentTitle.innerText = "Dersler";
    } else {
        backBtn.style.display = 'inline-block';
        backBtn.innerText = "← Geri Dön";
        // Geri butonu bir üst menüye gider
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
        
        // Eğer Tarih gibi boş bir bölümse tıklamayı engelle
        if(item.type !== "none") {
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
        renderHistorySelection(); // Tarih için özel seçim ekranı
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
        if (topic) selectedIcons.push(topic.icon); // Seçilen ikonları topla
        
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

    // --- Efekt Başlatma ---
    const overlay = document.getElementById('shuffle-overlay');
    const iconEl = document.getElementById('dynamic-shuffle-icon');
    overlay.style.display = 'flex';

    // Simgeleri hızla değiştir (Slot makinesi efekti)
    let iconIdx = 0;
    const iconInterval = setInterval(() => {
        iconEl.innerText = selectedIcons[iconIdx % selectedIcons.length];
        iconIdx++;
    }, 70); // Her 100ms'de bir simge değişir

    // 1.6 saniye sonra temizle ve başlat
    setTimeout(() => {
        clearInterval(iconInterval); // Döngüyü durdur
        overlay.style.display = 'none';
        document.getElementById('map').style.display = 'none';
        document.getElementById('game-area').style.display = 'block';
        nextQuestion();
    }, 1600);
}

// --- YARDIMCI FONKSİYONLAR (Hiyerarşi Yönetimi) ---

// Verilen item listesinin (array) hangi ID'ye ait olduğunu bulur
function findMenuIdByItems(items) {
    for (let key in appData) {
        if (appData[key] === items) return key;
    }
    return "main";
}

// Bir ID'nin (menü veya oyun) ebeveynini (parent) bulur
function findParentMenuId(childId) {
    if (childId === "main") return null;
    
    for (let parentKey in appData) {
        if (Array.isArray(appData[parentKey])) {
            // Eğer parentKey'in içindeki objelerden birinin id'si childId ise
            if (appData[parentKey].some(item => item.id === childId)) {
                return parentKey;
            }
        }
    }
    return "main"; // Bulamazsa ana menüye dönsün
}

function updateTitleForMenu(menuId) {
    // Menü ID'sine göre başlığı bul (Örn: 'cografya' -> "Coğrafya")
    // Bu fonksiyon sadece geri dönerken başlığı düzeltmek için
    const parentId = findParentMenuId(menuId);
    if(parentId && appData[parentId]) {
        const menuObj = appData[parentId].find(item => item.id === menuId);
        if(menuObj) currentTitle.innerText = menuObj.title;
    } else {
        currentTitle.innerText = "Dersler";
    }
}

// --- HARİTA BAŞLATMA ---
function startGame(gameId, title, parentId) {
    resetScore(); 

    menuArea.style.display = 'none';
    gameArea.style.display = 'block';
    currentTitle.innerText = title;
    
    document.getElementById('map').style.display = 'block';

    // Haritayı temizle ve yeniden oluştur
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

    if (map !== null) {
        map.remove();
        map = null;
    }

    const startZoom = window.innerWidth < 768 ? 5 : 6;
    map = L.map('map').setView([39.0, 35.0], startZoom);

    // Uydu Görünümü
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    }).addTo(map);

    placePins(gameId);
}

function placePins(gameId) {
    const pinsData = appData.gameData[gameId];
    currentMarkers = [];
    if(!pinsData) return;

    pinsData.forEach(item => {
        // Tipe göre tasarım belirle
        let pinColor = '#3498db'; // Varsayılan mavi
        let pinIcon = ''; // Varsayılan boş
        let pinClass = 'pin-body';

        // Eğer maden verisi ise ve tipi varsa
        if (item.type === 'cikarim') {
            pinColor = '#7f8c8d'; // Gri/Füme (Hammadde rengi)
            pinIcon = '⛏️'; // Kazma ikonu
        } else if (item.type === 'isleme') {
            pinColor = '#e74c3c'; // Kırmızı (Fabrika rengi)
            pinIcon = '🏭'; // Fabrika ikonu
            pinClass = 'pin-body factory-pin'; // Fabrikalar için ekstra stil
        }

        // HTML oluştur
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

function openQuestion(item, markerObject = null) {
    currentMountain = item;
    currentMountain.markerRef = markerObject;
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('question-modal').style.display = 'block';
    
    // Konu Başlığını Yazdır
    const topicLabel = document.getElementById('topic-label');
    if (topicLabel) { // Güvenlik kontrolü
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
    document.getElementById('feedback').innerText = "";
    input.focus();
}

function checkAnswer() {
    const userText = document.getElementById('user-answer').value.toLocaleLowerCase('tr').trim();
    const feedback = document.getElementById('feedback');
    
    // Hibrit kontrol: Tarih ise 'a', Coğrafya ise 'names' dizisine bak
    const correctAnswers = currentMountain.a || currentMountain.names;

    if (correctAnswers.includes(userText)) {
        feedback.style.color = "#27ae60";
        feedback.innerHTML = "<b>DOĞRU!</b>";
        
        const pinElement = document.getElementById(`marker-${currentMountain.id}`);
        if(pinElement) pinElement.classList.add('correct');
        
        score.correct++;
        
        if (currentMountain.q) { // Tarih sorusuysa otomatik geçiş
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
    if(pinElement) pinElement.classList.add('passive');
    
    score.wrong++;
    if(currentMountain.desc) {
        feedback.innerHTML += `<br><span style="font-size:0.9rem; color:#555;"> ${currentMountain.desc}</span>`;
    }
    updateScore();
    
    if (currentMountain.q) { // Tarih sorusuysa cevabı gösterip geç
        setTimeout(() => { closeModal(); nextQuestion(); }, 2000);
    }
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('question-modal').style.display = 'none';
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

document.getElementById("user-answer").addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkAnswer();
});

let currentQuiz = [];
let questionIndex = 0;

function startQuiz(quizId) {
    // Soruları karıştır (Shuffle)
    currentQuiz = [...appData.quizData[quizId]].sort(() => Math.random() - 0.5);
    questionIndex = 0;

    // Haritayı gizle, soru ekranını göster
    document.getElementById('map').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    
    nextQuestion();
}

function nextQuestion() {
    if (questionIndex < currentQuiz.length) {
        const currentItem = currentQuiz[questionIndex];
        openQuestion(currentItem); 
        questionIndex++; // Bu sayaç sayesinde sorular tekrar etmez
    } else {
        alert("Bölüm bitti! Harika iş çıkardın.");
        // Burada istersen renderMenu(appData.main) diyerek ana menüye dönebilirsin
    }
}