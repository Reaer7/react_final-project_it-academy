import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { DownloadReportType } from "../../store/firebaseTypes";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from "@mui/material";
import { APP_URL } from "./urls";
import Markdown from "react-markdown";
import { LeftItem } from "../common/LeftItem";
import { Item } from "../common/Item";
import { loadReportAction } from "../../actions/loadReportAction";
import { SpeakerName } from "../common/SpeakerName";

export function OneReportPage() {
    const params = useParams();
    const id: string | undefined = params.id;

    const report: DownloadReportType = useStoreSelector(store => store.report);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        id && loadReportAction(dispatch, id);
    }, [])

    return <div className="content-container">
        {(report.isLoading && !!report.item)
            ? <CircularProgress />
            : <Grid container justifyContent={"center"} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Link to={APP_URL.ROOT}>
                        <LeftItem style={{ marginBottom: 20, fontSize: 24 }}>
                            &#8656; {/*двойная стрелка влево*/}
                        </LeftItem>
                    </Link>
                </Grid>
                <Grid item xs={7}>
                    <Item>
                        <Card>
                            <CardMedia
                                component="img"
                                height="500"
                                image={report.item.urlPhoto}
                                alt={report.item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <SpeakerName speakerId={report.item.speakerId} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={5} justifyContent={"left"}>
        <LeftItem>
            <Typography variant="body1" color="text.secondary" component="div">
                {report.item.description
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
