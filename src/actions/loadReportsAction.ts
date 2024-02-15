import { actions, StoreDispatch } from "../store";
import { ReportsApi } from "../api/firestoreCrud";

export async function loadReportsAction(dispatch: StoreDispatch): Promise<void> {
    dispatch(actions.reports.isLoadingStart());
    const reports = await ReportsApi.list();
    dispatch(actions.reports.loadReports(reports));
    dispatch(actions.reports.isLoadingEnd());
}