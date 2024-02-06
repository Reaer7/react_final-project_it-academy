import { useStoreSelector } from "./useStoreSelector";
import { UserType } from "../store/auth";
import { APP_URL } from "../components/App";
import { useNavigate } from "react-router-dom";

export type AuthUserType = UserType & {
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
            isAuth: !!user.email,
            ...user
        };
    }
}