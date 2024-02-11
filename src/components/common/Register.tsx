import { FormattedMessage, useIntl } from "react-intl";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { UserLogic } from "../util/UserLogic";
import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";
import { login } from "../../store/auth";
import { APP_URL } from "../pages/urls";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";

export function Register() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const intl = useIntl();
    const userLogic = new UserLogic();

    async function handleRegister(
        name: FormDataEntryValue | null,
        email: FormDataEntryValue | null,
        password: FormDataEntryValue | null
    ) {
        if (name === null || email === null || password === null) {
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email.toString(),
                password.toString()
            );
            dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken,
                displayName: name.toString(),
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL,
            }));

            await updateProfile(auth.currentUser!, {
                displayName: name.toString()
            });

            await userLogic.verifyEmail();

            navigate(`${APP_URL.ROOT}`, {
                state: {
                    isShowNotification: true
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            navigate(`${APP_URL.ERROR}`, {
                state: {
                    message: intl.formatMessage({ id: "message.503" })
                }
            });
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        handleRegister(data.get('name'), data.get('email'), data.get('password'));
    }

    return <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label={intl.formatMessage({ id: "text.name" })}
            name="name"
            autoComplete="name"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={intl.formatMessage({ id: "text.email" })}
            name="email"
            autoComplete="email"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={intl.formatMessage({ id: "text.password" })}
            type="password"
            id="password"
            autoComplete="current-password"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            <FormattedMessage id="page.register.message" />
        </Button>
        <SignInWithGoogle />
    </Box>
}
