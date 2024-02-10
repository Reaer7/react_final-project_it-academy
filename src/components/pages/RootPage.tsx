import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { APP_URL } from "./urls";

export function RootPage() {
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
    </div>
}