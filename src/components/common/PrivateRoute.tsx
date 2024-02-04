import { Navigate } from "react-router-dom";
import { useAuth, AuthUserType } from "../../hooks/useAuth";
import { APP_URL } from "../App";
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