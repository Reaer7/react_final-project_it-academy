import { ReportsApi } from './firestoreCrud'

const prefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

export const REPORTS_DATA = [
    {
        id: "7d21210b-6e3b-4d7f-9720-02c273c6464b",
        name: 'Семья: Божий замысел',
        urlPhoto: 'https://iisus.by/images/news/konf_2_0_0_3_600.png',
        speakerId: `${prefix}-speakers/12073888-8d98-493c-9b09-3c6e72236ad8`,
        description: 'Один из семинаров на конференции  будет - *«Семья: Божий замысел»*.\\n' +
            '**Бог** создал институт семьи как основу человеческого общества и эталон самых близких, крепких, интимных и прекрасных взаимоотношений между людьми. Однако грех разрушает эти связи изнутри, ломая человеческие судьбы и делая людей несчастными. У всех молодых парней и девушек наступает момент, когда они хотят создать свою семью. Но как это делать, когда вокруг столько разных мнений, греховных соблазнов, ложных обещаний счастья и свободы?\\n' +
            'В мире статистика такова, что с каждым годом все меньше заключается браков и все большее их количество заканчиваются разводами. Христиане же наоборот, стремясь жить по Божьему Слову – Библии, созидают семьи по Божественным стандартам и принципам. \\n' +
            'На семинаре мы поговорим о библейском подходе к созданию семьи и поможем найти ответы на следующие вопросы: \\n' +
            '- Зачем мне вступать в брачные отношения?\\n' +
            '- Как найти спутника на всю оставшуюся жизнь?\\n' +
            '- Как правильно подготовить себя к вступлению в брак?\\n' +
            '- Как правильно себя вести до и после свадьбы?\\n' +
            '- Как меняется жизнь после заключения брака?\\n' +
            '- Какова моя роль в семье?'
    },
    {
        id: "c4a5a860-c0b5-485f-8bb6-99f7305e4ec6",
        name: 'Не молчи',
        urlPhoto: 'https://iisus.by/images/gde2_600.png',
        speakerId: `${prefix}-speakers/Игорь Цегалко`,
        description: 'Мы продолжаем знакомить вас с семинарами и спикерами молодежной ежегодной конференции *ГДЕ ТВОЙ IP? 2.0.2.3*\\n' +
            'Сегодня мы расскажем о семинаре **«Не молчи»**.\\n' +
            'Остановись на секунду и подумай, говорил ли ты кому-то о Христе вчера, сегодня или на прошедшей неделе. Вокруг нас множество людей идущих дорогой в ад. Среди них наши соседи, друзья, родные, одноклассники, коллеги по работе и множество других людей. Каждый человек уйдет с этой земли, уйдут и люди, окружающие тебя. Говоришь ли ты о Христе, спасении, Евангелии или ты молчишь? Может быть ты равнодушен или устал, может боишься благовествовать? Иногда ты просто не знаешь, как заговорить и что сказать людям, не знающим Бога. Поверь, не только ты!\\n' +
            'Мы не в силах спасать людей, но мы должны возвещать людям спасительную весть! Христос, уходя, завещал:\\n' +
            '\\n' +
            '> «...Идите, научите все народы...» (Матфея 28:19)\\n' +
            '\\n' +
            'На семинаре будем отвечать на следующие вопросы:\\n' +
            '- Зачем мне благовествовать;\\n' +
            '- Что такое благовестие;\\n' +
            '- Что такое Евангелие;\\n' +
            '- Как преодолеть внутренние препятствия, чтобы начать благовествовать;\\n' +
            'И другие вопросы, связанные с этой темой.'
    },
    {
        id: "71d33e79-2d02-4529-a092-2c98c583dbde",
        name: 'Не трать время зря',
        urlPhoto: 'https://iisus.by/images/news/konf_3_600.png',
        speakerId: `${prefix}-speakers/8118be67-12d8-4150-9999-93f04eb6385d`,
        description: 'Продолжаем знакомить вас с программой ежегодной молодёжной конференции *ГДЕ ТВОЙ IP? 2.0.2.3*\\n' +
            'Наш третий семинар будет на тему **«Не трать время зря»**. \\n' +
            'Время – это бесценный и невосполнимый дар человеку от **Бога**. Все мы распоряжаемся  им по-разному, поэтому и остаток у каждого свой. Объединяет нас лишь то, что он неумолимо сокращается… У всех нас 24 часа в сутках. И, если деньги, здоровье, состояние, известность можно потерять и снова обрести, то упущенное время уже не вернуть. \\n' +
            'Каждый человек должен ответить себе на следующие вопросы:\\n' +
            '- Как мудро распорядиться временем? Чему его посвятить? От чего отказаться? Как научиться контролировать время?\\n' +
            '- Как найти разумный баланс и каковы должны быть приоритеты?\\n' +
            '- Почему крайне важно дорожить временем? \\n' +
            '- Почему время лукаво, и что делать с ним, если оно не в нашей власти?\\n' +
            'Если какой-то из этих вопросов волнует тебя, то непременно приходи на этот семинар!'
    },
    {
        id: "ab814da8-1099-41c6-8dd5-345a9f2e42bd",
        name: 'Плод же Духа - Вера',
        urlPhoto: 'https://iisus.by/images/mol_vera_300.jpg',
        speakerId: `${prefix}-speakers/d61df9e7-1060-4bf1-8270-ffdfdf71ddc3`,
        description: 'ВЕРА - это чудо, которое *Бог* дарует человеку.\\n' +
            '> «Верою познаем, что веки устроены словом Божиим, так что из невидимого произошло видимое» (Евр.11:3)\\n' +
            'Откуда берется вера? Можно ли веру сгенерировать самому?\\n' +
            'Давайте разберёмся, что такое вера.\\n' +
            'Приходите!\\n' +
            'В ПРОГРАММЕ: \\n' +
            '- Проповедь Слова Божьего (неизменная часть) – Павел Стукан.\\n' +
            '- Совместное поклонение в песнях (славим Бога вместе).\\n' +
            '- Встреча у рояля (ответы на вопросы оставшиеся с молодежной конференции). \\n' +
            '- Вкусные угощения.\\n' +
            'Пусть каждый, кто будет в этот вечер с нами, научится сеять в доброе и вечное, а в итоге пожнет прекрасный урожай:\\n' +
            '*«Любовь, радость, мир, долготерпение, благость, милосердие, ВЕРА, кротость, воздержание» (Галатам 5:22-23)*.'
    },
    {
        id: "0666e2f1-c21b-4e41-ad40-47c96012949e",
        name: 'РОЖДЕНИЕ, ИЗМЕНИВШЕЕ ЖИЗНЬ',
        urlPhoto: 'https://iisus.by/images/news/mol_21g_600.jpg',
        speakerId: `${prefix}-speakers/12073888-8d98-493c-9b09-3c6e72236ad8`,
        description: 'В *«Вифлееме»*\\n' +
            '**ТЕМА**: ✨*«РОЖДЕНИЕ, ИЗМЕНИВШЕЕ ЖИЗНЬ»*✨\\n' +
            '**КОГДА**: **26 декабря** в **18:00**\\n' +
            '**ГДЕ**: Церковь *«Вифлеем»*, ул. Горецкого 93.\\n' +
            '**ВХОД**: По предварительной регистрации \\n' +
            'В ПРОГРАММЕ:\\n' +
            '- ️Проповедь Слова Божьего (неизменная часть) – Александр Каштальян.\\n' +
            '- ️Совместное поклонение в песнях (славим Бога вместе) – музыкальная группа.\\n' +
            '- ️Интересная программа (скучающим никто не останется) - ведушие Виталий и Маргарита.\\n' +
            '- ️Вкусные угощения (голодным никто не уйдет).\\n' +
            'ПРИХОДИТЕ! БУДЕТ АТМОСФЕРНО!\\n'
    },
    {
        id: "98ff1c5e-a29f-4da3-a12f-3ade939ce456",
        name: 'О рассудительности',
        urlPhoto: 'https://iisus.by/images/mol_ras_600.png',
        speakerId: `${prefix}-speakers/6bb7fc32-3c1d-41fd-847b-5f305e7fb7e4`,
        description: 'Скорее всего, мало кто знает значение термина «теперизм» или ещё его часто называют «новизм». О, с последним уже будет попроще. Мы знаем похожее слово – «новизна».\\n' +
            '«Теперизм» («Новизм») – взгляд человека на мир, согласно которому настоящий момент времени перекрывает, чуть ли не уничтожает, прошлое и будущее, а как следствие важность только объектов и событий, существующих в данный момент времени.\\n' +
            'Сейчас, в ХХI веке темп жизни человека уже совсем не такой, как раньше. Сегодня всё необходимо делать быстро: есть, учиться, читать, чувствовать, мыслить, принимать решения... Кто-то успевает, а кто-то нет. Кто-то живёт в постоянном стрессе из-за бесконечного списка дел, а кто-то считает себя неудачником по причине того, что не может справиться и с одним.\\n' +
            '*«…В США власть скорости и настоящего воздействует даже на религиозную обрядность. Одна из церквей в Нью-Джерси предлагала, например, экспресс-богослужение: быстрое поклонение, краткое отпущение грехов, беглое заявление о вере, мини-молитва, небольшое песнопение, краткая подборка отрывков из Священного Писания и двухминутная проповедь. Пастор этого храма рекламирует его услуги следующим образом: "Дайте нам *22 минуты*, и мы покажем вам Царство Божие"»*\\n' +
            'Новые технологии, знания, огромный объем разноплановой информации требуют от человека постоянно быть в курсе того, что происходит вокруг. В попытке угнаться за современностью ежедневно принимаются сотни, а то и тысячи больших и маленьких решений. С таким количеством велик риск и ошибку допустить. Известно, чтобы избежать этого, следует размышлять, взвешивать все *«за»* и *«против»*... но у современного человека просто на это нет времени.\\n' +
            'Мы же, христиане, живущие в век высоких технологий, должны быть движимы не только принципами этого мира. У нас есть непреходящая инструкция для жизни – Библия! Она и учит нас тому, чтобы мы были осторожны, дорожили временем, но в тоже время были рассудительны.\\n' +
            '> «Научи нас так счислять дни наши, чтобы нам приобрести сердце мудрое». (Пс 89:12)\\n' +
            '> «Итак, смотрите, поступайте осторожно, не как неразумные, но как мудрые, дорожа временем, потому что дни лукавы. Итак, не будьте нерассудительны, но познавайте, что есть воля Божия». (Еф 5:15-17)\\n'
    },
    {
        id: "fcb7af45-5432-4ac3-aaf8-179ba859a01e",
        name: 'Терпение не лопнуло',
        urlPhoto: 'https://iisus.by/images/terpenie_300.png',
        speakerId: `${prefix}-speakers/8118be67-12d8-4150-9999-93f04eb6385d`,
        description: '> «Вспыльчивый человек возбуждает раздор, а терпеливый утишает распрю»\\n' +
            '> (Притчи 15:18).\\n' +
            'Как же много в притчах говорится о терпении! О том, к чему приводит его отсутствие и какое благословение ждёт терпеливого человека. Конечно, бывают минуты, когда ты на взводе. Думаешь, ещё пару мгновений и всё, взорвусь. И как же порой не хватает того самого терпения…\\n' +
            'Необдуманно высказанные слова, которые причинили столько боли, резко отведённый взгляд, громкий удар по столу или захлопнутая с силой дверь... А потом... сожаление, что не смог вовремя остановиться. Можно ли всего этого избежать? \\n' +
            '> «Долготерпеливый лучше храброго, и владеющий собою лучше завоевателя города» (Притчи 16:32).\\n' +
            'На этой встрече мы поговорим на тему терпения. Бруцкий Анатолий Петрович поможет нам ответить на следующие вопросы:\\n' +
            '- Что такое терпение?\\n' +
            '- Где находятся границы терпения?\\n' +
            '- Как нам научиться терпению?\\n' +
            '- Да и в принципе, надо ли нам это терпение.'
    },
    {
        id: "7f063f93-1a29-4a84-92d1-6c0b83aa6511",
        name: 'Воскресение, подарившее жизнь',
        urlPhoto: 'https://iisus.by/images/pasxa_22_300.png',
        speakerId: `${prefix}-speakers/12073888-8d98-493c-9b09-3c6e72236ad8`,
        description: '> «А если Христос не воскрес, то вера ваша тщетна...» (1Кор 15:17).\\n' +
            'С какой перспективой ты живешь — перспективой смерти или воскресения? Живешь ли ты активной жизнью, зная, что **Бог** воскресит тебя из мертвых? На что будет похожа такая жизнь? Жить во свете воскресения означает, что знание Иисуса и пребывание с Ним является величайшим будущим из всех возможных! \\n' +
            'В программе:\\n' +
            '- проповедь Евангелия - Александр Каштальян;\\n' +
            '- совместное поклонение в песнях – мужская группа прославления;\\n' +
            '- вопросы / ответы;\\n' +
            '- вкусняшки;'
    },
    {
        id: "089cb519-a69a-4cbb-9446-dfdb1558586d",
        name: 'Доверие Богу',
        urlPhoto: 'https://iisus.by/images/news/doversya_600.jpg',
        speakerId: `${prefix}-speakers/6bb7fc32-3c1d-41fd-847b-5f305e7fb7e4`,
        description: 'Что значит доверить свою жизнь **Богу**? Мы так много об этом говорим, но на самом ли деле мы Ему доверяем?\\n' +
            'Разобраться в этом непростом вопросе поможет всем нам пастор церкви *«Вифлеем»* Юрий Хивук.\\n' +
            'Не опаздывай, будь молодчиной!\\n' +
            'P.S. и по хорошей традиции тебя ждёт вкусное угощение, общение, прославление.'
    },
    {
        id: "41daf123-bc02-441d-9224-107dce9f5dde",
        name: 'Рождество Христово',
        urlPhoto: 'https://iisus.by/images/news/molod_4_600.png',
        speakerId: `${prefix}-speakers/1a5e3cee-17e6-4f04-92a1-f7dc14a1724c`,
        description: 'В нашем обществе всё чаще поздравляют с *«Рождеством»*, и все реже звучат слова с *«Рождеством Христовым»*.\\n' +
            'Мир празднует Рождество без именинника и главного Героя праздника - **Иисуса Христа**.\\n' +
            'Как жаль, что такое важное событие проходит мимо многих людей.\\n' +
            '- А как же нужно праздновать Рождество?\\n' +
            '- Что этот праздник несёт всему миру и лично мне?\\n' +
            '- Что об этом говорят древние пророчества?\\n' +
            'В предстоящий рождественский вечер поговорим об этом – о настоящей радости Рождества Христова!\\n' +
            '* Словом будет делиться пастор церкви Олег Бруцкий-Стемпковский.\\n' +
            '* Будем петь вместе рождественские песни и благодарить Бога за его приход и любовь. Нас ждет драгоценное время общения друг с другом и новые знакомства.\\n' +
            '* Присоединяйся - стань частичкой большого праздника!'
    },
    {
        id: "98383d03-3df3-4639-9112-b08020719056",
        name: 'Фарисейство. Религиозный фанатизм',
        urlPhoto: 'https://iisus.by/images/news/molod_5_600.png',
        speakerId: `${prefix}-speakers/12073888-8d98-493c-9b09-3c6e72236ad8`,
        description: 'Фарисеи, кто это? Это религиозная партия, которая сформировалась из людей, возревновавших о строгом соблюдении закона.\\n' +
            'Однако, как это часто случается со многими хорошими начинаниями, закончили они не очень хорошо. И к моменту земного служения Иисуса Христа вся их ревность смешалась с лицемерием. И, как итог: открытое противостояние **Иисусу Христу**.\\n' +
            'В связи с этим возникает ряд вопросов, с которыми мы будем разбираться на ближайшей встрече:\\n' +
            'В чем разница, между верой и религиозным фанатизмом?\\n' +
            'В чем заключается опасность религиозного фанатизма?\\n' +
            'Как в попытках избежать фанатизма не отказаться от настоящей действующей веры?\\n' +
            'Эти вопросы, а возможно и некоторые другие, нам поможет раскрыть дьякон церкви Александр Каштальян.\\n' +
            'В программе:\\n' +
            '- Будем прославлять нашего Господа, петь в Его славу.\\n' +
            '- Проповедь Божьего Слова.\\n' +
            '- Планы молодежи на будущий месяц (возможно, захотите что-то посетить или принять участие).\\n' +
            '- Вкусный перекус и, конечно же, живое общение.\\n'
    },
    {
        id: "ecd20097-9e4d-4e40-8534-24772630fbc9",
        name: 'Довольные люди',
        urlPhoto: 'https://iisus.by/images/molod6_600.png',
        speakerId: `${prefix}-speakers/d61df9e7-1060-4bf1-8270-ffdfdf71ddc3`,
        description: 'Каждый из нас хоть раз в жизни сталкивался с недовольством: не устраивает начальник на работе, цены в магазинах, низкая зарплата… На этом фоне, видя успехи других людей, мы начинаем завидовать и теряем мир в сердце. Подобающее ли это поведение для христианина?\\n' +
            '**Библия** говорит:\\n' +
            '> «Великое приобретение — быть благочестивым и довольным» (1Тим. 6:6).\\n' +
            'Как же приобрести это приобретение? И где проходит граница между недовольством и здоровой обеспокоенностью?'
    },
    {
        id: "79a8d698-9c3f-4e43-ac22-fc9d90ae62fe",
        name: 'Сохрани свое сердце',
        urlPhoto: 'https://iisus.by/images/news/9_molod.jpg',
        speakerId: `${prefix}-speakers/dc3a00f5-6b4b-4140-bfd6-3bfe7e556aab`,
        description: 'Цифровой мир поглощает нас. Для многих актуальна проблема зависимости от интернета. Часы, потраченные в соцсетях, не позволяют человеку полноценно вникать в себя, в свою душу и сердце.\\n' +
            'Но Бог видит то, о чем мы даже не подозреваем.\\n' +
            '*Бог видит нас такими, как мы есть...*\\n' +
            '> Бог видит нас без наших накоплений,\\n' +
            '> Домов, машин, нарядов и трудов,\\n' +
            '> Подпорок бутафорных ста пудов\\n' +
            '> И благороднейших происхождений…\\n' +
            '> Он видит нас такими, как мы есть:\\n' +
            '> Двуличными, наигранными, злыми,\\n' +
            '> Духовно слабыми, на две ноги хромыми,\\n' +
            '> Готовыми впросак чуть что, и сесть...\\n' +
            '>                                           Вера Кушнир \\n' +
            'В Божьем Слове говорится:\\n' +
            '> «Больше всего хранимого храни сердце твое, потому что из него источники жизни».\\n' +
            '> Притчи 4:23\\n' +
            'Как важно сохранить свое сердце и свою жизнь для Бога!\\n' +
            'Найди время, чтобы серьезно поразмышлять об этом.'
    },
];

export async function insertReports(data: any) {
    for (const item of data) {
        await ReportsApi.create(item.id, item);
    }
}

export async function clearReports() {
    const docs = await ReportsApi.list();
    for (const item of docs) {
        await ReportsApi.delete(item.id);
    }
    return true;
}