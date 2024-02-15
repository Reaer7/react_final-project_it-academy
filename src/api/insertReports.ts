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