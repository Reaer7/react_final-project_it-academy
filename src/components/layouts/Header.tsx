import { Link, Navigate } from "react-router-dom";
import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { APP_URL } from "../App";
import { logout } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";

export function Header() {
    const dispatch = useStoreDispatch();
    const { isAuth }: AuthUserType = useAuth()!;

    function handleClick() {
        dispatch(logout());
        return <Navigate to={APP_URL.ROOT} replace />
    }

    return <header className="header">
        <div className="container">
            <img
                className="logo"
                alt="logo"
                src="../../../public/vflm-logo.png"
            />
            <nav>
                <Link className="nav-link" to={APP_URL.ROOT}>Root</Link>
                <Link className="nav-link" to={APP_URL.HOME}>Home</Link>
                <Link className="nav-link" to='/ui/mui'>MaterialUI</Link>
                {isAuth && <Link className="nav-link" to={APP_URL.PROFILE}>
					Profile
				</Link>}
            </nav>
            {!isAuth
                ? <Link className="nav-link signin" to={APP_URL.LOGIN}>
                    Login
                </Link>
                : <div className="nav-link signout" onClick={handleClick}>
                    Logout
                </div>
            }
        </div>
    </header>;
}