import { actions, StoreDispatch } from "../store";
import { SpeakersApi } from "../api/firestoreCrud";

export async function loadSpeakerAction(dispatch: StoreDispatch, id: string): Promise<void> {
    dispatch(actions.speaker.isLoadingStart());
    const speaker = await SpeakersApi.get(id);
    dispatch(actions.speaker.loadSpeaker(speaker));
    dispatch(actions.speaker.isLoadingEnd());
}