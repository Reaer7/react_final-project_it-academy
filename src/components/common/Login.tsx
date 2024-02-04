import { useNavigate } from 'react-router-dom';
import {
    getRedirectResult,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth";
import { Form } from './Form';
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { login } from "../../store/auth";
import { auth } from "../../config/firebase";
import { APP_URL } from "../App";

export function Login() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();

    async function handleLogin (email: string, password: string) {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken || null,
                displayName: user.displayName || null,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL || null,
            }));
            navigate(`${APP_URL.HOME}`, { state: { name: user.displayName } });
        } catch(error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            // () => alert('Invalid user!');
        }
    }

    /*async function signInWithGoogleRedirect() {
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope('user_birthday');

            await signInWithRedirect(auth, provider);

            console.log("log1");
            const result = await getRedirectResult(auth);
            console.log("log2");
            if (result) {
                const user = result.user;
                // const credential = provider.credentialFromResult(auth, result);
                if (user && user.email) {
                    dispatch(login({
                        id: user.uid,
                        accessToken: null,
                        displayName: user.displayName || null,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoUrl: user.photoURL || null,
                    }));
                }
                console.log("log3");
            }
            console.log("log4");
            navigate(`${APP_URL.HOME}`, { state: { name: result?.user?.displayName } });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            // () => alert('Invalid user!');
        }
    }*/

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
            navigate(`${APP_URL.HOME}`, { state: { name: user.displayName } });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            // () => alert('Invalid user!');
        }
    }

    return <>
        <Form
            title="login"
            handleClick={handleLogin}
        />
        <button
            type="button"
            onClick={signInWithGoogle}
        >
            Google
        </button>
    </>
}
