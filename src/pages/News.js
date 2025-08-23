// src/pages/NewsPage.jsx
import React from 'react';
import InstaFeed from '../components/InstaFeed';

export default function NewsPage() {
  const news = [
    {
      title: 'Анонс: Финальный матч сезона в Алматы',
      category: 'Анонс',
      date: '26 июля 2025',
      text: 'Не пропустите решающий матч лиги между Almaty Eagles и Astana Wolves. Начало в 19:00 на главной арене города.',
    },
    {
      title: 'Фонд на встрече с предпринимателями',
      category: 'Встреча',
      date: '20 июля 2025',
      text: 'Alzhan League провёл закрытую встречу с представителями малого и среднего бизнеса для обсуждения спонсорской поддержки молодёжных инициатив.',
    },
    {
      title: 'Отчёт: Турнир в Шымкенте завершён',
      category: 'Отчёт',
      date: '18 июля 2025',
      text: 'В турнире приняли участие 8 команд. Победу одержала команда Shymkent Lions, финальный счёт 74:68.',
    },
    {
      title: 'Фонд принял участие в форуме "Спорт и Молодёжь"',
      category: 'Форум',
      date: '15 июля 2025',
      text: 'Обсуждались перспективы развития молодёжного спорта в Казахстане и роль частных инициатив в этом процессе.',
    },
  ];

  const featured = [
    {
      image: 'https://img.championat.com/news/big/z/l/lejkers-sobirayut-neudachnikov_17532813691567005827.jpg',
      title: 'Большой матч: Битва за финал',
      text: 'В преддверии финала сезона фанаты готовятся к захватывающему противостоянию лидеров турнира.',
    },
    {
      image: 'https://olympic.kz/images/1658221585.jpg',
      title: 'Участие в Международной конференции',
      text: 'Представители фонда поделились своими инициативами на крупной международной платформе.',
    },
  ];

  const posts = [
  {
    "id": 3668477590312062893,
    "shortcode": "DLpDO6VCA-t",
    "is_video": false,
    "caption": "Дүниежүзілік гимназиада - бұл жай ғана спорттық жарыс емес. Бұл - өзіңді танытуға, еліңнің атын шығаруға және жаңа мүмкіндіктер көкжиегін ашуға берілген бірегей мүмкіндік!\n\nӘрбір қатысушы - достық, құрмет пен ә\nділ ойын рухы үстемдік ететін ауқымды халықаралық қозғалыстың ажырамас бөлігіне айналады.\n\nДүниежүзілік гимназиадаға қатысу не береді?\n\n1️⃣- Құнды тәжірибе мен кәсіби спорт жолына сенімді қадам;\n\n2️⃣- Жеңімпаздар мен жүлде\nгерлерге жоғары оқу орындарына білім беру гранттары беріледі;\n\n3️⃣- Өзіңді халықаралық аренада танытып, болашақ мансаптың берік іргетасын қалау мүмкіндігі;\n\n4️⃣- Білім мен қабілетті арттыру, жігер мен көшбасшылық қасиеттерді\n дамыту, әлемнің 100-ден астам елінен келген замандастармен танысу.\n\nҚатыс! Ұмтыл! Жеңіске жет!\n\nГимназиада - сенің жарқын болашағыңа бастар жолың!\n\n- \n\nВсемирная гимназиада – это не просто спортивное состязание. Это воз\nможность проявить себя, прославить страну и открыть новые горизонты!\n\nКаждый участник становится частью большого международного движения, где царят дух дружбы, уважения и честной игры. \n\nЧто дает участие во Всемирной гимнази\nаде?\n\n1️⃣- Ценный опыт и уверенный шаг в профессиональный спорт; \n\n2️⃣- Победители и призеры получают образовательные гранты в высшие учебные заведения; \n\n3️⃣- Это шанс заявить о себе и заложить прочную основу для будущей \nспортивной карьеры; \n\n4️⃣- Укрепление своих познаний, развитие силы воли, лидерских качеств и знакомства со сверстниками из более чем 100 стран.\n\nУчаствуй, стремись, побеждай!\n\nГимназиада – твой старт к большому будущему!\n\n@isfsports",
    "published_at": "2025-07-03T09:57:09Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/514633537_18329931364207713_2531655012343772903_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTY4OC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ\n2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=Vrq4mrjjHu8Q7kNvwFiClI0&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzY2ODQ3NzU5MDMxMjA2Mjg5Mw%3D%3D.3-ccb7-5&oh=00_AfWtQLdRgNqAS6bGgSKdpEzDHYI-PGp_D9QPy4xsY7sA1w&oe=68AB6D29&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 37,
    "comments": 0,
    "url": "https://www.instagram.com/p/DLpDO6VCA-t/",
    "embed_url": "https://www.instagram.com/p/DLpDO6VCA-t/embed",
    "type": "GraphImage"
  },
  {
    "id": 3664110749397567574,
    "shortcode": "DLZiVAziEhW",
    "is_video": false,
    "caption": "Бүгін Мектеп спорт федерациясы «Alzhan» және «Дай мяч» қоғамдық қорларымен бірлесіп, мектеп оқушылары арасында баскетболды дамытуға бағытталған бірлескен іс-шаралар жоспарын бекітті.\n\nҚұжат аясында байқаулар, б\nұқаралық турнирлер, білім беру іс-шаралары мен креативті жобаларды іске асыруды қамтитын кешенді бастамалар қарастырылған. Жобаның басты мақсаты – мектеп ортасында баскетболды кеңінен насихаттау және жас спортшыларды даярлаудың \nтұрақты жүйесін қалыптастыру.\n\nАталған бағытта ерекше рөл «Alzhan» қоғамдық қорына жүктеліп отыр. Қор әлеуметтік маңызы бар жобаларды жүзеге асырумен қатар, баскетболдан халықаралық жарыстарға – соның ішінде Дүниежүзілік гимна\nзиадаға, әлемдік және құрлықтық чемпионаттарға қатысатын құрамаларды жасақтау жөніндегі оператор мәртебесіне ие болды.\n\nБұл жоспар жастар арасында баскетболды дамытудың берік негізін қалайды және оқушылардың жеке дамуына, спор\nттағы жетістіктеріне, сондай-ақ ел намысын халықаралық деңгейде лайықты қорғауына жаңа мүмкіндіктер ашады.\n\n-\n\nСегодня Федерация школьного спорта совместно с общественными фондами «Alzhan» и «Дай мяч» утвердила план совместн\nых мероприятий, направленных на развитие баскетбола среди школьников.\n\nПринятый документ предусматривает реализацию широкого спектра инициатив: организация конкурсов, массовых турниров, образовательных мероприятий и внедрение \nкреативных проектов. Основная цель - популяризация баскетбола в школьной среде, создание устойчивой системы подготовки юных спортсменов.\n\nОсобая роль отведена общественному фонду «Alzhan», который, выполняя социально значимые \nпроекты в области баскетбола, получил статус оператора по формированию сборных команд для участия в международных соревнованиях, включая Всемирные гимназиады, мировые и континентальные первенства по баскетболу.\n\nПлан закладывает прочную основу для развития баскетбола среди молодежи, открывая перед школьниками новые возможности для личностного роста, спортивных достижений и достойного представления страны на международной арене.",
    "published_at": "2025-06-27T09:21:01Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/510435687_18329259703207713_6751341689202887051_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTY4OC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ\n2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=Hfb4hJFET0cQ7kNvwE57rN6&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzY2NDExMDc0OTM5NzU2NzU3NA%3D%3D.3-ccb7-5&oh=00_AfV77wue3AmwG_ST9ek6yVXs3dGatMCtEZ01zUCyy2taAQ&oe=68AB79E5&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 134,
    "comments": 1,
    "url": "https://www.instagram.com/p/DLZiVAziEhW/",
    "embed_url": "https://www.instagram.com/p/DLZiVAziEhW/embed",
    "type": "GraphImage"
  },
  {
    "id": 3656026219587619882,
    "shortcode": "DK80HnsCMwq",
    "is_video": false,
    "caption": "Мектеп спорт федерациясында «Alzhan» және “Дай мяч!” қоғамдық қорлары өкілдерімен жұмыс кездесуі өтті.\n\nКездесу барысында тараптар ынтымақтастықтың негізгі бағыттарын, атап айтқанда мектеп баскетболын дамыту, с\nондай-ақ еліміздің үздік мектеп командаларының Халықаралық мектеп спорт федерациясы аясындағы халықаралық жарыстарға қатысу мәселелерін талқылады.\n\nДарынды жас спортшыларды қолдау, олардың кәсіби тұрғыда өсуіне жағдай жасау мә\nселелеріне ерекше назар аударылды. Сонымен қатар оқу-жаттығу жиындарын ұйымдастырудан бастап жаттықтырушылардың біліктілігін арттыруға дейінгі бірлескен спорттық бағдарламаларды іске асыру мүмкіндіктері қарастырылды.\n\nКездесу \nқорытындысы бойынша тараптар мектеп оқушылары арасында баскетболды насихаттау және елімізде бұқаралық спортты дамыту мақсатында ұзақ мерзімді серіктестік орнатуға дайын екендерін білдірді.\n\n-\n\nВ Федерации школьного спорта со\nстоялась рабочая встреча с представителями общественных фондов «Alzhan» и “Дай мяч!”.\n\nВо время встречи обсуждались ключевые направления сотрудничества, включая развитие школьного баскетбола и участие сильнейших школьных коман\nд в международных соревнованиях под эгидой Международной федерации школьного спорта.\n\nОсобое внимание было уделено вопросам поддержки одаренных юных спортсменов, созданию условий для их профессионального роста, а также возможн\nостям совместной реализации спортивных программ - от организации учебно-тренировочных сборов до повышения квалификации тренеров. \n\nСтороны выразили готовность к долгосрочному партнерству и совместной работе над проектами, направленными на популяризацию баскетбола среди школьников и развитие массового спорта в стране.\n\n@isfsports",
    "published_at": "2025-06-16T05:38:29Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/503858060_18328007371207713_5662548251973157315_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTY4OC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ\n2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=X10AaapGG3UQ7kNvwEbQDGc&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzY1NjAyNjIxOTU4NzYxOTg4Mg%3D%3D.3-ccb7-5&oh=00_AfW0mPNO_iRz8McyG_nESHvhNlnDp-P4e_1VmxHEGc4rCw&oe=68AB91EA&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 219,
    "comments": 1,
    "url": "https://www.instagram.com/p/DK80HnsCMwq/",
    "embed_url": "https://www.instagram.com/p/DK80HnsCMwq/embed",
    "type": "GraphImage"
  },
  {
    "id": 3632229667814144023,
    "shortcode": "DJoRaN0sngX",
    "is_video": true,
    "caption": "🏀Хромтауда мектеп баскетболының үздіктері анықталды – Alzhan лигасының II Суперфиналы өз мәресіне жетті\n\n🏟️ 9–11 мамыр күндері Хромтау қаласы мектеп спортының нағыз орталығына айналды. Мұнда еліміздің жеті өң\nі                                                                                                                                                                                                                                  і\nрінен жиналған 18 үздік команда «Alzhan» мектеп баскетбол лигасының II Суперфиналында бас жүлде үшін тартысты ойын көрсетті.\n\n▫️Жасөспірімдер арасындағы ауқымды спорт додасының ашылу салтанатына Ақтөбе облысының әкімі Асхат Ша\nхаров арнайы қатысып, жарысқа қатысушыларға сәттілік тілеп, спорттың жас буын тәрбиесіндегі маңызын атап өтті.\n\n🔹3 күнге созылған Суперфинал жеңімпаздары төмендегідей анықталды:\n\n5–6 сынып, ұлдар:\n🥇 Павлодар облысы, №4 Ер\nтіс орта мектебі\n🥈 Рудный қаласы, №5 гимназия\n🥉 Ақтөбе қаласы, №17 гимназия\nMVP: Эльдар Кучербаев (№4 Ертіс ОМ)\n\n7–8 сынып, ұлдар:\n🥇 Ақтөбе қаласы, №27 мектеп-лицейі\n🥈 Рудный қаласы, №5 гимназия\n🥉 Павлодар облысы, М\n.Әуезов атындағы мектеп\nMVP: Кумискалиев Тамерлан (№27 мектеп-лицейі)\n\n5–6 сынып, қыздар:\n🥇 Павлодар қаласы, №26 мектеп\n🥈 Лисаковск қаласы, №4 мектеп\n🥉 Ақтөбе қаласы, №30 мектеп\nMVP: Локтаева Надежда (№26 мектеп)\n\n7–\n8 сынып, қыздар:\n🥇 Рудный қаласы, №2 гимназия\n🥈 Ақтөбе қаласы, №20 мектеп\n🥉 Қостанай облысы, Перелеский мектебі\nMVP: Юдина Есения (№2 гимназия)\n\n🔸 Шара ERG компаниясының қолдауымен жүзеге асты. Компания бірнеше жылдан \nбері балалар спортын жүйелі түрде дамытып келеді. Биылғы маусымда Лига аясында 150 команда мен 1200-ден астам оқушы қамтылды.\n\n✔️ Суперфиналдың «Бұл – мен бақытты болатын орын» атты ұраны жарыс атмосферасын дәл сипаттап берді. Балалар достық пен жеңістің, ынтымақ пен жігердің не екенін сезініп, ұмытылмас әсер алды.\n\n👏 Барлық жеңімпаздарды шын жүректен құттықтаймыз!",
    "published_at": "2025-05-14T09:39:37Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/498322954_18370463209124826_8889040092632707397_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzYzMjIyOTY2NzgxNDE0NDAyMzE4MzcwNDYzMjA2MTI0ODI2.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2MjB4Mjg4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=32rXgOnGgIAQ7kNvwGi2BYP&_nc_oc=AdmLtup-_wletn8U-DFqQqaNLAfCilU8NL_32JQWoYZBxaPHKQBcfeoR9gd5fP301sU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfUWR4Ube1Lt9yc3uKbjjgWCYAGrOr6HyyKy3FBjdnnAVw&oe=68AB7D41"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOJ8Hkdsxtep8E8xUTqgG2Fu1WC2kNPoGZ8AKqmalyKW6v4Ymc4vkQWoRwRwFzHJ-ny72SCAJf_vyYV1nFz-G4xTPPtJF1IGJkfiOY.mp4?_nc_cat=110&_nc_oc=AdlAVJcrDZ5cogtVU5rrX0c26Vlj\nkisDcTnqdGL-dJsarCefRqK1Ivyj_4T4W32JswI&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=4BzzAW9JOrUQ7kNvwF0yvH0&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTY0ODI0Mzc5OTE4MTQ4OCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjg1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=ef91b3d135df04e8&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BQjQ5OTcwNjd\nBMjg5MTBEQjQ0NkM3NUYyRjdDMUFCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSG5UcXgyQ1R2b3NTVUlFQUdDeVBVMDBCNndCYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm4KK6orXE7QUVAigCQzMsF0BVe7ZFocrBGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfXu59ftT56y4kr7yI0GO9Xxo_KOmQwMI1NZHmqWsgXFjw&oe=68A77E1B",
    "likes": 145,
    "comments": 4,
    "url": "https://www.instagram.com/p/DJoRaN0sngX/",
    "embed_url": "https://www.instagram.com/p/DJoRaN0sngX/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3631602153471595128,
    "shortcode": "DJmCurjN9J4",
    "is_video": false,
    "caption": "🏅 Лучшие из лучших: MVP финального дня!\n11 мая стал кульминацией Суперфинала Alzhan — решающие матчи, эмоции на пределе и настоящая воля к победе.\n\nВ этот день на площадке было видно всё:\n— стальные нервы в \nатаке,\n— жёсткая защита до последней секунды,\n— и главное — лидерство, которое вдохновляет.\n\n🌟 MVP 11 мая — это те, кто не просто играл, а вёл команду за собой.\nКаждый из них стал настоящим героем финала и доказал, что за таким поколением — будущее казахстанского баскетбола!\n\n💬 А кто, по твоему мнению, был главным героем этого дня?\nОтмечай в комментариях тех, чья игра тебя впечатлила 👇",
    "published_at": "2025-05-13T12:52:14Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497938618_17909586555106234_3477888487771137013_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=DIQgWrEgqV0Q7kNvwHisp7S&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTYwMjE0MjI2NDI5NjQ3OA%3D%3D.3-ccb7-5&oh=00_AfXC_IpvL66wyGvRerUozUAzwnA5T70_vaRFeMm8dmgTFw&oe=68AB7F16&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497998209_17909586564106234_2261727098186729445_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=7369JkRVkCgQ7kNvwGYw9iK&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTYwMjE0MjI3MjU5MzY1OA%3D%3D.3-ccb7-5&oh=00_AfWJkiJjQL_j2xvvP0jAOHjifcCF5kP4zr94M_ZDRvV51Q&oe=68AB977A&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497746424_17909586573106234_1623350016181627726_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=KQ44pqx9n-IQ7kNvwHGHbrV&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTYwMjE0MjI5NzkzOTA5Mw%3D%3D.3-ccb7-5&oh=00_AfUCex0ByTLPUCMBZuvO20mI9iOBzqH-54nypJMTvTl5CQ&oe=68AB89A5&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497488151_17909586582106234_8879708880122588694_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=QiQhsRaZxzUQ7kNvwFEqUYZ&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTYwMjE0MjI3MjY1MjIwMA%3D%3D.3-ccb7-5&oh=00_AfXzzQDddMvsMZscnSjUbly6fp0srB7KKKNMB_uzsbzkrA&oe=68AB7DAE&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 201,
    "comments": 12,
    "url": "https://www.instagram.com/p/DJmCurjN9J4/",
    "embed_url": "https://www.instagram.com/p/DJmCurjN9J4/embed",
    "type": "GraphSidecar"
  },
  {
    "id": 3631570373480347108,
    "shortcode": "DJl7gOIIPXk",
    "is_video": false,
    "caption": "Суперфинал!\n\nС 9 по 11 мая в городе Хромтау прошел грандиозный финал с участием 18ти команд Казахстана!\nМасштабное событие на паркете нашего родного ФОКа не осталось незамеченным.\n\nХотим выразить огромную бл\nагодарность Акиму Актюбинской области Шахарову Асхату Берлешевичу  за внимание к баскетболу в нашем регионе!\nСамолично приехал и пожелал нашим спортсменам успехов!\nВыражаем благодарность проекту Алжан, которые выбрали наш реги\nон на проведение суперфинала! \nОтдельная благодарность - Шакирову Марату Сагидовичу!\nТакже выражаем благодарность Ахтанову Ерлану Кокенаевичу за поддержку и развитие баскетбола в городе Хромтау.\nНу и,конечно же, праздник баск\nетбола не состоялся бы без инициативной группы в лице Митрофановой Елены Александровны.\nИ особенная благодарность нашему главному спонсору - компании ERG!\nСпасибо вам за то, что вы делаете для баскетбола в нашем регионе!\n__________________________________________\n\n@alzhan.league \n@ofkkhromtaudgok \n@hromtau_audanynyn_akimdigi \n@elenamit_",
    "published_at": "2025-05-13T11:49:05Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496950274_17878557957318853_5491216708581399655_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=CXytn4cZzJ0Q7kNvwHRgA9H&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE0OTA3MTYxMA%3D%3D.3-ccb7-5&oh=00_AfXDOfCZamptl5lNNH8yDugch3XOJAi3iUc0XiT0U2bFFw&oe=68AB8E38&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496930999_17878558011318853_6246936227834816570_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=wckiwVW3gN4Q7kNvwH-XM-g&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE1NzY2NTUwMg%3D%3D.3-ccb7-5&oh=00_AfV85_ePsr0NO8txUnerEYmpYhbw4DXa_bOkkETvgPw6Tw&oe=68AB9502&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497478036_17878557960318853_3878471117998824325_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=hFgQDVkcRFAQ7kNvwFWUvnW&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE1NzUyNDc4NA%3D%3D.3-ccb7-5&oh=00_AfUnCqdOPlxClvAHy8TMynxD7UiNsk__dmBhya3t9NBYdw&oe=68ABA06F&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497184073_17878557969318853_6649226488849233232_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=VQ2tC4nvPaQQ7kNvwHHskyR&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE0OTEzMjE5NA%3D%3D.3-ccb7-5&oh=00_AfVS8fzXm9LSyM-Xr83Q4MmPmCWxev1BrQ8qZPnyxAIDJg&oe=68AB713E&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497570204_17878557999318853_5586338061799089773_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=3X3DsettO8sQ7kNvwGo7wXM&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE0OTIyNzcyNg%3D%3D.3-ccb7-5&oh=00_AfUx4mpG2dnzhyPuoZOpkSvU2IlWMSJ1YRnPseN-90FTlA&oe=68AB9114&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496935780_17878557990318853_6266627775868999038_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=9rCLrFqKoNEQ7kNvwExbCqb&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE1NzY2OTAyMw%3D%3D.3-ccb7-5&oh=00_AfX-dotCAnDpWvVlZnNWmFq7rphQm44lVEwD_L3SoLyAUQ&oe=68AB88DB&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497510851_17878557993318853_2000079755854933498_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=ldwtMaqrvwwQ7kNvwE1D7YJ&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE0OTA5MTg2MA%3D%3D.3-ccb7-5&oh=00_AfWzmjyCbxxYVId9PZzxBZ9S-Tt56envGu0ypr27N1EbDw&oe=68AB9D6A&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497813973_17878557996318853_7926729758161755440_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjg1M3g1Njguc2RyLmY3NTc2MS5kZWZhd\nWx0X2ltYWdlLmMyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH68mEuBIULOtZ_jRPenltdbxoT4BlcmZ3f1aom32kdL71THKCrChx9Lq1psFCIhek&_nc_ohc=Ci_D3-stTd4Q7kNvwGZMj4e&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMTU3MDM2MTE0OTA4NTgxOA%3D%3D.3-ccb7-5&oh=00_AfW3GIASIsPDBb7cuFSTgB7sbLrHf1AJZsH_OSs1Jrkpng&oe=68AB6C01&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 319,
    "comments": 15,
    "url": "https://www.instagram.com/p/DJl7gOIIPXk/",
    "embed_url": "https://www.instagram.com/p/DJl7gOIIPXk/embed",
    "type": "GraphSidecar"
  },
  {
    "id": 3631507903761299876,
    "shortcode": "DJltTKqtzmk",
    "is_video": true,
    "caption": "С 9 по 11 мая текущего года в Актюбинской области г. Хромтау прошел Супер финал школьной лиги «ALZHAN” 2024-25. Нашу область Абай представляла команда СШ «Николая Островского Бородулихинского района. Ребята получ\nили колоссальный опыт и не забываемые эмоции.  Еще раз благодарны нашему спонсору @zhebelogistics.kz во главе руководителя Тансыккожина Айдос Даулетұлы @aidosstan. А также хотелось бы отметить регионального менеджера области Абай Кулиманова Талгата Нурсаиновича @talgatkuliman .\n#ПРИСТЕГНИТЕСЬ МЫ ВЗЛЕТАЕМ 🇰🇿🏆🚀🏀🏆",
    "published_at": "2025-05-13T10:00:02Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497378981_18038901260538917_3572615488745703639_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzYzMTUwNzkwMzc2MTI5OTg3Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2\nZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MjA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=2ApUHUaUa0cQ7kNvwHFAcUh&_nc_oc=Adk1BOFOzy7DGerGHXSeWVKq6V50yewhsfH1ni5JHsS-B9z7tM5RV--wKMK_P0Lzz5I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfWkJLQv2nuOJW988bqvqEA7M2i2tY6B31jnMKT76inYog&oe=68AB760E"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPjgcIac3JC14f1fAUNPP6p-SReIMinAWPudLU1ZPtffb9awuaNkjjQViED7O8PAFntFYBuF9cukQpuK5IUSlxVUnprQuhamXS13o8.mp4?_nc_cat=100&_nc_oc=AdkWu3RsYfNOo5i870wN0Z8BJddP\nPZSggMb143S4R0wwwYXJ9M80UG5JVrTZgCpLIIc&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=di8tPwB2eF8Q7kNvwEIM4lo&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTIwOTg5Mjg0NDAyNDIyMiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjY0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=3aa2218249527f03&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zMTQ2MEM5RkY\nzNUJCMzg1QUYyRjBENEVGRUNGRURCMV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR09kc0IycUZqX0I2LWNFQUhKSElFSElKVkpGYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmvMb5koSZpgQVAigCQzMsF0BQF2yLQ5WBGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfXEEwpHd2fVEptDzSPri2okPJSkChqJjsbRyugb7Ubuxg&oe=68A78235",
    "likes": 249,
    "comments": 27,
    "url": "https://www.instagram.com/p/DJltTKqtzmk/",
    "embed_url": "https://www.instagram.com/p/DJltTKqtzmk/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630740389137513383,
    "shortcode": "DJi-yW-NHun",
    "is_video": true,
    "caption": "Когда сила встречается с искусством — рождается шоу Сергея Цырульникова! \nНа сцене — металл плавится под руками, доски ломаются, а сердца замирают. Это не просто выступление, это — мощь духа и тела, проверенная временем и закалённая воли.\n\nСуперфинал в Хромтау стал ещё ярче благодаря этому незабываемому шоу!",
    "published_at": "2025-05-12T08:27:21Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/498671032_17910028530106234_7413106174674684175_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzYzMDc0MDM4OTEzNzUxMzM4MzE3OTEwMDI4NTI3MTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=c1ZreryckAkQ7kNvwH_5xDS&_nc_oc=AdnUQ7OXhMT3W_bGEgajWPgA1kigI3O_EJZIAP5Ft82jJl1zLfpspzPAzZPjyE08Bi8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfWWuRhMNSSprjRQalDRycBYi2cBqWgspmsBhfLQp5_-Yw&oe=68AB71F2"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQMv5ad4HIry3TwAR5GsFbzvJpmkMBlpoOFRyA18GYI0sLWvShTJJKXlqGUJpVZXcP8wrEZF4hW2FkyvESRQhWIsYzFotfZOaGeSvD8.mp4?_nc_cat=111&_nc_oc=AdmZZMXomRgdDzfTBGibD70vLzJS\nF0GhorqBJO3bWPJMZnfvuZnZOYV6I3Z3aeacu8Y&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=la1rZPStTcEQ7kNvwG4weGW&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6NzEyMTc3OTc3OTM5NjU3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=5fede34ad5a3f874&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85NzQ3NTY0O\nDg1OTU4NDRENkI3RkY0REZCMDkxREE4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRnpDa1IxWTRnUGJuajROQUlHb3YySWRKQjlQYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmktuitpvuwwIVAigCQzMsF0BL7tkWhysCGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfUlJQZdSom7jtbK6lIcl7rjWpuGQ8_jXQSLCE-vqsvY3g&oe=68A7AEC8",
    "likes": 189,
    "comments": 5,
    "url": "https://www.instagram.com/p/DJi-yW-NHun/",
    "embed_url": "https://www.instagram.com/p/DJi-yW-NHun/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630734843328084560,
    "shortcode": "DJi9hqCNDpQ",
    "is_video": true,
    "caption": "Hilight с финального дня🔥\n\nФинальный день — финальный накал!\nЛучшие моменты решающих матчей: точные броски, мощные проходы, жёсткая защита и эмоции на максимум.",
    "published_at": "2025-05-12T08:22:54Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/498160760_17910028707106234_651457788464136848_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzYzMDczNDg0MzMyODA4NDU2MDE3OTEwMDI4NzA0MTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid=\n58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=Wvlfspf4h68Q7kNvwFcMsLu&_nc_oc=Adm9DWeFeQ959hLASoYxOEuGYx2vyoJQ79ezE_ETDELYqVnRZGVWhlNAVyZYftQPwwk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfVDafGzfKk5GKPOH6dGss-_ZK8Ho-xee6rdJSLaibH5Nw&oe=68AB9629"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNGCZP0-01b9QN_7x3q7cW6XLV_a1aIlec7rtja7EhcbNalqIwclHd1yEwqKmGXan6nDg_gOff4rJ7M4XbMdWm54c5VAY0SKeLBdWI.mp4?_nc_cat=108&_nc_oc=AdmnYpZjrjiwwAN1WowUHAt2btGT\ngn3ApfLMaio2SleX1GBwUDP0at3JqVGEIuSouTM&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=NNg93NgFx3sQ7kNvwFrgy2x&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6OTk5MDc5NDM4NDM2NzY4OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=eb3944c02fd14c4d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zRjQ4M0IwREU\n5Qjk5ODlCQTU1REMxOUZGMTczQzI4N192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTENKbHgwaE1oWnRNZ2dFQU1ETS1QV1hJR2RUYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmkoHv5OKkvyMVAigCQzMsF0A9TMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfVaTvXN27hvgiKx6kJcF1M6-o4TJ1TIZ5u1AsArNhlbrA&oe=68A7A495",
    "likes": 127,
    "comments": 1,
    "url": "https://www.instagram.com/p/DJi9hqCNDpQ/",
    "embed_url": "https://www.instagram.com/p/DJi9hqCNDpQ/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630732763146408776,
    "shortcode": "DJi9DYtttNI",
    "is_video": true,
    "caption": "ДАНК ШОУ от @ruslan.ligay — это было жарко!\nСуперфинал по баскетболу в Хромтау подарил мощные эмоции, а кульминацией стал эффектный данк-шоу, которое взорвало зал! Прыжки, трюки, взлеты над кольцом — такое не забывается.",
    "published_at": "2025-05-12T08:10:05Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/498951453_17910029148106234_7614241139329372648_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzYzMDczMjc2MzE0NjQwODc3NjE3OTEwMDI5MTQyMTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=ViGwd5NxsbIQ7kNvwEpg8GW&_nc_oc=AdmiXZDzK_Z_SCgmFHtkqrRrII6QXVtKkRRi1UhU6cypaZDBT3hlgU1MvETZZrQBBuM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfWhY3i2F-a1MEGh1RwHrLJgUJ_p03hGSQ8bMiHsCKKzJQ&oe=68AB73D9"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPz4CLmjIkAHVbb8wpKWs0uPYKDtsw4Ymj98sxBRZ1d_3Ok5iq1HjjFXKuaGa_yKXWMGpLit_AlsrMiOk35XNfThqVUeeHlq7pUhO4.mp4?_nc_cat=104&_nc_oc=AdnllR6f8FEHfXJTpq6p8JDeRsQO\n8Iaw-NirrFKsny9VO8LjEGAOmEB5H7xVEJ-pz30&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=wVAjHG-l61QQ7kNvwE0ZMXX&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTE5OTAwMTQ2MTk1ODYwNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjM1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=e814a0aa255aeeea&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FQjRBOEJFOTg\n5NjUyMUY5NDJENDQ5RDg1QzJBOEVCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQXd1b0IzWk53elFZV2dDQUhzZ1FTZHMxb0VjYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmnp_Ng4mfoQQVAigCQzMsF0BB0QYk3S8bGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfVMSyPzOhYv8RHWSfiniWeIYWLAGlHVmwB4_KG6WpOW0w&oe=68A778BD",
    "likes": 289,
    "comments": 4,
    "url": "https://www.instagram.com/p/DJi9DYtttNI/",
    "embed_url": "https://www.instagram.com/p/DJi9DYtttNI/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630728159285464410,
    "shortcode": "DJi8AZCN81a",
    "is_video": true,
    "caption": "Вот и подошёл к концу трёхдневный суперфинал по баскетболу в Хромтау!\n\nТри дня огня, драйва и настоящих спортивных эмоций. Мы видели всё: жёсткие матчи, мощные данки, огненные шоу и невероятную поддержку трибун.\n\nСпасибо игрокам, зрителям и каждому, кто был с нами — вы сделали эти дни по-настоящему легендарными!\n\nДо новых встреч на площадке!",
    "published_at": "2025-05-12T08:04:31Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/498583062_17910029277106234_752971271181651300_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzYzMDcyODE1OTI4NTQ2NDQxMDE3OTEwMDI5MjcxMTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid=\n58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=fYJzH0xCeoMQ7kNvwHl_i6H&_nc_oc=Adl1sceLxi5LJohgosD_vs4yFPm2pw_BLNv30kp987oXIQAtte4MBYw-fkEvjFFSXyU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfVpzcNhQN_YaELnKpGdPL_roqsv33Qxt4501jpE3BdC3A&oe=68AB8489"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNqlxCbBZEr2CtJkNVDVHcaYeYI2Lj3pLQquxCzk-CsjCdYQmndiKeBHRz_N4xvu6y5vvtONvlPsjnudngcQVnvC7LB6vl-h1z1h64.mp4?_nc_cat=111&_nc_oc=Admqvr-_CNHNmhkV95qAOdNxyEvp\nZzesOknrxo8F4CQ27aGMyrGFmJfmdfcQFfwprJY&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=4M8ckLJyVrAQ7kNvwFRHY1O&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTIyODYzOTk2ODYwOTY0NywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjUyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2878da2280ab0ace&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82RjRBNjdDQTc\nzMjFEMThERUMzQTJCNDhBRTQ2QjE4OF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQThWU1IyZ1h5SURyWGNFQUhWbk9zaDNPX3NkYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm3pWWjqHcrgQVAigCQzMsF0BKHdLxqfvnGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfXqciBwmWyrWCEjRO5lMVX927eqSJ_OCzeKrBJ4Gmm-zA&oe=68A7A438",
    "likes": 170,
    "comments": 0,
    "url": "https://www.instagram.com/p/DJi8AZCN81a/",
    "embed_url": "https://www.instagram.com/p/DJi8AZCN81a/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630717528034384734,
    "shortcode": "DJi5lr6Rhte",
    "is_video": true,
    "caption": "Задали несколько вопросов нашим юным баскетболисткам и болельщицам ⚡️",
    "published_at": "2025-05-12T07:38:46Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497176073_17889812070252055_5454304976609076743_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzYzMDcxNzUyODAzNDM4NDczNDE3ODg5ODEyMDY0MjUyMDU1.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=9Emsqo4wKL4Q7kNvwGpxQhM&_nc_oc=Admniq_qRPpTmydfeNj1T93_nKTzkxWal6i-JivLv6jGWxnXLyE5D3_uhdKdGw82HsU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&oh=00_AfUK4Oo5meisqYxPDfpEMGrj5euO73ZYwCnVGoju9-mCDA&oe=68AB88BB"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQP8t2GF9dJ1e2yKFKdUC_YR6zJ5RK4Q1emT78KxSvtJ8tWku6Xvl_qrMCche2GCif7hbKOOvthB7q-dxjLjdp-SujF9cq8q4sDP5JI.mp4?_nc_cat=109&_nc_oc=AdmHhdDWR-H-m8KkUpGKjU1J_ea8\nuKiGyD0peBbQ_2CT2W9UFxvn3Gvg__4oi2QPOIM&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=bRZEr5UBpJcQ7kNvwF1BikG&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6NjYxMTE0NjMwMDQ4Nzc4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=114013b7e0ac77fb&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQTRENTc0O\nUY3NzVDNzkyQkJFNUJGOTIzQjc5MEZBMF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS3p4b2gyT2s0anlxcWNEQU95cTdHclY1SEozYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmlLDw6vfRrAIVAigCQzMsF0BB92yLQ5WBGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=tIGTjFpkFqtte88Ml2wiVw&_nc_zt=28&oh=00_AfWtDS_AMVerA6OaqO25c5DYWAt9XDaQKiwONwaoQvgkmQ&oe=68A78CD6",
    "likes": 247,
    "comments": 2,
    "url": "https://www.instagram.com/p/DJi5lr6Rhte/",
    "embed_url": "https://www.instagram.com/p/DJi5lr6Rhte/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630605810222619782,
    "shortcode": "DJigL-lydyG",
    "is_video": true,
    "caption": "Напряженные игры, радость побед и горячая поддержка трибун – суперфинал Alzhan в Хромтау подарил сотни незабываемых моментов.\n\n🏀 Смотрите, как команды боролись за звание сильнейших!",
    "published_at": "2025-05-12T04:42:34Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497180431_17889799866252055_3958420774617560214_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzYzMDYwNTgxMDIyMjYxOTc4Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2\nZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=Pt7w0UsnUqQQ7kNvwEZ5eRz&_nc_oc=AdkFml21A75jfNTEdqwD_pT7QhWkzhiNqEOh_DDBX3f685MHqe7Of995tt1kTA0MAFI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&oh=00_AfUlVLxPhVvbd9f6UqI0HEuQAVq8G2bjtVHzdNBIQC_xnQ&oe=68AB9A94"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQNLGhIVFlFH9FAv_t1XIfsoshHWeZtUqPsuY7WxnOeOP-MP_INaHWQNgsvu9rwt73Tu_VkMuQHNmIiFH3G3ucsIAaVqMfRiKUyUgD4.mp4?_nc_cat=109&_nc_oc=AdmB06nBO6D-eteRqZI6InlOJwe8\nAIEMlxajSG-m8Ul7GcaZn0HPvB_TLMDgcr62rPI&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=zrpOKV11t6cQ7kNvwFjtAJf&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTM3MjgzNzIzNzM3MTI2MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=436581749ad1913b&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8zQzQ5NzY5RkE\n0Qzk3RUJFRDNDRkI0QUExRDdERTE4RV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTktobngwTTc5NEVDMWNEQUkwMTVqYi1abVFpYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_MXxvdKl8AQVAigCQzMsF0BLjMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&_nc_zt=28&oh=00_AfVLzFHkvW27o2Gm1C_Nm-jHYiExZk5QJPDCiRo0Y0Anwg&oe=68A78192",
    "likes": 346,
    "comments": 85,
    "url": "https://www.instagram.com/p/DJigL-lydyG/",
    "embed_url": "https://www.instagram.com/p/DJigL-lydyG/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630275767099988620,
    "shortcode": "DJhVJN-tBqM",
    "is_video": false,
    "caption": "🏀 Суперфинал Alzhan завершён!\nТри дня жарких матчей, 18 команд, 7 регионов и море эмоций!\nВ Хромтау определились сильнейшие школьные команды Казахстана — и вот как распределились места:\n\n🔹 Мальчики 5–6 клас\nсы:\n🥇 Павлодарская область, средняя школа №4, пос. Ертис\n🥈 Рудный, гимназия №5\n🥉 Актобе, гимназия №17\n\n🔹 Мальчики 7–8 классы:\n🥇 Актобе, школа-лицей №27\n🥈 Рудный, гимназия №5\n🥉 Павлодарская область, школа им. М. Ау\nэзова\n\n🔹 Девочки 5–6 классы:\n🥇 Павлодар, школа №26\n🥈 Лисаковск, школа №4\n🥉 Актобе, школа №30\n\n🔹 Девочки 7–8 классы:\n🥇 Рудный, гимназия №2\n🥈 Актобе, школа №20\n🥉 Костанайская область, Перелескинская школа\n\n🎉 Поздравляем победителей и благодарим всех участников за настоящий баскетбольный праздник!\n\nAlzhan — это больше, чем игра. Это движение. Это команда. Это будущее.",
    "published_at": "2025-05-11T16:56:56Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497305149_17909370054106234_1030808620876993913_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNTB4MTY4OC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ\n2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=CZcDzvt1Sx0Q7kNvwFFk1hf&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTc2NzA5OTk4ODYyMA%3D%3D.3-ccb7-5&oh=00_AfXD_6SPJpsWNU4iVhVggql51wizM3Eysji35z3azTdDsQ&oe=68ABA1B2&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 86,
    "comments": 0,
    "url": "https://www.instagram.com/p/DJhVJN-tBqM/",
    "embed_url": "https://www.instagram.com/p/DJhVJN-tBqM/embed",
    "type": "GraphImage"
  },
  {
    "id": 3630275456050525034,
    "shortcode": "DJhVEsStfNq",
    "is_video": false,
    "caption": "MVP второго дня — лучшие из лучших! 🔥\n\n10 мая подарил много ярких моментов, но именно эти игроки стали настоящими героями своих команд.\n\nИграли сердцем, бились до конца и вытащили самые напряжённые матчи!\n\nПоблагодарим героев второго дня — и ждём новых завтра. 🙌🏻❤️",
    "published_at": "2025-05-11T16:56:19Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497112581_17909368542106234_5310958467290439739_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=EWAummxkDmkQ7kNvwFnQiaa&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDYzMjMxNjIzMQ%3D%3D.3-ccb7-5&oh=00_AfXEJNps9ATRpaPE6PSWUpjq3-injsYePUPS-RnDe2ApVg&oe=68AB753D&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497158802_17909370012106234_1990553363887561643_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=p5KstSP11ucQ7kNvwFklLCO&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDY0MDcwNjE1OA%3D%3D.3-ccb7-5&oh=00_AfVWXIXy3dIuCrS56IfZqLE3ZHINTEp1YVFyMWGG_5B-Tg&oe=68AB86D2&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497141179_17909368569106234_1422867945367626195_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=04oeYbYm3FoQ7kNvwG0zeGH&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQzOTI0MzE3NA%3D%3D.3-ccb7-5&oh=00_AfXaJqApt4brzr4WKG61qIHgt990je5di8Oszf52eTrv7w&oe=68AB6DF3&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497326583_17909368578106234_3032909281387717417_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=oLvzt8wXpBgQ7kNvwF4wH5G&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ3MjkyODM0OQ%3D%3D.3-ccb7-5&oh=00_AfUxKBV_WaQi0ddnLOsgEX11hrcG3zcydjASK7fBAuYT_Q&oe=68AB8912&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497188155_17909369874106234_7224545927678551098_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=kp8cJC33MigQ7kNvwHuEnBI&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ0NzcyMTEwNQ%3D%3D.3-ccb7-5&oh=00_AfXkVjiWmv6n7DDOEryL-5rMrOu5BcJMadHFb7U-2dtx9w&oe=68AB9F75&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/491442083_17909368593106234_2126049637570821892_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=WsKDmOFGQhIQ7kNvwEMIb0X&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ0NzY4ODQyMw%3D%3D.3-ccb7-5&oh=00_AfVUWi3Qn98BZnx45_PCgtNS0ZV4ybb1WvlLNxoZKdZOzw&oe=68AB8F96&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497636528_17909368608106234_5779455654557165858_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=_X7V3X_wXPAQ7kNvwHkMP-8&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ1NjA0MzExNA%3D%3D.3-ccb7-5&oh=00_AfWJgx3z2WSFU4FTvSTzbyK6HN99ZvDykPyCB6MHOJckRw&oe=68AB7E3B&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497237099_17909368644106234_6265598246344818594_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=0Nkm5PXDIFMQ7kNvwFvW8Qt&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDYyMzkyNDczOA%3D%3D.3-ccb7-5&oh=00_AfVOPZBrRnwDFdhZ7wVXQA2vpVp-3RUJ1czkDMzApDZWBA&oe=68ABA0E9&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497366995_17909368839106234_2187430467906721287_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=PopY33cmQCAQ7kNvwE_Y9Yc&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ0NzYwODMzMw%3D%3D.3-ccb7-5&oh=00_AfWipc6AGRAJY64DOCgUrOUAvDSyH7iVyzoQnHRNwr1RMw&oe=68AB7C20&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497188162_17909368851106234_434132986344705362_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZm\nF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=gDxvh0ShyNoQ7kNvwEtDXla&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ1NjEwNjE4NQ%3D%3D.3-ccb7-5&oh=00_AfXPeJeHsGW_-6uLS86YDoDOXrD10WtnPFUJLM-B0tTzxg&oe=68AB8057&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497199609_17909368617106234_3329866213957025282_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=Y-PXxe-jKgsQ7kNvwGEKIrf&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDUzOTg4ODg5NQ%3D%3D.3-ccb7-5&oh=00_AfWc5WJXu3x_CCQzNcpf2x5buXq-tziyMLR6lwMZJnQJTw&oe=68AB93B5&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497100845_17909368635106234_2890118802204700387_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=3jfce65K6MgQ7kNvwFo1v2M&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDQ0NzY2MDYzMw%3D%3D.3-ccb7-5&oh=00_AfWf_wpJYn6IrEOoihM3N3pUl_GHm18XLxXAiKfHI6gGbQ&oe=68AB9B63&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497277480_17909368863106234_4847880195714605814_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=Mg2WVVQszYUQ7kNvwFKAlxD&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDY0ODk4ODkxMQ%3D%3D.3-ccb7-5&oh=00_AfXf52n0FqwDSYeg_Vzl3AgGtRHqPpzeiGu0oZ-81jzqlA&oe=68AB6CDD&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497453727_17909368872106234_2646028130939723886_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=041V3thZO-UQ7kNvwHCZJmZ&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDI3NTQ0MDUxNDc3MDI5Ng%3D%3D.3-ccb7-5&oh=00_AfVej2jPKDrtg2xstVENb0iK0y7r5kDFXsC9v1lMIUoU9Q&oe=68AB9ED9&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 289,
    "comments": 11,
    "url": "https://www.instagram.com/p/DJhVEsStfNq/",
    "embed_url": "https://www.instagram.com/p/DJhVEsStfNq/embed",
    "type": "GraphSidecar"
  },
  {
    "id": 3630213804436077451,
    "shortcode": "DJhHDiwIbuL",
    "is_video": false,
    "caption": "Тартысқа толы үш күн. Жеті өңірдің намысын қорғап, жеңіске ұмтылған 18 команда. Осымен Хромтаудағы «Alzhan» мектеп баскетбол лигасы өз мәресіне жетті. \n\nАқтық ойынның марапаттау рәсімінде ERG бас директорының қ\nаржы жөніндегі орынбасары Данияр Рахматуллаев сөз сөйлеп, жарысқа қатысушыларға лебізін білдірді:\n\n– Сендерді бүгін Хромтауда, Alzhan лигасының екінші Суперфиналында көргеніме шын қуаныштымын! Сендер сияқты маған да бүгінгі ша\nра ерекше маңызды. ERG Қазақстанда мектеп оқушылары арасында осындай Лига ұйымдастыру бастамасымен екінші жыл қатарынан қолдап келеді. Турнир сендердің қабілеттеріңді дамытып, бәріңді көшбасшы ретіне шыңдайды. Тиімді жұмыс, тәрт\nіп пен командалық үйлесім ERG-дің тау-кен металлургия саласында көш бастауына жол ашқан қабілеттер. Біздің тобымыз тек өндірісті жақсартып қана қоймай, Бірлік, Жауапкершілік, Тиімділік, мен Даму, Қауіпсіздік сияқты құндылықтарды\n дәріптеп келеді. Өскенде әрқайсыңыз ERG сынды үлкен ұжымға қосылып, талай жетістікке жете аласыздар. Ол спорт бала ма, әлде өндіріс пе? Оны уақыт көрсетеді. Сендер өсіп жатқан, баскетболдың қыр-сырын меңгерген Ақтөбе, Хромтау, \nАқсу, Рудный мен Лисаковск, бәрі де біздің – ERG-дің «туған қалалары». Біз осы қалалардың өркендеуіне, дамуына септесіп келеміз. Бүгінгі сайыс соның бір дәлелі.\n\nСонымен, орындарға тоқталсақ:\n\n5-6 сынып ер балалары арасында:\n\n\n🥇 орын – Павлодар облысы, №4 Ертіс орта мектебі\n🥈орын – Рудный, №5 гимназия\n🥉орын – Ақтөбе, №17 гимназия\n\nMVP категориясы – Эльдар Кучербаев, , №4 Ертіс орта мектебі\n\n7-8 сынып ер балалары арасында:\n\n🥇орын –  Ақт\nөбе, №27 мектеп-лицейі\n🥈орын – Рудный, №5 гимназия\n🥉орын – Павлодар облысы, М.Әуезов атындағы мектеп\n\nMVP категориясы – Кумискалиев Тамерлан, Ақтөбе қаласы, №27 мектеп-лицейі\n\n5-6 сынып қыз балалары арасында:\n\n🥇орын –\n Павлодар, №26 мектебі\n🥈орын – Лисаковск, №4 мектебі\n🥉орын – Ақтөбе, №30 мектебі\n\nMVP категориясы – Локтаева Надежда, \nПавлодар, №26 мектебі\n\n7-8 сынып қыз балалары арасында:\n🥇место – Рудный, №2 гимназиясы\n🥈орын – Ақтөбе, №20 мектебі\n🥉орын – Қостанай облысы, Перелескинская мектебі \n\nMVP категориясы – Юдина Есения, Рудный, №2 гимназиясы\n\nЖеңімпаздарды құттықтаймыз!",
    "published_at": "2025-05-11T14:53:50Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497346445_18341770969090774_5217896161318314302_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=Q8TC3vzWIy4Q7kNvwGehLdU&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4MzE4NzYzMzU0Mg%3D%3D.3-ccb7-5&oh=00_AfWqsRl0DW5E0fO77QwF2rASogGN94VESESKB8wG2efu9Q&oe=68AB99F7&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496812506_18341770978090774_478454153768716057_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZm\nF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=KvmXY2bYEGcQ7kNvwHgbMec&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg2MDUwNzk0MA%3D%3D.3-ccb7-5&oh=00_AfVD-Tc-i3Mdn6GN4l8dYwbk547xztjLMOS_ojl1-eW7Tg&oe=68AB7411&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496636913_18341770987090774_7322717878842740724_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=rMYkX6YecjkQ7kNvwHBI8UR&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTg4MzA5NA%3D%3D.3-ccb7-5&oh=00_AfV268mw0waN4RD3ZS8mvdOWBbHMBOGw4ewlKKonCMK7Ug&oe=68AB8DBB&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496763888_18341770996090774_4396762173984952785_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=vp7ZmjbZjeEQ7kNvwH3ifp9&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTgzMzg5NQ%3D%3D.3-ccb7-5&oh=00_AfUY-Q-KC4-JmO4hLcyAbuCc0GQUj3yCeyzqRSEhW3u4fg&oe=68AB7557&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497264632_18341771005090774_1841381625926012617_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=4G22y33EcIwQ7kNvwFw7Di7&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg2OTA1NjM5Mg%3D%3D.3-ccb7-5&oh=00_AfX70JNVKzfasbov9ketL2fy4xb1jl5F5d4n2VUsaB1xlw&oe=68AB8EF1&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497093104_18341771017090774_8237095434194033261_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=-ZSCQ1A3o5AQ7kNvwFcbx8u&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTc4MDY4OA%3D%3D.3-ccb7-5&oh=00_AfU5wQs41sKT7mNCeaYOrGGJ7owVjXOAupH7sXJwxXujfg&oe=68AB9597&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497422415_18341771026090774_5246823162753002935_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=JUn6fFbrRNoQ7kNvwGLEu08&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTg3NjUzMw%3D%3D.3-ccb7-5&oh=00_AfV32llflgrcZ5d6kHRJCspbvb-CNwUfe4c_FKjCkLxd3w&oe=68AB8E0E&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496822718_18341771035090774_3920836606567228304_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=ec5z7UPHlXUQ7kNvwFkGJjD&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTc5MDE3Ng%3D%3D.3-ccb7-5&oh=00_AfWzBHBMEAPbzU_dkXRTkwpWyVq_ECzdd0kqC_PWhlptOg&oe=68AB925D&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497183827_18341771044090774_8111621278556710762_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=l0VoohKS73QQ7kNvwFeqPcR&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTg1MDA3Mw%3D%3D.3-ccb7-5&oh=00_AfX5d44o1wTZVdqrndldsPM7u1sj2SG9lH2bFH6PACcqWw&oe=68AB89F7&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496901999_18341771053090774_2139158756715815069_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=5RtkBc6RJ0sQ7kNvwHU2OeF&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg3NzQ3NzY3Ng%3D%3D.3-ccb7-5&oh=00_AfU3-9Ujfi2Ca0URWHkz4i0DJHTtCjyJAc_8FOHNUqlweg&oe=68AB7EFA&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497077697_18341771065090774_5449360358266399345_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=UdQTTemBTccQ7kNvwELx_mD&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg3NzQ4MTMzOQ%3D%3D.3-ccb7-5&oh=00_AfXLcQHFkMYhyzULmdcA0MjwO2e1hWh_PVpVyf_M1obcFA&oe=68AB8127&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496960620_18341771104090774_7111805818263366924_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=agZn8vd1CeIQ7kNvwE2ADLq&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg5NDA0Mjk4MA%3D%3D.3-ccb7-5&oh=00_AfUTqKjXTwYYH8fHqAJdNckyhtyXOflSxgZ8nd2dWtMiCQ&oe=68AB8B88&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496875679_18341771077090774_4006764787883029441_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=sImdlXUNFZMQ7kNvwHrOsvG&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTY1NzIzMA%3D%3D.3-ccb7-5&oh=00_AfXSqzvwApb_NlNxDOicPcgEVvehdDpsk4wFlbSrSxp9yg&oe=68AB9F32&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496929554_18341771086090774_2251742125891231426_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=NnTstLGDQ4YQ7kNvwEK5LAM&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg5NDA0NTg3NQ%3D%3D.3-ccb7-5&oh=00_AfUbknCqsL2g6fOEaHhMMhf_N-v1axEue4_x-SVTUd5wDw&oe=68AB840E&_nc_sid=8f1549",
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/497447579_18341771095090774_8796006285102453020_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZ\nmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=_7a3NvEUQYAQ7kNvwHhSFa_&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYzMDIxMzc4Mjg4NTg2NDEzMg%3D%3D.3-ccb7-5&oh=00_AfWtQ22PputeVHfIzKrAUbSiaHT07SqQg_53RHAiLmSVcA&oe=68AB9DCD&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 415,
    "comments": 28,
    "url": "https://www.instagram.com/p/DJhHDiwIbuL/",
    "embed_url": "https://www.instagram.com/p/DJhHDiwIbuL/embed",
    "type": "GraphSidecar"
  },
  {
    "id": 3630180159458745500,
    "shortcode": "DJg_Z8bNZyc",
    "is_video": true,
    "caption": "Второй день Суперфинала Alzhan стал настоящим испытанием для всех команд.\nПолуфиналы, борьба до последней секунды, радость побед и горечь поражений.\nКаждая игра — как отдельная история.\n\nЗал Хромтау видел всё:\nслёзы, аплодисменты, мощные броски и настоящую командную силу.\n\nСпасибо командам за эмоции.\nСпасибо болельщикам за поддержку.\nСпасибо нашим спонсорам, за такой подарок детям! \nЭто был незабываемый день!\n\n#неудergимые",
    "published_at": "2025-05-11T13:48:03Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497136092_17909452944106234_3600826914740794795_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzYzMDE4MDE1OTQ1ODc0NTUwMDE3OTA5NDUyOTQxMTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkxMngxNjIwLnNkci5DMyJ9&_nc_ohc=KQVTAFOZE4wQ7kNvwEsS_9P&_nc_oc=AdlPcVpr-AXbRfJh5KMgASKGmlEEEqe_M4-EvMoxjKp-SU9GWhuwTCGttyDGCgn83zA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&oh=00_AfWKa4AAnwU66e6DistDBr_VrKBMQlQWVgcVcqxuGfErXw&oe=68AB9BCC"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOMGZhCPDsTzRH0F4GNswEbRtGWLBAUcbCL2So23gs9URD7Kelw0NjZ_fEhiEeICN0e6k0OiGA9zajBQqq-V0-5Sqdfw69RpMNoXwQ.mp4?_nc_cat=109&_nc_oc=Adm-1OVkox0GrA5zbYbKf5CdQne6\ny-Hgc-Zua219t25F-xQdwfQ_1n6TQsqjvBFyemY&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=AZEyk4Pvsk0Q7kNvwHcPDSC&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6OTA4NDE2ODE0Njk3NzQ1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a716eba73ed32508&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DRjRBNjVGN\nTIyQjUwODlDQTE1MTVFN0UyM0YyRDNCOF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS2FIcFIyV0g0N3JxNHNDQUFGSkpTRDJRV2NQYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmorTi2OiMnQMVAigCQzMsF0BH-6XjU_fPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&_nc_zt=28&oh=00_AfXtWYpJ_n3lYXNLT-7X8h59if_qNzyqknQ4NfGTWIUwIA&oe=68A7A68A",
    "likes": 155,
    "comments": 1,
    "url": "https://www.instagram.com/p/DJg_Z8bNZyc/",
    "embed_url": "https://www.instagram.com/p/DJg_Z8bNZyc/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3630041012324647690,
    "shortcode": "DJgfxFjtcMK",
    "is_video": true,
    "caption": "10.05 - Очень интересная и напряженная игра вчерашнего дня!🔥\nГимназия N5 (г.Хромтау) vs Гимназия N5 (г.Рудный ) \n\nсо счетом 65:32 победу одержала  команда из г. Рудный Гимназия N5 !!!",
    "published_at": "2025-05-11T09:14:35Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497216968_17909452653106234_1331264947854749699_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzYzMDA0MTAxMjMyNDY0NzY5MDE3OTA5NDUyNjQ3MTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDc4LnNkci5DMyJ9&_nc_ohc=4CKphmUzx1MQ7kNvwG_5eR-&_nc_oc=AdmMnanohvtYhRADPjYtM0P9mAzoqbnoC7Sw1-H69lTsxfIn9y5sAnd_3HH88lpDpU8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&oh=00_AfV4Vg2G65QdeSfFpinF2L9VlMrx4TE7sAsntY7abXIlEw&oe=68AB76C5"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOWwQiJ75Wg3c7rOnHJHgX4Xclwzj-xfvIYnWGqDGtvHfS2OeN2-THBgZVLMvS3RW07zbjL34ff1X6oyveYiXqKn4cW--FZTqGK0WA.mp4?_nc_cat=100&_nc_oc=Adm5JCHpcKIAInsiVOr7JSUEtpZ7\nUJBgOtrBeVikqEU-wl7CBNMXkjMHZXxP1xt8weo&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=BwDjlfWKP8oQ7kNvwEAzRaW&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6MTY2NjgwMjkzMDYyMzg3OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjY0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=883c74dc086d026d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FNjRERDc5OTJ\nCMTBCRDUzREQ3RDIyQzc4QjNFMDZCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSmh4angwcFIzQnAyOUlFQUR0X25KcnBjczFKYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmjpa5ydn89QUVAigCQzMsF0BQHdLxqfvnGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&_nc_zt=28&oh=00_AfVEOe3vnnEiiY6Ke81DC3fEdbRt81N4Vtq9f2ovhuFxvA&oe=68A788E9",
    "likes": 147,
    "comments": 0,
    "url": "https://www.instagram.com/p/DJgfxFjtcMK/",
    "embed_url": "https://www.instagram.com/p/DJgfxFjtcMK/embed",
    "type": "GraphVideo"
  },
  {
    "id": 3629652025625839485,
    "shortcode": "DJfHUldtId9",
    "is_video": false,
    "caption": "11 мая — финальный день Суперфинала Alzhan в Хромтау!\nБудет не только крутой баскетбол, но и розыгрыш классных призов: наушники, Яндекс.Станция с Алисой и многое другое!\n\nПриходи сам, зови друзей — будет интересно и азартно!\nФОК Донского ГОКа, с 9:00 утра 🔥🔥🔥\n\n@ergkazakhstan @ergsport @zhebelogistics.kz @kusto_home",
    "published_at": "2025-05-10T20:17:41Z",
    "images": [
      "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496918923_17909249802106234_256190063690193968_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNDd4MTY3OS5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2\nUuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=yofxWKQ0eT4Q7kNvwGppp_x&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYyOTY1MjAyNTYyNTgzOTQ4NQ%3D%3D.3-ccb7-5&oh=00_AfXAiX8GKVjSE_nIzIsadSfUs8VWDJ67Y-nEf7y1Bjm-sQ&oe=68AB9A90&_nc_sid=8f1549"
    ],
    "video_url": null,
    "likes": 83,
    "comments": 0,
    "url": "https://www.instagram.com/p/DJfHUldtId9/",
    "embed_url": "https://www.instagram.com/p/DJfHUldtId9/embed",
    "type": "GraphImage"
  },
  {
    "id": 3629581632068299291,
    "shortcode": "DJe3UOWtqob",
    "is_video": true,
    "caption": "Суперфинал — решающая игра сезона, где встречаются сильнейшие команды. Это напряжённая борьба за титул, полная эмоций, драйва и ярких моментов.\nЖенский баскетбол-это сочетание силы, грации и стратегии. Здесь каждая игра — это борьба, эмоции и невероятная командная работа. Быстрые передачи, точные броски и страсть к победе делают этот вид спорта по-настоящему захватывающим.",
    "published_at": "2025-05-10T17:59:52Z",
    "images": [
      "https://scontent.cdninstagram.com/v/t51.75761-15/497112584_17909308803106234_7699118675996129407_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzYyOTU4MTYzMjA2ODI5OTI5MTE3OTA5MzA4Nzk3MTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=hA1gdkK-qssQ7kNvwGslKWX&_nc_oc=AdnpUjc7zKVObhcsBszjmNCiqEOQs5UQJNHOHSLnGPLlZobgBMHXym_ID4IYFS2LrHE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&oh=00_AfW6h9B_YmIiQV8ciSfvtVioUuKFMyHyL0ARQFuOwYcF0w&oe=68AB77FA"
    ],
    "video_url": "https://instagram.fala8-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOiW4PA6K2dGshD08aO452JhfClLh5548ovsxMs7PcW4we-58SF7UyeeuFzmz1qAqwxZvitn0Hscln-7pQkSrc_09QM8CE6uaUA9SU.mp4?_nc_cat=109&_nc_oc=AdmtaipBajj4tE8-nmuV9H0Wci4g\nrweJ38mn7QlyK0EMw2DMrm-dMH8e-mVufusXzpo&_nc_sid=5e9851&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_ohc=oule_LlX_ogQ7kNvwF6D01t&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MS\nIsInhwdl9hc3NldF9pZCI6NTI0MTgxMTgzOTYxNDQ2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NjQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=5b4cdeb1f6abd63a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BMDQ0QUNDM\nDk2QTNCMDcyMTU5NDQxNzIzODY3NThCRF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS1hDamgzLWQ4cHhLcmdEQUd5b3NiQXJuVEZsYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzOWklK6v7gEVAigCQzMsF0BQPdLxqfvnGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&_nc_zt=28&oh=00_AfX9HxuxwjE4jC6zWkbUJjydCnI7JTnLTHSsENSM2fGO2Q&oe=68A78B52",
    "likes": 158,
    "comments": 5,
    "url": "https://www.instagram.com/p/DJe3UOWtqob/",
    "embed_url": "https://www.instagram.com/p/DJe3UOWtqob/embed",
    "type": "GraphVideo"
  }
]

  return (
    <div className="game-stats-page">
      <div className="container">
        <h1 className="main-title">Новости / Актуально</h1>

        <InstaFeed posts={posts} />

        {/* <div className="featured-news">
          {featured.map((item, i) => (
            <div key={i} className="featured-card">
              <img src={item.image} alt={item.title} className="featured-image" />
              <div className="featured-content">
                <h2 className="featured-title">{item.title}</h2>
                <p className="featured-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-grid">
          {news.map((item, i) => (
            <div key={i} className="news-card">
              <span className="news-category">{item.category}</span>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-date">{item.date}</p>
              <p className="news-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="horizontal-scroll-news">
          <h2 className="section-title">Все новости</h2>
          <div className="scroll-horizontal-container">
            {news.concat(news).map((item, i) => (
              <div key={i} className="horizontal-card">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p className="news-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
