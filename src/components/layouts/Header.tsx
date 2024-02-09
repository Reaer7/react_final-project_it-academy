import { Link, Navigate } from "react-router-dom";
import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { logout } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { FormattedMessage } from 'react-intl';
import { APP_URL } from "../pages/urls";

export function Header() {
    const dispatch = useStoreDispatch();
    const { isAuth }: AuthUserType = useAuth()!;

    function handleClick() {
        dispatch(logout());
        return <Navigate to={APP_URL.ROOT} replace/>
    }

    return <header className="header">
        <div className="container">
            <img
                className="logo"
                alt="logo"
                src="./../../../public/vflm-logo.png"
            />
            <nav>
                <Link className="nav-link" to={APP_URL.ROOT}>
                    <FormattedMessage
                        id="header.root"
                    />
                </Link>
                <Link className="nav-link" to={APP_URL.HOME}>
                    <FormattedMessage
                        id="header.main"
                    />
                </Link>
                <Link className="nav-link" to='/ui/mui'>
                    <FormattedMessage
                        id="header.test"
                    />
                </Link>
                {isAuth && <Link className="nav-link" to={APP_URL.PROFILE}>
                    <FormattedMessage
                        id="header.profile"
                    />
                </Link>}
            </nav>
            {!isAuth
                ? <Link className="nav-link signin" to={APP_URL.LOGIN}>
                    <FormattedMessage
                        id="header.login"
                    />
                </Link>
                : <div className="nav-link signout" onClick={handleClick}>
                    <FormattedMessage
                        id="header.logout"
                    />
                </div>
            }
        </div>
    </header>;
}