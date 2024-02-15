import { SpeakersApi } from './firestoreCrud'

export const SPEAKER_DATA = [
    {
        id: "dc3a00f5-6b4b-4140-bfd6-3bfe7e556aab",
        name: "Крутько Виктор Никодимович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6554.jpg",
        jobTitle: "Старший пресвитер церкви «Вифлеем»",
        title: "### Крутько Виктор Никодимович\\n" +
            "Доктор (Divinity) Богословия, Магистр искусств изучения Библии.\\n" +
            "Родился в **1953 году** в д. Желтки Вилейского р-на. Женат (**1976 г.**), жена Нина Константиновна, дочь Светлана, дедушка троих внуков.\\n" +
            "**1 мая 1976 г.** - принял крещение в Желтковской церкви ЕХБ.\\n" +
            "**1988 г.** -  рукоположен на пасторское служение в Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "**1989-1992 гг.** - обучался в семинарии на факультете «Магистр Богословия».\\n" +
            "**1993-2000 гг.** - ректор Библейского Института Минской Богословской Семинарии (МБС).\\n" +
            "**1989-2002 гг.** - заместитель председателя Союза ЕХБ Беларуси.\\n" +
            "**2002-2010 гг.** - генеральный секретарь союза ЕХБ.\\n" +
            "**2010-2018 гг.** - епископ союза ЕХБ Беларуси.\\n" +
            "**2010-2018 гг.** - главный редактор журнала союза ЕХБ *«Крынiца Жыцця»*.\\n" +
            "С **2002 г.** - старший пресвитер церкви *«Вифлеем»*. Посвящен углубленному изучению и преподаванию Слова Божьего, молитве за церковь."
    },
    {
        id: "1a5e3cee-17e6-4f04-92a1-f7dc14a1724c",
        name: "Бруцкий-Стемпковский Олег Петрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6654.jpg",
        jobTitle: "Ответственный пресвитер церкви «Вифлеем»",
        title: "### Бруцкий-Стемпковский Олег Петрович\\n" +
            "В **1996 г.** – принял крещение в Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "**1999 – 2003 гг.** – учился и окончил обучение на пасторско-богословском факультете Минской Богословской Семинарии.\\n" +
            "**2000 – 2004 гг.** – вел группу по изучению Библии в церкви *«Голгофа»*.\\n" +
            "В церкви «Вифлеем» с **2001 года**. Нес служение в рамках программы *«Альфа-курс»*.\\n" +
            "С **2004 года** ведет группу по изучению Библии.\\n" +
            "**28 января 2007 г.** – рукоположен на диаконское служение.\\n" +
            "С **2016 года** избран пастором церкви *«Вифлеем»*, рукоположен **20 ноября 2016 г.** \\n" +
            "**1978 г.** рождения. Женат (**1999 г.**), жена Наталья."
    },
    {
        id: "cf2ec71c-2de2-4b8d-9cc8-3e4c6bb29bf7",
        name: "Пекун Дмитрий Степанович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6567.jpg",
        jobTitle: "Пресвитер церкви «Вифлеем»",
        title: "### Пекун Дмитрий Степанович\\n" +
            "Несет музыкальное и медиа-служение в церкви, проповедник.\\n" +
            "**20 июня 1993 г.** – принял крещение в Брестской церкви ЕХБ (ул. Фортечная).\\n" +
            "**1999 – 2002 гг.** – учился на музыкальном факультете Минской Богословской Семинарии.\\n" +
            "**2001– 2008 гг.** – регент молодежного хора Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "В церкви *«Вифлеем»* с **2008 года**. Регент старшего хора.\\n" +
            "Несет служение проповедью.\\n" +
            "В **2016 году** избран помощником старшего пастора церкви *«Вифлеем»*, рукоположен **20 ноября 2016 г.**\\n" +
            "**1974 г.** рождения. Женат, отец троих детей."
    },
    {
        id: "6bb7fc32-3c1d-41fd-847b-5f305e7fb7e4",
        name: "Хивук Юрий Васильевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6537.jpg",
        jobTitle: "Пресвитер церкви «Вифлеем»",
        title: "### Хивук Юрий Васильевич\\n" +
            "**24 июля 2000 г.** принял крещение в Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "**2004 - 2007 гг.**  - преподаватель в старших классах Воскресной школы ц. *«Голгофа»*.\\n" +
            "**2006 - 2009 гг.**  - учился в Минской Богословской Семинарии на факультете *«Пасторское богословие»*.\\n" +
            "**2010 г.** - рукоположен на диаконское служение.\\n" +
            "В церкви *«Вифлеем»* с **2007 г.** Ведёт группу по изучению Библии для молодежи.\\n" +
            "**2020 г.** - избран на пасторское служение церкви *«Вифлеем»*, рукоположен **14 февраля 2021 г.**\\n" +
            "**1981 г.** рождения. Женат, отец двоих детей."
    },
    {
        id: "316887a0-643d-4bdf-92f2-54b6d10432d3",
        name: "Просанов Анатолий Николаевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6542.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Просанов Анатолий Николаевич\\n" +
            "Несет административно-техническое служение.\\n" +
            "**1988 г.** принял крещение в Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "**1992 – 2004 гг.** - принимал непосредственное участие в строительстве церковного комплекса здания церкви *«Вифлеем»* на базе служения в миссии *«Дабрачыннасць»*.\\n" +
            "В церкви «Вифлеем» с **1993 года.**\\n" +
            "**2002 г.** – рукоположен на диаконское служение.\\n" +
            "**2002 – 2013 гг.** – нёс служение руководителя детского христианского спортивного клуба *«АВАНА»* в церкви.\\n" +
            "С 2013 г.** – координатор служения *«АВАНА»* церквей союза ЕХБ в Беларуси.\\n" +
            "**1966 г.** рождения. Женат, отец троих сыновей."
    },
    {
        id: "40e81dda-a6ab-46ae-87a2-b5f269cb601e",
        name: "Глушаков Алексей Леонидович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6599.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Глушаков Алексей Леонидович\\n" +
            "Ведущий группы по изучению Библии, проповедник.\\n" +
            "В **1998 г.** – принял крещение в центральной Севастопольской церкви ЕХБ.\\n" +
            "В церкви *«Вифлеем»* с **2003 года**, нёс служение в рамках программы *«Альфа-курс»*.\\n" +
            "С **2004 года** ведет группу по изучению Библии.\\n" +
            "**2008 г.** – рукоположен на диаконское служение.\\n" +
            "**1973 г.** рождения. Женат, воспитывает дочь."
    },
    {
        id: "d61df9e7-1060-4bf1-8270-ffdfdf71ddc3",
        name: "Стукан Павел Анатольевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6618.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Стукан Павел Анатольевич\\n" +
            "Проповедник.\\n" +
            "**1994 г.** – принял крещение в Минской церкви ЕХБ *«Вифлеем»*. \\n" +
            "**2005 - 2009 гг.**  - учился и окончил обучение в Минской Богословской Семинарии на факультете *«Пасторское богословие»*.\\n" +
            "**2001-2015 гг.** – нес служение молодежного лидера.\\n" +
            "С **2018 г.** – ответственный за спортивное служение.\\n" +
            "**2008 г.** – рукоположен на диаконское служение.\\n" +
            "**1979 г.** рождения. Женат, Отец четверых детей."
    },
    {
        id: "63eb3c21-7306-4759-b6fb-9025c017f9f3",
        name: "Клютченя Олег Александрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6608.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Клютченя Олег Александрович\\n" +
            "Проповедник.\\n" +
            "**2015 г.** – принял крещение в Минской церкви ЕХБ *«Вифлеем»*.\\n" +
            "**2016 -2018 гг.** – несет служение прораба по отделке здания пристройки церкви *«Вифлеем»*.\\n" +
            "Ведущий общецерковных молитвенных служений.\\n" +
            "Ведущий группы по изучению Библии.\\n" +
            "**2018 г.** – избран на диаконское служение, рукоположен **03.02.2019 г.**\\n" +
            "С **2020 г.** – директор Воскресной школы.\\n" +
            "**1971 г.** рождения. Женат, воспитывает дочь."
    },
    {
        id: "12073888-8d98-493c-9b09-3c6e72236ad8",
        name: "Каштальян Александр Павлович",
        urlPhoto: "https://iisus.by/images/img/stxt/kashta_600.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Каштальян Александр Павлович\\n" +
            "Ответственный за группу по изучению Библии, проповедник.\\n" +
            "В **2000 г.** принял крещение в Минской церкви ХВЕ *«Гефсимания»*.\\n" +
            "С **2005 по 2011 г.** учился в теологическом институте ХВЕ г. Минска на отделении *«Библия и церковное служение»*.\\n" +
            "В церковь *«Вифлеем»* перешел в **2007 г.**\\n" +
            "С **2018 г.**  ведет группу по изучению Библии в церкви *«Вифлеем»*.\\n" +
            "В **2022 году** избран диаконом церкви «Вифлеем», рукоположен **22.01.2023 г.**\\n" +
            "**1984 г.** рождения. Женат, отец четверых детей."
    },
    {
        id: "8118be67-12d8-4150-9999-93f04eb6385d",
        name: "Бруцкий-Стемпковский Анатолий Петрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6654__.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "### Бруцкий-Стемпковский Анатолий Петрович\\n" +
            "Несет семейное служение, проповедник.\\n" +
            "В **1992 г.** крещен в Минской церкви ЕХБ *«Голгофа»*.\\n" +
            "В **2000 г.** – окончил богословский факультет Минской Богословской Семинарии.\\n" +
            "В церкви *«Вифлеем»* с **2007 года**.\\n" +
            "В **2022 году** избран диаконом церкви «Вифлеем», рукоположен **22.01.2023 г.**\\n" +
            "**1974 г.** рождения.  Женат, трое детей."
    }
]

export async function insertSpeakers(data: any) {
    for (const item of data) {
        await SpeakersApi.create(item.id, item);
    }
}

export async function clearSpeakers() {
    const docs = await SpeakersApi.list();
    for (const item of docs) {
        await SpeakersApi.delete(item.id);
    }
    return true;
}