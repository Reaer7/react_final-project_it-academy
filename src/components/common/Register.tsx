import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from './Form';
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { login } from "../../store/auth";
import { auth } from "../../config/firebase";
import { APP_URL } from "../App";

export function Register() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();

    async function handleRegister(email: string, password: string) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken,
                displayName: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL,
            }));
            navigate(`${APP_URL.ROOT}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            navigate(`${APP_URL.ERROR}`, {
                state: { message: 'Something went wrong with create user!' }
            });
        }
    }

    return <Form
        title="register"
        handleClick={handleRegister}
    />
}
