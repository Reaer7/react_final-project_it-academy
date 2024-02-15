import { actions, StoreDispatch } from "../store";
import { SpeakersApi } from "../api/firestoreCrud";

export async function loadSpeakersAction(dispatch: StoreDispatch): Promise<void> {
    dispatch(actions.speakers.isLoadingStart());
    const speakers = await SpeakersApi.list();
    dispatch(actions.speakers.loadSpeakers(speakers));
    dispatch(actions.speakers.isLoadingEnd());
}