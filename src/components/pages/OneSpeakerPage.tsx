import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { DownloadSpeakerType } from "../../store/firebaseTypes";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { loadSpeakerAction } from "../../actions/loadSpeakerAction";
import { Card, CardContent, CardMedia, CircularProgress, Grid, Paper, styled, Typography } from "@mui/material";
import { APP_URL } from "./urls";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function OneSpeakerPage() {
    const params = useParams();
    const id: string | undefined = params.id;

    const speaker: DownloadSpeakerType = useStoreSelector(store => store.speaker);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        id && loadSpeakerAction(dispatch, id);
    }, [])

    return <div className="content-container">
        {(speaker.isLoading && !!speaker.item)
            ? <CircularProgress />
            : <Grid container justifyContent={"center"} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10}>
                    <Item style={{ marginBottom: 20, fontSize: 24 }}>
                        <Link to={APP_URL.SPEAKERS}>
                            &#8656; {/*двойная стрелка влево*/}
                        </Link>
                    </Item>
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
                <Grid item xs={7}>
                    <Item>
                        <Typography variant="body1" color="text.secondary">
                            {speaker.item.title}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        }
    </div>
}
