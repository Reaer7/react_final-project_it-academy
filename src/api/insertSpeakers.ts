import { SpeakersApi } from './firestoreCrud'

export const SPEAKER_DATA = [
    {
        id: "dc3a00f5-6b4b-4140-bfd6-3bfe7e556aab",
        name: "Крутько Виктор Никодимович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6554.jpg",
        jobTitle: "Старший пресвитер церкви «Вифлеем»",
        title: ""
    },
    {
        id: "1a5e3cee-17e6-4f04-92a1-f7dc14a1724c",
        name: "Бруцкий-Стемпковский Олег Петрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6654.jpg",
        jobTitle: "Ответственный пресвитер церкви «Вифлеем»",
        title: ""
    },
    {
        id: "cf2ec71c-2de2-4b8d-9cc8-3e4c6bb29bf7",
        name: "Пекун Дмитрий Степанович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6567.jpg",
        jobTitle: "Пресвитер церкви «Вифлеем»",
        title: ""
    },
    {
        id: "6bb7fc32-3c1d-41fd-847b-5f305e7fb7e4",
        name: "Хивук Юрий Васильевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6537.jpg",
        jobTitle: "Пресвитер церкви «Вифлеем»",
        title: ""
    },
    {
        id: "316887a0-643d-4bdf-92f2-54b6d10432d3",
        name: "Просанов Анатолий Николаевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6542.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: ""
    },
    {
        id: "40e81dda-a6ab-46ae-87a2-b5f269cb601e",
        name: "Глушаков Алексей Леонидович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6599.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: "<p>Глушаков Алексей Леонидович - ведущий группы по изучению Библии, проповедник.</p><p>В 1998 г. – принял крещение в центральной Севастопольской церкви ЕХБ.</p><p>В церкви «Вифлеем» с 2003 года, нёс служение в рамках программы «Альфа-курс».</p><p>С 2004 года ведет группу по изучению Библии.</p><p>2008 г. – рукоположен на диаконское служение.</p><p>1973 г. рождения. Женат, воспитывает дочь.</p>"
    },
    {
        id: "d61df9e7-1060-4bf1-8270-ffdfdf71ddc3",
        name: "Стукан Павел Анатольевич",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6618.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: ""
    },
    {
        id: "63eb3c21-7306-4759-b6fb-9025c017f9f3",
        name: "Клютченя Олег Александрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6608.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: ""
    },
    {
        id: "12073888-8d98-493c-9b09-3c6e72236ad8",
        name: "Каштальян Александр Павлович",
        urlPhoto: "https://iisus.by/images/img/stxt/kashta_600.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: ""
    },
    {
        id: "8118be67-12d8-4150-9999-93f04eb6385d",
        name: "Бруцкий-Стемпковский Анатолий Петрович",
        urlPhoto: "https://iisus.by/images/img/stxt/DSC_6654__.jpg",
        jobTitle: "Диакон церкви «Вифлеем»",
        title: ""
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