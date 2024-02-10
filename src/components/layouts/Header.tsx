import { Link, Navigate } from "react-router-dom";
import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { logout } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { FormattedMessage } from 'react-intl';
import { APP_URL } from "../pages/urls";

export function Header() {
    const dispatch = useStoreDispatch();
    const { isAuth, isLogin }: AuthUserType = useAuth()!;

    function handleClick() {
        dispatch(logout());
        return <Navigate to={APP_URL.ROOT} replace/>
    }

    return <header className="header">
        <div className="container">
            <img
                className="logo"
                alt="logo"
                src={require("../../images/vflm-logo.png")}
            />
            <nav>
                <Link className="nav-link" to={APP_URL.ROOT}>
                    <FormattedMessage
                        id="header.root"
                    />
                </Link>
                {isAuth && <Link className="nav-link" to={APP_URL.MAIN}>
                    <FormattedMessage
                        id="header.main"
                    />
                </Link>}
                {isLogin && <Link className="nav-link" to={APP_URL.PROFILE}>
                    <FormattedMessage
                        id="header.profile"
                    />
                </Link>}
            </nav>
            {isLogin
                ? <div className="nav-link signout" onClick={handleClick}>
                    <FormattedMessage
                        id="header.logout"
                    />
                </div>
                : <Link className="nav-link signin" to={APP_URL.LOGIN}>
                    <FormattedMessage
                        id="header.login"
                    />
                </Link>
            }
        </div>
    </header>;
}