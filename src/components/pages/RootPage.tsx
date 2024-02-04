import { Link } from "react-router-dom";

export function RootPage() {
    return <div>
        <h1>This is root page</h1>
        <p>
            You can visit <Link to="/home">Home page</Link> if you already authorized
        </p>
    </div>
}