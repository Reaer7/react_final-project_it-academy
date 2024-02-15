import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { APP_URL } from "./urls";
import { CustomAlertSnackbar } from "../common/CustomAlertSnackbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box, Button, CircularProgress, MobileStepper, Paper, Typography } from "@mui/material";
// @ts-ignore
import SwipeableViews from "react-swipeable-views-react-18-fix";
// @ts-ignore
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { ReportsType } from "../../store/firebaseTypes";
import { loadReportsAction } from "../../actions/loadReportsAction";

type NotificationType = {
    isShowNotification: boolean;
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function RootPage() {
    const { state } = useLocation();
    const dispatch = useStoreDispatch();
    const intl = useIntl();
    const [activeStep, setActiveStep] = useState<number>(0);
    const reports: ReportsType = useStoreSelector(store => store.reports);
    const [maxSteps, setMaxSteps] = useState<number>(reports?.items.length ?? 0);

    const { isShowNotification }: NotificationType = state || false;
    const [showNotification, setShowNotification] = useState<boolean>(isShowNotification);

    useEffect(() => {
        loadReportsAction(dispatch);
        setMaxSteps(reports.items.length);
    }, []);

    return <div className="content-container">
        <h4>
            <FormattedMessage
                id="page.root.head"
            />
        </h4>
        {(reports.isLoading && !!reports?.items)
            ? <CircularProgress />
            : <Box sx={{ maxWidth: 600, flexGrow: 1 }}>

                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 60,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{!!reports?.items && reports.items[activeStep]?.name}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis='x'
                    index={activeStep}
                    onChangeIndex={(step: number) => setActiveStep(step)}
                    enableMouseEvents
                >
                    {reports.items.map((report, index) => (
                        <Link key={report.id}
                              to={`${APP_URL.REPORTS}/${report.id}`}
                              className="nav-link"
                        >
                            {Math.abs(activeStep - index) <= 2
                                ? <Box
                                    component="img"
                                    sx={{
                                        height: 384,
                                        display: 'block',
                                        maxWidth: 600,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={report.urlPhoto}
                                    alt={report.name}
                                />
                                : null}
                        </Link>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
                            disabled={activeStep === 0}
                        >
                            <KeyboardArrowLeft /> Back
                        </Button>
                    }
                />
            </Box>}
        <p>
            <FormattedMessage
                id="page.root.description"
                values={{
                    link: <Link to={APP_URL.MAIN}>
                        <FormattedMessage
                            id="page.root.description.redirect"
                        />
                    </Link>
                }}
            />
        </p>
        <CustomAlertSnackbar
            showSnackbar={showNotification}
            setShowSnackbar={setShowNotification}
            autoHideDuration={4000}
            message={intl.formatMessage({ id: "page.profile.send.verification" })}
            severity="success"
        />
    </div>
}
