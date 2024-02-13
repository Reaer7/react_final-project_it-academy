import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { APP_URL } from "./urls";

type MessageErrorType = {
    message: string | null;
}

export function ErrorPage() {
    const { state } = useLocation();

    const { message }: MessageErrorType = state;

    return <div id="error-page">
        <h1>
            <FormattedMessage
                id="page.error.head"
            />
        </h1>
        {!!message && <p>{message}</p>}
        <Link to={APP_URL.ROOT}>
            <FormattedMessage
                id="page.error.link.root"
            />
        </Link>
    </div>
}