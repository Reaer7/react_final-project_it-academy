import { Link } from 'react-router-dom';
import { Login } from '../common/Login';
import { APP_URL } from "./urls";
import { FormattedMessage } from "react-intl";

export function LoginPage() {
    return <div>
        <h3>
            <FormattedMessage
                id="page.login.head"
            />
        </h3>
        <Login />
        <p>
            <FormattedMessage
                id="page.login.description"
                values={{
                    link: <Link to={APP_URL.REGISTER}>
                        <FormattedMessage
                            id="page.login.description.redirect"
                        />
                    </Link>
                }}
            />
        </p>
    </div>
}