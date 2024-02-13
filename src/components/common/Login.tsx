import { FormattedMessage, useIntl } from "react-intl";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { Box, Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { login } from "../../store/auth";
import { APP_URL } from "../pages/urls";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CustomAlertSnackbar } from "./CustomAlertSnackbar";

export function Login() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const intl = useIntl();
    const [showError, setShowError] = useState<boolean>(false);

    async function handleLogin(email: FormDataEntryValue | null, password: FormDataEntryValue | null) {
        if (email === null || password === null) {
            return;
        }
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                email.toString(),
                password.toString()
            );
            dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken || null,
                displayName: user.displayName || null,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL || null,
            }));

            if (!user.emailVerified) {
                navigate(`${APP_URL.PROFILE}`);
            } else {
                navigate(`${APP_URL.MAIN}`, { state: { name: user.displayName } });
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

            setShowError(true);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        handleLogin(data.get('email'), data.get('password'));
    }

    return <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <FormattedMessage id="page.login.message" />
        </Button>
        <SignInWithGoogle />
        <CustomAlertSnackbar
            showSnackbar={showError}
            setShowSnackbar={setShowError}
            message={intl.formatMessage({ id: "message.401" })}
        />
    </Box>
}
