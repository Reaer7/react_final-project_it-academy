import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { login } from "../../store/auth";
import { auth } from "../../config/firebase";
import { APP_URL } from "../pages/urls";
import { FormattedMessage, useIntl } from "react-intl";

export function SignInWithGoogle() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const intl = useIntl()

    async function signInWithGoogle() {
        try {
            const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
            if (user && user.email) {
                dispatch(login({
                    id: user.uid,
                    accessToken: user.refreshToken || null,
                    displayName: user.displayName || null,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoUrl: user.photoURL || null,
                }));
            }
            navigate(`${APP_URL.MAIN}`, { state: { name: user.displayName } });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = intl.formatMessage({
                id: "message.401"
            });
            alert(message);
        }
    }

    return <button
        className="login-button"
        type="button"
        onClick={signInWithGoogle}
    >
        {/*TODO: fix*/}
        {/*<img alt="google logo"*/}
        {/*     src={require("../../../public/google_icon.svg")}*/}
        {/*     width="20px"*/}
        {/*/>*/}
        <FormattedMessage
            id="page.login.google"
        />
    </button>
}
