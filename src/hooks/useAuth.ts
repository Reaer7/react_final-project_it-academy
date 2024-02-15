import { useStoreSelector } from "./useStoreSelector";
import { UserType } from "../store/firebaseTypes";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../components/pages/urls";

export type AuthUserType = UserType & {
    isLogin: boolean;
    isAuth: boolean;
}

export function useAuth() {
    const navigate = useNavigate();
    const user: UserType = useStoreSelector(state => state.auth);

    if (!user) {
        navigate(`${APP_URL.ERROR}`, {
            state: { message: 'Something went wrong with get user!' }
        });
    } else {
        return {
            isLogin: !!user.email,
            isAuth: user.emailVerified,
            ...user
        };
    }
}