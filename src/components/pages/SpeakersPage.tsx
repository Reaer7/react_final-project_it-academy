import { FormattedMessage } from "react-intl";
import { Box, CircularProgress, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useEffect } from "react";
import { loadSpeakersAction } from "../../actions/loadSpeakersAction";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { SpeakersType, SpeakerType } from "../../store/firebaseTypes";
import { APP_URL } from "./urls";
import { Link } from "react-router-dom";

export function SpeakersPage() {
    const speakers: SpeakersType = useStoreSelector(store => store.speakers);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        loadSpeakersAction(dispatch);
    }, []);

    return <Box sx={{ maxWidth: 1200, alignContent: "center", padding: 5 }}>
        <h4>
            <FormattedMessage
                id="page.speakers.head"
            />
        </h4>
        {(speakers.isLoading && !!speakers?.items)
            ? <CircularProgress />
            : <Box sx={{
                width: "min-content",
                height: 700,
                overflowY: "scroll"
            }}>
                <ImageList variant="masonry" cols={3}>
                    {speakers.items.map((item: SpeakerType) => (
                        <Link key={item.id} to={`${APP_URL.SPEAKERS}/${item.id}`} className="nav-link">
                            <ImageListItem sx={{ padding: 1 }}>
                                <img
                                    srcSet={`${item.urlPhoto}`}
                                    src={`${item.urlPhoto}`}
                                    alt={item.jobTitle}
                                    loading="lazy"
                                />
                                <ImageListItemBar position="below" title={item.name} />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Box>}
    </Box>
}