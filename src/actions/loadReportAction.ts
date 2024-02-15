import { actions, StoreDispatch } from "../store";
import { ReportsApi } from "../api/firestoreCrud";

export async function loadReportAction(dispatch: StoreDispatch, id: string): Promise<void> {
    dispatch(actions.report.isLoadingStart());
    const report = await ReportsApi.get(id);
    dispatch(actions.report.loadReport(report));
    dispatch(actions.report.isLoadingEnd());
}