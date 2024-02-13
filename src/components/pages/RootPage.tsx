import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { APP_URL } from "./urls";
import { CustomAlertSnackbar } from "../common/CustomAlertSnackbar";
import { useState } from "react";
import { useLocation } from "react-router";

type NotificationType = {
    isShowNotification: boolean;
}

export function RootPage() {
    const { state } = useLocation();
    const intl = useIntl();

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
        <CustomAlertSnackbar
            showSnackbar={showNotification}
            setShowSnackbar={setShowNotification}
            autoHideDuration={4000}
            message={intl.formatMessage({ id: "page.profile.send.verification" })}
            severity="success"
        />
    </div>
}

// https://mui.com/material-ui/react-stepper/#text-with-carousel-effect