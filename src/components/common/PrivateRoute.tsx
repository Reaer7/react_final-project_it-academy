import { Navigate } from "react-router-dom";
import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { APP_URL } from "../pages/urls";
import { ContentPropsType } from "../layouts/Content";

export function PrivateRoute({ children }: ContentPropsType) {
    const { isAuth, isLogin }: AuthUserType = useAuth()!;

    if (!isLogin) {
        return <Navigate to={APP_URL.LOGIN} replace />
    }
    if (!isAuth) {
        return <Navigate to={APP_URL.ROOT} replace />
    }

    return <>
        {children}
    </>;
}