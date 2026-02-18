const appData = {
    // 1. SEVİYE: DERSLER (ANA MENÜ)
    main: [
        { id: "cografya", title: "Coğrafya", icon: "🌍", desc: "Yer Şekilleri, Madenler, Tarım", type: "menu" },
        { id: "tarih", title: "Tarih", icon: "📜", desc: "İlk Uygarlıklar, Osmanlı, Çağdaş", type: "menu" }
    ],

    // 2. SEVİYE: COĞRAFYA MENÜSÜ
    cografya: [
        { id: "yersekilleri", title: "Yer Şekilleri", icon: "🏔️", desc: "Dağ, Ova, Plato, Göl, Akarsu", type: "menu" },
        { id: "madenler", title: "Madenler & Enerji", icon: "⛏️", desc: "Demir, Bakır, Bor, Krom...", type: "menu" },
        { id: "enerji", title: "Enerji Kaynakları", icon: "⚡", desc: "Kömür, Petrol, Rüzgar, Güneş", type: "menu" }
    ],

    tarih: [
        { id: "islamiyet_oncesi", title: "İslamiyet Öncesi Türk Tarihi", icon: "🏹", desc: "Kültür Merkezleri, Hunlar, Göktürkler, Uygurlar", type: "quiz" },
        { id: "ilk_turk_islam", title: "İlk Türk-İslam Devletleri", icon: "🕌", desc: "Karahanlı, Gazneli, Selçuklu ve Kültür Medeniyet", type: "quiz" },
        { id: "turkiye_selcuklu", title: "Türkiye Selçuklu Devleti", icon: "🏰", desc: "Anadolu Selçuklu, Beylikler ve Kültür-Medeniyet", type: "quiz" },
        { id: "osmanli_kultur", title: "Osmanlı Kültür ve Medeniyeti", icon: "🕌", desc: "Saray, Ordu, Toprak Sistemi, Eğitim ve Hukuk", type: "quiz" },
        { id: "osmanli_kurulus", title: "Osmanlı Kuruluş Dönemi", icon: "🏹", desc: "Beylikten Devlete Geçiş Siyaseti", type: "quiz" },
        { id: "osmanli_duraklama_gerileme", title: "Osmanlı Duraklama ve Gerileme", icon: "📉", desc: "XVII. ve XVIII. Yüzyıl Siyasi Olaylar ve Islahatlar", type: "quiz" },
        { id: "osmanli_yukselme", title: "Osmanlı Yükselme Dönemi", icon: "🚀", desc: "Dünya Gücü Osmanlı Siyaseti", type: "quiz" },
        { id: "osmanli_dagilma", title: "Osmanlı Dağılma Dönemi", icon: "📉", desc: "19. Yüzyıl Siyasi Olaylar ve Islahatlar", type: "quiz" },
        { id: "osmanli_20yy", title: "20. Yüzyılda Osmanlı", icon: "⚔️" },
        { id: "milli_mucadele_hazirlik", title: "Milli Mücadele Hazırlık Dönemi", icon: "🇹🇷", desc: "Genelgeler, Kongreler ve Cemiyetler", type: "quiz" },
        { id: "milli_mucadele_muharebeler", title: "Milli Mücadele Muharebeler Dönemi", icon: "⚔️", desc: "Cepheler, Mudanya ve Lozan Antlaşması", type: "quiz" },
        { id: "ataturk_inkilaplari", title: "Atatürk İnkılapları ve İç Politika", icon: "🏛️", desc: "Cumhuriyetin İlanı, Devrimler ve Siyasi Partiler", type: "quiz" },
        { id: "ataturk_hayati_dis_politika", title: "Atatürk Hayatı ve Dış Politika", icon: "👤", desc: "Atatürk'ün Hayatı, İlkeleri ve Türk Dış Politikası", type: "quiz" },
        { id: "dunya_savasi", title: "20. YY Dünya ve II. Dünya Savaşı", icon: "🌍", desc: "Dünya Savaşları ve Türkiye'nin Savaş Politikası", type: "quiz" },
        { id: "soguk_savas_yumusama", title: "Soğuk Savaş ve Yumuşama Dönemi", icon: "❄️", desc: "Doğu-Batı Blokları, Kıbrıs Sorunu ve Türk Siyaseti", type: "quiz" },
        { id: "kuresellesen_dunya", title: "Küreselleşen Dünya", icon: "🌐", desc: "SSCB’nin Dağılması, Türk Cumhuriyetleri ve Güncel Gelişmeler", type: "quiz" }
    ],
    // js.txt içindeki appData'nın en altına quizData olarak ekle
    quizData: {

        islamiyet_oncesi: [
            { q: "Ziya Gökalp, Türk adını hangi anlamda kullanmıştır?", a: ["töreli", "kanun sahibi", "nizam sahibi"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Arminius Vambery'e göre Türk isminin anlamı nedir?", a: ["türemek", "çoğalmak"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Gerhard Doerfer'e göre Türk isminin anlamı ne demektir?", a: ["devlete bağlı halk"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kaşgarlı Mahmut'un 'Divanü Lügati't-Türk' eserine göre Türk ismi nedir?", a: ["olgunluk çağı"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Çin kaynaklarına göre 'Türk' adının anlamı nedir?", a: ["miğfer"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk adına ilk defa hangi devletin kaynaklarında rastlanılmıştır?", a: ["çin"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk adı coğrafi bir yer olarak ilk kez hangi kaynaklarda geçer?", a: ["bizans imparatorluğu", "bizans"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Orta Asya için 'Büyük Türkiye' tanımını kullanan ünlü seyyah kimdir?", a: ["marco polo"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklerin ilk yurdu olan Orta Asya'yı batısından çevreleyen deniz nedir?", a: ["hazar denizi"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Orta Asya'nın en eski kültür merkezi neresidir?", a: ["anav"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklere ait en eski kültür bölgesi olarak kabul edilen yer neresidir?", a: ["afanesyevo"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Afanesyevo kültüründen daha geniş alana yayılan kültür hangisidir?", a: ["andronova kültürü"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Dünyanın pek çok bölgesine göre demiri daha erken işleyen kültür hangisidir?", a: ["karasuk kültürü"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk kültürlerinin sentezi ve Karasuk'un takipçisi olan kültür hangisidir?", a: ["tagar kültürü"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklerin Orta Asya'dan göç etmesinde hangi devletlerin baskısı etkili olmuştur?", a: ["çin", "kitan", "moğollar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk göçlerinin Türk tarihi açısından en önemli sonucu nedir?", a: ["türk tarihinin bir bütün halinde incelenmesi zorlaşmıştır"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Orta Asya'da kurulan ilk Türk devleti hangisidir?", a: ["asya hun", "büyük hun"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Asya Hun Devleti'nen kurucusu kimdir?", a: ["teoman", "tu-man"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Yirmi altı boyu ilk kez tek bayrak altında toplayan hükümdar kimdir?", a: ["mete han"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Bozkırın Kuyumcuları olarak bilinen Türk topluluğu hangisidir?", a: ["iskitler", "sakalar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Alp Er Tunga, İran kaynaklarında hangi adla anılmaktadır?", a: ["afrasyab"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Vatan toprağının kutsallığını vurgulayan ilk Asya Hun hükümdarı kimdir?", a: ["mete han"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklere başkentlik yapan 'Toprak Ana' şehri neresidir?", a: ["ötüken"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Mete Han'ın aldığı ünvan nedir?", a: ["şanyü"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Çin ile yapılan Paiteng Savaşı'nı kazanan Asya Hun hükümdarı kimdir?", a: ["mete han"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Orta Asya'da en uzun süre varlığını sürdüren Türk devleti hangisidir?", a: ["asya hun devleti"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Hunlar batıya doğru kimin önderliğinde göç etmiştir?", a: ["balamir"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kilisenin sorgulanamadığı düşünce sistemine ne ad verilir?", a: ["skolastik düşünce"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Feodalite rejiminde hiçbir hakkı olmayan kölelere ne ad verilir?", a: ["serfler"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türkler Anadolu'ya ilk defa hangi lider döneminde gelmiştir?", a: ["uldız"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İstiklâli feda etmeyi utanç verici bulan Hun hükümdarı kimdir?", a: ["çiçi"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Nibelungen Destanı'nda 'Etzel' olarak anılan Hun hükümdarı kimdir?", a: ["attila"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Attila'ya verilen ünlü ünvan nedir?", a: ["tanrı'nın kırbacı"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Avrupa'yı üzengi ile tanıştıran Türk topluluğu hangisidir?", a: ["avarlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İstanbul'u kuşatan ilk Türk devleti hangisidir?", a: ["avarlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Malazgirt Savaşı'nda taraf değiştiren Türk toplulukları hangileridir?", a: ["uzlar ve peçenekler"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İtil Bulgarları kimin zamanında İslamiyet'i kabul etmiştir?", a: ["ilteber almış han"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İtil Bulgarlarına dair gözlemleri 'Rihle' eserinde yazan kimdir?", a: ["ibn-i fadlan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk tarihinde 'Çar' ünvanını ilk defa kullanan devlet hangisidir?", a: ["tuna bulgarları"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Doğu Avrupa ve İslam dünyası arasındaki ticaret yoluna ne denir?", a: ["kürk yolu"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Museviliği kabul eden Türk devleti hangisidir?", a: ["hazarlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Ordusunda ücretli asker bulunduran ilk Türk devleti hangisidir?", a: ["hazarlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Hazarların sağladığı barış ve huzur dönemine ne ad verilmiştir?", a: ["pax hazaria"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kıpçaklardan kalan 'Codex Cumanicus' lügati hangi dillerdedir?", a: ["türkçe farsça latince"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Oğuz-Kıpçak mücadeleleri hangi hikâyelere konu olmuştur?", a: ["dede korkut hikâyeleri"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk adıyla devlet kuran ilk hükümdar kimdir?", a: ["bumin kağan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Bizans İmparatorluğu'na gönderilen ilk Türk elçisinin adı nedir?", a: ["maniakh"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklerin Bismarck'ı olarak anılan ünlü devlet adamı kimdir?", a: ["vezir tonyukuk"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Çin egemenliğine karşı ayaklanan ilk Türk lider kimdir?", a: ["kürşat"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Derleyen, toplayan manasına gelen İlteriş ünvanlı lider kimdir?", a: ["kutluk kağan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Uygur Devleti'nin kurucusu kimdir?", a: ["kutluk bilge kül kağan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Uygurlar hangi hükümdar zamanında Manihaizm'e geçmiştir?", a: ["bögü kağan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Tarihte ilk defa çiçek aşısını bulan devlet hangisidir?", a: ["uygurlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Uygurlar tarafından kullanılan kağıt paraya ne ad verilir?", a: ["çav"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İlk Türk devletlerinde duvar resmi yapan sanatçılara ne denir?", a: ["bedizci"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Duvara yapılan resim sanatına ne ad verilir?", a: ["fresko"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Harfli ve hareketli matbaa tekniğini ilk kullanan devlet hangisidir?", a: ["uygurlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Örgün eğitim sistemini ilk defa kurumsallaştıran devlet hangisidir?", a: ["uygurlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Dünya tarihinde milletlerarası yarışmalar düzenleyen devlet hangisidir?", a: ["kırgızlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Bilinen ilk kütüphaneyi kuran Türk devleti hangisidir?", a: ["uygurlar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "İslamiyet'i benimseyen ilk Türk boyu hangisidir?", a: ["karluklar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kendi adına para bastıran ilk Türk hükümdarı kimdir?", a: ["baga tarkan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Sasani Devleti'ndeki Mazdek isyanını bastıran Türk devleti hangisidir?", a: ["akhunlar", "eftalitler"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Hükümdarın halkı doyurup giydirmesi hangi devlet anlayışını kanıtlar?", a: ["sosyal devlet"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Uygur Devleti'nde kut yetkisi hangi aileye aittir?", a: ["yağlakar"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Hedefe varıldığında yeniden hedef belirleme siyasetine ne denir?", a: ["kızıl elma"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Gök Tanrı'nın verdiği iktisadi güce ne ad verilir?", a: ["ülüş"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kurultaya katılan üyelere ne ad verilir?", a: ["toygun"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Kurultayın diğer adları nelerdir?", a: ["toy", "kengeş"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Sosyal yapının en küçük birimi olan aileye ne ad verilir?", a: ["oguş"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Milletlerin birleşmesiyle oluşan en büyük siyasi yapıya ne denir?", a: ["il", "devlet"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk töresinin değişmez hükmü 'Tüzlük' ne anlama gelir?", a: ["eşitlik"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Devlet ile vatandaş arasındaki yazısız anlaşmaya ne denir?", a: ["tüz"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Yüksek mahkemeye (Yargu) kim başkanlık eder?", a: ["kağan"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Keşif birliğine ne ad verilir?", a: ["yelme"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklerin ünlü savaş taktiği nedir?", a: ["turan taktiği", "hilal taktiği", "sahte ricat"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Cenaze törenine ne ad verilir?", a: ["yuğ"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Mezar taşına ne ad verilir?", a: ["balbal", "bengütaş"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Cennete ve cehenneme ne ad verilir?", a: ["uçmağ", "tamu"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Ahiret inancının en büyük göstergesi nedir?", a: ["kurgan", "eşyalarla gömülme"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türk edebiyatının ilk yazılı örneği nedir?", a: ["orhun abideleri"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Abideleri ilk okuyan bilim insanı kimdir?", a: ["wilhelm thomsen"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Ağıta ne ad verilir?", a: ["sagu"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Atasözüne ne ad verilir?", a: ["sav"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Dünyanın en eski halısı kabul edilen halı hangisidir?", a: ["pazırık halısı"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Altın Elbiseli Adam zırhı hangi kurgandan çıkarılmıştır?", a: ["esik kurganı"], topicTitle: "İslamiyet Öncesi Türk Tarihi" },
            { q: "Türklerin İslamiyet'e geçişi hangi olayla başlamıştır?", a: ["talas savaşı"], topicTitle: "İslamiyet Öncesi Türk Tarihi" }
        ],

        ilk_turk_islam: [
            { q: "Talas Savaşı'nın diğer adı nedir?", a: ["atlık savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İslamiyet'i devlet dini olarak kabul eden ilk Türk devleti hangisidir?", a: ["itil bulgarları"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İlk Türk devletlerine ev sahipliği yapan Kaşgar şehrine verilen ünvan nedir?", a: ["ışıldayan inci"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlı Devleti'nin kurucusu kimdir?", a: ["kül bilge kadir han"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlılar hangi hükümdar zamanında İslamiyet'e geçmiştir?", a: ["satuk buğra han"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Satuk Buğra Han İslamiyet'i kabul ettikten sonra hangi ismi almıştır?", a: ["abdülkerim"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İlk Türk-İslam medresesi olan Semerkant Medresesi hangi hükümdar döneminde açılmıştır?", a: ["tamgaç buğra han"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Atlık Savaşı hangi devletler arasında yapılmıştır?", a: ["çin ve abbasiler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Emevilerin Arap olmayan Müslümanları ikinci sınıf vatandaş görme politikasına ne denir?", a: ["mevali"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Orta Asya'da kurulan ve İslamiyet'i resmi din kabul eden ilk büyük Türk devleti?", a: ["karahanlılar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlı Devleti'nin oluşumunda etkili olan boylar hangileridir?", a: ["karluk yağma tuhsi çiğil"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Türk tarihinde ilk defa burslu öğrencilik sistemini başlatan devlet hangisidir?", a: ["karahanlılar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Türk tarihinin ilk düzenli posta teşkilatını kuran devlet hangisidir?", a: ["karahanlılar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlılarda halk ve saray ilişkilerini düzenleyen görevliye ne ad verilir?", a: ["tayangu"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gulam askerlerinin yılda dört defa aldıkları maaşa ne denir?", a: ["biştegani"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlılarda sınır boylarında askeri ve sosyal amaçlı kurulan yapılara ne denir?", a: ["ribat"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneliler Devleti'nin diğer adı nedir?", a: ["yeminiler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneliler Devleti'nin kurucusu kimdir?", a: ["alp tigin"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneli hükümdarlarının 'Han, Hakan' gibi ünvanlar kullanması neyin göstergesidir?", a: ["ulusçuluk"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneli Devleti'nin en önemli hükümdarı kimdir?", a: ["gazneli mahmut"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Sultan ünvanını resmi olarak kullanan ilk Türk hükümdarı kimdir?", a: ["gazneli mahmut"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Padişah ünvanını kullanan ilk Türk hükümdarı kimdir?", a: ["alp tigin"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hindistan seferleri sonucu Gazneli Mahmut'a verilen ünvan nedir?", a: ["put kırıcı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneli Mahmut'un 'Sarayımın en değerli hazinesidir' dediği bilim insanı?", a: ["biruni"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneli Devleti'nin kuruluşunu kesinleştiren ve BSG'yi kuran 1040 savaşı nedir?", a: ["dandanakan savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Gazneli Devleti'ne son veren Afgan yerli halkı kimdir?", a: ["gurlular"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Büyük Selçuklu Devleti'nin (BSG) resmi kurucusu kimdir?", a: ["tuğrul bey"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Türkler ile Bizans arasındaki ilk savaş hangisidir?", a: ["pasinler savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Abbasi Halifesi tarafından Tuğrul Bey'e verilen ünvan nedir?", a: ["doğunun ve batının hükümdarı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "BSG en parlak dönemini hangi hükümdar zamanında yaşamıştır?", a: ["sultan melik şah"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Ani Kalesi'ni fethettiği için Alp Arslan'a verilen ünvan nedir?", a: ["ebu'l feth"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Anadolu'nun kapısını Türklere açan savaş hangisidir?", a: ["malazgirt savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Malazgirt Savaşı'nda esir düşen Bizans İmparatoru kimdir?", a: ["romen diyojen"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Malazgirt Savaşı'nın diğer adı nedir?", a: ["yurt açan savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Bâtınilik (Haşhaşilik) hareketinin lideri kimdir?", a: ["hasan sabbah"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Büyük Selçuklu Devleti'nin son hükümdarı kimdir?", a: ["sultan sencer"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "BSG'nin yıkılmasına neden olan 1141 tarihli savaş hangisidir?", a: ["katvan savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Tolunoğulları döneminde kurulan hastanelere ne ad verilir?", a: ["maristan"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hicaz (Kutsal Topraklar) bölgesine egemen olan ilk Türk devleti?", a: ["ihşidiler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İhşidiler Devleti'nin kurucusu kimdir?", a: ["muhammed bin togaç"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Eyyübiler hangi savaş ile Kudüs'ü Haçlılardan geri almıştır?", a: ["hittin savaşı"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Mısır'da kurulan ilk Türk devleti hangisidir?", a: ["tolunoğulları"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Veraset anlayışı (hükümdarlık sistemi) diğerlerinden farklı olan devlet?", a: ["memlukler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Moğolları dünya tarihinde ilk kez mağlup eden devlet hangisidir?", a: ["memlukler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Memluk Devleti'nin diğer ismi nedir?", a: ["devlet-i türkiyye"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Memluk Devleti'ne hangi savaşlar sonucu Osmanlı son vermiştir?", a: ["mercidabık ve ridaniye"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Anadolu'da kurulan ilk medrese hangisidir?", a: ["yağıbasan medresesi"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Danişmentliler tarafından kurulan Yağıbasan Medresesi nerededir?", a: ["tokat niksar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Erzurum'da kurulan Saltuklulardan kalan 'Üç Kümbetler' nerededir?", a: ["erzurum"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Mengücekliler tarafından yapılan ve UNESCO korumasında olan eser?", a: ["divriği ulu camii"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Sibernetik bilimin kurucusu El Cezeri hangi beylikte çalışmıştır?", a: ["artuklular"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İlk Türk denizcisi kabul edilen bey kimdir?", a: ["çaka bey"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Kur'an-ı Kerim'i Türkçeye çeviren devlet hangisidir?", a: ["akkoyunlular"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Diyarbakır-Batman arasındaki Malabadi Köprüsü hangi beyliğe aittir?", a: ["artuklular"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Akkoyunlu hükümdarı Uzun Hasan'a Avrupalılar ne ünvanı vermiştir?", a: ["küçük türk"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Dede Korkut Hikâyelerini yazılı hale getiren devlet hangisidir?", a: ["akkoyunlular"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hindistan'da bulunan ünlü Taç Mahal hangi devlet döneminde yapılmıştır?", a: ["babürler"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Babür Şah'ın hayatını anlatan eserin adı nedir?", a: ["babürname", "vekayi"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Çağatay Türkçesinin en büyük şairi Ali Şir Nevai hangi devlette yetişmiştir?", a: ["timur devleti"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Cengiz Han yasalarına ne ad verilir?", a: ["yasaname-i büzürg"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İlk Müslüman Türk devletlerinde bayrak taşıyan görevliye ne denir?", a: ["alemdar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hükümdarın temizlik işlerinden sorumlu saray görevlisi?", a: ["taştdar", "abdar"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hükümdarlık sembolü olan ayetli şemsiyeye ne denir?", a: ["cetr"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Karahanlı Devleti'nde vezirlere ne isim verilirdi?", a: ["yuğruş"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Askeri vali olan devlet görevlilerine ne denir?", a: ["şihne"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Osmanlı'daki Defterdar'ın Türk-İslam devletlerindeki karşılığı?", a: ["müstevfi"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Halifenin hükümdarlığı onayladığı belgeye ne denir?", a: ["menşur"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hükümdarın olmadığı zamanlarda toplanan divan ve görevlisi?", a: ["niyabet-i saltanat", "naib"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Posta ve haberleşme işlerinden sorumlu divan hangisidir?", a: ["divan-ı berid"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Halkın şikayetlerinin dinlendiği yüksek mahkeme hangisidir?", a: ["divan-ı mezalim"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Şeri mahkemelerin başındaki kişiye (başkadı) ne denir?", a: ["kadülkudat"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Askeri davalara bakan görevli kimdir?", a: ["kadıleşker"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Ordunun temel taşı olan toprak sistemi askerlerine ne denir?", a: ["ikta askerleri"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Tek bir cins malın satıldığı ticaret merkezlerine ne denir?", a: ["kapan"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Türk-İslam mimarisindeki anıt mezarlara ne ad verilir?", a: ["kümbet"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İkta askerlerinin savaş zamanı aldığı isim nedir?", a: ["cebelu"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Dünyanın ilk üniversitesi sayılan medrese hangisidir?", a: ["nizamiye medresesi"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İslam'ın Roma'sı olarak bilinen şehir hangisidir?", a: ["buhara"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Şehirlerin Şahı ünvanı ile bilinen yer neresidir?", a: ["semerkant"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Minyatür sanatı ile uğraşan kişilere ne denir?", a: ["musavvir", "nakkaş"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Kitap süsleme sanatı olan tezhiple uğraşana ne denir?", a: ["müzehhip"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Farabi'ye hangi ünvan verilmiştir?", a: ["muallim-i sani"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Hüccet-ül İslam (İslam'ın ispatlayıcısı) ünvanlı alim kimdir?", a: ["gazali"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Modern kimyanın kurucusu kabul edilen bilim insanı?", a: ["cabir bin hayyan"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Optik alanında Kitabü'l Menazir eserini yazan kimdir?", a: ["ibnü'l heysem"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Cebir alanında ilk defa eser yazan bilgin kimdir?", a: ["harezmi"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "İlk Türk mutasavvıfı Ahmet Yesevi'nin eseri nedir?", a: ["divan-ı hikmet"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Yusuf Has Hacib'in Karahanlı hükümdarına sunduğu eser?", a: ["kutadgu bilig"], topicTitle: "İlk Türk-İslam Devletleri" },
            { q: "Pendname adlı eserin yazarı olan Gazneli hükümdarı?", a: ["sebük tegin"], topicTitle: "İlk Türk-İslam Devletleri" }
        ],

        turkiye_selcuklu: [
            { q: "Moğolların Anadolu'yu istilası sonrası uç Türkmenleri tarafından kurulan en büyük beylik hangisidir?", a: ["karamanoğulları beyliği"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Anadolu'da resmi dili Türkçe olan ilk beylik hangisidir?", a: ["karamanoğulları"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Balıkesir ve Çanakkale'de kurulan, Osmanlı Devleti'ne ilk bağlanan denizci beylik hangisidir?", a: ["karesioğulları beyliği"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Osmanlı Devleti'ne en son katılan (1515 Turnadağ) beylik hangisidir?", a: ["dulkadiroğulları beyliği"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Kütahya çevresinde kurulan ve Osmanlı'ya vasiyet/çeyiz yoluyla bağlanan beylik hangisidir?", a: ["germiyanoğulları"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Osmanlı Devleti'nin topraklarını para karşılığında satın aldığı beylik hangisidir?", a: ["hamitoğulları"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Aydınoğulları Devleti'nde yaşayan ve 'Anadolu'nun İbn-i Sina'sı' olarak bilinen bilim insanı kimdir?", a: ["hacı paşa"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Batı Anadolu'da merkezi Manisa olan ve denizcilikle uğraşan beylik hangisidir?", a: ["saruhanoğulları beyliği"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Kastamonu, Sinop çevresinde kurulan, diğer adı İsfendiyaroğulları olan beylik hangisidir?", a: ["candaroğulları"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Anadolu Selçuklu Devleti'nde donanmadan sorumlu komutana ne isim verilir?", a: ["reisül bahr", "meliküs sevahil"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Şehirlerde asayişi sağlayan ve modern Jandarmanın öncüsü sayılan güvenlik birimi nedir?", a: ["şurta teşkilatı"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Türkiye Selçuklu Devleti'nde ikta topraklarının dağıtımından sorumlu divan hangisidir?", a: ["divan-ı pervane"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Gazel, terci ve rubailerden oluşan 'Divan-ı Kebir' adlı eser hangi mutasavvıfa aittir?", a: ["mevlanâ"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Hacı Bektaş-ı Veli'nin Bektaşilik felsefesini anlattığı en önemli eseri nedir?", a: ["makalat"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Konya'da Karatay Medresesi'ni yaptıran ve üç şehzadeyi aynı anda tahta çıkaran devlet adamı kimdir?", a: ["celalettin karatay"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Karamanoğlu Mehmet Bey ile ittifak kuran ve Konya'da adına hutbe okutan 'Cimri' lakaplı kişi kimdir?", a: ["alaaddin siyavuş"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Aydınoğulları Beyliği'nin denizcilikteki en önemli lideri kimdir?", a: ["gazi umur bey"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "XIII. yüzyılda yaşamış, 'Risalet-ün Nushiyye' adlı eserin sahibi ünlü halk şairi kimdir?", a: ["yunus emre"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Aşık Paşa'nın en önemli mesnevi türündeki eseri hangisidir?", a: ["garipname"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "'Vahdet-i Vücud' felsefesini savunan 'Şeyh Ekber' lakaplı İslam düşünürü kimdir?", a: ["muhyiddin ibn-ül arabi"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Gıyasettin Keyhüsrev'e sunulan 'Selçuklu Tarihi' adlı eserin yazarı kimdir?", a: ["ravendi"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Divan edebiyatının kurucusu kabul edilen ve 'Selçuklu Şahnamesi'ni yazan şair kimdir?", a: ["hoca dehhani"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "'Mantıkut Tayr' eserini Türkçeye çeviren ünlü tasavvuf edebiyatçısı kimdir?", a: ["gülşehri"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Ahilikte mezun olan kalfaya bağlanan kuşağa ne isim verilir?", a: ["şed"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Ahilik teşkilatında uygulanan dengeli fiyat belirleme sistemine ne denir?", a: ["narh sistemi"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Türkiye Selçuklu Devleti'nde esnaf kuruluşlarının başkanlarına ne denir?", a: ["ahi"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Ahilik teşkilatının Anadolu'daki başlıca merkezleri nerelerdir?", a: ["kırşehir konya kayseri"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Aksaray'da bulunan devasa Sultan Hanı hangi devlete aittir?", a: ["türkiye selçuklu devleti"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Erzurum'daki ünlü Yakutiye Medresesi hangi devlet tarafından inşa edilmiştir?", a: ["ilhanlılar"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Türkiye Selçuklu Devleti'nde inşa edilen ilk kervansaray hangisidir?", a: ["alayhan"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Ahilik teşkilatının manevi önderi kabul edilen kişi kimdir?", a: ["hacı bektaş-ı veli"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Dünyanın ilk kadın teşkilatı olan Bacıyan-ı Rum'un kurucusu kimdir?", a: ["fatma bacı"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Kırşehir'de astronomik gözlemler (rasathane) için kullanılan Selçuklu medresesi hangisidir?", a: ["cacabey medresesi"], topicTitle: "Türkiye Selçuklu Devleti" },
            { q: "Türkiye Selçuklu Devleti'nden günümüze kalan en eski cami hangisidir?", a: ["konya alaaddin camii"], topicTitle: "Türkiye Selçuklu Devleti" }
        ],

        osmanli_kultur: [
            // Devlet Anlayışı ve Saray
            { q: "Bizans Devleti'nin Osmanlı Devleti için kullandığı ünvan nedir?", a: ["atman"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'ni oluşturan etmenler nelerdir?", a: ["halk teşkilat ülke hakimiyet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı padişahlarının devletin sonsuza dek süreceğine vurgu yapmak amacıyla kullandıkları ünvan hangisidir?", a: ["devlet-i ebed müddet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin kültür ve medeniyetinin oluşumunda örnek alınan devletler hangileridir?", a: ["türkiye selçuklu devleti", "ilhanlı devleti"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin kültür ve medeniyetinin oluşumunda etkili olan unsurlar nelerdir?", a: ["orta asya türk gelenekleri", "islamın getirdiği esaslar", "fethedilen bölgelerdeki kültürel unsurlar"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin resmi belgelerde kendisini ifade etmek için kullandığı 'Yüce Devlet' anlamına gelen adı hangisidir?", a: ["devlet-i aliyye"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk 'Sultan' ünvanını kullanan hükümdar kimdir?", a: ["orhan bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde 'Hüdavendigar' ünvanı ile anılan padişah kimdir?", a: ["i. murat"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Padişahın herhangi bir konu hakkında emir vermesine ne denir?", a: ["ferman"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde padişahın bir kişiyi himayesi altına almasına ne isim verilir?", a: ["amanname"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Padişahın bir devşirmeyi cezalandırmasına ne isim verilmiştir?", a: ["kul hakkı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde hükümdarın kişilerin mallarına el koyma yetkisine ne isim verilmiştir?", a: ["müsadere"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Müsadere sistemini ilk uygulayan padişah kimdir?", a: ["fatih sultan mehmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Padişahın herhangi bir kişiyi aylığa bağlama veya görevden alma belgesine ne isim verilir?", a: ["beratname"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "'Devleti yönetme yetkisi hükümdar ve oğullarına aittir.' anlayışını benimseyerek veraset değişikliğine giden hükümdar kimdir?", a: ["i. murat"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde sarayda devlet adamı yetiştirmek için Enderun Mektebi hangi padişah döneminde kurulmuştur?", a: ["ii. murat"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde 'Ekber ve Erşed' sistemi hangi hükümdar döneminde devreye sokulmuştur?", a: ["i. ahmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk defa sancağa çıkmadan padişah olan hükümdar kimdir?", a: ["i. ahmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Kardeş katli uygulamasını fiilen sona erdiren Osmanlı padişahı hangisidir?", a: ["i. ahmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde şehzadelerin atandıkları sancaklarda aldıkları ünvan nedir?", a: ["çelebi sultan"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Şehzadelerin sancağa çıkma uygulamasını kaldıran padişah kimdir?", a: ["iii. mehmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde yer alan Manisa sancağının diğer adı nedir?", a: ["darülmülk"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde 'Tahtgah-ı Kadim' olarak geçen sancak neresidir?", a: ["amasya"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde yapılan ilk saray hangisidir?", a: ["bey sarayı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Barok ve rokoko mimarisinin etkilerini taşıyan, ilk defa Batı tarzı örnek alınarak yapılan sarayın adı nedir?", a: ["ishak paşa sarayı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'ne en uzun süre yönetim merkezliği yapan sarayın ismi nedir?", a: ["topkapı sarayı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde Topkapı Sarayı'nın dış kısmına ne ad verilirdi?", a: ["birun"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "II. Mahmut Döneminde Enderun Mektebi yerine hangi kurum açılmıştır?", a: ["mektebi maarif-i adliye"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },

            // Divan ve Merkez Teşkilatı
            { q: "Osmanlı Devleti'nde Divan-ı Hümayun hangi padişah tarafından kurulmuştur?", a: ["orhan bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Yabancı ülke elçileri ve konuklarının kabul edildiği divana ne isim verilir?", a: ["galebe"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde cülus törenleri sarayın hangi kısmında yapılırdı?", a: ["birun"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Enderun'a öğrenciler hangi usul ile alınmaktadır?", a: ["devşirme usulü"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Divan-ı Hümayun hangi padişah döneminde kaldırılmıştır?", a: ["ii. mahmut"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Padişahın sefere çıkamadığı durumlarda sadrazam hangi ünvan ile sefere çıkmıştır?", a: ["serdar-ı ekrem"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Sadrazamın verdiği emirlere ne isim verilir?", a: ["buyruldu"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk vezir kimdir?", a: ["alaaddin paşa"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin yıllık bütçesini hazırlayan ve kalemiye sınıfının maliye görevlerini yerine getiren divan üyesi kimdir?", a: ["defterdar"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Günlük mahkeme kararlarının kaydedildiği Ruznamçe defterini tutmakla görevli yüksek yargı görevlisi hangisidir?", a: ["kazasker"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde müderris ve kadı atamaları hangi divan üyesi tarafından yapılırdı?", a: ["kazasker"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Nişancının, devlete ait arazilere ilişkin bilgileri tuttuğu deftere ne isim verilir?", a: ["tahrir defteri"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Divan-ı Hümayun'da alınan kararların kaydedildiği deftere ne ad verilirdi?", a: ["mühimme defteri"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Reisülküttap makamı, başlangıçta hangi birimden ayrılarak bağımsızlaşmıştır?", a: ["nişancı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk kaptanıderya kimdir?", a: ["karamürsel alp"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde divana üye olan ilk kaptanıderya kimdir?", a: ["barbaros hayrettin paşa"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk şeyhülislam kimdir?", a: ["molla fenari"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },

            // Taşra Teşkilatı, Hukuk ve Toplum
            { q: "Vilayet Nizamnamesi'ne göre livaların başındaki yöneticilere ne isim verilmiştir?", a: ["mutasarrıf"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Geliri doğrudan hazineye aktarılan ve tımar sistemi dışında kalan topraklara ne denir?", a: ["mukataa"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Mukataa topraklarının gelirlerinin ihale yolu ile toplanması sistemine ne isim verilir?", a: ["iltizam"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İmtiyazlı eyaletlerden hangisi sadece asker göndermekle yükümlüydü?", a: ["kırım"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Erdel, Eflak ve Boğdan yöneticilerine ne ünvan verilirdi?", a: ["voyvoda"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osman Bey Dönemi'nde ataması yapılan ilk kadı kimdir?", a: ["dursun fakih"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Kadılar tarafından tutulan sosyoekonomik durumların kaydedildiği deftere ne isim verilir?", a: ["tereke defteri"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Millet sistemi nedir?", a: ["toplumun din veya mezhepsel şekilde örgütlenerek yönetilmesidir"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde ilk vakıf teşkilatı hangi padişah zamanında kurulmuştur?", a: ["orhan bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı devlet yönetiminde ilmiye sınıfının başındaki kişi kimdir?", a: ["şeyhülislam"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Kapıkulu askerlerinin hükümdar değişikliği sebebi ile aldıkları paraya ne ad verilir?", a: ["cülus bahşişi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Hz. Muhammed'in soyundan gelenlerin haklarını koruyup onlar hakkında defter tutanlara ne denir?", a: ["nakibüleşraf"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Yeniçeri Ocağını kaldıran hükümdar kimdir?", a: ["ii. mahmut"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İlk orduyu yaya ve müsellem adı ile kuran padişah kimdir?", a: ["orhan bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Kapıkulu askerlerine üç ayda bir ödenen maaşa ne isim verilir?", a: ["ulufe"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin donanmasında görev yapan askerlere ne isim verilmiştir?", a: ["levent"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },

            // Askeri Teşkilat ve Toprak Sistemi
            { q: "Osmanlı askeri teşkilatında, kara ordusu ve askeri sınıfları ifade eden sınıfa ne isim verilmiştir?", a: ["seyfiye"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı ordusunda askerlerin su ihtiyaçlarını karşılamakla görevli birime ne ad verilirdi?", a: ["sakalar"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Kuşatma harekâtlarında surların altını kazmakla görevli özel birlik hangisidir?", a: ["lağımcılar ocağı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Sınır boylarında oturan ve istihbarat faaliyetleri yapan Hristiyan askerlere ne denir?", a: ["martalos"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Düşmanın ilk hücumunu karşılayan güçlü ve bekâr askerlere ne isim verilirdi?", a: ["azaplar"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Timar ve zeamet sahiplerinin yanlarında götürmekle yükümlü oldukları atlı askerlere ne isim verilir?", a: ["cebelü"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı toprak sisteminde, askeri hizmet karşılığı tahsis edilen topraklara ne isim verilmiştir?", a: ["dirlik"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti askerî teşkilatını hangi devletlerin teşkilatlarını örnek alarak oluşturmuştur?", a: ["selçuklular ilhanlılar ve memluklar"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Geliri padişah anneleri, eşleri ve kızlarına ayrılan topraklara ne isim verilir?", a: ["paşmaklık"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Geliri doğrudan devlet hazinesine ayrılan topraklara ne isim verilmiştir?", a: ["mukataa"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Yıllık geliri 20 bin ile 100 bin akçe arasında değişen dirlik topraklarına ne isim verilmiştir?", a: ["zeamet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },

            // Eğitim, Kültür ve Bilim
            { q: "Sıbyan Mektebinde eğitimin ilk günü yapılan törenlere ne isim verilmiştir?", a: ["amin alayı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlıda çocukların ilkokula gitmesi hangi padişah döneminde zorunlu hale getirilmiştir?", a: ["ii. mahmut"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Lonca teşkilatında kendi dükkânlarını açmak için aldıkları izne ne isim verilmiştir?", a: ["gedik"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nden günümüze kalan en eski medrese hangisidir?", a: ["süleyman paşa medresesi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlıda düğün, şenlik ve ziyafetleri konu alan edebi eserlere ne isim verilmiştir?", a: ["surname"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Hacca gidenleri uğurlamak maksadıyla oluşturulan alaya ne isim verilmiştir?", a: ["surre alayı"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İznik'te kurulan ilk medrese hangi padişah döneminde kurulmuştur?", a: ["orhan bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Ay'ın haritasını ilk defa çıkaran ve 'Risaletü'l-Fethiye' eserinin sahibi bilim insanı kimdir?", a: ["ali kuşçu"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Sabuncuoğlu Şerafettin'in tedavi metotlarına yer verdiği eserin adı nedir?", a: ["mücerrebname"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "'Kitab-ı Bahriye' adlı eserin sahibi ünlü Türk denizcisi kimdir?", a: ["piri reis"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Hint Deniz Seferleri sırasındaki gözlemlerini 'Mir'atü'l-Memalik' eserinde anlatan denizci kimdir?", a: ["seydi ali reis"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin ilk rasathanesini kuran ünlü bilim insanı kimdir?", a: ["takiyüddin mehmet"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Galata Kulesi'nden Üsküdar'a uçarak insanlık tarihinin ilk uçuşunu yapan bilim insanı kimdir?", a: ["hezarfen ahmet çelebi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İnsanlık tarihinin ilk roketli uçuş denemesini yapan bilim insanı kimdir?", a: ["lagari hasan çelebi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin son resmî vakanüvisti kimdir?", a: ["abdurrahman şeref efendi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },

            // Ekonomi ve Sanat
            { q: "Piyasalarda istenilen kalitede, uygun fiyata mal bulundurulmasına ne ad verilir?", a: ["iaşecilik"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Fiyatlara müdahale edilen ve fiyat politikasının esasını teşkil eden sistem nedir?", a: ["narh sistemi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Zenginliğin sahip olunan değerli maden miktarı ile ölçüldüğünü savunan anlayış nedir?", a: ["merkantalizm"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Çarşı ve pazar esnafını din kurallarına göre denetleyen görevliye ne denir?", a: ["muhtesip"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İstanbul'da belediye işlerinden sorumlu kişiye ne denir?", a: ["şehremini"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Loncaların başındaki kişilere ne isim verilmiştir?", a: ["pir"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Olağanüstü durumlarda veya savaşlarda devletin aldığı vergi nedir?", a: ["avarız vergisi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde koyun ve keçi üzerinden alınan vergiye ne denir?", a: ["ağnam vergisi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Toprağını boş bırakan köylüden alınan vergiye ne denir?", a: ["çiftbozan"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Ziraat Bankasının temelini oluşturan kurum nedir?", a: ["memleket sandıkları"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Mimar Sinan'ın çıraklık eseri olarak bilinen caminin adı nedir?", a: ["şehzade camii"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nin ilk altı minareli camisi hangisidir?", a: ["sultan ahmet camii"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlının Batı tarzında yapmış olduğu ilk caminin adı nedir?", a: ["nuru osmaniye camii"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Klasik Osmanlı mimarisinin en önemli ustası kimdir?", a: ["mimar sinan"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Türk müzeciliğinin kurucusu arkeolog kimdir?", a: ["osman hamdi bey"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "Osmanlı Devleti'nde heykelini yaptıran tek padişah kimdir?", a: ["sultan abdülaziz"], topicTitle: "Osmanlı Kültür ve Medeniyeti" },
            { q: "İlk Türk tiyatro eseri olan 'Şair Evlenmesi' kimin tarafından yazılmıştır?", a: ["ibrahim şinasi"], topicTitle: "Osmanlı Kültür ve Medeniyeti" }
        ],

        osmanli_kurulus: [
            { q: "Osmanlı'nın Kuruluş Dönemi'nde, İran bölgesine hâkim olan İlhanlılar hangi hükümdar zamanında İslamiyet'i kabul etmiştir?", a: ["gazan han"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "1250 yılında Mısır'da tarih sahnesindeki yerini alan Memlukler, hangi Türk komutan öncülüğünde kurulmuştur?", a: ["aybey"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı Devleti'nin Kuruluş Dönemi'nde Avrupa'da yaşanan en önemli siyasi gelişme nedir?", a: ["yüzyıl savaşları"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'nın fethedilen topraklara Anadolu'dan insan yerleştirerek bölgeyi Türkleştirme uygulamasına ne denir?", a: ["iskan"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "İskan politikası kapsamında bölgenin canlandırılması amacıyla uygulanan politikaya ne denir?", a: ["şenlendirme"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı Devleti, Oğuzların hangi boyundan gelmektedir?", a: ["kayı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'nın kısa sürede büyümesinde etkili olan hoşgörü politikasına ne ad verilir?", a: ["istimalet"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Bizans tekfurları ile görünüşte iyi geçinme politikasına ne denir?", a: ["müdara"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'nın kuruluşuna destek veren bilim ve siyaset adamları grubuna ne denir?", a: ["fakiyan-ı rum"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Kuruluş sürecinde Konur Alp gibi savaşçıların oluşturduğu yarı dini zümre hangisidir?", a: ["gaziyan-ı rum"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Gaza hareketlerine manevi destek veren derviş zümresi hangisidir?", a: ["abdalan-ı rum"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'da ilk defa alınan verginin ismi nedir?", a: ["baç"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Tımar sistemi ilk defa hangi padişah döneminde uygulanmıştır?", a: ["osman bey"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'da atanan ilk kadı olan Dursun Fakih'in görev yaptığı yer neresidir?", a: ["karacahisar"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Orhan Bey'in lakabı nedir?", a: ["ihtiyarüddin"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osman Bey'in lakabı nedir?", a: ["fahruddin"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı ile Bizans arasında yapılan ilk savaşın adı nedir?", a: ["koyunhisar savaşı", "bafeon savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Bizans'ın Anadolu'da tehlike olmaktan çıktığı savaş hangisidir?", a: ["maltepe savaşı", "palekanon"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'ya katılan ilk beylik hangisidir?", a: ["karesioğulları"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'nın Rumeli'de yerleştiği ilk toprak parçası neresidir?", a: ["çimpe kalesi"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı ile Haçlılar arasındaki ilk savaş hangisidir?", a: ["sırpsındığı savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Savaş alanında şehit edilen tek Osmanlı padişahı kimdir?", a: ["i. murat"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'da top ilk defa hangi savaşta kullanılmıştır?", a: ["i. kosova savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Rumeli Beylerbeyliği hangi hükümdar zamanında kurulmuştur?", a: ["i. murat"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Savcı Bey İsyanı hangi padişah döneminde olmuştur?", a: ["i. murat"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Yeniçeri Ocağı hangi hükümdar döneminde kurulmuştur?", a: ["i. murat"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'da görev yapan ilk sadrazam kimdir?", a: ["çandarlı kara halil paşa"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'da 'Gelibolu Fatihi' olarak adlandırılan kişi kimdir?", a: ["süleyman paşa"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Sultan-ı İklim-i Rum ünvanı hangi savaş sonrası Yıldırım Bayezit'e verilmiştir?", a: ["niğbolu savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "İstanbul'u ilk defa kuşatan Osmanlı padişahı kimdir?", a: ["yıldırım bayezit"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Yıldırım Bayezit kuşatma için hangi yapıyı inşa ettirmiştir?", a: ["anadolu hisarı", "güzelcehisar"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Fetret Devri'ne neden olan savaş hangisidir?", a: ["ankara savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Devletin 'ikinci kurucusu' kabul edilen padişah kimdir?", a: ["çelebi mehmet"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'daki ilk dini nitelikli isyan hangisidir?", a: ["şeyh bedrettin isyanı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Haçlılar ile imzalanan ilk barış antlaşması nedir?", a: ["edirne-segedin antlaşması"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "İlk yeniçeri isyanı hangisidir?", a: ["buçuktepe isyanı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
            { q: "Osmanlı'nın Balkan hakimiyetinin kesinleştiği savaş hangisidir?", a: ["ii. kosova savaşı"], topicTitle: "Osmanlı Kuruluş Dönemi" },
        ],

        osmanli_yukselme: [
            { q: "Fatih Sultan Mehmet'in kullandığı mahlas nedir?", a: ["avni"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "İstanbul'un fethi hazırlığında Anadolu Hisarı'nın karşısına yapılan yapı nedir?", a: ["rumeli hisarı", "boğazkesen"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "İstanbul'un fethinde kullanılan dev toplara ne denir?", a: ["şahi"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "İstanbul'un fethinden sonra Fatih'e verilen ünvan nedir?", a: ["kayser-i rum"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "İslam tarihinde İstanbul'un fethi için kullanılan 'Parlak Zafer' ifadesi nedir?", a: ["feth-i mübin"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Fatih'in kuşatmasına rağmen Sırbistan'da alamadığı yer neresidir?", a: ["belgrad"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Osmanlı ile Akkoyunlular arasında 1473'te yapılan savaş nedir?", a: ["otlukbeli savaşı"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Memlukler ile ilişkilerin ilk kez gerildiği mesele nedir?", a: ["hicaz su yolları meselesi"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Kırım'ın fethi ile hangi deniz Türk gölü haline gelmiştir?", a: ["karadeniz"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Cem Sultan Olayı'nda Cem Sultan kime sığınmıştır?", a: ["rodos şövalyeleri", "papa"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Osmanlı ile Safeviler arasındaki 1514 tarihli savaş hangisidir?", a: ["çaldıran savaşı"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Dulkadiroğulları beyliğine son verilen ve ATB'yi kesin sağlayan savaş?", a: ["turnadağ savaşı"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Memluk Devleti'ne son verilen savaşlar hangileridir?", a: ["mercidabık ve ridaniye"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Halifelik makamı hangi padişah döneminde Osmanlı'ya geçmiştir?", a: ["yavuz sultan selim"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Dünya tarihinin en kısa süren meydan savaşı hangisidir?", a: ["mohaç meydan muharebesi"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Osmanlı'nın Avusturya üzerinde siyasi üstünlük kurduğu 1533 antlaşması nedir?", a: ["istanbul antlaşması", "ibrahim paşa antlaşması"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Akdeniz'in Türk gölü haline geldiği deniz zaferi hangisidir?", a: ["preveze deniz zaferi"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Hint Deniz Seferleri hangi padişah döneminde yapılmıştır?", a: ["kanuni sultan süleyman"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "İran (Safevi) ile imzalanan ilk resmi antlaşma hangisidir?", a: ["amasya antlaşması"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Osmanlı donanmasının ilk kez yakıldığı olay hangisidir?", a: ["inebahtı deniz savaşı"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Sokullu Mehmet Paşa'nın İpek Yolu'nu canlandırmak için sunduğu proje nedir?", a: ["don-volga projesi"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Süveyş Kanalı Projesi hangi yolu canlandırmak için düşünülmüştür?", a: ["baharat yolu"], topicTitle: "Osmanlı Yükselme Dönemi" },
            { q: "Kıbrıs adası hangi padişah döneminde fethedilmiştir?", a: ["ii. selim"], topicTitle: "Osmanlı Yükselme Dönemi" }
        ],

        osmanli_duraklama_gerileme: [
            // Yükselme'den Duraklama'ya Geçiş Soruları
            { q: "Basra Körfezi'nin kontrol altına alındığı İran ile yapılan ilk antlaşma hangisidir?", a: ["amasya antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Kuzey Afrika hakimiyetini pekiştiren ikinci büyük deniz zaferi hangisidir?", a: ["cerbe deniz savaşı"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "1565 Malta Kuşatması'nda şehit düşen ünlü denizci kimdir?", a: ["turgut reis"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Kanuni Sultan Süleyman'ın son seferinin adı nedir?", a: ["zigetvar seferi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Ordunun başında sefere çıkma geleneğini terk eden ilk padişah kimdir?", a: ["ii. selim"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Kıbrıs'ın fethinde önemli rol oynayan Osmanlı komutanı kimdir?", a: ["lala mustafa paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti'nin denizlerde aldığı ilk büyük yenilgi hangisidir?", a: ["inebahtı deniz savaşı"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sokullu Mehmet Paşa'nın İpek Yolu'nu canlandırmak için sunduğu proje nedir?", a: ["don-volga projesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sokullu Mehmet Paşa hangi padişahların döneminde sadrazamlık yapmıştır?", a: ["kanuni ii. selim iii. murad"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sokullu'nun Baharat Yolu'nu canlandırmak için düşündüğü proje hangisidir?", a: ["süveyş projesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Kıbrıs adası hangi padişah döneminde, hangi devletten alınmıştır?", a: ["ii. selim venedik cumhuriyeti"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "İnebahtı yenilgisi sonrası Sokullu'nun Venedik elçisine söylediği meşhur söz nedir?", a: ["siz bizim donanmamızı yakmakla sakalımızı kestiniz biz ise kıbrısı almakla kolunuzu kestik"], topicTitle: "Osmanlı Duraklama ve Gerileme" },

            // Osmanlı Duraklama Dönemi (XVII. Yüzyıl)
            { q: "Osmanlı Devleti'nde 'Alimin oğlu âlimdir.' anlayışına ne ad verilir?", a: ["beşik ulemalığı"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sancak sisteminin kaldırılmasıyla yerine kafes usulünü getiren padişah kimdir?", a: ["iii. mehmet"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti ile Rusya arasında imzalanan ilk antlaşmanın adı nedir?", a: ["bahçesaray antlaşması", "çerhin antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti, doğuda en geniş sınırlara hangi antlaşma ile ulaşmıştır?", a: ["ferhat paşa antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "1638 yılında Bağdat'ı tekrar geri almayı başaran IV. Murat'a hangi lakap verilmiştir?", a: ["bağdat fatihi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "1639 yılında imzalanan ve Zağros Dağlarının sınır kabul edildiği antlaşma hangisidir?", a: ["kasr-ı şirin antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı, batıda hakimiyeti altına aldığı en son toprakları hangi antlaşma ile almıştır?", a: ["bucaş antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Tarihte 'Eğri (Haçova) Fatihi' lakabı ile tanınan Osmanlı hükümdarı kimdir?", a: ["iii. mehmet"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "III. Mehmet döneminde kazanılan önemli meydan muharebesi hangisidir?", a: ["haçova meydan muharebesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "İki ay boyunca Kanije savunması ile ünlenen paşa kimdir?", a: ["tiryaki hasan paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Avusturya arşidükünün Osmanlı padişahına eşit sayıldığı antlaşma hangisidir?", a: ["zitvatorok antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "I. Ahmet Dönemi'nde Celali İsyanlarını bastıran devlet adamı kimdir?", a: ["kuyucu murat paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "1663 yılında Uyvar Kalesi'nin alınmasında önemli rol oynayan sadrazam kimdir?", a: ["sadrazam fazıl ahmet paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sultan II. Osman hangi savaş sonucunda askeri başarısızlık yaşayarak tahttan indirilmiştir?", a: ["hotin savaşı"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "XVII. yüzyılda Avusturya'ya karşı yapılan son kazançlı antlaşma hangisidir?", a: ["vasvar antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti'nde en genç tahta çıkan padişah kimdir?", a: ["iv. mehmet"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "IV. Mehmet döneminde 24 yıl süren kuşatma sonunda fethedilen ada hangisidir?", a: ["girit"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "II. Viyana Kuşatması'ndaki başarısızlığı sebebi ile idam ettirilen devlet adamı kimdir?", a: ["merzifonlu kara mustafa paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "1700 İstanbul Anlaşması ile Rusya'ya bırakılan kale hangisidir?", a: ["azak kalesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlının batıda geniş anlamda toprak kaybı yaşamasına neden olan antlaşma hangisidir?", a: ["karlofça antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "IV. Mehmet Dönemi'nde saray görevlilerinin idam edilmesi olayına ne ad verilir?", a: ["çınar vakası", "vaka-i vakvakiye"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Celâli İsyanları sonucunda köylülerin şehirlere göç etmesi hareketine ne ad verilir?", a: ["büyük kaçgun"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti'nin Duraklama Dönemi'nde yaşamış ilk resmî vakanüvisti kimdir?", a: ["naima"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı maliye sisteminde ilk defa bütçe defteri hazırlayan sadrazam kimdir?", a: ["tarhuncu ahmet paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Saray dışından evlenen ve sosyal alanda ilk ıslahat yapan padişah kimdir?", a: ["ii. osman"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Koçi Bey ve Katip Çelebi gibi düşünürlere raporlar hazırlatan hükümdar kimdir?", a: ["iv. murat"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Sadrazamlık görevini birtakım şartlar öne sürerek kabul eden devlet adamı kimdir?", a: ["köprülü mehmet paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı'nın topraklarını geri alma umudunun sona ererek Lale Devri'ne girmesine neden olan antlaşma nedir?", a: ["pasarofça antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },

            // Osmanlı Gerileme Dönemi (XVIII. Yüzyıl)
            { q: "Dış politikada hedeflere ulaşmak için her türlü araca başvurmayı savunan anlayış nedir?", a: ["makyavelizm"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Bizans İmparatorluğu'nu yeniden canlandırmayı hedefleyen Rus projesinin adı nedir?", a: ["grek projesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı hangi antlaşma ile Azak Kalesi'ni Rusya'dan geri almıştır?", a: ["prut antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Pasarofça Antlaşması'ndan sonra başlayan on iki yıllık barışçıl döneme ne denir?", a: ["lale devri"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlının bu yüzyılda imzaladığı son kazançlı antlaşmanın adı nedir?", a: ["belgrad antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Rusya, Osmanlı donanmasını nerede yakmıştır?", a: ["çeşme"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Kırım'ın Osmanlı himayesinden çıkarıldığı 1774 tarihli antlaşma hangisidir?", a: ["küçük kaynarca antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı tarihinde hilafeti siyasi güç olarak ilk defa hangi antlaşmada kullanmıştır?", a: ["küçük kaynarca antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti tarihinde ilk defa hangi ülkeye savaş tazminatı ödemiştir?", a: ["rusya"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Akka Kalesi'nde Napolyon'u durdurarak Fransa'nın geri çekilmesini sağlayan komutan kimdir?", a: ["cezzar ahmet paşa"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti hangi antlaşma ile dağılma sürecine girmiştir?", a: ["yaş antlaşması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlı Devleti ilk defa denge politikasına hangi olayda başvurmuştur?", a: ["fransanın mısırı işgali"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Lale Devri'nin ünlü sadrazamı, şairi ve minyatürcüsü kimlerdir?", a: ["ibrahim paşa nedim levni"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Paris'e geçici olarak gönderilen ilk elçimizin adı nedir?", a: ["yirmisekiz mehmet çelebi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlının Batı'ya açılan ilk penceresi olarak kabul edilen eserin adı nedir?", a: ["paris sefaretnamesi"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Lale Devri'nde gerçekleşen ilk teknik yenilik nedir?", a: ["matbaanın kurulması"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "İlk Türk matbaasında basılan ilk eser hangisidir?", a: ["vankulu lügati"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "XVIII. yüzyıl ıslahatlarında ilk defa batıdan askeri uzman getiren hükümdar kimdir?", a: ["i. mahmut"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Lale Devri'ni sona erdiren ve III. Ahmet'in tahttan indirilmesine neden olan isyan nedir?", a: ["patrona halil isyanı"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Mühendishane-i Bahr-i Hümayun hangi padişah döneminde açılmıştır?", a: ["i. abdülhamit"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Osmanlıda cülus bahşişini kaldıran padişah kimdir?", a: ["i. abdülhamit"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "III. Selim'in oluşturduğu ıslahat programının tümüne ne ad verilir?", a: ["nizam-ı cedit"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "Nizam-ı Cedit ordusunun masraflarını karşılayan hazineye ne denir?", a: ["irad-ı cedit"], topicTitle: "Osmanlı Duraklama ve Gerileme" },
            { q: "İlk defa kalıcı elçilik için Londra'ya gönderilen devlet adamı kimdir?", a: ["yusuf agah efendi"], topicTitle: "Osmanlı Duraklama ve Gerileme" }
        ],



        osmanli_dagilma: [
            // III. Selim & XVIII. Yüzyıl Sonu [cite: 1]
            { q: "III. Selim'ın eyalet temsilcileriyle oluşturduğu danışma meclisine ne ad verilir?", a: ["meclis-i meşveret"] },
            { q: "Nizam-ı Cedit ordusunun masraflarını karşılayan hazineye ne ad verilir?", a: ["irad-ı cedit"] },
            { q: "Karaborsayı önlemek amacıyla III. Selim tarafından açılan teşkilat nedir?", a: ["zahire nazırlığı"] },
            { q: "İlk defa kalıcı elçilik için Londra'ya gönderilen devlet adamı kimdir?", a: ["yusuf agah efendi"] },
            { q: "III. Selim'in tahttan indirilmesiyle sonuçlanan olaya ne ad verilir?", a: ["kabakçı mustafa isyanı"] },
            { q: "III. Selim ıslahatlarda hangi ülkeyi örnek almıştır?", a: ["fransa"] },
            { q: "Esham Usulü'nü ilk defa uygulamaya koyan padişah kimdir?", a: ["i. abdülhamit", "birinci abdülhamit"] },
            { q: "Kapıkulu Ocakları askerlerine verilen ulufenin alım-satımını yasaklayan padişah kimdir?", a: ["i. abdülhamit", "birinci abdülhamit"] },
            { q: "Londra'ya ilk defa kalıcı elçilik açan hükümdar kimdir?", a: ["iii. selim", "üçüncü selim"] },

            // Dağılma Dönemi (XIX. Yüzyıl) Siyasi Olaylar [cite: 3, 4]
            { q: "Sırplar 1804 yılında kimin önderliğinde Osmanlı Devleti'ne karşı ayaklanmıştır?", a: ["kara yorgi"] },
            { q: "XVIII. yüzyılda Fransa ile Rusya arasında Osmanlı'ya karşı gizli ittifak kurulan antlaşma nedir?", a: ["tilsit antlaşması"] },
            { q: "İngiltere ile Osmanlı'nın 1809'da imzaladığı Kale-i Sultaniye antlaşmasının diğer adı nedir?", a: ["çanakkale antlaşması"] },
            { q: "Osmanlı Devleti'nden 1812 Bükreş Antlaşması ile ilk defa imtiyaz kazanan millet hangisidir?", a: ["sırplar"] },
            { q: "Osmanlı topraklarının paylaşımını konu edinen 'Şark Meselesi' kavramı ilk kez nerede gündeme gelmiştir?", a: ["viyana kongresi"] },
            { q: "1815 Viyana Kongresi ile başlayan Avrupa'nın eski düzenini kurma dönemine ne ad verilir?", a: ["restorasyon dönemi"] },
            { q: "Viyana Kongresi'nde ilk defa 'Şark Meselesi' deyimini kullanan Rus Çarı kimdir?", a: ["i. aleksandr", "birinci aleksandr"] },
            { q: "Aleksandr İpsilanti önderliğinde Odessa'da kurulan ve Yunan İsyanı'nı başlatan derneğin adı nedir?", a: ["filik-i eterya cemiyeti"] },
            { q: "Filik-i Eterya Cemiyeti 1894 yılında hangi adı almıştır?", a: ["etnik-i eterya"] },
            { q: "1821 Mora İsyanı'nı bastırması için Osmanlı kimden yardım istemiştir?", a: ["mısır valisi mehmet ali paşa"] },
            { q: "Osmanlı-Mısır donanması 1827 yılında nerede yakılmıştır?", a: ["navarin"] },
            { q: "Mora İsyanı'na katılmak gayesiyle Mora'ya giden ünlü İngiliz şair kimdir?", a: ["lord byron"] },
            { q: "Yunanistan'ın bağımsızlığını kazandığı 1829 tarihli antlaşma nedir?", a: ["edirne antlaşması"] },
            { q: "Osmanlı Devleti'nden ilk defa bağımsızlığını kazanarak ayrılan ülke hangisidir?", a: ["yunanistan"] },
            { q: "1830 yılında Fransa tarafından işgal edilen ilk Kuzey Afrika toprağımız neresidir?", a: ["cezayir"] },
            { q: "II. Mahmut'un Kavalalı'ya karşı Rusya ile 1833'te imzaladığı ittifak antlaşması nedir?", a: ["hünkar iskelesi antlaşması"] },
            { q: "Osmanlı'nın Mısır Sorunu'nda İngiliz desteğini almak için 1838'de imzaladığı ticaret antlaşması nedir?", a: ["baltalimanı ticaret antlaşması"] },
            { q: "1840 Mısır Meselesi için toplanan konferans hangisidir?", a: ["londra konferansı"] },

            // Tanzimat, Kırım ve Islahatlar [cite: 5]
            { q: "Boğazların ilk defa uluslararası bir statü kazandığı 1841 sözleşmesi nedir?", a: ["londra boğazlar sözleşmesi"] },
            { q: "Osmanlı Devleti'ni 'Hasta Adam' olarak adlandıran Rus Çarı kimdir?", a: ["i. nikola", "birinci nikola"] },
            { q: "1853-1856 kutsal yerler sorunu yüzünden çıkan Osmanlı-Rus savaşının adı nedir?", a: ["kırım savaşı"] },
            { q: "Modern haberleşme aracı telgraf ilk kez hangi savaşta kullanılmıştır?", a: ["kırım savaşı"] },
            { q: "Kırım Savaşı'nda Selimiye Kışlası'ndaki çalışmalarıyla tanınan hemşire kimdir?", a: ["florence nightingale"] },
            { q: "Osmanlı'nın Avrupa devleti sayıldığı ve toprak bütünlüğünün garantörlüğe alındığı 1856 antlaşması nedir?", a: ["paris antlaşması"] },
            { q: "Osmanlı Devleti ilk dış borcu Kırım Savaşı'nda hangi ülkeden almıştır?", a: ["ingiltere"] },
            { q: "93 Harbi (1877-1878) sırasında 'Plevne Kahramanı' ünvanını alan komutan kimdir?", a: ["gazi osman paşa"] },
            { q: "Aziziye Tabyalarında halkı Ruslara karşı organize eden Erzurumlu kadın kahraman kimdir?", a: ["nene hatun"] },
            { q: "93 Harbi'ni bitiren ancak yürürlüğe girmeyen (ölü doğan) antlaşma nedir?", a: ["ayastefanos", "yeşilköy antlaşması"] },
            { q: "Romanya, Sırbistan ve Karadağ'ın bağımsız olduğu 1878 tarihli antlaşma nedir?", a: ["berlin antlaşması"] },
            { q: "Ermeni Sorunu ilk kez hangi antlaşma ile uluslararası statü kazanmıştır?", a: ["berlin antlaşması"] },

            // II. Mahmut ve Tanzimat Islahatları [cite: 6, 7, 8]
            { q: "Osmanlı'da ilk demokratikleşme hareketi kabul edilen 1808 belgesi hangisidir?", a: ["sened-i ittifak"] },
            { q: "Müsadere (zor alım) sistemini kaldıran padişah kimdir?", a: ["ii. mahmud", "ikinci mahmut"] },
            { q: "Divan-ı Hümayun'u kaldıran padişah kimdir?", a: ["ii. mahmud", "ikinci mahmut"] },
            { q: "Osmanlı'nın 1831'de yayınlanan ilk resmi gazetesinin adı nedir?", a: ["takvim-i vekayi"] },
            { q: "1826'da Yeniçeri Ocağı'nın kaldırılması olayına ne ad verilir?", a: ["vaka-i hayriye"] },
            { q: "Yeniçeri Ocağı yerine kurulan ordunun adı nedir?", a: ["asakir-i mansure-i muhammediye"] },
            { q: "Türk tarihinde anayasacılığa geçişin ilk adımı sayılan 1839 belgesi nedir?", a: ["tanzimat fermanı"] },
            { q: "Osmanlı'nın ilk deniz şirketi hangisidir?", a: ["şirket-i hayriye"] },
            { q: "Gayrimüslimlerden alınan cizye vergisi hangi belge ile kaldırılmıştır?", a: ["islahat fermanı"] },
            { q: "Erkek öğretmen okulu Darülmuallimin'in müdürlüğünü yapan Mecelle yazarı kimdir?", a: ["ahmet cevdet paşa"] },
            { q: "Osman Hamdi Bey'in kurduğu güzel sanatlar okulu nedir?", a: ["sanayi-i nefise mektebi"] },
            { q: "Güllü Agop tarafından kurulan ilk Osmanlı tiyatrosu hangisidir?", a: ["gedikpaşa tiyatrosu"] },
            { q: "Seyahat amacıyla yurt dışına çıkan ilk ve son padişah kimdir?", a: ["sultan abdülaziz"] },
            { q: "İslami özel hukuk kurallarına dayalı meşhur kanun kitabı nedir?", a: ["mecelle"] },
            { q: "İlk Türk kadın romancı kimdir?", a: ["fatma aliye"] },

            // Meşrutiyet ve Fikir Akımları [cite: 9, 10]
            { q: "Osmanlı'nın ilk anayasası Kanunuesasi hangi tarihte ilan edilmiştir?", a: ["23 aralık 1876"] },
            { q: "Ermeni isyanlarına karşı Doğu'da II. Abdülhamit döneminde kurulan birlikler nedir?", a: ["hamidiye alayları"] },
            { q: "Osmanlı iflasını hangi kararname ile resmen açıklamıştır?", a: ["muharrem kararnamesi"] },
            { q: "Rejimi değiştirmeye yönelik çıkan ilk ve son isyan hangisidir?", a: ["31 mart vakası", "31 mart ayaklanması"] },
            { q: "31 Mart İsyanı'nı bastıran ve Mustafa Kemal'in görev aldığı ordunun adı nedir?", a: ["hareket ordusu"] },
            { q: "Meclis kararı ile görevden alınan ilk padişah kimdir?", a: ["ii. abdülhamit", "ikinci abdülhamit"] },
            { q: "Tüm vatandaşları eşit görmeyi amaçlayan fikir akımı nedir?", a: ["osmanlıcılık"] },
            { q: "İslamcılık (Ümmetçilik) akımının en büyük temsilcisi olan padişah kimdir?", a: ["ii. abdülhamit", "ikinci abdülhamit"] },
            { q: "Türkçülüğün Esasları kitabının yazarı kimdir?", a: ["ziya gökalp"] }
        ],
        osmanli_20yy: [
            // Basın ve Fikir Akımları
            { q: "İlk yarı resmi gazete hangisidir?", a: ["ceride-i havadis"] },
            { q: "Ali Suavi'nin Giritli Türklere yardım için çıkardığı gazete hangisidir?", a: ["muhbir"] },
            { q: "Meşrutiyet karşıtı 'Volkan' gazetesini kim çıkarmıştır?", a: ["derviş vahdeti"] },
            { q: "Kadınların siyasi haklarından ilk kez bahseden gazete nedir?", a: ["terakki gazetesi"] },
            { q: "Yazarlarının tamamı kadın olan dergi hangisidir?", a: ["şüküfezar"] },
            { q: "Türkiye'nin ilk basın şehidi kimdir?", a: ["hasan fehmi"] },
            { q: "Tüm vatandaşları eşit görmeyi amaçlayan fikir akımı nedir?", a: ["osmanlıcılık"] },
            { q: "Devletin kurtuluşunu İslam'a uygunlukta gören akım nedir?", a: ["islamcılık"] },
            { q: "İslamcılık akımının en büyük temsilcisi olan padişah kimdir?", a: ["ii. abdülhamit", "ikinci abdülhamit"] },
            { q: "Tüm Müslümanları Osmanlı altında toplama siyaseti nedir?", a: ["panislamizm"] },
            { q: "Türkçülük akımının öncü isimleri kimlerdir?", a: ["yusuf akçura", "ismail gaspıralı", "ziya gökalp", "fuad köprülü"] },
            { q: "İslamcılık akımı hangi olaydan sonra önemini yitirmiştir?", a: ["i. dünya savaşı"] },
            { q: "Osmanlı'nın asıl sahibinin Türkler olduğunu savunan akım nedir?", a: ["türkçülük"] },
            { q: "'Türkçülüğün Esasları' kitabının yazarı kimdir?", a: ["ziya gökalp"] },

            // Trablusgarp ve Balkan Savaşları
            { q: "Rusya ile İtalya arasında imzalanan, tarafların Boğazlar ve Trablusgarp'taki karşılıklı menfaatlerini tanıdığı antlaşma nedir?", a: ["racconigi antlaşması"] },
            { q: "Trablusgarp savunması için bölgeye gizlice giden Enver Bey'in kullandığı kimlik nedir?", a: ["kuyumcu hamdi"] },
            { q: "Mustafa Kemal, 'Gazeteci Şerif' takma adıyla hangi savaşa katılmıştır?", a: ["trablusgarp savaşı"] },
            { q: "Mustafa Kemal Trablusgarp'a hangi ünvan ile gitmiştir?", a: ["gazeteci şerif bey", "gazeteci şerif"] },
            { q: "İtalyan sömürgeciliğine karşı Libya'da direnen 'Çöl Aslanı' kimdir?", a: ["ömer muhtar"] },
            { q: "Osmanlı Devleti Kuzey Afrika'daki son toprağını hangi savaşta kaybetmiştir?", a: ["trablusgarp savaşı"] },
            { q: "Osmanlı, Trablusgarp'ı hangi antlaşma ile İtalya'ya bırakmıştır?", a: ["uşi antlaşması", "ouchy antlaşması"] },
            { q: "Osmanlı, hilafet makamını siyasi güç olarak en son hangi antlaşmada kullanmıştır?", a: ["uşi antlaşması"] },
            { q: "Dünya tarihinde ilk defa uçak hangi savaşta kullanılmıştır?", a: ["trablusgarp savaşı"] },
            { q: "Mustafa Kemal hangi savaştan sonra binbaşı rütbesine yükselmiştir?", a: ["trablusgarp savaşı"] },
            { q: "I. Balkan Savaşı'nı başlatan ülke hangisidir?", a: ["karadağ"] },
            { q: "Babiali Baskını darbesini hangi grup yapmıştır?", a: ["ittihat ve terakki"] },
            { q: "'Hamidiye Kahramanı' olarak anılan Türk siyasetçi ve asker kimdir?", a: ["hüseyin rauf orbay"] },
            { q: "Osmanlı'dan bağımsızlığını ilan ederek ayrılan son Balkan devleti hangisidir?", a: ["arnavutluk"] },
            { q: "II. Balkan Savaşı'nda Edirne'yi geri alarak 'Edirne Fatihi' ünvanını alan komutan kimdir?", a: ["enver paşa"] },
            { q: "Balkan Savaşları sonrası kimsesiz kalan çocuklar için açılan kurum nedir?", a: ["darüleytam"] },

            // I. Dünya Savaşı
            { q: "Almanya ile Fransa arasında Sedan Savaşı'na sebep olan kömür havzası nedir?", a: ["alsace-lorraine", "alsas loren"] },
            { q: "I. Dünya Savaşı başladığında İttifak safından İtilaf safına geçen devlet hangisidir?", a: ["italya"] },
            { q: "I. Dünya Savaşı'ndan ilk çekilen devlet hangisidir?", a: ["japonya"] },
            { q: "Osmanlı'nın İtilaf donanmasını bombalayan Alman gemileri hangi isimleri almıştır?", a: ["yavuz ve midilli"] },
            { q: "Yavuz ve Midilli hangi amiral önderliğinde Rus limanlarını bombalamıştır?", a: ["amiral souchon"] },
            { q: "Osmanlı'nın açtığı ilk cephe hangisidir?", a: ["kafkasya cephesi"] },
            { q: "Kafkasya Cephesi'nde hangi devletle mücadele edilmiştir?", a: ["rusya"] },
            { q: "Batum, Ardahan ve Kars bölgesine verilen genel ad nedir?", a: ["elviye-yi selase"] },
            { q: "Mustafa Kemal Kafkasya Cephesi'nde Rusya'dan hangi illeri geri almıştır?", a: ["muş ve bitlis"] },
            { q: "Osmanlı'nın başarısız olmasına rağmen toprak kazandığı tek cephe hangisidir?", a: ["kafkasya cephesi"] },
            { q: "Mısır'ı geri almak için Almanya'nın isteğiyle açılan cephe nedir?", a: ["kanal cephesi"] },
            { q: "18 Mart 1915'te zaferle sonuçlanan deniz savaşı hangisidir?", a: ["çanakkale deniz savaşları"] },
            { q: "Çanakkale'de '18 Mart Kahramanı' olarak anılan komutan kimdir?", a: ["cevat bey", "cevat çobanlı"] },
            { q: "Mustafa Kemal'e verilen 'Anafartalar Kahramanı' ünvanı hangi cephededir?", a: ["çanakkale cephesi"] },
            { q: "Kut'ül Amare'de esir düşen İngiliz komutan kimdir?", a: ["general townshend"] },
            { q: "Medine savunması nedeniyle 'Çöl Ortasında Plevne Kahramanı' ünvanı verilen komutan kimdir?", a: ["fahrettin paşa"] },
            { q: "Gizli antlaşmaları 'Sarı Kitap' yayını ile dünyaya duyuran devlet hangisidir?", a: ["sovyet rusya", "rusya"] },
            { q: "Orta Doğu'nun İngiltere ve Fransa arasında pay edildiği gizli antlaşma nedir?", a: ["sykes-picot"] },
            { q: "ABD'nin yalnızlık politikasına verilen ad nedir?", a: ["monroe doktrini"] },

            // Mondros ve İşgaller
            { q: "Mondros Ateşkes Antlaşması'nı Osmanlı adına kim imzalamıştır?", a: ["hüseyin rauf orbay"] },
            { q: "Osmanlı Devleti'ni fiilen sona erdiren antlaşma hangisidir?", a: ["mondros ateşkes antlaşması"] },
            { q: "Mondros'tan sonra ilk işgal edilen Osmanlı toprağı neresidir?", a: ["musul"] },
            { q: "Anadolu'da ilk işgal edilen yer neresidir?", a: ["hatay dörtyol", "hatay"] },
            { q: "İşgallere karşı mücadele eden silahlı halk gruplarına ne ad verilir?", a: ["kuvayımilliye"] },
            { q: "İzmir işgalinde 'Yaşa Venizelos' demediği için şehit edilen Türk komutan kimdir?", a: ["süleyman fethi bey"] },
            { q: "Anadolu'daki işgallerle ilgili İLK uluslararası rapor hangisidir?", a: ["amiral bristol raporu"] },
            { q: "Türkler aleyhine yapılan propagandaları engellemek için kurulan cemiyet nedir?", a: ["milli kongre cemiyeti"] },
            { q: "Mustafa Kemal'in isteğiyle kurulan kadın cemiyeti nedir?", a: ["anadolu kadınları müdafaa-i hukuk cemiyeti"] },
            { q: "Bizans'ı yeniden kurmayı hedefleyen Rum cemiyeti hangisidir?", a: ["mavri mira"] },
            { q: "Mustafa Kemal'e Samsun'a giderken verilen resmi rütbe nedir?", a: ["dokuzuncu ordu müfettişliği"] }
        ],

        milli_mucadele_hazirlik: [
            // Raporlar ve Cemiyetler
            { q: "Anadolu'daki işgallerle ilgili ilk uluslararası raporu hazırlayan kimdir?", a: ["amiral bristol"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Doğu Anadolu ve Ermeni ilişkileriyle ilgili hazırlanan raporun adı nedir?", a: ["general harbord raporu"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "İzmir ve Ege'nin Türklere ait olduğunu kanıtlamak için kurulan cemiyet nedir?", a: ["izmir müdafaa-i hukuk-u osmaniye cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Tüm yararlı cemiyetlerin birleşmesiyle oluşan ulusal cemiyetin adı nedir?", a: ["anadolu ve rumeli müdafaa-i hukuk cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "İzmir işgaline karşı silahlı direnişi başlatan cemiyet nedir?", a: ["redd-i ilhak cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Erzurum Kongresi'ni düzenleyen Doğu merkezli cemiyet hangisidir?", a: ["vilayat-ı şarkiye müdafaa-i hukuk-u milliye cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "'Kuvayımilliye' ifadesinden ilk kez bahseden rapor hangisidir?", a: ["dr. esat işık raporu"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Türkler aleyhine yapılan olumsuz propagandaları engellemek için kurulan cemiyet nedir?", a: ["milli kongre cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Mustafa Kemal'in isteğiyle Melek Reşit Hanım tarafından kurulan kadın cemiyeti nedir?", a: ["anadolu kadınları müdafaa-i hukuk cemiyeti"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "İşgallere karşı kurulan ilk yararlı cemiyet hangisidir?", a: ["kars islam şûrası"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Bizans'ı yeniden kurmayı hedefleyen Rum cemiyeti hangisidir?", a: ["mavri mira"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Karadeniz'de Pontus Rum çetelerine karşı mücadele eden ve Mustafa Kemal'in muhafızlığını yapan kişi kimdir?", a: ["topal osman ağa"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },

            // Hazırlık Süreci (Genelgeler ve Kongreler)
            { q: "Mustafa Kemal Paşa, Mondros Ateşkes Antlaşması'nın imzalanması sırasında hangi görevde bulunmaktaydı?", a: ["yıldırım orduları grup komutanı"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "İşgaller karşısında halkın direnişini örgütlemek amacıyla yayınlanan ilk ulusal belge hangisidir?", a: ["havza genelgesi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Milli Mücadele'nin gerekçesi, yöntemi ve amacının ilk kez belirtildiği belge hangisidir?", a: ["amasya genelgesi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Amasya Genelgesi'nde yer alan 'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır' maddesi neyin göstergesidir?", a: ["milli egemenlik"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Mustafa Kemal hangi gelişmeden sonra askerlik görevinden istifa etmiştir?", a: ["amasya genelgesi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Toplanış amacı bakımından bölgesel, aldığı kararlar bakımından ulusal olan kongre hangisidir?", a: ["erzurum kongresi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Manda ve himaye fikri ilk kez nerede reddedilmiştir?", a: ["erzurum kongresi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Manda ve himaye fikri kesin olarak nerede reddedilmiştir?", a: ["sivas kongresi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Temsil Heyeti'nin tüm yurdu temsil eder hale geldiği kongre hangisidir?", a: ["sivas kongresi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Milli Mücadele'nin sesini duyurmak amacıyla Sivas'ta çıkarılan gazetenin adı nedir?", a: ["irade-i milliye"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "İstanbul Hükümeti'nin Temsil Heyeti'ni ilk kez resmen tanıdığı gelişme hangisidir?", a: ["amasya görüşmeleri"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Son Osmanlı Mebusan Meclisi'nde kabul edilen milli bağımsızlık belgesi nedir?", a: ["misak-ı milli"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Misak-ı Milli kararlarında hangi konularda halk oylaması (referandum) yapılması istenmiştir?", a: ["kars ardahan batum batı trakya ve arap toprakları"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },

            // Sevr ve Hukuki Süreç
            { q: "Osmanlı Devleti'nin fiilen sona erdiği antlaşma hangisidir?", a: ["mondros ateşkes antlaşması"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Hukuken ölü doğmuş antlaşma olarak bilinen iki antlaşma hangileridir?", a: ["ayastefanos ve sevr"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Sevr Antlaşması'nı Saltanat Şûrasında olup da imzalamayan tek kişi kimdir?", a: ["topçu feriki ali rıza paşa"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Sevr Antlaşması'nın hukuken geçersiz olmasının temel sebebi nedir?", a: ["mebusan meclisi'nin onayından geçmemesi"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Osmanlı Devleti'nin imzaladığı son antlaşma hangisidir?", a: ["sevr barış antlaşması"], topicTitle: "Milli Mücadele Hazırlık Dönemi" },
            { q: "Sevr'in yerine Türkiye'nin bağımsızlığını tescilleyen antlaşma hangisidir?", a: ["lozan antlaşması"], topicTitle: "Milli Mücadele Hazırlık Dönemi" }
        ],

        milli_mucadele_muharebeler: [
            // Sevr Antlaşması Bölümü
            { q: "Sevr Antlaşması'nın taslağı nerede hazırlanmıştır?", a: ["san remo konferansı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Yunan işgali nedeniyle meclis kürsüsü hangi şehir için siyah örtülmüştür?", a: ["bursa"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr Antlaşması hangi Osmanlı kurulu tarafından onaylanmıştır?", a: ["saltanat şûrası"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr Antlaşması hangi ülkede imzalanmıştır?", a: ["fransa"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İmzalanmasına rağmen yürürlüğe girmeyen antlaşmalar hangileridir?", a: ["ayastefanos ve sevr"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr Antlaşması'nı Saltanat Şûrasında olup da imzalamayan tek kişi kimdir?", a: ["topçu feriki ali rıza paşa"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr Antlaşması'nın hukuken geçersiz olmasının temel sebebi nedir?", a: ["mebusan meclisi'nin onayından geçmemesi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Osmanlı Devleti'nin imzaladığı son antlaşma hangisidir?", a: ["sevr barış antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Milli Mücadele'de hukuki geçerliliği olmayan antlaşma hangisidir?", a: ["sevr barış antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr'in yerine Türkiye'nin bağımsızlığını tescilleyen antlaşma hangisidir?", a: ["lozan antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },

            // Doğu ve Güney Cepheleri
            { q: "TBMM Doğu Cephesi'nde kiminle savaşmıştır?", a: ["ermelenir ve gürcüler"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sevr'den sonra Gürcülerin işgal ettiği Batum'u geri almak için başlatılan harekât nedir?", a: ["posof harekâtı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Osmanlı Devleti Ermenilere dostça ilişkilerinden dolayı ne ad vermiştir?", a: ["millet-i sadıka"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "TBMM Güney Cephesi'nde kiminle savaşmıştır?", a: ["fransız ve ermeniler"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "TBMM Batı Cephesi'nde kiminle savaşmıştır?", a: ["yunanistan ve ingilizler"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Doğu Cephesi'ne Ermeni işgallerini önlemek için atanan komutan kimdir?", a: ["kâzım karabekir"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Kazım Karabekir'e Doğu'daki başarılarından dolayı verilen ünvan nedir?", a: ["şark fatihi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "TBMM'nin imzaladığı İLK antlaşma hangisidir?", a: ["gümrü antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Hangi siyasi sözleşmede ilk defa 'Türkiye Devleti' tabiri kullanılmıştır?", a: ["gümrü antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Maraş'ta Fransızlara karşı ilk direnişi kim başlatmıştır?", a: ["sütçü imam"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Urfa'da direnişi başlatan '12'ler Grubu'nun önderi kimdir?", a: ["hacı mustafa hacıkamiloğlu"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Osmaniye'de Fransızlara karşı şehit düşen kadın kahramanımız kimdir?", a: ["tayyar rahmiye"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İstiklal Madalyası alan İLK yöremiz neresidir?", a: ["inebolu"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İstiklal Madalyası alan İLK şehrimiz hangisidir?", a: ["maraş"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Kastamonu'da cephane taşırken şehit düşen kahramanımız kimdir?", a: ["şerife bacı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Güney Cephesi hangi antlaşma ile kapanmıştır?", a: ["ankara antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },

            // Batı Cephesi (I. ve II. İnönü)
            { q: "Düzenli ordu ilk başarısını hangi savaşta göstermiştir?", a: ["i. inönü savaşı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "I. İnönü Savaşı'na Yunanlılar ne isim vermiştir?", a: ["taarruzi keşif"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Türkiye Cumhuriyeti'nin ilk anayasası (1921) hangi savaştan sonra kabul edilmiştir?", a: ["i. inönü savaşı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Milli marş yarışmasını organize eden kurum hangisidir?", a: ["maarif bakanlığı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İtilaf Devletleri Londra Konferansı'na TBMM'yi hangi devlet aracılığı ile davet etmiştir?", a: ["italya"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Türkiye Devleti'ni tanıyan ilk İslam ülkesi hangisidir?", a: ["afganistan"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İstiklal Marşı kamuoyuna ilk defa hangi gazete ile duyurulmuştur?", a: ["hâkimiyet-i milliye"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "İstiklal Marşı ilk olarak hangi gazetede yayımlanmıştır?", a: ["açıksöz"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "TBMM'yi tanıyan ilk Avrupalı büyük devlet hangisidir?", a: ["sovyetler birliği"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Misakımilli'den taviz verilen ilk antlaşma hangisidir?", a: ["moskova antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Misakımilli'den ilk taviz verilen yer neresidir?", a: ["batum"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Mustafa Kemal 'Milletin tersine dönmüş talihini de yendiniz' sözünü ne zaman söylemiştir?", a: ["ii. inönü savaşı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },

            // Kütahya-Eskişehir, Sakarya ve Büyük Taarruz
            { q: "Düzenli ordunun Yunan ordusu karşısındaki ilk ve tek başarısızlığı nedir?", a: ["kütahya-eskişehir savaşları"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Eskişehir-Kütahya Savaşları sürerken toplanan kongre hangisidir?", a: ["eğitim kongresi", "maarif kongresi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Subaylar Savaşı veya Melhame-i Kübra olarak bilinen savaş hangisidir?", a: ["sakarya meydan savaşı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "II. Viyana'dan beri süren geri çekilme hangi savaşla son bulmuştur?", a: ["sakarya meydan muharebesi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Ankara Antlaşması'na göre Türk toprağı sayılan Suriye'deki tarihi yer neresidir?", a: ["caber kalesi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Doğu sınırını kesin olarak çizen antlaşma hangisidir?", a: ["kars antlaşması"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Misak-ı Milli sınırlarından verilen ikinci taviz neresidir?", a: ["hatay"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Anadolu'dan ilk çekilen devlet hangisidir?", a: ["italya"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Sakarya sonrası Mustafa Kemal'e hangi rütbe ve ünvan verilmiştir?", a: ["mareşallik ve gazilik"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Rum Sındığı Savaşı olarak nitelendirilen savaş hangisidir?", a: ["büyük taarruz"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Büyük Taarruz'da esir edilen Yunan başkomutanı kimdir?", a: ["general trikopis"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },

            // Mudanya ve Lozan
            { q: "Mudanya Ateşkesi ile savaş yapılmadan alınan bölgeler nerelerdir?", a: ["istanbul boğazlar ve doğu trakya"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Lozan'a Türkiye adına giden delegeler kimlerdir?", a: ["ismet inönü hasan saka rıza nur"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Lozan'da çözümü İngiltere ile sonraya bırakılan tek mesele nedir?", a: ["musul sorunu", "ırak sınırı"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Yunanistan'dan savaş tazminatı olarak alınan yerler nerelerdir?", a: ["karaağaç ve bosnaköy"], topicTitle: "Milli Mücadele Muharebeler Dönemi" },
            { q: "Lozan'da ekümenik yetkileri tanınmayan kurum hangisidir?", a: ["fener rum patrikhanesi"], topicTitle: "Milli Mücadele Muharebeler Dönemi" }
        ],

        ataturk_inkilaplari: [
            // Siyasi Gelişmeler ve Cumhuriyet
            { q: "Türkiye'nin başkanlığındaki bir komisyonla yönetilmesi kararlaştırılan konu nedir?", a: ["boğazlar"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal'in Cumhuriyet'in ilanının önünde en büyük engel olarak gördüğü şey nedir?", a: ["saltanat makamı"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Lozan Barış Görüşmeleri'nin yarıda kesilmesi üzerine ekonomi için toplanan kongre nedir?", a: ["izmir iktisat kongresi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Cumhuriyet'in ilanı ile çözüme kavuşturulan temel konular nelerdir?", a: ["rejim devlet başkanlığı ve hükümet bunalımı"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal'in 'Yeni Türkiye Devleti'nin başkentini yasayla saptamak gerekiyordu' dediği şehir hangisidir?", a: ["ankara"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Son Osmanlı halifesi kimdir?", a: ["abdülmecit efendi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Halifeliğin kaldırılması için kanun teklifi veren mebus kimdir?", a: ["şeyh saffet efendi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal hangi inkılabıyla ordu ve siyaseti birbirinden ayırmıştır?", a: ["erkân-ı harbiye vekâletinin kaldırılması"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Türkiye Cumhuriyeti'nin ilk siyasal partisinin adı nedir?", a: ["cumhuriyet halk fırkası"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Cumhuriyet Halk Partisi'nin 'Milli Şef' olarak nitelendirdiği devlet adamı kimdir?", a: ["ismet inönü"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            
            // Çok Partili Hayat Denemeleri ve İsyanlar
            { q: "Türkiye Cumhuriyeti'nin ilk muhalefet partisinin adı nedir?", a: ["terakkiperver cumhuriyet fırkası"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Terakkiperver Cumhuriyet Fırkası'nın kurucuları kimlerdir?", a: ["kâzım karabekir rauf orbay ali fuat cebesoy refet bele adnan adıvar"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "TCF'nin kapatılmasına neden olan olay nedir?", a: ["şeyh sait isyanı"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Türkiye Cumhuriyeti rejimine karşı çıkan İLK isyan hangisidir?", a: ["şeyh sait isyanı"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Şeyh Sait İsyanı'nı bastırmak için 1925'te çıkarılan kanun nedir?", a: ["takrir-i sükûn kanunu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal'e 1926 yılında suikast planlanan şehir hangisidir?", a: ["izmir"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal 'Benim naçiz vücudum elbet bir gün toprak olacaktır' sözünü hangi olaydan sonra söylemiştir?", a: ["izmir suikasti"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "1929 ekonomik bunalımı sonrası kurulan ikinci muhalefet partisi nedir?", a: ["serbest cumhuriyet fırkası"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Serbest Cumhuriyet Fırkası'nın kurucusu kimdir?", a: ["ali fethi okyar"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Menemen Olayı'nda şehit edilen asteğmen kimdir?", a: ["asteğmen kubilay"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Atatürk'ün 'Bu bir din meselesi değil, dil meselesidir' dediği olay nedir?", a: ["bursa olayı", "ezanın türkçe okunması"], topicTitle: "Atatürk İnkılapları ve İç Politika" },

            // Hukuk, Eğitim ve Kültür İnkılapları
            { q: "Sosyal hayatın laikleşmesi yolunda atılan en önemli adım nedir?", a: ["türk medeni kanunu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Türk Medeni Kanunu hangi ülkenin kanunundan yararlanılarak hazırlandı?", a: ["isviçre"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Eğitimde birliği sağlayan ve medreselerin kapatılmasına ortam hazırlayan kanun nedir?", a: ["tevhid-i tedrisat kanunu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Latin harfleri ile çıkarılan ilk gazete hangisidir?", a: ["mardin gazetesi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Yeni alfabenin öğretilmesi için açılan zorunlu kurslara ne ad verilir?", a: ["millet mektepleri"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Halkevlerinin yayın organı olan dergi hangisidir?", a: ["ülkü dergisi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Atatürk'ü 'Başöğretmen' ilan eden kurum nedir?", a: ["millet mektepleri"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Türk tarihinin bilimsel incelenmesi için kurulan kurum nedir?", a: ["türk tarih kurumu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Atatürk'ün bizzat hazırladığı geometri kitabı hangisidir?", a: ["geometri kılavuzu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Darülfünun'un yerine 1933'te açılan kurum hangisidir?", a: ["istanbul üniversitesi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            
            // Toplumsal ve Ekonomik İnkılaplar
            { q: "Atatürk Şapka İnkılabı'nı hangi şehirde açıklamıştır?", a: ["kastamonu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Soyadı Kanunu ile kaldırılan karışıklıkları önlemek için ne yapılmıştır?", a: ["lakap ve ünvanların yasaklanması"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Ekonomi politikası oluşturmak için toplanan büyük kongre hangisidir?", a: ["türkiye iktisat kongresi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Köylünün durumunu düzeltmek için kaldırılan vergi nedir?", a: ["aşar vergisi"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Denizlerdeki egemenlik haklarımızı sağlayan 1 Temmuz 1926 tarihli kanun nedir?", a: ["kabotaj kanunu"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Kadınlara seçme ve seçilme hakkı verilme sırası nasıldır?", a: ["belediye muhtarlık milletvekilliği"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Nutuk adlı eser hangi yılları kapsar?", a: ["1919-1927"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Türkiye'nin ilk kadın savaş pilotu kimdir?", a: ["sabiha gökçen"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "10. Yıl Marşı'nın bestecisi kimdir?", a: ["cemal reşit rey"], topicTitle: "Atatürk İnkılapları ve İç Politika" },

            // Atatürk'ün Hayatı ve Fikirleri
            { q: "Mustafa Kemal'e 1935 yılında verilen 'Şarkın Babası' anlamına gelen lakap nedir?", a: ["ataşark"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Atatürk'ün 'Hayatımı etkilediği' dediği beş şehir hangileridir?", a: ["selanik manastır istanbul sofya şam"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Mustafa Kemal'in 'Fikirlerimin babasıdır' dediği düşünür kimdir?", a: ["ziya gökalp"], topicTitle: "Atatürk İnkılapları ve İç Politika" },
            { q: "Atatürk'ün 'Ben inkılap ruhunu ondan aldım' dediği Türk düşünürü kimdir?", a: ["tevfik fikret"], topicTitle: "Atatürk İnkılapları ve İç Politika" }
        ],
        ataturk_hayati_dis_politika: [
            // Atatürk'ün Hayatı ve Fikir Yapısı
            { q: "Mustafa Kemal'e 1935'te verilen 'Ataşark' (Şarkın Babası) lakabı nerede verilmiştir?", a: ["uluslararası kadınlar birliği kongresi"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Mustafa Kemal'in staj için atandığı ilk görev yeri neresidir?", a: ["şam 5. ordu"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün 'Fikirlerimin babasıdır' dediği düşünür kimdir?", a: ["ziya gökalp"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Mustafa Kemal'in 'Ben inkılap ruhunu ondan aldım' dediği düşünür kimdir?", a: ["tevfik fikret"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün vefat ettiği sırada TBMM Başkanı kimdir?", a: ["abdülhalik renda"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün vefatı öncesinde okumuş olduğu son yayın hangisidir?", a: ["belleten"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün naaşının 1938-1953 yılları arasında geçici olarak bulunduğu yer neresidir?", a: ["ankara etnografya müzesi"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Mustafa Kemal'in 1910 yılında Fransa'da katıldığı askerî tatbikat nedir?", a: ["picardie manevraları"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Mustafa Kemal'in ilk kez katıldığı savaş hangisidir?", a: ["trablusgarp savaşı"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Mustafa Kemal, Trablusgarp Savaşı'nda hangi takma adı kullanmıştır?", a: ["mustafa şerif", "gazeteci şerif"], topicTitle: "Atatürk Hayatı ve Dış Politika" },

            // Atatürk İlkeleri
            { q: "Kanunlar önünde kesin bir eşitliği savunan Atatürk ilkesi hangisidir?", a: ["halkçılık"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Temelinde akıl ve bilimi esas alan Atatürk ilkesi hangisidir?", a: ["laiklik"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Yeniliklere açık olmayı ve modernleşmeyi hedefleyen Atatürk ilkesi hangisidir?", a: ["inkılapçılık"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Türk Devleti'ne vatandaşlık bağı ile bağlı olan herkesi Türk kabul eden ilke hangisidir?", a: ["milliyetçilik"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Ekonomide devletin müdahalesini ve yatırımını savunan ilke hangisidir?", a: ["devletçilik"], topicTitle: "Atatürk Hayatı ve Dış Politika" },

            // Türk Dış Politikası (1923 - 1938)
            { q: "Lozan'da çözüme kavuşturulamayan tek konu hangisidir?", a: ["ırak sınırı", "musul sorunu"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Nüfus mübadelesi (Ahali Antlaşması) hangi yıl imzalanmıştır?", a: ["1930"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Adana-Mersin demir yollarının millileştirilmesi hangi devletle sorun yaratmıştır?", a: ["fransa"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Yabancı okullar sorununda Türkiye'ye en çok tepki veren ülke hangisidir?", a: ["fransa"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Türkiye'nin Milletler Cemiyeti'ndeki ilk temsilcisi kimdir?", a: ["cemal hüsnü taray"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Türkiye'yi Milletler Cemiyeti'ne üye olması için davet eden ülke hangisidir?", a: ["ispanya"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "1934'te Atatürk'ü Nobel Barış Ödülü'ne aday gösteren devlet adamı kimdir?", a: ["venizelos"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Boğazlar üzerinde tam egemenlik sağlayan 1936 tarihli sözleşme nedir?", a: ["montrö boğazlar sözleşmesi"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "İtalya'nın yayılmacı politikasına karşı doğu sınırlarını korumak için 1937'de kurulan pakt nedir?", a: ["sadabat paktı"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün 'Kırk asırlık Türk yurdu düşman elinde esir kalamaz' dediği yer neresidir?", a: ["hatay"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Hatay Cumhuriyeti'nin ilk ve tek cumhurbaşkanı kimdir?", a: ["tayfur sökmen"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Hatay'ın ana vatana katılması hangi yılda gerçekleşmiştir?", a: ["1939"], topicTitle: "Atatürk Hayatı ve Dış Politika" },
            { q: "Atatürk'ün Hatay sorunu için 'Asım Us' takma adıyla yazdığı gazete hangisidir?", a: ["kurun gazetesi"], topicTitle: "Atatürk Hayatı ve Dış Politika" }
        ],

        dunya_savasi: [
            // I. Dünya Savaşı ve Sonrası
            { q: "Birinci Dünya Savaşı hangi yıllar arasını kapsar?", a: ["1914-1918"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Almanya, I. Dünya Savaşı öncesi Fransa'nın ham madde bakımından zengin olan hangi bölgesini işgal etmiştir?", a: ["alsace lorraine", "alsas loren"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Almanya ve Avusturya-Macaristan'ın I. Dünya Savaşı öncesi izlediği Cermen birliği politikası nedir?", a: ["pangermenizm"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Birinci Dünya Savaşı'nı başlatan gelişme nedir?", a: ["ferdinandın öldürülmesi"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Bolşevik İhtilali sonucu Rusya'da yönetimi ele geçiren lider kimdir?", a: ["lenin"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Rusya hangi antlaşma ile I. Dünya Savaşı'ndan çekilmiştir?", a: ["brest litovsk antlaşması"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "İtalya'da faşizm akımının lideri kimdir?", a: ["mussolini"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Almanya'da nasyonal sosyalizm (Nazi) akımının lideri kimdir?", a: ["hitler"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Japonya'da modernleşme sürecini (Meiji Restorasyonu) başlatan imparator kimdir?", a: ["mutsuhito"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "1929 Dünya Ekonomik Bunalımı (Kara Perşembe) nerede başlamıştır?", a: ["abd", "new york"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },

            // II. Dünya Savaşı Öncesi ve Başlangıcı
            { q: "II. Dünya Savaşı hangi tarihler arasındadır?", a: ["1939-1945"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Hitler'in Alman halkına yeni yerleşim alanları açma politikasına ne denir?", a: ["hayat sahası"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Mussolini'nin Akdeniz için kullandığı 'Bizim Deniz' ifadesi nedir?", a: ["mare nostrum"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Savaşı başlatan olay, Almanya'nın hangi ülkeyi işgalidir?", a: ["polonya"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "II. Dünya Savaşı'nda Mihver Devletler hangileridir?", a: ["almanya italya japonya"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "II. Dünya Savaşı'nda Müttefik Devletler hangileridir?", a: ["ingiltere fransa sscb abd"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Almanya'nın İngiltere'ye karşı başlattığı hava saldırısının adı nedir?", a: ["kartal hücumu"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Almanya'nın Rusya'yı işgal etmek amacıyla başlattığı harekatın adı nedir?", a: ["barbarossa harekatı"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "ABD'nin savaşa girmesine neden olan olay nedir?", a: ["pearl harbor baskını"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },

            // Savaşın Sonu ve Sonuçları
            { q: "Müttefiklerin Avrupa'yı Alman işgalinden kurtarmak için başlattığı büyük harekat nedir?", a: ["normandiya çıkarması"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Dünya tarihinde atom bombası kullanılan ilk şehir hangisidir?", a: ["hiroşima"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Yalta Konferansı'nın 'Üç Büyükleri' kimlerdir?", a: ["churchill roosevelt stalin"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Birleşmiş Milletler Teşkilatı hangi konferansta kurulmuştur?", a: ["san francisco konferansı"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "İnsan haklarını korumak için 1948'de kabul edilen belge nedir?", a: ["insan hakları evrensel beyannamesi"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },

            // II. Dünya Savaşı'nda Türkiye
            { q: "Türkiye hangi karar üzerine Almanya ve Japonya'ya sembolik olarak savaş ilan etmiştir?", a: ["bm teşkilatına üye olabilmek için"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "II. Dünya Savaşı yıllarında Türkiye Cumhuriyeti Cumhurbaşkanı kimdir?", a: ["ismet inönü"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Haksız kazançların önüne geçmek için 1942'de kabul edilen kanun nedir?", a: ["varlık vergisi"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "1940'ta köylülerin pratik bilgilerle eğitilmesi için açılan kurum nedir?", a: ["köy enstitüleri"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "II. Dünya Savaşı sırasında halkın moralini yüksek tutmak için yapılan radyo programı nedir?", a: ["yurttan sesler"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Türkiye'nin ilk Türk demir yolu müteahhidi ve sigara kağıdı üreticisi kimdir?", a: ["nuri demirağ"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" },
            { q: "Soğuk Savaş terimini ilk kez kullanan kişi kimdir?", a: ["bernard baruch"], topicTitle: "20. YY Dünya ve II. Dünya Savaşı" }
        ],

        soguk_savas_yumusama: [
            // Soğuk Savaş ve Bloklaşmalar
            { q: "1945'ten 1990'a kadar ABD ve SSCB arasındaki siyasi ve askeri mücadeleye ne ad verilir?", a: ["soğuk savaş"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "SSCB'nin ideolojik faaliyetleri tek merkezden idare etmek için kurduğu oluşum nedir?", a: ["cominform"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Komünist ülkeler arasında ekonomik iş birliği için kurulan teşkilat nedir?", a: ["comecon"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Doğu Bloku'nun kolektif savunma amacıyla kurduğu askeri teşkilat nedir?", a: ["varşova paktı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "ABD'nin Batı dünyasının liderliğini üstlenmek için yaptığı ilk girişim nedir?", a: ["truman doktrini"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "ABD öncülüğünde 1949'da kurulan askeri teşkilatın adı nedir?", a: ["nato"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Türkiye NATO'ya hangi yıl ve hangi savaş sayesinde üye olmuştur?", a: ["1952 kore savaşı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "ABD'nin komünizmin yayılmasını önlemek için sunduğu ekonomik yardım programı nedir?", a: ["marshall planı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Yahudi devleti kurulmasını öngören 1917 tarihli İngiliz bildirisi nedir?", a: ["balfour deklarasyonu"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Uzak Doğu'da komünizmi engellemek için kurulan birliğin adı nedir?", a: ["seato"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },

            // Hindistan, Pakistan ve Ortadoğu
            { q: "Günümüz Hindistan Devleti'nin kurucusu kimdir?", a: ["mahatma gandhi"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Pakistan Devleti'nin kurucusu kimdir?", a: ["muhammet ali cinnah"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Hindistan ve Pakistan arasında günümüzde de sorun olan bölge neresidir?", a: ["keşmir"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Güney Afrika'nın seçimle gelen ilk siyahi devlet başkanı kimdir?", a: ["nelson mandela"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Bağdat Paktı'nın merkezi Ankara'ya taşınınca adı ne olmuştur?", a: ["cento"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },

            // Yumuşama (Detant) Dönemi
            { q: "Bloklar arası gerginliğin azaldığı görüşme dönemine ne ad verilir?", a: ["yumuşama dönemi", "detant"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "ABD-Çin ilişkilerinin yumuşamasını sağlayan diplomatik gelişme nedir?", a: ["ping-pong diplomasisi"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Doğu Bloku ülkelerinin Avrupa emniyeti için 1975'te katıldığı konferans nedir?", a: ["helsinki konferansı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Vietnam Savaşı'na gitmeyi reddettiği için ünvanları elinden alınan boksör kimdir?", a: ["muhammed ali"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Ermeni iddialarının 'Tanıtım, Tanınma, Tazminat ve Toprak' aşamalarını içeren plana ne denir?", a: ["dört t planı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Türk diplomatlara suikastlar düzenleyen Ermeni terör örgütü nedir?", a: ["asala"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },

            // Kıbrıs Sorunu
            { q: "Kıbrıs'ın Yunanistan'a bağlanmasını öngören idealin adı nedir?", a: ["enosis"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Kıbrıs'ta Türklerin imhasını öngören Rum planının adı nedir?", a: ["akritas planı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "EOKA'ya karşı kurulan Türk savunma teşkilatı nedir?", a: ["türk mukavemet teşkilatı"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "1974 Kıbrıs Barış Harekâtı hangi başbakan döneminde yapılmıştır?", a: ["bülent ecevit"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "KKTC'nin ilk cumhurbaşkanı kimdir?", a: ["rauf denktaş"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Kıbrıs'ta esir alınıp şehit edilen İLK hava harp şehidimiz kimdir?", a: ["cengiz topel"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },

            // Türkiye'de İç Politika ve Kültür
            { q: "1950 seçimlerinde Demokrat Parti'nin iktidara gelmesine ne ad verilir?", a: ["beyaz ihtilal"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Türkiye'nin ilk yerli motor fabrikası hangisidir?", a: ["gümüş motor"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "İlk Türk arabası 'Devrim' hangi cumhurbaşkanının direktifiyle üretilmiştir?", a: ["cemal gürsel"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "1960 darbesi sonrası Yassıada'da yargılanıp idam edilen başbakan kimdir?", a: ["adnan menderes"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Ay'a ayak basan ilk insan kimdir?", a: ["neil armstrong"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "1962'de kurulan ve bilimsel araştırmaları destekleyen kurum nedir?", a: ["tübitak"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" },
            { q: "Berlin'de 'Altın Ayı' ödülünü alan ilk Türk filmi hangisidir?", a: ["susuz yaz"], topicTitle: "Soğuk Savaş ve Yumuşama Dönemi" }
        ],

        kuresellesen_dunya: [
            // 1960 Sonrası Türkiye ve Bilim
            { q: "1971 Akdeniz Oyunları'na ev sahipliği yapan ilimiz hangisidir?", a: ["izmir"], topicTitle: "Küreselleşen Dünya" },
            { q: "1960 darbesi sonrası Yassıada'da idam edilen başbakan kimdir?", a: ["adnan menderes"], topicTitle: "Küreselleşen Dünya" },
            { q: "Ay'a ayak basan ilk insan kimdir?", a: ["neil armstrong"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türkiye'de demokrasiyi kesintiye uğratan İLK askeri müdahale nedir?", a: ["27 mayıs ihtilali"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türkiye'nin ilk koalisyon hükümeti hangi partilerce kurulmuştur?", a: ["chp ve adalet partisi"], topicTitle: "Küreselleşen Dünya" },
            { q: "1971 Muhtırası sonrası kurulan teknokrat hükümetin başı kimdir?", a: ["nihat erim"], topicTitle: "Küreselleşen Dünya" },
            { q: "17 Temmuz 1962'de kurulan bilimsel araştırma kurumu nedir?", a: ["tübitak"], topicTitle: "Küreselleşen Dünya" },
            { q: "1975'te Türkiye'yi Eurovision'da temsil eden ilk sanatçı kimdir?", a: ["semiha yankı"], topicTitle: "Küreselleşen Dünya" },
            { q: "1982 Anayasası komisyon başkanı kimdir?", a: ["prof. dr. orhan aldıkaçtı"], topicTitle: "Küreselleşen Dünya" },
            { q: "1983 seçimlerinde tek başına iktidara gelen parti hangisidir?", a: ["anavatan partisi"], topicTitle: "Küreselleşen Dünya" },
            { q: "Berlin'de 'Altın Ayı' ödülünü alan ilk Türk filmi hangisidir?", a: ["susuz yaz"], topicTitle: "Küreselleşen Dünya" },

            // SSCB'nin Dağılması ve Yeni Cumhuriyetler
            { q: "1985'te Perestroyka ve Glasnost kavramlarını ortaya atan SSCB lideri kimdir?", a: ["mihail gorbaçov"], topicTitle: "Küreselleşen Dünya" },
            { q: "SSCB'yi hantallıktan kurtarmayı amaçlayan yeniden yapılanma politikasına ne ad verilir?", a: ["perestroika"], topicTitle: "Küreselleşen Dünya" },
            { q: "1989'da 'Kadife Devrimi' ile demokrasiye adım atan Doğu Bloku ülkesi hangisidir?", a: ["çekoslovakya"], topicTitle: "Küreselleşen Dünya" },
            { q: "1996'da kurulan Şanghay Beşlisi'ne 2001'de katılan ve adı ŞİÖ olan devlet hangisidir?", a: ["özbekistan"], topicTitle: "Küreselleşen Dünya" },
            { q: "Azerbaycan Cumhuriyeti'nin kurucusu kimdir?", a: ["ebulfez elçibey"], topicTitle: "Küreselleşen Dünya" },
            { q: "Kazakistan'ın kurucusu kimdir?", a: ["nursultan nazarbayev"], topicTitle: "Küreselleşen Dünya" },
            { q: "Kırgızistan'ın kurucusu kimdir?", a: ["askar akayev"], topicTitle: "Küreselleşen Dünya" },
            { q: "Özbekistan'ın kurucusu kimdir?", a: ["islam kerimov"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türkmenistan'ın kurucusu kimdir?", a: ["saparmurad niyazov"], topicTitle: "Küreselleşen Dünya" },
            { q: "1992'de gelişmekte olan ülkelere iş birliği sağlamak amacıyla kurulan teşkilat nedir?", a: ["tika"], topicTitle: "Küreselleşen Dünya" },
            { q: "Almanya'nın tekrar birleşmesini sağlayan gelişme nedir?", a: ["berlin duvarı'nın yıkılması"], topicTitle: "Küreselleşen Dünya" },

            // Avrupa Birliği ve Balkanlar
            { q: "Avrupa Ekonomik Topluluğu hangi antlaşma ile Avrupa Birliği adını almıştır?", a: ["maastricht antlaşması"], topicTitle: "Küreselleşen Dünya" },
            { q: "Bosna Savaşı'nı bitiren 14 Aralık 1995 tarihli antlaşma hangisidir?", a: ["dayton antlaşması"], topicTitle: "Küreselleşen Dünya" },
            { q: "Bosna Hersek'in bağımsızlığında büyük rol oynayan İLK devlet başkanı kimdir?", a: ["aliya izzetbegović"], topicTitle: "Küreselleşen Dünya" },
            { q: "Sırp güçlerinin 1995'te Bosna-Hersek'te gerçekleştirdiği katliamın adı nedir?", a: ["srebrenitsa katliamı"], topicTitle: "Küreselleşen Dünya" },

            // Ortadoğu ve Güncel Olaylar
            { q: "1991'de Irak'a yönelik gerçekleştirilen hava saldırısına ne ad verilmiştir?", a: ["çöl fırtınası operasyonu"], topicTitle: "Küreselleşen Dünya" },
            { q: "1964 yılında Yaser Arafat önderliğinde kurulan direniş örgütü nedir?", a: ["filistin kurtuluş örgütü", "fkö"], topicTitle: "Küreselleşen Dünya" },
            { q: "1986'da Ukrayna'da meydana gelen nükleer kazanın adı nedir?", a: ["çernobil"], topicTitle: "Küreselleşen Dünya" },
            { q: "Azerbaycan petrollerinin taşınması amacıyla 2005'te tamamlanan hattın adı nedir?", a: ["bakü tiflis ceyhan"], topicTitle: "Küreselleşen Dünya" },
            { q: "Kıbrıs Sorunu'nun çözümü için kendi adıyla plan sunan BM Genel Sekreteri kimdir?", a: ["kofi annan"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türk dili konuşan ülkelerin kültür bakanları tarafından 1993'te kurulan örgüt nedir?", a: ["türksoy"], topicTitle: "Küreselleşen Dünya" },
            { q: "2010 yılında Tunus'ta Muhammed Buazizi'nin kendisini yakmasıyla başlayan hareket nedir?", a: ["arap baharı"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türkiye'nin AB'ye uyum sağlaması amacıyla hazırlanan programın adı nedir?", a: ["ulusal program"], topicTitle: "Küreselleşen Dünya" },
            { q: "2006 yılında Nobel Edebiyat Ödülü'nü kazanan yazarımız kimdir?", a: ["orhan pamuk"], topicTitle: "Küreselleşen Dünya" },
            { q: "Türkiye'de ilk internet bağlantısı hangi üniversitede sağlanmıştır?", a: ["odtü"], topicTitle: "Küreselleşen Dünya" },
            { q: "Dünyanın en genç profesörü ünvanına sahip Türk bilim insanı kimdir?", a: ["oktay sinanoğlu"], topicTitle: "Küreselleşen Dünya" },
            { q: "Parkinson çalışmalarıyla tanınan 'Yüzyılın Beyin Cerrahı' ünvanlı doktor kimdir?", a: ["gazi yaşargil"], topicTitle: "Küreselleşen Dünya" },
            { q: "Cep Herkülü olarak bilinen efsanevi haltercimiz kimdir?", a: ["naim süleymanoğlu"], topicTitle: "Küreselleşen Dünya" },
            { q: "Kyoto Protokolü hangi küresel soruna karşı hazırlanmıştır?", a: ["küresel ısınma"], topicTitle: "Küreselleşen Dünya" }
        ]

    },
    // --- YER ŞEKİLLERİ MENÜSÜ (Eski Ana Menü İçeriği) ---
    yersekilleri: [
        { id: "daglar", title: "Dağlar", icon: "⛰️", desc: "Kıvrım, Kırık, Volkanik", type: "menu" },
        { id: "goller", title: "Göller", icon: "💧", desc: "Oluşumlarına Göre Göller", type: "menu" },
        { id: "akarsular", title: "Akarsular", icon: "🌊", desc: "Türkiye'nin Nehirleri", type: "game" },
        { id: "platolar", title: "Platolar", icon: "🏞️", desc: "Türkiye'nin Düzlükleri", type: "menu" },
        { id: "ovalar", title: "Ovalar", icon: "🌾", desc: "Delta, Tektonik, Karstik", type: "menu" }
    ],
    
    // --- MADENLER MENÜSÜ ---
    madenler: [
        { id: "demir", title: "Demir", icon: "🏗️", desc: "Sivas-Divriği, Malatya-Hekimhan", type: "game" },
        { id: "bakir", title: "Bakır", icon: "🔌", desc: "Artvin-Murgul, Kastamonu-Küre", type: "game" },
        { id: "altin", title: "Altın", icon: "🥇", desc: "Bergama, Uşak, Erzincan, Artvin", type: "game" },
        { id: "bor", title: "Bor Mineralleri", icon: "🧪", desc: "Balıkesir, Kütahya, Eskişehir", type: "game" },
        { id: "krom", title: "Krom", icon: "⚙️", desc: "Elazığ-Guleman, Muğla-Köyceğiz", type: "game" },
        { id: "boksit", title: "Boksit (Alüminyum)", icon: "🥤", desc: "Konya-Seydişehir, Antalya-Akseki", type: "game" },
        { id: "kukurt", title: "Kükürt", icon: "🟡", desc: "Isparta-Keçiborlu (Rezerv Bitti)", type: "game" },
        { id: "fosfat", title: "Fosfat", icon: "🌱", desc: "Mardin-Mazıdağı, İthalat Limanları", type: "game" },
        { id: "bentonit", title: "Bentonit", icon: "🧱", desc: "Tokat-Reşadiye, Sondaj Çamuru", type: "game" },
        { id: "tuz", title: "Tuz", icon: "🧂", desc: "Tuz Gölü, Çamaltı, Kaya Tuzu", type: "game" },
        { id: "mermer", title: "Mermer", icon: "🏛️", desc: "Afyon, Marmara Adası, Elazığ (İhracat Lideri)", type: "game" },
        { id: "volfram", title: "Volfram (Tungsten)", icon: "🚀", desc: "Bursa-Uludağ (Uzay ve Savunma Sanayi)", type: "game" },
        { id: "feldispat", title: "Feldispat", icon: "⚱️", desc: "Aydın-Çine, Manisa (Cam ve Seramik)", type: "game" },
        { id: "barit", title: "Barit", icon: "🎱", desc: "Antalya-Alanya, Muş (Petrol Sondajı, Bilardo Topu)", type: "game" },
        { id: "molibden", title: "Molibden", icon: "🚀", desc: "Kırklareli-Dereköy (Özel Çelik, Uzay Sanayi)", type: "game" },
        { id: "dolomit", title: "Dolomit", icon: "🧱", desc: "Konya, Adana, Sedimanter Kayaç", type: "game" },
        { id: "nikel", title: "Nikel", icon: "🔩", desc: "Manisa-Çaldağ (Paslanmaz Çelik, Batarya)", type: "game" },
        
    ],
    // --- ENERJİ KAYNAKLARI MENÜSÜ ---
    enerji: [
        { id: "taskomuru", title: "Taşkömürü", icon: "⚫", desc: "Zonguldak (Demir-Çelik Enerjisi)", type: "game" },
        { id: "linyit", title: "Linyit", icon: "🟤", desc: "Türkiye'nin en yaygın kaynağı", type: "game" },
        { id: "petrol", title: "Petrol", icon: "🛢️", desc: "Batman, Adıyaman (Dışa Bağımlıyız)", type: "game" },
        { id: "dogalgaz", title: "Doğalgaz", icon: "🔥", desc: "Hamitabat, Akçakoca (Temiz Enerji)", type: "game" },
        { id: "jeotermal", title: "Jeotermal", icon: "♨️", desc: "Aydın, Denizli (Sıcak Su)", type: "game" },
        { id: "ruzgar", title: "Rüzgar", icon: "💨", desc: "Ege Bölgesi, Çanakkale", type: "game" },
        { id: "hidroelektrik", title: "Hidroelektrik", icon: "💧", desc: "Barajlar ve Enerji Potansiyeli", type: "game" },
        { id: "nukleer", title: "Nükleer", icon: "☢️", desc: "Mersin-Akkuyu, Sinop (Yapım Aşamasında)", type: "game" },
        { id: "biyokutle", title: "Biyokütle ve Biyogaz", icon: "♻️", desc: "Şehir Çöpleri ve Tarımsal Atıklar", type: "game" },
    ],
    // --- ALT MENÜLER ---
    daglar: [
        { id: "kivrim", title: "Kıvrım Dağları", icon: "〰️", desc: "Toroslar ve Kuzey Anadolu", type: "game" },
        { id: "kirik", title: "Kırık (Horst-Graben)", icon: "📉", desc: "Ege Bölgesi Dağları", type: "game" },
        { id: "volkanik", title: "Volkanik Dağlar", icon: "🌋", desc: "Ağrı, Erciyes, Nemrut...", type: "game" }
    ],
    goller: [
        { id: "tektonik", title: "Tektonik Göller", icon: "🌍", desc: "Tuz, Beyşehir, Eğirdir...", type: "game" },
        { id: "karstikgoller", title: "Karstik Göller", icon: "🕳️", desc: "Salda, Avlan, Kestel...", type: "game" },
        { id: "volkanikgol", title: "Volkanik Göller", icon: "🔥", desc: "Nemrut, Meke, Gölcük", type: "game" },
        { id: "buzul", title: "Buzul (Sirk) Gölleri", icon: "❄️", desc: "Kaçkar, Cilo, Uludağ", type: "game" },
        { id: "volkanikset", title: "Volkanik Set Gölleri", icon: "🧱", desc: "Van, Çıldır, Erçek...", type: "game" },
        { id: "aluvyonset", title: "Alüvyal Set Gölleri", icon: "🏖️", desc: "Köyceğiz, Eymir, Mogan", type: "game" },
        { id: "kiyiset", title: "Kıyı Set (Lagün)", icon: "🌊", desc: "Büyükçekmece, Durusu...", type: "game" },
        { id: "heyelanset", title: "Heyelan Set Gölleri", icon: "🏚️", desc: "Tortum, Sera, Abant...", type: "game" },
        { id: "travertenset", title: "Traverten Set", icon: "⚪", desc: "Otlukbeli Gölü", type: "game" },
        { id: "barajlar", title: "Barajlar", icon: "⚡", desc: "Atatürk, Keban, Deriner...", type: "game" }
    ],
    platolar: [
        { id: "tabakaduzlugu", title: "Yatay Duruşlu", icon: "📏", desc: "Haymana, Cihanbeyli, Bozok", type: "game" },
        { id: "lav", title: "Volkanik (Lav)", icon: "🌋", desc: "Erzurum - Kars", type: "game" },
        { id: "karstikplato", title: "Karstik Platolar", icon: "🕳️", desc: "Teke ve Taşeli", type: "game" },
        { id: "asinim", title: "Aşınım (Peneplen)", icon: "📉", desc: "Çatalca - Kocaeli", type: "game" }
    ],
    ovalar: [
        { id: "delta", title: "Delta Ovaları", icon: "🏖️", desc: "Çarşamba, Bafra, Çukurova", type: "game" },
        { id: "karstikovalar", title: "Karstik Ovalar (Polye)", icon: "🧪", desc: "Tefenni, Acıpayam, Korkuteli", type: "game" },
        { id: "tektonikovalar", title: "Tektonik Ovalar", icon: "🏗️", desc: "Fay Hatları ve Çöküntü Alanları", type: "game" },
        { id: "volkanikovalar", title: "Volkanik Ovalar", icon: "🌋", desc: "Kayseri, Develi, Çaldıran", type: "game" }
    ],
    

    // --- HARİTA KOORDİNAT VERİLERİ ---
    gameData: {

        


        // --- MADENLER (YENİ EKLENDİ) ---
        demir: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "dm1", label: "1", names: ["divriği"], lat: 39.37, lng: 38.12, type: "cikarim", desc: "En zengin yatak / Sivas" }, 
            { id: "dm2", label: "2", names: ["hekimhan", "hasançelebi"], lat: 38.82, lng: 37.93, type: "cikarim", desc: "Malatya" },
            { id: "dm3", label: "3", names: ["çamdağı"], lat: 40.92, lng: 30.82, type: "cikarim", desc: "Sakarya" },
            { id: "dm4", label: "4", names: ["havran", "eğmir"], lat: 39.56, lng: 27.10, type: "cikarim", desc: "Balıkesir" },
            { id: "dm5", label: "5", names: ["adana", "feke", "mansurlu"], lat: 37.80, lng: 35.90, type: "cikarim", desc: "Adana" },
            { id: "dm6", label: "6", names: ["torbalı"], lat: 38.15, lng: 27.36, type: "cikarim", desc: "İzmir" },
            { id: "dm7", label: "7", names: ["maraş", "kahramanmaraş"], lat: 37.58, lng: 36.93, type: "cikarim", desc: "K.Maraş" },

            // --- İŞLENEN YERLER (FABRİKA - KIRMIZI PİN) ---
            // Not: 'desc' kısmına fabrikaların kuruluş nedenlerini yazdım, sınavda çok işe yarar.
            { id: "dm_is1", label: "F", names: ["iskenderun", "isdemir"], lat: 36.62, lng: 36.20, type: "isleme", desc: "Sebep: Ulaşım (Liman)" },
            { id: "dm_is2", label: "F", names: ["ereğli", "erdemir"], lat: 41.28, lng: 31.42, type: "isleme", desc: "Sebep: Enerji (Taşkömürü)" },
            { id: "dm_is3", label: "F", names: ["karabük", "kardemir"], lat: 41.20, lng: 32.62, type: "isleme", desc: "Sebep: Enerji (Taşkömürü)" },
            { id: "dm_is4", label: "F", names: ["kırıkkale"], lat: 39.85, lng: 33.50, type: "isleme", desc: "Sebep: Silah Sanayi/Güvenlik" },
            { id: "dm_is5", label: "F", names: ["sivas", "sidemir"], lat: 39.75, lng: 37.02, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }, // Önemli istisna!
            { id: "dm_is6", label: "F", names: ["izmir", "torbalı"], lat: 38.20, lng: 27.30, type: "isleme", desc: "Sebep: Ulaşım/Pazar" }
        ],

        bakir: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "bk1", label: "1", names: ["küre"], lat: 41.80, lng: 33.72, type: "cikarim", desc: "Kastamonu (En önemli yatak)" },
            { id: "bk2", label: "2", names: ["murgul", "göktaş"], lat: 41.26, lng: 41.56, type: "cikarim", desc: "Artvin" },
            { id: "bk3", label: "3", names: ["çayeli"], lat: 41.09, lng: 40.73, type: "cikarim", desc: "Rize" },
            { id: "bk4", label: "4", names: ["maden"], lat: 38.39, lng: 39.66, type: "cikarim", desc: "Elazığ (İsmini madenden alır)" },

            // --- İŞLENEN YERLER (FABRİKA - KIRMIZI PİN) ---
            // Not: Samsun, KPSS'de en çok sorulan yerdir. Sebebi Limandır.
            { id: "bk_is1", label: "F", names: ["samsun", "karadeniz bakır"], lat: 41.25, lng: 36.45, type: "isleme", desc: "Sebep: Ulaşım (Liman) - Küre'den gelir" },
            { id: "bk_is2", label: "F", names: ["murgul"], lat: 41.27, lng: 41.58, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "bk_is3", label: "F", names: ["maden"], lat: 38.40, lng: 39.67, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }
        ],

        krom: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "kr1", label: "1", names: ["guleman"], lat: 38.52, lng: 39.68, type: "cikarim", desc: "Elazığ (Türkiye'nin ilk ve en büyük yatağı)" }, 
            { id: "kr2", label: "2", names: ["fethiye", "köyceğiz", "dalaman"], lat: 36.96, lng: 28.75, type: "cikarim", desc: "Muğla (İhraç edilir)" }, 
            { id: "kr3", label: "3", names: ["kop", "kop dağı"], lat: 40.02, lng: 40.51, type: "cikarim", desc: "Bayburt / Erzincan Sınırı" }, 
            { id: "kr4", label: "4", names: ["orhaneli", "harmancık"], lat: 39.90, lng: 28.98, type: "cikarim", desc: "Bursa" }, 
            { id: "kr5", label: "5", names: ["pozantı", "aladağ"], lat: 37.45, lng: 34.90, type: "cikarim", desc: "Adana / Kayseri" },
            { id: "kr6", label: "6", names: ["kütahya"], lat: 39.42, lng: 29.98, type: "cikarim", desc: "Kütahya" },

            // --- İŞLENEN YERLER (FERROKROM TESİSLERİ - KIRMIZI PİN) ---
            // Not: Antalya tesisinin neden orada olduğunu bilmek çok önemli.
            { id: "kr_is1", label: "F", names: ["elazığ", "ferrokrom"], lat: 38.60, lng: 39.25, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "kr_is2", label: "F", names: ["antalya", "ferrokrom"], lat: 36.95, lng: 30.70, type: "isleme", desc: "Sebep: Ulaşım (Liman) ve Pazarlama" }
        ],

        bor: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "br1", label: "1", names: ["kırka", "seyitgazi", "sarıkaya"], lat: 39.29, lng: 30.53, type: "cikarim", desc: "Eskişehir (Dünyanın en büyük rezervi)" }, 
            { id: "br2", label: "2", names: ["bigadiç"], lat: 39.40, lng: 28.13, type: "cikarim", desc: "Balıkesir (Kolemanit ve Üleksit)" }, 
            { id: "br3", label: "3", names: ["emet", "hisarcık"], lat: 39.34, lng: 29.26, type: "cikarim", desc: "Kütahya" }, 
            { id: "br4", label: "4", names: ["kestelek", "mustafakemalpaşa"], lat: 39.95, lng: 28.52, type: "cikarim", desc: "Bursa" },
            { id: "br5", label: "5", names: ["susurluk"], lat: 39.91, lng: 28.16, type: "cikarim", desc: "Balıkesir" },

            // --- İŞLENEN YERLER (BOR TESİSLERİ - KIRMIZI PİN) ---
            // Not: Bandırma hariç diğerleri hammaddeye yakın olduğu için kurulmuştur.
            { id: "br_is1", label: "F", names: ["bandırma", "eti maden"], lat: 40.35, lng: 27.97, type: "isleme", desc: "Sebep: Ulaşım (Liman) ve İhracat Kapısı" },
            { id: "br_is2", label: "F", names: ["kırka", "bor türevleri"], lat: 39.30, lng: 30.54, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "br_is3", label: "F", names: ["emet", "borik asit"], lat: 39.35, lng: 29.27, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "br_is4", label: "F", names: ["bigadiç"], lat: 39.41, lng: 28.14, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Öğütme)" }
        ],

        
        boksit: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "bx1", label: "1", names: ["seydişehir"], lat: 37.42, lng: 31.85, type: "cikarim", desc: "Konya (Türkiye'nin en büyük rezervi)" }, 
            { id: "bx2", label: "2", names: ["akseki"], lat: 37.05, lng: 31.78, type: "cikarim", desc: "Antalya" }, 
            { id: "bx3", label: "3", names: ["milas"], lat: 37.31, lng: 27.78, type: "cikarim", desc: "Muğla" }, 
            { id: "bx4", label: "4", names: ["islahiye"], lat: 37.03, lng: 36.63, type: "cikarim", desc: "Gaziantep" },
            { id: "bx5", label: "5", names: ["payas"], lat: 36.75, lng: 36.21, type: "cikarim", desc: "Hatay" },
            { id: "bx6", label: "6", names: ["kokaksu", "zonguldak"], lat: 41.45, lng: 31.80, type: "cikarim", desc: "Zonguldak" },

            // --- İŞLENEN YERLER (ALÜMİNYUM TESİSLERİ - KIRMIZI PİN) ---
            // Not: Seydişehir, Türkiye'nin tek entegre alüminyum tesisidir.
            { id: "bx_is1", label: "F", names: ["seydişehir", "eti alüminyum"], lat: 37.43, lng: 31.86, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Tek Entegre Tesis)" }
        ],
        kukurt: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "kk1", label: "1", names: ["keçiborlu"], lat: 37.94, lng: 30.29, type: "cikarim", desc: "Isparta (En önemli yatak - Şu an kapalı)" },
            { id: "kk2", label: "2", names: ["milas"], lat: 37.31, lng: 27.78, type: "cikarim", desc: "Muğla (Az miktarda)" },
            { id: "kk3", label: "3", names: ["sarayköy"], lat: 37.92, lng: 28.92, type: "cikarim", desc: "Denizli (Jeotermal ile ilişkili)" },
            { id: "kk4", label: "4", names: ["simav"], lat: 39.09, lng: 28.97, type: "cikarim", desc: "Kütahya" },

            // --- İŞLENEN YERLER (FABRİKA - KIRMIZI PİN) ---
            // Not: Keçiborlu fabrikası hammaddeye yakınlıktan kurulmuştu ancak şu an faal değildir.
            // Ancak KPSS'de yerini bilmek gerekir.
            { id: "kk_is1", label: "F", names: ["keçiborlu"], lat: 37.95, lng: 30.30, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Tesis Kapatıldı)" }
        ],

        fosfat: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Türkiye rezervinin %90'ı Mardin'dedir.
            { id: "fs1", label: "1", names: ["mazıdağı"], lat: 37.48, lng: 40.48, type: "cikarim", desc: "Mardin (En önemli ve en büyük yatak)" },
            { id: "fs2", label: "2", names: ["genç"], lat: 38.75, lng: 40.56, type: "cikarim", desc: "Bingöl" },
            { id: "fs3", label: "3", names: ["mutki"], lat: 38.40, lng: 41.92, type: "cikarim", desc: "Bitlis" },
            { id: "fs4", label: "4", names: ["bozova"], lat: 37.36, lng: 38.52, type: "cikarim", desc: "Şanlıurfa" },

            // --- İŞLENEN YERLER (GÜBRE FABRİKALARI - KIRMIZI PİN) ---
            // Not: Mardin hariç diğerleri İTHAL fosfatı işler, o yüzden limandadırlar.
            { id: "fs_is1", label: "F", names: ["mazıdağı", "eti bakır"], lat: 37.49, lng: 40.49, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Yerli)" },
            { id: "fs_is2", label: "F", names: ["bandırma", "bagfaş"], lat: 40.35, lng: 27.96, type: "isleme", desc: "Sebep: Ulaşım (Liman) - İthalatla çalışır" },
            { id: "fs_is3", label: "F", names: ["samsun", "tügsaş"], lat: 41.24, lng: 36.45, type: "isleme", desc: "Sebep: Ulaşım (Liman) - İthalatla çalışır" },
            { id: "fs_is4", label: "F", names: ["iskenderun"], lat: 36.65, lng: 36.22, type: "isleme", desc: "Sebep: Ulaşım (Liman) - İthalatla çalışır" },
            { id: "fs_is5", label: "F", names: ["izmit", "yarımca", "gübretaş"], lat: 40.76, lng: 29.77, type: "isleme", desc: "Sebep: Pazar ve Ulaşım - İthalatla çalışır" }
        ],

        bentonit: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "bn1", label: "1", names: ["reşadiye"], lat: 40.39, lng: 37.33, type: "cikarim", desc: "Tokat (En önemli yatak)" },
            { id: "bn2", label: "2", names: ["eldivan", "çankırı"], lat: 40.52, lng: 33.50, type: "cikarim", desc: "Çankırı" },
            { id: "bn3", label: "3", names: ["enez"], lat: 40.72, lng: 26.08, type: "cikarim", desc: "Edirne" },
            { id: "bn4", label: "4", names: ["kalecik"], lat: 40.10, lng: 33.40, type: "cikarim", desc: "Ankara" },
            { id: "bn5", label: "5", names: ["ünye", "fatsa"], lat: 41.05, lng: 37.30, type: "cikarim", desc: "Ordu" },

            // --- İŞLENEN YERLER (ÖĞÜTME TESİSLERİ - KIRMIZI PİN) ---
            // Not: Bentonit genelde çıkarıldığı yerde işlenir (Hammaddeye yakınlık).
            { id: "bn_is1", label: "F", names: ["reşadiye"], lat: 40.40, lng: 37.34, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "bn_is2", label: "F", names: ["çankırı"], lat: 40.55, lng: 33.55, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "bn_is3", label: "F", names: ["enez"], lat: 40.73, lng: 26.09, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }
        ],

        tuz: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // 1. GÖL TUZU (En büyük pay)
            { id: "tz1", label: "1", names: ["tuz gölü", "şereflikoçhisar", "koçhisar"], lat: 38.83, lng: 33.33, type: "cikarim", desc: "Ankara/Konya - Göl Tuzu (Üretimin %70'i)" },
            { id: "tz2", label: "2", names: ["seyfe", "seyfe gölü"], lat: 39.19, lng: 34.42, type: "cikarim", desc: "Kırşehir - Göl Tuzu" },

            // 2. DENİZ TUZU
            { id: "tz3", label: "3", names: ["çamaltı", "çamaltı tuzlası"], lat: 38.48, lng: 26.93, type: "cikarim", desc: "İzmir - Deniz Tuzu (En Önemli)" },

            // 3. KAYA TUZU (Yataklar)
            { id: "tz4", label: "4", names: ["çankırı"], lat: 40.60, lng: 33.61, type: "cikarim", desc: "Çankırı - Kaya Tuzu (Mağara)" },
            { id: "tz5", label: "5", names: ["tuzluca"], lat: 40.03, lng: 43.66, type: "cikarim", desc: "Iğdır - Kaya Tuzu" },
            { id: "tz6", label: "6", names: ["gülşehir"], lat: 38.75, lng: 34.62, type: "cikarim", desc: "Nevşehir - Kaya Tuzu" },
            { id: "tz7", label: "7", names: ["yerköy"], lat: 39.63, lng: 34.46, type: "cikarim", desc: "Yozgat - Kaya Tuzu" },
            { id: "tz8", label: "8", names: ["kağızman"], lat: 40.15, lng: 43.12, type: "cikarim", desc: "Kars - Kaya Tuzu" },

            // --- İŞLENEN YERLER (RAFİNERİLER - KIRMIZI PİN) ---
            // Tuz genelde çıkarıldığı yerde işlenir.
            { id: "tz_is1", label: "F", names: ["şereflikoçhisar", "billur tuz"], lat: 38.93, lng: 33.53, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "tz_is2", label: "F", names: ["çamaltı"], lat: 38.46, lng: 27.05, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "tz_is3", label: "F", names: ["çankırı"], lat: 40.61, lng: 33.62, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }
        ],

        mermer: [
            // --- ÇIKARILAN YERLER (OCAKLAR - GRİ PİN) ---
            { id: "mr1", label: "1", names: ["marmara adası", "saraylar"], lat: 40.65, lng: 27.55, type: "cikarim", desc: "Balıkesir (Adını mermerden alır, en eski yatak)" },
            { id: "mr2", label: "2", names: ["iscehisar", "afyon"], lat: 38.86, lng: 30.75, type: "cikarim", desc: "Afyon (Türkiye'nin mermer başkenti)" },
            { id: "mr3", label: "3", names: ["alacakaya", "elazığ"], lat: 38.48, lng: 39.85, type: "cikarim", desc: "Elazığ (Dünyaca ünlü 'Vişne Çürüğü' mermeri)" },
            { id: "mr4", label: "4", names: ["muğla", "yatağan", "kavaklıdere"], lat: 37.35, lng: 28.35, type: "cikarim", desc: "Muğla (Önemli ihracat merkezi)" },
            { id: "mr5", label: "5", names: ["bilecik"], lat: 40.15, lng: 30.00, type: "cikarim", desc: "Bilecik (Bej mermer)" },
            { id: "mr6", label: "6", names: ["denizli"], lat: 37.78, lng: 29.08, type: "cikarim", desc: "Denizli (Traverten ve mermer)" },
            { id: "mr7", label: "7", names: ["kırşehir"], lat: 39.15, lng: 34.15, type: "cikarim", desc: "Kırşehir" },

            // --- İŞLENEN YERLER (FABRİKALAR - KIRMIZI PİN) ---
            // Mermer fabrikaları genelde ocakların hemen yanındadır (Navlun maliyeti).
            { id: "mr_is1", label: "F", names: ["afyon"], lat: 38.80, lng: 30.60, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Entegre Tesisler)" },
            { id: "mr_is2", label: "F", names: ["bandırma"], lat: 40.35, lng: 27.98, type: "isleme", desc: "Sebep: Ulaşım (Liman) ve Hammadde (Marmara Adası)" },
            { id: "mr_is3", label: "F", names: ["bilecik"], lat: 40.10, lng: 29.98, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "mr_is4", label: "F", names: ["denizli"], lat: 37.80, lng: 29.10, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Traverten İşleme)" }
        ],

        volfram: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Volfram'ın kralı Uludağ'dır.
            { id: "vl1", label: "1", names: ["uludağ"], lat: 40.09, lng: 29.20, type: "cikarim", desc: "Bursa (Türkiye'nin en önemli yatağı - Rezerv var, üretim değişken)" },
            { id: "vl2", label: "2", names: ["keban"], lat: 38.78, lng: 38.74, type: "cikarim", desc: "Elazığ" },
            { id: "vl3", label: "3", names: ["demirköy"], lat: 41.82, lng: 27.76, type: "cikarim", desc: "Kırklareli" },
            { id: "vl4", label: "4", names: ["keskin", "çelebi"], lat: 39.57, lng: 33.61, type: "cikarim", desc: "Kırıkkale" },

            // --- İŞLENEN YERLER ---
            // Not: Volfram genelde çıkarıldığı yerde zenginleştirilir (konsantre hale getirilir).
            // Ayrıca bir "Volfram Rafinerisi" olarak KPSS'de sorulan spesifik bir şehir yoktur.
            // Genelde Uludağ tesisleri bilinir.
            { id: "vl_is1", label: "F", names: ["uludağ"], lat: 40.10, lng: 29.21, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Zenginleştirme Tesisi)" }
        ],

        feldispat: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Ege Bölgesi bu madenin krallığıdır.
            { id: "fl1", label: "1", names: ["demirci"], lat: 39.04, lng: 28.65, type: "cikarim", desc: "Manisa (En kaliteli yataklar)" },
            { id: "fl2", label: "2", names: ["çine"], lat: 37.61, lng: 28.06, type: "cikarim", desc: "Aydın (Dünyanın en büyük rezervlerinden)" },
            { id: "fl3", label: "3", names: ["milas"], lat: 37.31, lng: 27.78, type: "cikarim", desc: "Muğla (Önemli ihracat)" },
            { id: "fl4", label: "4", names: ["simav"], lat: 39.09, lng: 28.97, type: "cikarim", desc: "Kütahya" },
            { id: "fl5", label: "5", names: ["söğüt"], lat: 40.02, lng: 30.18, type: "cikarim", desc: "Bilecik" },
            { id: "fl6", label: "6", names: ["yozgat"], lat: 39.82, lng: 34.81, type: "cikarim", desc: "Yozgat (Sorgun/Akdağmadeni)" },

            // --- İŞLENEN YERLER (SERAMİK FABRİKALARI - KIRMIZI PİN) ---
            // Feldispat genelde seramik fabrikalarında işlenir.
            { id: "fl_is1", label: "F", names: ["çine", "kaltun", "ormos"], lat: 37.62, lng: 28.07, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Zenginleştirme)" },
            { id: "fl_is2", label: "F", names: ["kütahya", "porselen"], lat: 39.42, lng: 29.98, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Seramik/Porselen)" },
            { id: "fl_is3", label: "F", names: ["bozüyük", "eczacıbaşı"], lat: 39.90, lng: 30.05, type: "isleme", desc: "Sebep: Hammadde ve Ulaşım (Seramik)" },
            { id: "fl_is4", label: "F", names: ["çan", "kalebodur"], lat: 40.03, lng: 27.05, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Çanakkale Seramik)" }
        ],

        barit: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "brt1", label: "1", names: ["alanya", "gazipaşa"], lat: 36.54, lng: 32.00, type: "cikarim", desc: "Antalya (Türkiye rezervinin %90'ı, İhracat)" },
            { id: "brt2", label: "2", names: ["muş"], lat: 38.74, lng: 41.50, type: "cikarim", desc: "Muş (Çok kaliteli yataklar)" },
            { id: "brt3", label: "3", names: ["elbistan"], lat: 38.20, lng: 37.20, type: "cikarim", desc: "Kahramanmaraş" },
            { id: "brt4", label: "4", names: ["şarkikaraağaç"], lat: 38.08, lng: 31.36, type: "cikarim", desc: "Isparta" },
            { id: "brt5", label: "5", names: ["eskişehir"], lat: 39.77, lng: 30.52, type: "cikarim", desc: "Eskişehir" },

            // --- İŞLENEN YERLER (ÖĞÜTME TESİSLERİ - KIRMIZI PİN) ---
            // Barit genelde çıkarıldığı yerde öğütülür (mikronize edilir).
            { id: "brt_is1", label: "F", names: ["antalya", "öğütme"], lat: 36.90, lng: 30.70, type: "isleme", desc: "Sebep: Hammadde ve Liman (Sondaj Çamuru Üretimi)" },
            { id: "brt_is2", label: "F", names: ["izmir", "aliağa"], lat: 38.80, lng: 26.97, type: "isleme", desc: "Sebep: Liman ve Sanayi" },
            { id: "brt_is3", label: "F", names: ["elazığ"], lat: 38.68, lng: 39.22, type: "isleme", desc: "Sebep: Bölgesel Hammaddeye Yakınlık" },
            { id: "brt_is4", label: "F", names: ["eskişehir"], lat: 39.78, lng: 30.53, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }
        ],

        molibden: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // KPSS'de en net bilinen yer Kırklareli'dir.
            { id: "mo1", label: "1", names: ["dereköy", "istranca"], lat: 41.93, lng: 27.36, type: "cikarim", desc: "Kırklareli (Türkiye'nin en önemli yatağı)" },
            { id: "mo2", label: "2", names: ["uludağ"], lat: 40.09, lng: 29.22, type: "cikarim", desc: "Bursa (Volfram ile birlikte bulunur)" },
            { id: "mo3", label: "3", names: ["keban"], lat: 38.80, lng: 38.75, type: "cikarim", desc: "Elazığ" },
            { id: "mo4", label: "4", names: ["ispir"], lat: 40.48, lng: 41.00, type: "cikarim", desc: "Erzurum" },
            
            // Not: Molibden için KPSS müfredatında "Şurada işlenir" diye ezberletilen özel bir fabrika şehri yoktur.
            // Genelde ihraç edilir veya ağır sanayide kullanılır. O yüzden kırmızı fabrika pini eklemedik.
        ],

        altin: [
            // --- ÇIKARILAN YERLER (OCAKLAR - GRİ PİN) ---
            { id: "au1", label: "1", names: ["bergama", "ovacık"], lat: 39.12, lng: 27.18, type: "cikarim", desc: "İzmir (Türkiye'nin ilk altın madeni)" },
            { id: "au2", label: "2", names: ["kışladağ", "eşme"], lat: 38.52, lng: 29.13, type: "cikarim", desc: "Uşak (Avrupa'nın en büyük altın madeni)" },
            { id: "au3", label: "3", names: ["çöpler", "iliç"], lat: 39.43, lng: 38.53, type: "cikarim", desc: "Erzincan" },
            { id: "au4", label: "4", names: ["cerattepe"], lat: 41.17, lng: 41.80, type: "cikarim", desc: "Artvin (Kafkasör Yaylası)" },
            { id: "au5", label: "5", names: ["mastra"], lat: 40.50, lng: 39.40, type: "cikarim", desc: "Gümüşhane" },
            { id: "au6", label: "6", names: ["kaymaz"], lat: 39.51, lng: 31.18, type: "cikarim", desc: "Eskişehir" },
            { id: "au7", label: "7", names: ["sart"], lat: 38.48, lng: 28.03, type: "cikarim", desc: "Manisa (Salihli - Tarihi Lidya parası)" },
            { id: "au8", label: "8", names: ["himmetdede"], lat: 38.85, lng: 35.15, type: "cikarim", desc: "Kayseri" },

            // --- İŞLENEN YERLER (RAFİNERİLER - KIRMIZI PİN) ---
            // Maden sahasında dore (külçe) dökülür ama saflaştırma rafineride yapılır.
            { id: "au_is1", label: "F", names: ["istanbul", "iar"], lat: 41.00, lng: 28.97, type: "isleme", desc: "Sebep: Pazar ve Sermaye (İstanbul Altın Rafinerisi)" },
            { id: "au_is2", label: "F", names: ["çorum", "ahlatcı"], lat: 40.55, lng: 34.95, type: "isleme", desc: "Sebep: Sermaye ve Teknoloji (Türkiye'nin dev rafinerisi)" }
        ],

        dolomit: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Dolomit genelde kireçtaşına benzer ve inşaat/yol yapımında da kullanılır.
            { id: "dl1", label: "1", names: ["ereğli", "konya"], lat: 37.51, lng: 34.05, type: "cikarim", desc: "Konya (Demir-Çelik için önemli)" },
            { id: "dl2", label: "2", names: ["elbistan"], lat: 38.20, lng: 37.20, type: "cikarim", desc: "Kahramanmaraş" },
            { id: "dl3", label: "3", names: ["aladag", "pozantı"], lat: 37.55, lng: 35.15, type: "cikarim", desc: "Adana" },
            { id: "dl4", label: "4", names: ["inegöl"], lat: 40.08, lng: 29.51, type: "cikarim", desc: "Bursa" },
            { id: "dl5", label: "5", names: ["sivrihisar"], lat: 39.45, lng: 31.53, type: "cikarim", desc: "Eskişehir" },

            // --- İŞLENEN YERLER ---
            // Dolomit özel bir fabrikada "dolomit ürünü"ne dönüşmez, 
            // Demir-Çelik ve Cam fabrikalarında "HAMMADDE" olarak tüketilir.
            // O yüzden buralara gönderilir:
            { id: "dl_is1", label: "F", names: ["ereğli", "erdemir"], lat: 41.28, lng: 31.42, type: "isleme", desc: "Sebep: Pazar (Demir-Çelik Sanayisinde Kullanım)" },
            { id: "dl_is2", label: "F", names: ["iskenderun", "isdemir"], lat: 36.62, lng: 36.20, type: "isleme", desc: "Sebep: Pazar (Demir-Çelik Sanayisinde Kullanım)" },
            { id: "dl_is3", label: "F", names: ["karabük", "kardemir"], lat: 41.20, lng: 32.62, type: "isleme", desc: "Sebep: Pazar (Demir-Çelik Sanayisinde Kullanım)" }
        ],

        nikel: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Nikel denince akla Manisa gelir.
            { id: "nk1", label: "1", names: ["çaldağ", "turgutlu"], lat: 38.49, lng: 27.70, type: "cikarim", desc: "Manisa (Türkiye'nin en büyük rezervi)" },
            { id: "nk2", label: "2", names: ["mihalıççık", "yunusemre"], lat: 39.85, lng: 31.45, type: "cikarim", desc: "Eskişehir" },
            { id: "nk3", label: "3", names: ["orhaneli"], lat: 39.90, lng: 28.98, type: "cikarim", desc: "Bursa" },
            { id: "nk4", label: "4", names: ["bitlis"], lat: 38.40, lng: 42.10, type: "cikarim", desc: "Bitlis" },

            // --- İŞLENEN YERLER (TESİSLER - KIRMIZI PİN) ---
            // Manisa-Gördes tesisi çok modern ve önemlidir.
            { id: "nk_is1", label: "F", names: ["gördes", "meta nikel"], lat: 39.05, lng: 28.28, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Modern Hidrometalurji Tesisi)" }
        ],

        taskomuru: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Sadece Zonguldak ve çevresi (Yerli Kaynak)
            { id: "tk1", label: "1", names: ["zonguldak", "merkez", "kozlu"], lat: 41.45, lng: 31.79, type: "cikarim", desc: "Zonguldak (Yerli Taşkömürü - 1. Jeolojik Zaman)" },
            { id: "tk2", label: "2", names: ["amasra"], lat: 41.74, lng: 32.38, type: "cikarim", desc: "Bartın (Yerli Taşkömürü)" },
            { id: "tk3", label: "3", names: ["armutçuk", "kandilli"], lat: 41.35, lng: 31.55, type: "cikarim", desc: "Zonguldak/Ereğli (Yerli Taşkömürü)" },

            // --- ENERJİ ÜRETİLEN YERLER (TERMİK SANTRALLER - KIRMIZI PİN) ---
            
            // 1. YERLİ KÖMÜR ile çalışan (Hammaddeye Yakınlık)
            { id: "tk_is1", label: "F", names: ["çatalağzı", "cates"], lat: 41.51, lng: 31.88, type: "isleme", desc: "Zonguldak - Sebebi: Hammaddeye Yakınlık (Yerli Kömür)" },

            // 2. İTHAL KÖMÜR ile çalışan (Ulaşım/Liman Kolaylığı)
            { id: "tk_is2", label: "F", names: ["sugözü", "iskenderun"], lat: 36.83, lng: 35.87, type: "isleme", desc: "Adana/Yumurtalık - Sebebi: Ulaşım/Liman (İthal Kömür)" },
            { id: "tk_is3", label: "F", names: ["aliağa", "izdemir"], lat: 38.75, lng: 26.93, type: "isleme", desc: "İzmir - Sebebi: Ulaşım/Liman (İthal Kömür)" },
            { id: "tk_is4", label: "F", names: ["bekirli", "içdaş"], lat: 40.38, lng: 27.02, type: "isleme", desc: "Çanakkale/Biga - Sebebi: Ulaşım/Liman (İthal Kömür)" }
        ],

        linyit: [
            // --- ÇIKARILAN YERLER (MADEN OCAKLARI - GRİ PİN) ---
            // Linyit Türkiye'nin hemen her bölgesinde vardır.
            { id: "ln1", label: "1", names: ["afşin", "elbistan"], lat: 38.24, lng: 37.20, type: "cikarim", desc: "K.Maraş (Türkiye'nin en büyük rezervi - 3. Jeolojik Zaman)" },
            { id: "ln2", label: "2", names: ["soma"], lat: 39.18, lng: 27.62, type: "cikarim", desc: "Manisa (Kaliteli linyit, ısınma + enerji)" },
            { id: "ln3", label: "3", names: ["tunçbilek", "tavşanlı"], lat: 39.63, lng: 29.46, type: "cikarim", desc: "Kütahya" },
            { id: "ln4", label: "4", names: ["seyitömer"], lat: 39.57, lng: 30.20, type: "cikarim", desc: "Kütahya" },
            { id: "ln5", label: "5", names: ["yatağan", "milas"], lat: 37.33, lng: 28.13, type: "cikarim", desc: "Muğla" },
            { id: "ln6", label: "6", names: ["çayırhan"], lat: 40.09, lng: 31.69, type: "cikarim", desc: "Ankara (Orta Anadolu)" },
            { id: "ln7", label: "7", names: ["çan"], lat: 40.03, lng: 27.05, type: "cikarim", desc: "Çanakkale" },
            { id: "ln8", label: "8", names: ["aşkale"], lat: 39.92, lng: 40.69, type: "cikarim", desc: "Erzurum (Doğu Anadolu)" },
            { id: "ln9", label: "9", names: ["kangall", "kangal"], lat: 39.23, lng: 37.39, type: "cikarim", desc: "Sivas" },

            // --- ENERJİ ÜRETİLEN YERLER (TERMİK SANTRALLER - KIRMIZI PİN) ---
            // Linyit santralleri maliyet nedeniyle hep madenin yanındadır.
            { id: "ln_is1", label: "F", names: ["afşin", "elbistan"], lat: 38.25, lng: 37.21, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (En Büyük Santralimiz)" },
            { id: "ln_is2", label: "F", names: ["soma"], lat: 39.19, lng: 27.63, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" },
            { id: "ln_is3", label: "F", names: ["yatağan", "yeniköy", "kemerköy"], lat: 37.34, lng: 28.14, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Muğla Santralleri)" },
            { id: "ln_is4", label: "F", names: ["çayırhan"], lat: 40.10, lng: 31.70, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Turgay Ciner Santrali)" },
            { id: "ln_is5", label: "F", names: ["seyitömer"], lat: 39.58, lng: 30.21, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık" }
        ],

        petrol: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            // Türkiye petrol ihtiyacının %90'ından fazlasını ithal eder.
            // Çıkarılan yerlerin tamamı Güneydoğu Anadolu'dadır.
            { id: "pt1", label: "1", names: ["batman", "raman", "garzan"], lat: 37.88, lng: 41.12, type: "cikarim", desc: "Batman (Türkiye'de petrolün ilk bulunduğu yer - Raman Dağı)" },
            { id: "pt2", label: "2", names: ["adıyaman"], lat: 37.76, lng: 38.28, type: "cikarim", desc: "Adıyaman (Bölgenin önemli üretim sahası)" },
            { id: "pt3", label: "3", names: ["gabar", "şırnak", "şehit aybüke"], lat: 37.45, lng: 42.15, type: "cikarim", desc: "Şırnak/Gabar (GÜNCEL: Türkiye'nin en büyük rezerv keşfi)" }, // En güncel bilgi!
            { id: "pt4", label: "4", names: ["kurtalan"], lat: 37.92, lng: 41.70, type: "cikarim", desc: "Siirt" },
            { id: "pt5", label: "5", names: ["diyarbakır"], lat: 37.91, lng: 40.23, type: "cikarim", desc: "Diyarbakır" },

            // --- İŞLENEN YERLER (RAFİNERİLER - KIRMIZI PİN) ---
            // Rafinerilerin yer seçim nedenleri KPSS'nin favori sorusudur.
            { id: "pt_is1", label: "F", names: ["batman"], lat: 37.89, lng: 41.13, type: "isleme", desc: "Sebep: Hammaddeye Yakınlık (Türkiye'nin tek örneği)" },
            { id: "pt_is2", label: "F", names: ["izmit", "ipraş", "tüpraş"], lat: 40.75, lng: 29.92, type: "isleme", desc: "Sebep: Pazar (Sanayi) ve Ulaşım (Liman)" },
            { id: "pt_is3", label: "F", names: ["izmir", "aliağa", "star"], lat: 38.80, lng: 26.95, type: "isleme", desc: "Sebep: Ulaşım (Liman) ve İhracat" },
            { id: "pt_is4", label: "F", names: ["kırıkkale", "orta anadolu"], lat: 39.80, lng: 33.45, type: "isleme", desc: "Sebep: Stratejik (Güvenlik) ve Dağıtım (Boru hattı ile gelir)" }
            
            // Not: Mersin Ataş artık sadece depolama yaptığı için rafineri olarak işaretlemiyoruz, kafa karıştırmasın.
        ],

        dogalgaz: [
            // --- ÇIKARILAN YERLER (HAMMADDE - GRİ PİN) ---
            { id: "dg1", label: "1", names: ["hamitabat"], lat: 41.38, lng: 27.20, type: "cikarim", desc: "Kırklareli (Türkiye'nin en eski kara doğalgaz sahası)" },
            { id: "dg2", label: "2", names: ["sakarya", "karadeniz gazı", "filyos"], lat: 41.45, lng: 32.05, type: "cikarim", desc: "Zonguldak/Filyos (GÜNCEL: Karadeniz'in dev gaz sahası ve işleme tesisi)" },
            { id: "dg3", label: "3", names: ["akçakoca"], lat: 41.08, lng: 31.12, type: "cikarim", desc: "Düzce (Denizde ilk üretim yapılan yer)" },
            { id: "dg4", label: "4", names: ["çamurlu"], lat: 37.15, lng: 41.22, type: "cikarim", desc: "Mardin (Güneydoğu Anadolu yatağı)" },

            // --- ENERJİ ÜRETİLEN YERLER (TERMİK SANTRALLER - KIRMIZI PİN) ---
            // Şifre: "O-H-A" (Ovaakça, Hamitabat, Ambarlı) en büyük doğalgaz santralleridir.
            { id: "dg_is1", label: "F", names: ["hamitabat"], lat: 41.39, lng: 27.21, type: "isleme", desc: "Kırklareli - Sebebi: Hammaddeye Yakınlık" },
            { id: "dg_is2", label: "F", names: ["ambarli", "ambarli santrali"], lat: 40.97, lng: 28.69, type: "isleme", desc: "İstanbul - Sebebi: Pazar ve Tüketim (Büyük Şehir)" },
            { id: "dg_is3", label: "F", names: ["ovaakça", "bursa"], lat: 40.30, lng: 29.08, type: "isleme", desc: "Bursa - Sebebi: Pazar ve Sanayi" },
            { id: "dg_is4", label: "F", names: ["aliağa", "izmir", "enka"], lat: 38.82, lng: 26.96, type: "isleme", desc: "İzmir - Sebebi: Pazar ve Ulaşım" },

            // --- DEPOLAMA ALANLARI (OPSİYONEL - MAVİ PİN GİBİ DÜŞÜNÜLEBİLİR) ---
            { id: "dg_d1", label: "D", names: ["tuz gölü", "aksaray"], lat: 38.30, lng: 33.70, type: "isleme", desc: "Aksaray (Dünyanın en büyük tuz altı doğalgaz depolama sahası)" }
        ],

        hidroelektrik: [
            { id: "he1", label: "💧", names: ["demirköprü"], lat: 38.625, lng: 28.348, type: "isleme", desc: "Gediz Üzerinde - Manisa" },
            { id: "he2", label: "💧", names: ["adıgüzel"], lat: 38.135, lng: 29.212, type: "isleme", desc: "Büyük Menderes Üzerinde - Denizli" },
            { id: "he3", label: "💧", names: ["kemer"], lat: 37.538, lng: 28.535, type: "isleme", desc: "Akçay Üzerinde - Aydın" },
            { id: "he4", label: "💧", names: ["gökçekaya"], lat: 39.975, lng: 30.684, type: "isleme", desc: "Sakarya Üzerinde - Eskişehir" },
            { id: "he5", label: "💧", names: ["sarıyar"], lat: 40.088, lng: 31.415, type: "isleme", desc: "Sakarya Üzerinde - Ankara" },
            { id: "he6", label: "💧", names: ["kesikköprü"], lat: 39.395, lng: 33.425, type: "isleme", desc: "Kızılırmak Üzerinde - Ankara" },
            { id: "he7", label: "💧", names: ["kapulukaya"], lat: 39.734, lng: 33.486, type: "isleme", desc: "Kızılırmak Üzerinde - Kırıkkale" },
            { id: "he8", label: "💧", names: ["altınkaya"], lat: 41.332, lng: 35.856, type: "isleme", desc: "Kızılırmak Üzerinde - Samsun" },
            { id: "he9", label: "💧", names: ["derbent"], lat: 41.353, lng: 35.845, type: "isleme", desc: "Kızılırmak Üzerinde - Samsun" },
            { id: "he10", label: "💧", names: ["hasan uğurlu"], lat: 41.285, lng: 36.756, type: "isleme", desc: "Yeşilırmak Üzerinde - Samsun" },
            { id: "he11", label: "💧", names: ["suat uğurlu"], lat: 40.916, lng: 36.685, type: "isleme", desc: "Yeşilırmak Üzerinde - Samsun" },
            { id: "he12", label: "💧", names: ["kılıçkaya"], lat: 40.245, lng: 38.188, type: "isleme", desc: "Kelkit Çayı Üzerinde - Sivas" },
            { id: "he13", label: "💧", names: ["almus"], lat: 40.378, lng: 36.915, type: "isleme", desc: "Yeşilırmak Üzerinde - Tokat" },
            { id: "he14", label: "💧", names: ["hirfanlı"], lat: 39.278, lng: 33.528, type: "isleme", desc: "Kızılırmak Üzerinde - Kırşehir" },
            { id: "he15", label: "💧", names: ["oymapınar"], lat: 36.915, lng: 31.535, type: "isleme", desc: "Manavgat Üzerinde - Antalya" },
            { id: "he16", label: "💧", names: ["manavgat"], lat: 36.852, lng: 31.488, type: "isleme", desc: "Manavgat Üzerinde - Antalya" },
            { id: "he17", label: "💧", names: ["gezende"], lat: 36.525, lng: 33.195, type: "isleme", desc: "Ermenek Çayı Üzerinde - Mersin" },
            { id: "he18", label: "💧", names: ["kayraktepe"], lat: 36.495, lng: 33.488, type: "isleme", desc: "Göksu Üzerinde - Mersin" },
            { id: "he19", label: "💧", names: ["çatalan"], lat: 37.195, lng: 35.298, type: "isleme", desc: "Seyhan Üzerinde - Adana" },
            { id: "he20", label: "💧", names: ["seyhan"], lat: 37.045, lng: 35.345, type: "isleme", desc: "Seyhan Üzerinde - Adana" },
            { id: "he21", label: "💧", names: ["aslantaş"], lat: 37.288, lng: 36.275, type: "isleme", desc: "Ceyhan Üzerinde - Osmaniye" },
            { id: "he22", label: "💧", names: ["menzelet"], lat: 37.675, lng: 36.848, type: "isleme", desc: "Ceyhan Üzerinde - K.Maraş" },
            { id: "he23", label: "💧", names: ["kartalkaya"], lat: 37.338, lng: 37.075, type: "isleme", desc: "Aksu Çayı Üzerinde - K.Maraş" },
            { id: "he24", label: "💧", names: ["keban"], lat: 38.805, lng: 38.745, type: "isleme", desc: "Fırat Üzerinde - Elazığ" },
            { id: "he25", label: "💧", names: ["karakaya"], lat: 38.225, lng: 38.655, type: "isleme", desc: "Fırat Üzerinde - Diyarbakır/Malatya" },
            { id: "he26", label: "💧", names: ["kralkızı"], lat: 38.375, lng: 40.168, type: "isleme", desc: "Dicle Üzerinde - Diyarbakır" },
            { id: "he27", label: "💧", names: ["atatürk"], lat: 37.478, lng: 38.315, type: "isleme", desc: "Fırat Üzerinde - Şanlıurfa/Adıyaman" },
            { id: "he28", label: "💧", names: ["birecik"], lat: 37.058, lng: 37.958, type: "isleme", desc: "Fırat Üzerinde - Şanlıurfa" },
            { id: "he29", label: "💧", names: ["devegeçidi"], lat: 38.085, lng: 39.955, type: "isleme", desc: "Devegeçidi Çayı Üzerinde - Diyarbakır" },
            { id: "he30", label: "💧", names: ["ilisu", "ılısu"], lat: 37.525, lng: 41.855, type: "isleme", desc: "Dicle Üzerinde - Mardin/Şırnak" },
            { id: "he31", label: "💧", names: ["deriner"], lat: 41.168, lng: 41.878, type: "isleme", desc: "Çoruh Üzerinde - Artvin" },
            { id: "he32", label: "💧", names: ["yusufeli"], lat: 40.825, lng: 41.315, type: "isleme", desc: "Çoruh Üzerinde - Artvin" }
        ],

        ruzgar: [
            { id: "rz1", label: "💨", names: ["çeşme", "alaçatı"], lat: 38.285, lng: 26.335, type: "isleme", desc: "İzmir - Türkiye'nin ilk rüzgar santrali (1998)" },
            { id: "rz2", label: "💨", names: ["bandırma", "balıkesir"], lat: 40.298, lng: 27.942, type: "isleme", desc: "Balıkesir - Türkiye'nin rüzgar enerjisi lideri şehri" },
            { id: "rz3", label: "💨", names: ["çanakkale", "breez"], lat: 40.112, lng: 26.415, type: "isleme", desc: "Çanakkale - Boğaz etkisiyle yüksek potansiyel" },
            { id: "rz4", label: "💨", names: ["istanbul", "silivri", "çatalca"], lat: 41.135, lng: 28.185, type: "isleme", desc: "İstanbul - Trakya rüzgar koridoru" },
            { id: "rz5", label: "💨", names: ["kütahya", "gökçedağ"], lat: 39.422, lng: 29.985, type: "isleme", desc: "Kütahya - İç Ege geçiş noktası" },
            { id: "rz6", label: "💨", names: ["afyon", "dinar"], lat: 38.065, lng: 30.155, type: "isleme", desc: "Afyonkarahisar - Dinar RES (Büyük kapasiteli)" },
            { id: "rz7", label: "💨", names: ["aydın"], lat: 37.845, lng: 27.845, type: "isleme", desc: "Aydın - Dağ sıraları rüzgar kanalı" },
            { id: "rz8", label: "💨", names: ["denizli"], lat: 37.775, lng: 29.085, type: "isleme", desc: "Denizli - Batı Anadolu rüzgar sistemi" },
            { id: "rz9", label: "💨", names: ["muğla", "datça", "bodrum"], lat: 36.725, lng: 27.685, type: "isleme", desc: "Muğla - Kıyı ve ada rüzgarları" },
            { id: "rz10", label: "💨", names: ["samsun", "yakakent"], lat: 41.635, lng: 35.515, type: "isleme", desc: "Samsun - Orta Karadeniz sahil şeridi" },
            { id: "rz11", label: "💨", names: ["kırşehir", "geycek"], lat: 39.315, lng: 34.015, type: "isleme", desc: "Kırşehir - İç Anadolu'nun en büyük rüzgar sahalarından" },
            { id: "rz12", label: "💨", names: ["adana", "feke"], lat: 37.815, lng: 35.915, type: "isleme", desc: "Adana - Akdeniz rüzgar potansiyeli" },
            { id: "rz13", label: "💨", names: ["osmaniye", "bahçe"], lat: 37.215, lng: 36.575, type: "isleme", desc: "Osmaniye - Gökçedağ RES (Önemli bir tesis)" },
            { id: "rz14", label: "💨", names: ["hatay", "belen"], lat: 36.485, lng: 36.215, type: "isleme", desc: "Hatay - Belen Geçidi (Doğal bir rüzgar koridoru)" },
            { id: "rz15", label: "💨", names: ["adiyaman", "sincik"], lat: 38.015, lng: 38.615, type: "isleme", desc: "Adıyaman - Doğu Anadolu geçiş kuşağı" }
        ],

        jeotermal: [
            // --- ENERJİ ÜRETİLEN YERLER (JEOTERMAL SANTRALLER - KIRMIZI PİN) ---
            // Şifre: Ege Bölgesi (Aydın, Denizli, Manisa) bu işin merkezidir.
            { id: "geo1", label: "♨️", names: ["sarayköy"], lat: 37.935, lng: 28.925, type: "isleme", desc: "Denizli - Türkiye'nin İLK jeotermal santrali" },
            { id: "geo2", label: "♨️", names: ["germencik", "efeler"], lat: 37.865, lng: 27.605, type: "isleme", desc: "Aydın - Türkiye'nin EN BÜYÜK jeotermal santral bölgesi" },
            { id: "geo3", label: "♨️", names: ["alaşehir"], lat: 38.355, lng: 28.515, type: "isleme", desc: "Manisa - Son yıllarda kapasitesi en çok artan bölge" },
            { id: "geo4", label: "♨️", names: ["salavatlı", "sultanhisar"], lat: 37.885, lng: 28.155, type: "isleme", desc: "Aydın - Önemli jeotermal üretim sahası" },
            { id: "geo5", label: "♨️", names: ["pamukören", "kuyucak"], lat: 37.915, lng: 28.455, type: "isleme", desc: "Aydın - Yoğun santral kümelenmesi" },
            { id: "geo6", label: "♨️", names: ["tuzla"], lat: 39.525, lng: 26.315, type: "isleme", desc: "Çanakkale - Kuzey Ege'nin önemli jeotermal kaynağı" },
            { id: "geo7", label: "♨️", names: ["ömer-gecek", "afyon"], lat: 38.825, lng: 30.415, type: "isleme", desc: "Afyonkarahisar - Elektrik üretiminin yanı sıra devasa konut ısıtma merkezi" },
            { id: "geo8", label: "♨️", names: ["balçova", "narlıdere"], lat: 38.395, lng: 27.045, type: "isleme", desc: "İzmir - Konut ısıtmada Türkiye'nin öncülerinden" },
            { id: "geo9", label: "♨️", names: ["dikili"], lat: 39.065, lng: 26.895, type: "isleme", desc: "İzmir - Sera ısıtmacılığında lider bölge" }
        ],

        nukleer: [
            // --- NÜKLEER SANTRALLER (GÜNCEL VE PLANLANAN) ---
            { 
                id: "nuk1", 
                label: "☢️", 
                names: ["akkuyu", "gülnar"], 
                lat: 36.143, 
                lng: 33.541, 
                type: "isleme", 
                desc: "Mersin - Türkiye'nin İLK nükleer santrali. Sebebi: Suya yakınlık ve düşük deprem riski." 
            },
            { 
                id: "nuk2", 
                label: "☢️", 
                names: ["sinop", "inceburun"], 
                lat: 42.015, 
                lng: 35.055, 
                type: "isleme", 
                desc: "Sinop - Planlanan 2. nükleer santral yeri. Sebebi: Soğutma suyu ve sismik güvenlik." 
            },
            { 
                id: "nuk3", 
                label: "☢️", 
                names: ["iğneada"], 
                lat: 41.875, 
                lng: 27.985, 
                type: "isleme", 
                desc: "Kırklareli - 3. nükleer santral için düşünülen aday bölge." 
            }
        ],

        biyokutle: [
            // --- BÜYÜKŞEHİR ÇÖP GAZI (LFG) TESİSLERİ ---
            { id: "bio1", label: "♻️", names: ["odayeri", "istanbul"], lat: 41.225, lng: 28.855, type: "isleme", desc: "İstanbul - Avrupa'nın en büyük çöp gazından enerji üretim tesislerinden biri" },
            { id: "bio2", label: "♻️", names: ["mamak", "ankara"], lat: 39.915, lng: 33.005, type: "isleme", desc: "Ankara - Mamak Çöplüğü (Atık yönetimi ve enerji üretimi)" },
            { id: "bio3", label: "♻️", names: ["harmandalı", "izmir"], lat: 38.535, lng: 27.055, type: "isleme", desc: "İzmir - Şehir çöplerinden biyogaz ve elektrik üretimi" },
            { id: "bio4", label: "♻️", names: ["sofulu", "adana"], lat: 37.055, lng: 35.395, type: "isleme", desc: "Adana - Bölgenin en büyük entegre katı atık tesisi" },
            { id: "bio5", label: "♻️", names: ["bursa", "hamitler"], lat: 40.245, lng: 28.985, type: "isleme", desc: "Bursa - Katı atık depolama ve enerji üretim sahası" },

            // --- TARIMSAL VE HAYVANSAL BİYOGAZ TESİSLERİ ---
            { id: "bio6", label: "♻️", names: ["afyon", "biyogaz"], lat: 38.755, lng: 30.545, type: "isleme", desc: "Afyonkarahisar - Hayvansal atıklardan enerji üretimi (Besicilik etkisi)" },
            { id: "bio7", label: "♻️", names: ["samsun", "çarşamba"], lat: 41.205, lng: 36.705, type: "isleme", desc: "Samsun - Tarımsal atıklardan (biyokütle) enerji üretimi" },
            { id: "bio8", label: "♻️", names: ["konya", "karapınar"], lat: 37.725, lng: 32.505, type: "isleme", desc: "Konya - Modern biyogaz ve organik gübre tesisleri" }
        ],

        // --- YER ŞEKİLLERİ VERİLERİ (SENİN VERDİĞİN DÜZELTİLMİŞ LİSTE) ---
        kivrim: [ 
            { id: "k1", label: "1", names: ["yıldız", "istrança"], lat: 41.83, lng: 27.58 }, 
            { id: "k2", label: "2", names: ["koru"], lat: 40.71, lng: 26.85 }, 
            { id: "k3", label: "3", names: ["samanlı"], lat: 40.54, lng: 29.62 }, 
            { id: "k4", label: "4", names: ["sündiken"], lat: 39.95, lng: 30.85 }, 
            { id: "k5", label: "5", names: ["sultan"], lat: 38.30, lng: 31.35 }, 
            { id: "k6", label: "6", names: ["barla"], lat: 38.01, lng: 30.73 }, 
            { id: "k7", label: "7", names: ["akdağ"], lat: 36.54, lng: 29.58 }, 
            { id: "k8", label: "8", names: ["beydağları", "bey"], lat: 36.56, lng: 30.12 }, 
            { id: "k9", label: "9", names: ["geyik"], lat: 36.88, lng: 32.22 }, 
            { id: "k10", label: "10", names: ["bolkar"], lat: 37.24, lng: 34.34 }, 
            { id: "k11", label: "11", names: ["aladağ", "aladağlar"], lat: 37.82, lng: 35.15 }, 
            { id: "k12", label: "12", names: ["tahtalı"], lat: 38.45, lng: 36.45 }, 
            { id: "k13", label: "13", names: ["binboğa"], lat: 38.25, lng: 36.75 }, 
            { id: "k14", label: "14", names: ["hınzır"], lat: 38.82, lng: 36.18 }, 
            { id: "k15", label: "15", names: ["tecer"], lat: 39.40, lng: 37.52 }, 
            { id: "k16", label: "16", names: ["mercan", "munzur"], lat: 39.42, lng: 39.10 }, 
            { id: "k17", label: "17", names: ["malatya"], lat: 38.15, lng: 38.12 }, 
            { id: "k18", label: "18", names: ["mastar"], lat: 38.56, lng: 39.88 }, 
            { id: "k19", label: "19", names: ["sason"], lat: 38.35, lng: 41.42 }, 
            { id: "k20", label: "20", names: ["hakkari", "cilo", "buzul"], lat: 37.49, lng: 44.02 },
            { id: "k21", label: "21", names: ["allahüekber"], lat: 40.65, lng: 42.50 }, 
            { id: "k22", label: "22", names: ["mescit"], lat: 40.38, lng: 41.20 }, 
            { id: "k23", label: "23", names: ["kop"], lat: 40.01, lng: 40.50 }, 
            { id: "k24", label: "24", names: ["çimen"], lat: 39.92, lng: 39.45 }, 
            { id: "k25", label: "25", names: ["yalnızçam"], lat: 41.12, lng: 42.35 }, 
            { id: "k26", label: "26", names: ["kaçkar"], lat: 40.84, lng: 41.16 }, 
            { id: "k27", label: "27", names: ["rize"], lat: 40.78, lng: 40.75 }, 
            { id: "k28", label: "28", names: ["soğanlı"], lat: 40.52, lng: 40.43 }, 
            { id: "k29", label: "29", names: ["zigana", "kalkanlı"], lat: 40.63, lng: 39.40 }, 
            { id: "k30", label: "30", names: ["giresun"], lat: 40.55, lng: 38.45 }, 
            { id: "k31", label: "31", names: ["canik"], lat: 40.92, lng: 36.55 }, 
            { id: "k32", label: "32", names: ["küre", "isfendiyar"], lat: 41.72, lng: 33.62 }, 
            { id: "k33", label: "33", names: ["ılgaz"], lat: 41.08, lng: 33.74 }, 
            { id: "k34", label: "34", names: ["köroğlu"], lat: 40.65, lng: 31.78 } 
        ],

        kirik: [ 
            { id: "kr1", label: "1", names: ["kaz", "kaz dağları"], lat: 39.70, lng: 26.85 }, 
            { id: "kr2", label: "2", names: ["madra"], lat: 39.35, lng: 27.20 }, 
            { id: "kr3", label: "3", names: ["yunt"], lat: 38.88, lng: 27.22 }, 
            { id: "kr4", label: "4", names: ["bozdağ"], lat: 38.35, lng: 28.10 }, 
            { id: "kr5", label: "5", names: ["aydın"], lat: 37.96, lng: 28.25 }, 
            { id: "kr6", label: "6", names: ["menteşe"], lat: 37.35, lng: 28.52 }, 
            { id: "kr7", label: "7", names: ["amanos", "nur"], lat: 36.75, lng: 36.32 } 
        ],

        volkanik: [ 
            { id: "v1", label: "1", names: ["kula"], lat: 38.54, lng: 28.60 }, 
            { id: "v2", label: "2", names: ["karadağ"], lat: 37.25, lng: 33.15 }, 
            { id: "v3", label: "3", names: ["meke"], lat: 37.68, lng: 33.64 }, 
            { id: "v4", label: "4", names: ["karacadağ"], lat: 37.81, lng: 33.72 }, 
            { id: "v5", label: "5", names: ["hasan"], lat: 38.12, lng: 34.16 }, 
            { id: "v6", label: "6", names: ["melendiz"], lat: 38.15, lng: 34.50 }, 
            { id: "v7", label: "7", names: ["erciyes"], lat: 38.53, lng: 35.44 }, 
            { id: "v8", label: "8", names: ["karacadağ"], lat: 37.66, lng: 39.83 }, 
            { id: "v9", label: "9", names: ["nemrut"], lat: 38.62, lng: 42.24 }, 
            { id: "v10", label: "10", names: ["süphan"], lat: 38.92, lng: 42.83 }, 
            { id: "v11", label: "11", names: ["tendürek"], lat: 39.35, lng: 43.87 }, 
            { id: "v12", label: "12", names: ["ağrı", "büyük ağrı"], lat: 39.70, lng: 44.29 }, 
            { id: "v13", label: "13", names: ["küçük ağrı"], lat: 39.65, lng: 44.40 } 
        ],
        
        tektonik: [ { id: "t1", label: "1", names: ["sapanca"], lat: 40.71, lng: 30.27 }, { id: "t2", label: "2", names: ["iznik"], lat: 40.44, lng: 29.53 }, { id: "t3", label: "3", names: ["ulubat"], lat: 40.18, lng: 28.58 }, { id: "t4", label: "4", names: ["manyas", "kuş"], lat: 40.20, lng: 27.97 }, { id: "t5", label: "5", names: ["eber"], lat: 38.61, lng: 31.20 }, { id: "t6", label: "6", names: ["akşehir"], lat: 38.54, lng: 31.42 }, { id: "t7", label: "7", names: ["ılgın", "çavuşçu"], lat: 38.35, lng: 31.88 }, { id: "t8", label: "8", names: ["tuz"], lat: 38.75, lng: 33.35 }, { id: "t9", label: "9", names: ["seyfe"], lat: 39.20, lng: 34.40 }, { id: "t10", label: "10", names: ["acıgöl"], lat: 37.82, lng: 29.85 }, { id: "t11", label: "11", names: ["burdur"], lat: 37.75, lng: 30.15 }, { id: "t12", label: "12", names: ["eğirdir"], lat: 38.05, lng: 30.85 }, { id: "t13", label: "13", names: ["kovada"], lat: 37.64, lng: 30.87 }, { id: "t14", label: "14", names: ["beyşehir"], lat: 37.75, lng: 31.50 }, { id: "t15", label: "15", names: ["hazar"], lat: 38.48, lng: 39.41 }, { id: "t16", label: "16", names: ["nazik"], lat: 38.85, lng: 42.28 }, { id: "t17", label: "17", names: ["van"], lat: 38.65, lng: 42.90 }, { id: "t18", label: "18", names: ["erçek"], lat: 38.65, lng: 43.55 }, { id: "t19", label: "19", names: ["aktaş"], lat: 41.20, lng: 43.21 } ],
        volkanikgol: [ { id: "vg1", label: "1", names: ["nemrut"], lat: 38.62, lng: 42.24 }, { id: "vg2", label: "2", names: ["aygır"], lat: 40.75, lng: 43.34 }, { id: "vg3", label: "3", names: ["meke"], lat: 37.68, lng: 33.64 }, { id: "vg4", label: "4", names: ["gölcük"], lat: 37.73, lng: 30.49 } ],
        karstikgoller: [ { id: "kg1", label: "1", names: ["avlan"], lat: 36.58, lng: 29.98 }, { id: "kg2", label: "2", names: ["elmalı"], lat: 36.72, lng: 29.93 }, { id: "kg3", label: "3", names: ["müğren"], lat: 36.65, lng: 29.75 }, { id: "kg4", label: "4", names: ["karagöl"], lat: 36.70, lng: 29.62 }, { id: "kg5", label: "5", names: ["salda"], lat: 37.55, lng: 29.68 }, { id: "kg6", label: "6", names: ["kestel"], lat: 37.38, lng: 30.25 }, { id: "kg7", label: "7", names: ["suğla"], lat: 37.33, lng: 32.05 }, { id: "kg8", label: "8", names: ["kızılören"], lat: 37.97, lng: 32.22 }, { id: "kg9", label: "9", names: ["çıralı"], lat: 37.83, lng: 32.25 }, { id: "kg10", label: "10", names: ["timraş"], lat: 37.78, lng: 32.32 }, { id: "kg11", label: "11", names: ["hafik"], lat: 39.85, lng: 37.39 }, { id: "kg12", label: "12", names: ["lota"], lat: 39.84, lng: 37.52 }, { id: "kg13", label: "13", names: ["tödürge"], lat: 39.88, lng: 37.61 } ],
        buzul: [ { id: "bg1", label: "1", names: ["uludağ"], lat: 40.07, lng: 29.23 }, { id: "bg2", label: "2", names: ["dedegöl"], lat: 37.64, lng: 31.28 }, { id: "bg3", label: "3", names: ["akdağ"], lat: 36.54, lng: 29.58 }, { id: "bg4", label: "4", names: ["bolkar"], lat: 37.24, lng: 34.35 }, { id: "bg5", label: "5", names: ["aladağlar"], lat: 37.82, lng: 35.16 }, { id: "bg6", label: "6", names: ["nurhak"], lat: 37.98, lng: 37.45 }, { id: "bg7", label: "7", names: ["karagöl"], lat: 40.52, lng: 38.16 }, { id: "bg8", label: "8", names: ["karadağ"], lat: 40.55, lng: 38.20 }, { id: "bg9", label: "9", names: ["soğanlı"], lat: 40.52, lng: 40.43 }, { id: "bg10", label: "10", names: ["rize"], lat: 40.78, lng: 40.85 }, { id: "bg11", label: "11", names: ["kaçkar"], lat: 40.84, lng: 41.16 }, { id: "bg12", label: "12", names: ["yalnızçam"], lat: 41.12, lng: 42.35 }, { id: "bg13", label: "13", names: ["esence"], lat: 39.78, lng: 39.77 }, { id: "bg14", label: "14", names: ["munzur"], lat: 39.42, lng: 39.10 }, { id: "bg15", label: "15", names: ["meydan"], lat: 39.30, lng: 43.18 }, { id: "bg16", label: "16", names: ["bağırpaşa"], lat: 39.52, lng: 40.10 }, { id: "bg17", label: "17", names: ["bingöl"], lat: 39.35, lng: 41.42 }, { id: "bg18", label: "18", names: ["mescit"], lat: 40.38, lng: 41.20 }, { id: "bg19", label: "19", names: ["süphan"], lat: 38.92, lng: 42.83 }, { id: "bg20", label: "20", names: ["arı"], lat: 39.75, lng: 43.70 }, { id: "bg21", label: "21", names: ["ihtiyarşahap"], lat: 38.25, lng: 42.27 }, { id: "bg22", label: "22", names: ["karacadağ"], lat: 37.66, lng: 39.83 }, { id: "bg23", label: "23", names: ["cilo"], lat: 37.49, lng: 44.02 }, { id: "bg24", label: "24", names: ["mor"], lat: 37.75, lng: 44.35 }, { id: "bg25", label: "25", names: ["sat"], lat: 37.42, lng: 44.15 } ],
        volkanikset: [ { id: "vs1", label: "1", names: ["van"], lat: 38.65, lng: 42.90 }, { id: "vs2", label: "2", names: ["nazik"], lat: 38.86, lng: 42.29 }, { id: "vs3", label: "3", names: ["erçek"], lat: 38.66, lng: 43.57 }, { id: "vs4", label: "4", names: ["haçlı"], lat: 39.02, lng: 42.30 }, { id: "vs5", label: "5", names: ["balık"], lat: 39.78, lng: 43.53 }, { id: "vs6", label: "6", names: ["çıldır"], lat: 41.05, lng: 43.15 } ],
        aluvyonset: [ { id: "as1", label: "1", names: ["köyceğiz"], lat: 36.93, lng: 28.64 }, { id: "as2", label: "2", names: ["bafa"], lat: 37.50, lng: 27.46 }, { id: "as3", label: "3", names: ["marmara"], lat: 38.62, lng: 28.02 }, { id: "as4", label: "4", names: ["akgöl"], lat: 41.04, lng: 30.43 }, { id: "as5", label: "5", names: ["eymir"], lat: 39.82, lng: 32.83 }, { id: "as6", label: "6", names: ["mogan"], lat: 39.77, lng: 32.79 }, { id: "as7", label: "7", names: ["uzungöl"], lat: 40.62, lng: 40.29 } ],
        kiyiset: [ { id: "ks1", label: "1", names: ["terkos"], lat: 41.33, lng: 28.53 }, { id: "ks2", label: "2", names: ["büyükçekmece"], lat: 41.06, lng: 28.56 }, { id: "ks3", label: "3", names: ["küçükçekmece"], lat: 40.99, lng: 28.76 }, { id: "ks4", label: "4", names: ["karine"], lat: 37.61, lng: 27.22 }, { id: "ks5", label: "5", names: ["beymelek"], lat: 36.26, lng: 30.04 }, { id: "ks6", label: "6", names: ["akgöl"], lat: 36.29, lng: 33.95 }, { id: "ks7", label: "7", names: ["paradeniz"], lat: 36.30, lng: 34.02 }, { id: "ks8", label: "8", names: ["akyatan"], lat: 36.60, lng: 35.25 }, { id: "ks9", label: "9", names: ["ağyatan"], lat: 36.63, lng: 35.35 }, { id: "ks10", label: "10", names: ["balık"], lat: 41.59, lng: 36.08 }, { id: "ks11", label: "11", names: ["gıcı"], lat: 41.60, lng: 36.04 }, { id: "ks12", label: "12", names: ["tatlı"], lat: 41.58, lng: 36.01 }, { id: "ks13", label: "13", names: ["gernek"], lat: 41.62, lng: 36.07 } ],
        heyelanset: [ { id: "hs1", label: "1", names: ["yedigöller"], lat: 40.94, lng: 31.75 }, { id: "hs2", label: "2", names: ["abant"], lat: 40.60, lng: 31.28 }, { id: "hs3", label: "3", names: ["sünnet"], lat: 40.42, lng: 30.96 }, { id: "hs4", label: "4", names: ["sülük"], lat: 40.52, lng: 30.87 }, { id: "hs5", label: "5", names: ["borabay"], lat: 40.81, lng: 36.16 }, { id: "hs6", label: "6", names: ["zinav"], lat: 40.45, lng: 37.28 }, { id: "hs7", label: "7", names: ["sera"], lat: 40.99, lng: 39.63 }, { id: "hs8", label: "8", names: ["tortum"], lat: 40.63, lng: 41.64 } ],
        travertenset: [ { id: "ts1", label: "1", names: ["otlukbeli"], lat: 39.87, lng: 39.91 } ],
        barajlar: [ { id: "br1", label: "1", names: ["demirköprü"], lat: 38.62, lng: 28.34 }, { id: "br2", label: "2", names: ["adıgüzel"], lat: 38.13, lng: 29.21 }, { id: "br3", label: "3", names: ["kemer"], lat: 37.53, lng: 28.53 }, { id: "br4", label: "4", names: ["gökçekaya"], lat: 40.05, lng: 31.03 }, { id: "br5", label: "5", names: ["sarıyar"], lat: 40.06, lng: 31.42 }, { id: "br6", label: "6", names: ["porsuk"], lat: 39.62, lng: 30.17 }, { id: "br7", label: "7", names: ["kesikköprü"], lat: 39.38, lng: 33.43 }, { id: "br8", label: "8", names: ["kapulukaya"], lat: 39.73, lng: 33.48 }, { id: "br9", label: "9", names: ["hirfanlı"], lat: 39.27, lng: 33.53 }, { id: "br10", label: "10", names: ["altınkaya"], lat: 41.28, lng: 35.58 }, { id: "br11", label: "11", names: ["derbent"], lat: 41.35, lng: 35.84 }, { id: "br12", label: "12", names: ["hasan uğurlu"], lat: 40.84, lng: 36.68 }, { id: "br13", label: "13", names: ["suat uğurlu"], lat: 40.91, lng: 36.68 }, { id: "br14", label: "14", names: ["kılıçkaya"], lat: 40.23, lng: 38.18 }, { id: "br15", label: "15", names: ["almus"], lat: 40.38, lng: 36.94 }, { id: "br16", label: "16", names: ["deriner"], lat: 41.17, lng: 41.87 }, { id: "br17", label: "17", names: ["yusufeli"], lat: 40.83, lng: 41.56 }, { id: "br18", label: "18", names: ["oymapınar"], lat: 36.91, lng: 31.54 }, { id: "br19", label: "19", names: ["manavgat"], lat: 36.85, lng: 31.51 }, { id: "br20", label: "20", names: ["gezende"], lat: 36.52, lng: 33.19 }, { id: "br21", label: "21", names: ["kayraktepe"], lat: 36.49, lng: 33.48 }, { id: "br22", label: "22", names: ["çatalan"], lat: 37.19, lng: 35.29 }, { id: "br23", label: "23", names: ["seyhan"], lat: 37.04, lng: 35.34 }, { id: "br24", label: "24", names: ["aslantaş"], lat: 37.28, lng: 36.27 }, { id: "br25", label: "25", names: ["menzelet"], lat: 37.67, lng: 36.84 }, { id: "br26", label: "26", names: ["kartalkaya"], lat: 37.33, lng: 37.07 }, { id: "br27", label: "27", names: ["keban"], lat: 38.80, lng: 38.76 }, { id: "br28", label: "28", names: ["karakaya"], lat: 38.23, lng: 39.14 }, { id: "br29", label: "29", names: ["atatürk"], lat: 37.48, lng: 38.32 }, { id: "br30", label: "30", names: ["birecik"], lat: 37.05, lng: 37.98 }, { id: "br31", label: "31", names: ["kralkızı"], lat: 38.37, lng: 40.16 }, { id: "br32", label: "32", names: ["devegeçidi"], lat: 38.08, lng: 39.95 }, { id: "br33", label: "33", names: ["ılısu"], lat: 37.53, lng: 41.84 } ],
        tabakaduzlugu: [ { id: "td1", label: "1", names: ["haymana"], lat: 39.42, lng: 32.55 }, { id: "td2", label: "2", names: ["cihanbeyli"], lat: 38.65, lng: 32.85 }, { id: "td3", label: "3", names: ["obruk"], lat: 38.15, lng: 33.30 }, { id: "td4", label: "4", names: ["bozok"], lat: 39.65, lng: 35.15 }, { id: "td5", label: "5", names: ["yazılıkaya"], lat: 39.20, lng: 30.65 }, { id: "td6", label: "6", names: ["uzunyayla"], lat: 39.05, lng: 36.45 }, { id: "td7", label: "7", names: ["gaziantep"], lat: 37.15, lng: 37.40 }, { id: "td8", label: "8", names: ["şanlıurfa"], lat: 37.20, lng: 38.90 }, { id: "td9", label: "9", names: ["adıyaman"], lat: 37.75, lng: 38.25 }, { id: "td10", label: "10", names: ["diyarbakır"], lat: 37.95, lng: 40.20 } ],
        lav: [ { id: "vp1", label: "1", names: ["erzurum"], lat: 39.95, lng: 41.25 }, { id: "vp2", label: "2", names: ["kars"], lat: 40.60, lng: 43.10 }, { id: "vp3", label: "3", names: ["ardahan"], lat: 41.11, lng: 42.70 }, { id: "vp4", label: "4", names: ["kapadokya"], lat: 38.65, lng: 34.85 } ],
        karstikplato: [ { id: "kp1", label: "1", names: ["teke"], lat: 36.85, lng: 29.85 }, { id: "kp2", label: "2", names: ["taşeli"], lat: 36.55, lng: 33.05 } ],
        asinim: [ { id: "ap1", label: "1", names: ["çatalca"], lat: 41.15, lng: 28.45 }, { id: "ap2", label: "2", names: ["kocaeli"], lat: 40.95, lng: 29.65 }, { id: "ap3", label: "3", names: ["perşembe"], lat: 40.72, lng: 37.40 } ],
        delta: [ { id: "do1", label: "1", names: ["bafra"], lat: 41.55, lng: 35.95 }, { id: "do2", label: "2", names: ["çarşamba"], lat: 41.25, lng: 36.75 }, { id: "do3", label: "3", names: ["karasu"], lat: 41.10, lng: 30.70 }, { id: "do4", label: "4", names: ["meriç"], lat: 40.75, lng: 26.25 }, { id: "do5", label: "5", names: ["bakırçay"], lat: 38.93, lng: 27.02 }, { id: "do6", label: "6", names: ["gediz"], lat: 38.60, lng: 26.95 }, { id: "do7", label: "7", names: ["küçük menderes"], lat: 37.95, lng: 27.30 }, { id: "do8", label: "8", names: ["büyük menderes"], lat: 37.55, lng: 27.35 }, { id: "do9", label: "9", names: ["silifke"], lat: 36.32, lng: 33.98 }, { id: "do10", label: "10", names: ["çukurova"], lat: 36.85, lng: 35.45 } ],
        karstikovalar: [ { id: "ko1", label: "1", names: ["tefenni"], lat: 37.33, lng: 29.78 }, { id: "ko2", label: "2", names: ["acıpayam"], lat: 37.42, lng: 29.35 }, { id: "ko3", label: "3", names: ["korkuteli"], lat: 37.06, lng: 30.20 }, { id: "ko4", label: "4", names: ["kestel"], lat: 37.38, lng: 30.33 }, { id: "ko5", label: "5", names: ["elmalı"], lat: 36.73, lng: 29.91 }, { id: "ko6", label: "6", names: ["muğla"], lat: 37.21, lng: 28.36 }, { id: "ko7", label: "7", names: ["tavas"], lat: 37.58, lng: 29.07 }, { id: "ko8", label: "8", names: ["burdur"], lat: 37.72, lng: 30.28 }, { id: "ko9", label: "9", names: ["ısparta"], lat: 37.82, lng: 30.55 }, { id: "ko10", label: "10", names: ["gembos"], lat: 37.32, lng: 31.42 } ],
        tektonikovalar: [ { id: "to1", label: "1", names: ["soma"], lat: 39.18, lng: 27.60 }, { id: "to2", label: "2", names: ["manisa"], lat: 38.62, lng: 27.50 }, { id: "to3", label: "3", names: ["torbalı"], lat: 38.16, lng: 27.35 }, { id: "to4", label: "4", names: ["söke"], lat: 37.75, lng: 27.40 }, { id: "to5", label: "5", names: ["sapanca"], lat: 40.70, lng: 30.26 }, { id: "to6", label: "6", names: ["adapazarı"], lat: 40.80, lng: 30.45 }, { id: "to7", label: "7", names: ["düzce"], lat: 40.85, lng: 31.15 }, { id: "to8", label: "8", names: ["bolu"], lat: 40.73, lng: 31.60 }, { id: "to9", label: "9", names: ["kurşunlu"], lat: 40.85, lng: 33.25 }, { id: "to10", label: "10", names: ["tosya"], lat: 41.02, lng: 34.03 }, { id: "to11", label: "11", names: ["merzifon"], lat: 40.87, lng: 35.45 }, { id: "to12", label: "12", names: ["ladik"], lat: 40.91, lng: 35.90 }, { id: "to13", label: "13", names: ["erbaa"], lat: 40.67, lng: 36.57 }, { id: "to14", label: "14", names: ["suşehri"], lat: 40.16, lng: 38.08 }, { id: "to15", label: "15", names: ["erzincan"], lat: 39.75, lng: 39.50 }, { id: "to16", label: "16", names: ["erzurum"], lat: 39.95, lng: 41.25 }, { id: "to17", label: "17", names: ["pasinler"], lat: 39.98, lng: 41.67 }, { id: "to18", label: "18", names: ["ağrı"], lat: 39.72, lng: 43.05 }, { id: "to19", label: "19", names: ["ığdır"], lat: 39.92, lng: 44.05 }, { id: "to20", label: "20", names: ["maraş"], lat: 37.58, lng: 36.95 }, { id: "to21", label: "21", names: ["adıyaman"], lat: 37.76, lng: 38.27 }, { id: "to22", label: "22", names: ["malatya"], lat: 38.35, lng: 38.33 }, { id: "to23", label: "23", names: ["elazığ"], lat: 38.67, lng: 39.22 }, { id: "to24", label: "24", names: ["karlıova"], lat: 39.30, lng: 41.02 }, { id: "to25", label: "25", names: ["muş"], lat: 38.74, lng: 41.50 }, { id: "to26", label: "26", names: ["amik"], lat: 36.35, lng: 36.33 } ],
        volkanikovalar: [ { id: "vo1", label: "1", names: ["kayseri"], lat: 38.72, lng: 35.48 }, { id: "vo2", label: "2", names: ["develi"], lat: 38.38, lng: 35.48 }, { id: "vo3", label: "3", names: ["erzurum"], lat: 39.95, lng: 41.25 }, { id: "vo4", label: "4", names: ["ardahan"], lat: 41.11, lng: 42.70 }, { id: "vo5", label: "5", names: ["muradiye"], lat: 38.98, lng: 43.75 }, { id: "vo6", label: "6", names: ["çaldıran"], lat: 39.15, lng: 43.90 } ],
        akarsular: [ { id: "ak1", label: "1", names: ["çoruh"], lat: 41.18, lng: 41.82 }, { id: "ak2", label: "2", names: ["harşit"], lat: 40.80, lng: 39.20 }, { id: "ak3", label: "3", names: ["yeşilırmak"], lat: 40.65, lng: 35.83 }, { id: "ak4", label: "4", names: ["kızılırmak"], lat: 39.85, lng: 33.60 }, { id: "ak5", label: "5", names: ["bartın"], lat: 41.63, lng: 32.33 }, { id: "ak6", label: "6", names: ["filyos"], lat: 41.30, lng: 32.00 }, { id: "ak7", label: "7", names: ["sakarya"], lat: 40.20, lng: 30.30 }, { id: "ak8", label: "8", names: ["susurluk"], lat: 39.90, lng: 28.25 }, { id: "ak9", label: "9", names: ["nilüfer"], lat: 40.20, lng: 28.90 }, { id: "ak10", label: "10", names: ["meriç"], lat: 41.67, lng: 26.56 }, { id: "ak11", label: "11", names: ["ergene"], lat: 41.25, lng: 27.30 }, { id: "ak12", label: "12", names: ["bakırçay"], lat: 39.10, lng: 27.20 }, { id: "ak13", label: "13", names: ["gediz"], lat: 38.60, lng: 27.40 }, { id: "ak14", label: "14", names: ["küçük menderes"], lat: 38.15, lng: 27.80 }, { id: "ak15", label: "15", names: ["büyük menderes"], lat: 37.85, lng: 28.00 }, { id: "ak16", label: "16", names: ["dalaman"], lat: 36.90, lng: 28.90 }, { id: "ak17", label: "17", names: ["eşen"], lat: 36.60, lng: 29.35 }, { id: "ak18", label: "18", names: ["aksu"], lat: 37.10, lng: 30.85 }, { id: "ak19", label: "19", names: ["köprüçay"], lat: 37.15, lng: 31.20 }, { id: "ak20", label: "20", names: ["manavgat"], lat: 36.85, lng: 31.48 }, { id: "ak21", label: "21", names: ["göksu"], lat: 36.60, lng: 33.50 }, { id: "ak22", label: "22", names: ["seyhan"], lat: 37.20, lng: 35.25 }, { id: "ak23", label: "23", names: ["ceyhan"], lat: 37.30, lng: 36.00 }, { id: "ak24", label: "24", names: ["asi"], lat: 36.20, lng: 36.15 }, { id: "ak25", label: "25", names: ["fırat"], lat: 37.50, lng: 38.50 }, { id: "ak26", label: "26", names: ["dicle"], lat: 37.91, lng: 40.23 }, { id: "ak27", label: "27", names: ["aras"], lat: 40.10, lng: 43.50 }, { id: "ak28", label: "28", names: ["kura"], lat: 41.05, lng: 42.70 } ]
    }

    
};
