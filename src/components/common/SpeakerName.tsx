import { DownloadSpeakerType } from "../../store/firebaseTypes";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useEffect } from "react";
import { loadSpeakerAction } from "../../actions/loadSpeakerAction";

export function SpeakerName(props: Readonly<{ speakerId: string }>) {
    const speaker: DownloadSpeakerType = useStoreSelector(store => store.speaker);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        const id = props.speakerId
            .split('/')
            .at(-1);
        id && loadSpeakerAction(dispatch, id);
    }, [])

    return <div>
        {!speaker.isLoading && speaker.item?.name}
    </div>
}