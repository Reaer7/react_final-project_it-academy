import { FormattedMessage, useIntl } from "react-intl";
import {
    Autocomplete,
    Box,
    CircularProgress,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    TextField
} from "@mui/material";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useEffect, useState } from "react";
import { loadSpeakersAction } from "../../actions/loadSpeakersAction";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { SpeakersType, SpeakerType } from "../../store/firebaseTypes";
import { APP_URL } from "./urls";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";

export function SpeakersPage() {
    const speakers: SpeakersType = useStoreSelector(store => store.speakers);
    const dispatch = useStoreDispatch();
    const intl = useIntl();
    const [filteredSpeakers, setFilteredSpeakers] = useState<SpeakerType[] | null>(speakers.items)
    const [speakerName, setSpeakerName] = useState<string>('')

    useEffect(() => {
        loadSpeakersAction(dispatch);
    }, []);

    useEffect(() => {
        if (speakerName) {
            const filteredData = speakers.items.filter(value => {
                return value.name.toLowerCase().includes(speakerName.toLowerCase())
            });
            setFilteredSpeakers(filteredData);
        } else {
            setFilteredSpeakers(speakers.items);
        }
    }, [speakerName, speakers])

    return <Box sx={{ maxWidth: 1200, alignContent: "center", padding: 5 }}>
        <h4>
            <FormattedMessage
                id="page.speakers.head"
            />
        </h4>
        {(speakers.isLoading && !!filteredSpeakers && speakers?.items)
            ? <CircularProgress />
            : <Box sx={{
                width: "100%",
                height: 700,
                overflowY: "scroll",
            }}>
                <Autocomplete
                    autoHighlight
                    options={speakers.items.map(item => item.name)}
                    sx={{ width: 500, marginY: 0.75 }}
                    noOptionsText={intl.formatMessage({ id: "text.not.match" })}
                    popupIcon={<Search />}
                    inputValue={speakerName}
                    onInputChange={(event, newInputValue) => {
                        setSpeakerName(newInputValue);
                    }}
                    renderInput={(params) => <TextField
                        {...params}
                        label={intl.formatMessage({ id: "text.fio" })}
                    />}
                />
                <ImageList variant="masonry" cols={3}>
                    {!!filteredSpeakers && filteredSpeakers.map((item: SpeakerType) => (
                        <Link key={item.id}
                              to={`${APP_URL.SPEAKERS}/${item.id}`}
                              className="nav-link"
                              style={{ color: '#606573' }}
                        >
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