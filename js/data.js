/* Emre Karataş Mimarlık — site içeriği (tekTıkla örnek tasarım). Metinler ve görseller firmanın kendi paylaşımlarından ve gönderdiği dosyalardan derlendi. */

(function () {
  // images klasöründeki bir .jpg dosyasının yolunu üretir.
  function g(ad) { return "images/" + ad + ".jpg"; }
  function dikey(ad) { return { src: g(ad), wide: false }; }
  function yatay(ad) { return { src: g(ad), land: true }; }
  function genis(ad) { return { src: g(ad), wide: true }; }
  function video(n) { return { video: "images/santiye-" + n + ".mp4", poster: g("santiye-" + n) }; }

  window.SITE = {

    /* ---------- MARKA ---------- */
    brand: {
      name: "EMRE KARATAŞ",         // logonun kalın kısmı
      suffix: "Mimarlık",           // logonun ince kısmı (kaydırınca gizlenir)
      description: "Emre Karataş Mimarlık; Balıkesir'de konut, ofis ve kurumsal yemekhane projelerinde tasarımdan uygulamaya, anahtar teslim iç mimarlık hizmeti veren bir tasarım ofisidir."
    },

    /* ---------- ÜST MENÜ ---------- */
    nav: [
      { label: "Projeler",   href: "projeler.html" },
      { label: "Hakkımızda", href: "studyo.html" },
      { label: "İletişim",   href: "studyo.html#iletisim" }
    ],

    /* ---------- AÇILIŞ (HERO) ---------- */
    // Sırayla dönen başlıklar. Her başlık iki satırdır; satırları kısa tutun (en çok ~14 harf).
    headlines: [
      ["DOĞRU TASARIM", "KUSURSUZ SONUÇ"],
      ["DİNLER, ÇİZER", "UYGULARIZ"],
      ["TASARIMDAN",    "ANAHTARA"],
      ["MUTFAKTAN",     "FABRİKAYA"],
      ["BALIKESİR'DE",  "MEKÂN KURARIZ"]
    ],
    // Video yolu (ör. "images/tanitim.mp4"). Boşsa aşağıdaki fotoğraf slaytı çalışır.
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: g("tasarim-mutfak-01"), caption: "Açık mutfak ve yemek alanı — 3B tasarım" },
      { image: g("okan-02"),           caption: "Okan Sürücü Kursu — Altıeylül, Balıkesir" },
      { image: g("tasarim-banyo-03"),  caption: "Banyo — 3B tasarım" },
      { image: g("bypasta-02"),        caption: "By Pasta Üretim Tesisi — Küçük Sanayi, Balıkesir" },
      { image: g("tasarim-antre-03"),  caption: "Yatak odası — 3B tasarım" }
    ],

    /* ---------- MANİFESTO ---------- */
    // [Köşeli parantez] içindeki kelimelerin altı çizilir.
    manifesto: "Mekânı önce [dinler], sonra [kendi tasarım dilimizle] kurarız. İmalat boyunca sizi bilgilendirir, [anahtarı] teslim edene kadar yanınızda dururuz.",
    manifestoNote: "2022'den bu yana Balıkesir'de konut, ofis ve kurumsal yemekhane projelerini tasarımdan uygulamaya tek elden yürütüyoruz.",

    /* ---------- BÖLÜNMÜŞ SABİT BÖLÜM (fotoğraflar akar, metin sabit kalır) ---------- */
    split: [
      {
        label: "Tasarım",
        title: "Önce ekranda görürsünüz.",
        text: "Her işe sizi dinleyerek başlarız. Mekânı üç boyutlu görsellerle önceden kurar, malzemeyi, rengi ve yerleşimi şantiyeden önce birlikte karara bağlarız.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: [
          g("tasarim-banyo-03"),
          g("tasarim-mutfak-02"),
          g("tasarim-antre-03")
        ]
      },
      {
        label: "Uygulama",
        title: "Şantiyede de yanınızdayız.",
        text: "Kaba inşaattan seramiğe, cephe kaplamasından mermer merdivene kadar uygulamayı yerinde takip eder, ilerleyişi fotoğraf ve videoyla paylaşırız.",
        linkLabel: "Bizi tanıyın",
        linkHref: "studyo.html",
        images: [
          g("santiye-09"),
          g("santiye-15"),
          g("santiye-19")
        ]
      }
    ],

    /* ---------- PROJELER ----------
       featured: true  -> ana sayfadaki "Öne Çıkan Projeler" listesinde görünür
       showcase: true  -> ana sayfadaki büyük kartlı vitrinde görünür
       area, year, location ya da client boş ("") bırakılırsa o satır görünmez.
    */
    projects: [
      {
        slug: "mutfak-ve-yemek-alani",
        title: "Açık Mutfak ve Yemek Alanı",
        tagline: "Gri-bej dolaplar, siyah damarlı taş tezgâh arası ve taş kaplı adayla kurgulanan açık mutfak.",
        location: "",
        year: "",
        area: "",
        category: "İç Mekân",
        status: "Tasarım",
        client: "",
        featured: true,
        showcase: true,
        cover: g("tasarim-mutfak-01"),
        text: [
          "Mutfak, yemek alanı ve salonu tek hacimde buluşturan açık plan bir tasarım çalışması. Dolaplar gri-bej tonlarda, tezgâh arası siyah damarlı taş kaplama; ada ise doğal taş dokusuyla mekânın merkezine yerleştirildi.",
          "Üst dolaplarda cam ve ışıklı raflar, tavanda gizli ışık bandı ve sarkıt armatürler kullanıldı. Aynı mekân gündüz ve gece görünümüyle, açık ve koyu renk seçenekleriyle görselleştirildi.",
          "Görseller üç boyutlu tasarım çalışmasıdır; yapılmış bir uygulamayı göstermez."
        ],
        gallery: [
          genis("tasarim-mutfak-04"),
          yatay("tasarim-mutfak-02"),
          yatay("tasarim-mutfak-03"),
          genis("tasarim-mutfak-05"),
          genis("tasarim-mutfak-01")
        ]
      },
      {
        slug: "okan-surucu-kursu",
        title: "Okan Sürücü Kursu",
        tagline: "Bahçelievler şubesinde 450 m² içerisine yemekhane, cafeterya, danışma, çalışma alanları ve müdür odası.",
        location: "Bahçelievler, Altıeylül / Balıkesir",
        year: 2023,
        area: "450 m²",
        category: "Ticari",
        status: "Tamamlandı",
        client: "Okan Sürücü Kursu",
        featured: true,
        showcase: true,
        cover: g("okan-02"),
        text: [
          "Okan Sürücü Kursu'nun Balıkesir Altıeylül'deki Bahçelievler şubesini baştan sona yeniledik. 450 m² alan içerisine yemekhane, cafeterya, danışma, personel çalışma alanları ve müdür odasını tasarladık.",
          "Tasarımda ahşabın doğal görüntüsüyle mermerin şıklığını bir araya getirdik. Danışma bankosunda siyah damarlı mermer ve dikey ahşap şeritler, çalışma alanlarında açık renkli yüzeyler ve bitkili ayırıcı raflar kullanıldı.",
          "Süreç geceli gündüzlü sürdü; değişimin tamamı firmanın Instagram hesabında adım adım paylaşıldı."
        ],
        gallery: [
          genis("okan-01"),
          dikey("okan-03"),
          dikey("okan-04"),
          dikey("okan-05"),
          dikey("okan-02")
        ]
      },
      {
        slug: "hastane-yemekhaneleri",
        title: "Hastane Yemekhaneleri",
        tagline: "Medicana, Uludağ Üniversitesi Hastanesi ve Okan Üniversitesi Diş Hastanesi için yemekhane tasarımları.",
        location: "İstanbul · İzmir · Bursa",
        year: 2022,
        area: "",
        category: "Yemekhane",
        status: "Tasarım ve uygulama",
        client: "Medicana, Uludağ Üniversitesi Hastanesi, Okan Üniversitesi Diş Hastanesi",
        featured: true,
        showcase: true,
        cover: g("yemekhane-03"),
        text: [
          "Hastane yemekhanelerinde işlev ve hijyen önce gelir. Medicana Hastanesi'nin İstanbul Ataşehir ve İzmir yemekhane projelerini, Bursa Uludağ Üniversitesi Hastanesi'nin yemekhanesini ve Okan Üniversitesi Diş Hastanesi'nin yemekhane mutfak yerleşimini tasarladık.",
          "Servis hatları, yemek alanı ve mutfak akışı birlikte kurgulandı; mekânlarda sade renkler, mavi ve gri yüzeyler kullanıldı. Medicana Ataşehir'in inşaat aşamalarını da paylaştık.",
          "Bu işlerin açıklamaları firmanın 2022 paylaşımlarına dayanır."
        ],
        gallery: [
          genis("yemekhane-03"),
          yatay("yemekhane-02"),
          yatay("yemekhane-01"),
          yatay("yemekhane-04"),
          yatay("yemekhane-05")
        ]
      },
      {
        slug: "by-pasta-uretim-tesisi",
        title: "By Pasta Üretim Tesisi",
        tagline: "Mevcut yapıyı koruyup çıkmalar ve özel detaylarla yeniden kurgulanan üretim fabrikası.",
        location: "Küçük Sanayi Bölgesi, Balıkesir",
        year: 2023,
        area: "",
        category: "Ticari",
        status: "Tasarım ve şantiye takibi",
        client: "By Pasta",
        featured: true,
        showcase: true,
        cover: g("bypasta-02"),
        text: [
          "Balıkesir Küçük Sanayi Bölgesi'nde yer alan By Pasta Üretim Fabrikası'nı tasarladık ve şantiye sürecini takip ettik.",
          "Tasarımda şehre uyumu, iklim koşullarını ve şehrin enerjik yapısından esinlenen renkleri esas aldık. Mevcut yapıyı koruyarak üzerine eklenen çıkmalar ve özel detaylarla yapıya yeni bir yüz verdik; giriş cephesi beyaz kaplama ve ışıklı tabela ile öne çıkarıldı.",
          "İç mekânda çelik asma kat ve geniş camlar var; şantiye fotoğrafları inşaatın ilerleyişini gösteriyor."
        ],
        gallery: [
          genis("bypasta-01"),
          dikey("bypasta-03"),
          dikey("bypasta-04"),
          dikey("bypasta-06"),
          dikey("bypasta-07"),
          genis("bypasta-05")
        ]
      },
      {
        slug: "santiye-cephe",
        title: "Şantiyeden — Cephe",
        tagline: "İskeleli bir yapıda cephe kaplaması: tasarımın, projenin ve uygulamanın ofisimize ait olduğunu belirten pano.",
        location: "",
        year: "",
        area: "",
        category: "Şantiye",
        status: "Uygulama aşamasında",
        client: "",
        featured: true,
        showcase: true,
        cover: g("santiye-09"),
        text: [
          "Ofisimizin uygulamasını yürüttüğü bir yapının cephe çalışmasından kayıtlar. İskeleye asılan panoda “Bu projenin tasarım, proje, uygulaması Emre Karataş Mimarlık tarafından yapılmaktadır” yazıyor.",
          "Videolarda bej ve kahve tonlu cephe kaplaması, pencere söveleri ve iskele çalışması görülüyor. Kayıtlar şantiyede telefonla, kurgusuz çekildi."
        ],
        gallery: [
          video("14"),
          video("09"),
          video("10"),
          video("07"),
          video("08"),
          video("11"),
          video("12"),
          video("13")
        ]
      },
      {
        slug: "banyo-tasarimi",
        title: "Banyo Tasarımı",
        tagline: "Doğal taş dokusu, ahşap kaplamalı duşakabin ve ışıklı aynayla kurgulanan banyo.",
        location: "",
        year: "",
        area: "",
        category: "İç Mekân",
        status: "Tasarım",
        client: "",
        featured: false,
        showcase: false,
        cover: g("tasarim-banyo-03"),
        text: [
          "Banyo için hazırlanan üç boyutlu tasarım çalışması. Duvarlarda doğal taş görünümlü kaplama ile açık renkli seramik birlikte kullanıldı; duşakabin içi ahşap görünümlü kaplamayla ısıtıldı.",
          "Yuvarlak köşeli ışıklı ayna, ışıklı niş ve açık raflar mekânı hem işlevli hem sıcak tutuyor.",
          "Görseller tasarım çalışmasıdır; yapılmış bir uygulamayı göstermez."
        ],
        gallery: [
          genis("tasarim-banyo-02"),
          genis("tasarim-banyo-03"),
          dikey("tasarim-banyo-01")
        ]
      },
      {
        slug: "fabrika-kantinleri",
        title: "Fabrika Kantinleri",
        tagline: "Dardanel, Akwel Otomotiv ve BU-PİLİÇ için kantin ve yemekhane projeleri.",
        location: "Çanakkale · Bursa · Bandırma",
        year: 2022,
        area: "",
        category: "Yemekhane",
        status: "Tasarım ve uygulama",
        client: "Dardanel, Akwel Otomotiv, BU-PİLİÇ",
        featured: false,
        showcase: false,
        cover: g("kantin-01"),
        text: [
          "Çanakkale'de Dardanel fabrikasının kantin projesini işlevsel ve keyifli bir mekâna dönüştürdük. Bursa'da Akwel Otomotiv için yemekhane tasarladık. Bandırma'da BU-PİLİÇ fabrikasının kantinini tasarlayıp uygulamasını da gerçekleştirdik; dinlenme alanında da çalışma yaptık.",
          "Üç projede de fonksiyonel ve keyifli mekânlar hedefledik."
        ],
        gallery: [
          genis("kantin-01"),
          yatay("kantin-02"),
          yatay("kantin-03")
        ]
      },
      {
        slug: "referans-bursa",
        title: "Referans — Yönetim Ofisi ve Lobi",
        tagline: "Fabrikanın konseptine uygun, siyah şeritli ve modern çizgili yönetici odası, lobi ve ortak alanlar.",
        location: "Bursa",
        year: 2022,
        area: "",
        category: "Ticari",
        status: "Tasarım ve uygulama",
        client: "Referans Catering",
        featured: false,
        showcase: false,
        cover: g("referans-01"),
        text: [
          "Bursa'da Referans Catering için yönetici odasını, lobi ve resepsiyon alanını tasarladık. Modern net çizgilerle ilerlediğimiz tasarımı fabrikanın konseptine uygun şekilde hazırlayıp uyguladık.",
          "Siyah dikey şeritler, mermer görünümlü koridor kaplaması ve mavi bir koltuk grubu mekânın ana unsurları."
        ],
        gallery: [
          genis("referans-01"),
          yatay("referans-04"),
          yatay("referans-02"),
          dikey("referans-03"),
          dikey("referans-05"),
          genis("referans-06")
        ]
      },
      {
        slug: "antre-ve-yatak-odasi",
        title: "Antre ve Yatak Odası",
        tagline: "Işıklı aynalı portmanto, kemerli niş ve bambu desenli duvarlı yatak odası.",
        location: "",
        year: "",
        area: "",
        category: "İç Mekân",
        status: "Tasarım",
        client: "",
        featured: false,
        showcase: false,
        cover: g("tasarim-antre-01"),
        text: [
          "Antre için iki ayrı çalışma: LED çerçeveli ayna, ahşap lambri ve ayakkabılıklı bir portmanto ünitesi; siyah damarlı mermer, bakır tonlu paneller ve aplikli kemerli bir niş.",
          "Yatak odasında bambu desenli duvar paneli, ahşap bölmeler ve asma armatürler kullanıldı.",
          "Görseller tasarım çalışmasıdır; yapılmış bir uygulamayı göstermez."
        ],
        gallery: [
          dikey("tasarim-antre-01"),
          dikey("tasarim-antre-02"),
          genis("tasarim-antre-03")
        ]
      },
      {
        slug: "santiye-ince-isler",
        title: "Şantiyeden — İnce İşler",
        tagline: "Banyo seramikleri, büyük format zemin kaplaması ve siyah mermer merdiven basamakları.",
        location: "",
        year: "",
        area: "",
        category: "Şantiye",
        status: "Uygulama aşamasında",
        client: "",
        featured: true,
        showcase: false,
        cover: g("santiye-15"),
        text: [
          "İnce işler aşamasından kayıtlar: ıslak hacimlerde seramik döşemesi, büyük format zemin seramiğinin seviyeleme klipsleriyle serilmesi ve beton merdivene siyah damarlı mermer basamakların yerleştirilmesi.",
          "Basamakların üzerinde yerleşim için yapılmış numaralandırma ve ölçü işaretleri görülüyor."
        ],
        gallery: [
          dikey("santiye-15"),
          video("22"),
          video("21"),
          video("20"),
          video("19"),
          video("16"),
          video("17"),
          video("18")
        ]
      },
      {
        slug: "santiye-kaba-insaat",
        title: "Şantiyeden — Kaba İnşaat",
        tagline: "Tuğla duvarlar, beton merdiven ve sıvalı dış cephe: kaba inşaat aşamasından kayıtlar.",
        location: "",
        year: "",
        area: "",
        category: "Şantiye",
        status: "Uygulama aşamasında",
        client: "",
        featured: false,
        showcase: false,
        cover: g("santiye-05"),
        text: [
          "İç mekânda tuğla duvar ve beton merdiven, dışarıda sıvası tamamlanmış kabuk yapılar: kaba inşaat aşamasının kayıtları.",
          "Videolar şantiyede telefonla, kurgusuz çekildi."
        ],
        gallery: [
          video("05"),
          video("04"),
          video("06"),
          video("01"),
          video("02"),
          video("03")
        ]
      },
      {
        slug: "bahcelievler-daireler",
        title: "Bahçelievler Daireleri",
        tagline: "Bahçelievler'de 3+1 ve 4+1 dairelerin salon, yatak odası ve çalışma alanı tasarımları.",
        location: "Bahçelievler, Balıkesir",
        year: 2023,
        area: "3+1 · 4+1",
        category: "Konut",
        status: "Tasarım",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("bahcelievler-01"),
        text: [
          "Balıkesir Bahçelievler'de iki ayrı dairenin tasarımı: 3+1 dairenin her mekânı modern ve şık olacak şekilde tasarlandı; 4+1 dairede eski salon modern ve dinamik bir tasarımla yeniden kurgulandı, giyinme odasında her köşe verimli kullanıldı.",
          "Yatak odası ve çalışma odası tasarımlarında ahşap, açık renk yüzeyler ve renkli vurgular birlikte kullanıldı."
        ],
        gallery: [
          dikey("bahcelievler-01"),
          dikey("bahcelievler-02"),
          dikey("bahcelievler-03"),
          dikey("bahcelievler-04")
        ]
      },
      {
        slug: "pasaalani-daire",
        title: "Paşaalanı Daire ve Mutfak",
        tagline: "Açık renklerle genişletilen salon ve bohem esintili mutfak tasarımı.",
        location: "Paşaalanı, Balıkesir",
        year: 2023,
        area: "4+1",
        category: "Konut",
        status: "Tasarım",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("pasaalani-02"),
        text: [
          "Balıkesir Paşaalanı'ndaki 4+1 dairenin salonunda açık renkler kullanarak mevcut mekânı olduğundan geniş gösterdik. Paylaşımda uygulamanın ofisimiz tarafından yapılacağı belirtildi.",
          "Dairenin mutfağı bohem bir tarzla ve şık bir çizgiyle tasarlandı: beyaz metro seramik, ahşap tezgâh ve gri dolaplar."
        ],
        gallery: [
          genis("pasaalani-01"),
          dikey("pasaalani-02"),
          dikey("pasaalani-03")
        ]
      },
      {
        slug: "cocuk-odalari",
        title: "Çocuk Odaları",
        tagline: "Balıkesir ve Ankara'daki evler için sade, işlevli ve depolamalı çocuk odası tasarımları.",
        location: "Balıkesir · Ankara",
        year: "2023–24",
        area: "",
        category: "Konut",
        status: "Tasarım",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("cocuk-03"),
        text: [
          "Balıkesir Altıeylül ve Sütlüce'deki ev projeleri ile Ankara Eryaman'daki 4+1 ev için çocuk odası tasarımları. Odalar sade ve modern tutuldu; işlevsellik, depolama ve çocuğun ilgi alanlarına göre düzenleme öne çıktı.",
          "Bu çalışmalar yalnızca tasarım aşamasındadır; uygulama projesi bu paylaşımlarda yer almıyor."
        ],
        gallery: [
          dikey("cocuk-03"),
          dikey("cocuk-02"),
          dikey("cocuk-01"),
          dikey("cocuk-04")
        ]
      },
      {
        slug: "otobus-duraklari",
        title: "Otobüs Durakları",
        tagline: "Edremit, Çanakkale ve Balıkesir Zağnos Paşa Camii için durak tasarımları.",
        location: "Edremit · Çanakkale · Balıkesir",
        year: 2022,
        area: "",
        category: "Kent",
        status: "Tasarım",
        client: "",
        featured: false,
        showcase: false,
        cover: g("durak-01"),
        text: [
          "Kentsel mobilya ölçeğinde üç durak tasarımı: Edremit'te Türk bayraklı durak, Çanakkale'de otobüs durağı ve Balıkesir Zağnos Paşa Camii önü durak çalışması.",
          "Durakların her biri bulunduğu çevreye göre kurgulandı; bilgi ekranı, oturma alanı ve aydınlatma tasarımın parçası olarak ele alındı."
        ],
        gallery: [
          genis("durak-01"),
          yatay("durak-02"),
          yatay("durak-03")
        ]
      },
      {
        slug: "susurluk-19-daire",
        title: "Susurluk 19 Daire",
        tagline: "Susurluk'ta 19 daireli konut projesinin iç ve dış cephe tasarımı.",
        location: "Susurluk / Balıkesir",
        year: 2022,
        area: "19 daire",
        category: "Konut",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: g("susurluk-01"),
        text: [
          "Susurluk'taki 19 daireli konut projesinin iç ve dış cephe tasarımlarını hazırladık; proje teslim edilmiştir.",
          "Cephede beyaz yüzeyler ve ahşap görünümlü balkon bantları kullanıldı."
        ],
        gallery: [
          genis("susurluk-01")
        ]
      }
    ],

    /* ---------- HİZMETLER ---------- */
    services: [
      { title: "İç Mimari Tasarım", short: "Konut, ofis ve ticari mekân.", text: "Konut, ofis ve ticari mekânlar için plan, malzeme, renk ve aydınlatma tasarımı. Önce sizi dinler, ihtiyacınızı anlar, sonra kendi tasarım dilimizle kurgulayıp birlikte karar veririz." },
      { title: "3 Boyutlu Görselleştirme", short: "Mekânı yapılmadan önce görün.", text: "Tasarımı üç boyutlu görsellerle önceden görürsünüz; malzeme ve renk kararları şantiyede değil, tasarım aşamasında verilir." },
      { title: "Anahtar Teslim Uygulama", short: "Tasarımdan montaja tek elden.", text: "İmalat sürecinde sizi birebir bilgilendirir, en ince ayrıntısına kadar teyitleşerek ilerler; ürünlerin kurulum ve montajını yapıp anahtarı teslim ederiz." },
      { title: "Mutfak, Banyo ve Ev İçi", short: "Mutfak, banyo, antre, çocuk odası.", text: "Mutfak ve banyo tasarımının yanında antre, portmanto, TV ünitesi, yatak ve çocuk odası gibi ev içi mekânlar ve özel mobilya tasarımı." },
      { title: "Kurumsal Yemekhane ve Kantin", short: "Fabrika ve hastane yemekhaneleri.", text: "Fabrika ve hastane yemekhaneleri, kantinler ve mutfak yerleşimi: servis akışı, çalışan konforu ve hijyen önceliğiyle tasarım ve uygulama." },
      { title: "Ofis, Ticari ve Kent Mobilyası", short: "Ofis, tesis, otobüs durağı.", text: "Ofis, kurs, üretim tesisi gibi ticari mekânlar ve otobüs durağı gibi kentsel mobilya tasarımı; gerektiğinde şantiye takibi." }
    ],

    /* ---------- GÜNCEL ---------- */
    // Haber yok; boş bırakıldığı için bölüm görünmez.
    news: [],

    /* ---------- HAKKIMIZDA SAYFASI ---------- */
    studio: {
      headline: "Mekânı dinleyen, tasarlayan ve uygulayan bir iç mimarlık ofisiyiz.",
      image: g("tasarim-mutfak-04"),
      text: [
        "Emre Karataş Mimarlık, İç Mimar Emre Karataş'ın 2022'de Balıkesir'de kurduğu bir iç mimarlık ofisidir. Konut, ofis ve ticari mekânlarda projeyi tasarım aşamasından uygulamasına kadar A'dan Z'ye yürütürüz; hedefimiz kalite, konfor ve huzuru bir arada sunmaktır.",
        "Çalışma biçimimiz üç adımdır: önce sizi ofisimizde ağırlar, ihtiyacınızı dinleriz. Sonra kendi tasarım dilimizle kurguyu çıkarır, birlikte karar veririz. İmalat boyunca şeffaf davranır, sizi birebir bilgilendirir; kurulum ve montajı bitirip anahtarı teslim ederiz.",
        "Konutlardan fabrika ve hastane yemekhanelerine, ofislerden otobüs duraklarına kadar farklı ölçeklerde çalıştık. Balıkesir'in yanı sıra Bursa, Çanakkale, İstanbul, İzmir ve Ankara'da da projelerimiz var."
      ],
      stats: [
        { value: "2022", label: "Kuruluş" },
        { value: "6",    label: "İlde proje" },
        { value: "3B",   label: "Tasarım ve görselleştirme" }
      ]
    },

    /* ---------- EKİP ---------- */
    // image boş ("") bırakılırsa ad-soyadın baş harfleri gösterilir.
    team: [
      { name: "Emre Karataş", role: "İç Mimar", image: "" }
    ],

    /* ---------- OFİSLER ----------
       İlk iki ofisin saati açılış ekranının sağ altında görünür.
    */
    offices: [
      { city: "Balıkesir", code: "BAL", timeZone: "Europe/Istanbul", address: "Dumlupınar Mah. Anafartalar Cad. Net Acar Residence Kat: 3 No: 303, Karesi / Balıkesir", phone: "+90 542 439 77 10" }
    ],

    /* ---------- BÖLÜM BAŞLIKLARI ---------- */
    labels: {
      featured: "Öne Çıkan Projeler",
      showcaseLabel: "Seçilmiş işler",
      showcaseTitle: "Projeler",
      allProjects: "Tüm projeleri gör",
      services: "Hizmetler",
      servicesTitle: "Tasarımdan anahtara.",
      news: "Güncel",
      newsTitle: "",
      offices: "Ofisimiz",
      team: "Kurucu",
      teamTitle: "Projelerin arkasındaki imza.",
      studio: "Hakkımızda",
      contact: "İletişim",
      view: "İNCELE",
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    /* ---------- İLETİŞİM ---------- */
    contact: {
      headline: "Mekânınız için konuşalım.",
      email: "icmimaremrekaratas@gmail.com",
      phone: "+90 542 439 77 10",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/icmimaremrekaratas/" },
        { label: "Facebook",  href: "https://www.facebook.com/p/Emre-Karata%C5%9F-100083135546597/" },
        { label: "WhatsApp",  href: "https://wa.me/905424397710" }
      ]
    }
  };
})();
