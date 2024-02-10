import { Link } from 'react-router-dom';
import { Register } from '../common/Register';
import { APP_URL } from "./urls";
import { FormattedMessage } from "react-intl";

export function RegisterPage() {
    return <div>
        <h3>
            <FormattedMessage
                id="page.register.head"
            />
        </h3>
        <Register />
        <p>
            <FormattedMessage
                id="page.register.description"
                values={{
                    link: <Link to={APP_URL.LOGIN}>
                        <FormattedMessage
                            id="page.register.description.redirect"
                        />
                    </Link>
                }}
            />
        </p>
    </div>
}
