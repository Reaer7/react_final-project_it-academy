import { ReportsApi } from './firestoreCrud'

export const REPORTS_DATA = [
    {
        id: "7d21210b-6e3b-4d7f-9720-02c273c6464b",
        name: 'Семья: Божий замысел',
        description: '',
        urlPhoto: 'https://iisus.by/images/news/konf_2_0_0_3_600.png',
        speakerId: "12073888-8d98-493c-9b09-3c6e72236ad8"
    },
    {
        id: "c4a5a860-c0b5-485f-8bb6-99f7305e4ec6",
        name: 'Не молчи',
        description: '',
        urlPhoto: 'https://iisus.by/images/gde2_600.png',
        speakerId: "Игорь Цегалко"
    },
    {
        id: "71d33e79-2d02-4529-a092-2c98c583dbde",
        name: 'Не трать время зря',
        description: '',
        urlPhoto: 'https://iisus.by/images/news/konf_3_600.png',
        speakerId: "8118be67-12d8-4150-9999-93f04eb6385d"
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