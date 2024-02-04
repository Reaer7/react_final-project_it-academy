import { useLocation } from "react-router";
import { Link } from "react-router-dom";

type MessageErrorType = {
    message: string | null;
}

export function ErrorPage() {
    const { state } = useLocation();
    const { message }: MessageErrorType = state;

    return <div id="error-page">
        <h1>Oops!</h1>
        {!!message && <p>{message}</p>}
        <Link to='/'>Go to Home</Link>
    </div>
}