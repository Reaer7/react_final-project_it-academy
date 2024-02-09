import { Navigate } from "react-router-dom";
import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { APP_URL } from "../pages/urls";
import { ContentPropsType } from "../layouts/Content";

export function PrivateRoute({ children }: ContentPropsType) {
    const { isAuth }: AuthUserType = useAuth()!;

    if (!isAuth) {
        return <Navigate to={APP_URL.LOGIN} replace />
    }

    return <>
        {children}
    </>;
}