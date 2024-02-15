import { clearReports, insertReports, REPORTS_DATA } from "./insertReports";
import { clearSpeakers, insertSpeakers, SPEAKER_DATA } from "./insertSpeakers";

export async function insertData() {
    console.log('script start');

    const isEmptyReports = await clearReports();
    if (isEmptyReports) {
        await insertReports(REPORTS_DATA);
    }
    console.log('reports end');

    const isEmptySpeakers = await clearSpeakers();
    if (isEmptySpeakers) {
        await insertSpeakers(SPEAKER_DATA);
    }
    console.log('speakers end');

    console.log('script end');
}