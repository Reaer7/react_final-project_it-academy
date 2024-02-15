import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { DownloadSpeakerType } from "../../store/firebaseTypes";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { loadSpeakerAction } from "../../actions/loadSpeakerAction";
import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from "@mui/material";
import { APP_URL } from "./urls";
import Markdown from "react-markdown";
import { LeftItem } from "../common/LeftItem";
import { Item } from "../common/Item";

export function OneSpeakerPage() {
    const params = useParams();
    const id: string | undefined = params.id;

    const speaker: DownloadSpeakerType = useStoreSelector(store => store.speaker);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        id && loadSpeakerAction(dispatch, id);
    }, [])

    return <div className="content-container">
        {(speaker.isLoading && speaker?.item)
            ? <CircularProgress />
            : <Grid container justifyContent={"center"} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10}>
                    <Link to={APP_URL.SPEAKERS}>
                        <LeftItem style={{ marginBottom: 20, fontSize: 24 }}>
                            &#8656; {/*двойная стрелка влево*/}
                        </LeftItem>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={speaker.item.urlPhoto}
                                alt={speaker.item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {speaker.item.jobTitle}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={7} justifyContent={"left"}>
                    <LeftItem>
                        <Typography variant="body1" color="text.secondary" component="div">
                            {speaker.item.title
                                .split(/\\n/gi).map(line => (
                                    <Markdown key={line}>
                                        {line}
                                    </Markdown>
                                ))
                            }
                        </Typography>
                    </LeftItem>
                </Grid>
            </Grid>
        }
    </div>
}
