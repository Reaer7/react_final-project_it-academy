import { actions, StoreDispatch } from "../store";
import { ReportsApi } from "../api/firestoreCrud";

export async function loadReportAction(dispatch: StoreDispatch): Promise<void> {
    dispatch(actions.report.isLoadingStart());
    const reports = await ReportsApi.list();
    dispatch(actions.report.loadReports(reports));
    dispatch(actions.report.isLoadingEnd());
}