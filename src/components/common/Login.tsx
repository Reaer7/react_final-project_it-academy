import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Form } from './Form';
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { login } from "../../store/auth";
import { auth } from "../../config/firebase";
import { APP_URL } from "../pages/urls";

export function Login() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();

    async function handleLogin(email: string, password: string) {
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
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            alert('Invalid user!');
        }
    }

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
            alert("Invalid user credential!");
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
            Sign in by Google
        </button>
    </>
}
