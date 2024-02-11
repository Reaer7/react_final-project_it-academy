import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { APP_URL } from "./urls";
import { Alert } from "@mui/material";
import { CustomSnackbar } from "../common/CustomSnackbar";
import { useState } from "react";
import { useLocation } from "react-router";

type NotificationType = {
    isShowNotification: boolean;
}

export function RootPage() {
    const { state } = useLocation();
    const { isShowNotification }: NotificationType = state ? state : false;
    const [showNotification, setShowNotification] = useState<boolean>(isShowNotification);

    return <div className="content-container">
        <h1>
            <FormattedMessage
                id="page.root.head"
            />
        </h1>
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
        <CustomSnackbar
            showSnackbar={showNotification}
            setShowSnackbar={setShowNotification}
        >
            <Alert variant="filled" severity="success">
                <FormattedMessage id="page.profile.send.verification" />
            </Alert>
        </CustomSnackbar>
    </div>
}

// https://mui.com/material-ui/react-stepper/#text-with-carousel-effect