import { logout } from '../../store/auth';
import { useAuth, AuthUserType } from "../../hooks/useAuth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";

export const HomePage = () => {
    const dispatch = useStoreDispatch();
    const { email, displayName }: AuthUserType = useAuth()!;

    return <div>
        <h1>Welcome {!!displayName && `${displayName}`}</h1>
        <button onClick={() => dispatch(logout())}>
            Logout from {email}
        </button>
    </div>
}
