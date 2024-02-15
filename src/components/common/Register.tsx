import { FormattedMessage, useIntl } from "react-intl";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { UserLogic } from "../../util/UserLogic";
import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";
import { login } from "../../store/auth";
import { APP_URL } from "../pages/urls";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";
import { CustomAlertSnackbar } from "./CustomAlertSnackbar";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

export function Register() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const intl = useIntl();
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const userLogic = new UserLogic();

    function isValidPassword(password: string, confirmPassword: string): boolean {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
            }
        }
        return isValid
    }

    async function handleRegister(
        name: FormDataEntryValue | null,
        email: FormDataEntryValue | null,
        password: FormDataEntryValue | null,
        confirmPassword: FormDataEntryValue | null
    ) {
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage(intl.formatMessage({ id: "empty.input.field" }));
            setShowError(true);
            return;
        }

        const nameText: string = name.toString();
        const emailText: string = email.toString();
        const passwordText: string = password.toString();
        const confirmPasswordText: string = confirmPassword.toString();

        if (!isValidPassword(passwordText, confirmPasswordText)) {
            setErrorMessage(intl.formatMessage({ id: "page.register.wrong.password" }));
            setShowError(true);
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(auth, emailText, passwordText);
            if (user) {
                dispatch(login({
                    id: user.uid,
                    accessToken: user.refreshToken,
                    displayName: nameText,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoUrl: user.photoURL,
                }));

                localStorage.setItem("user", JSON.stringify(user));

                await updateProfile(auth.currentUser!, {
                    displayName: nameText
                });

                await userLogic.verifyEmail();
            }
        } catch (error: any) {
            if (error instanceof FirebaseError) {
                if (error.code === "auth/email-already-in-use") {
                    setErrorMessage(intl.formatMessage({ id: "page.register.conflict.email" }));
                }
                if (error.code === "auth/invalid-email") {
                    setErrorMessage(intl.formatMessage({ id: "page.register.wrong.email" }));
                }
                if (error.code === "auth/weak-password") {
                    setErrorMessage(intl.formatMessage({ id: "page.register.weak.password" }));
                }
                setShowError(true);
            } else if (error instanceof Error) {
                console.log(error.message);
            } else {
                navigate(`${APP_URL.ERROR}`, {
                    state: {
                        message: intl.formatMessage({ id: "message.503" })
                    }
                });
            }
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        handleRegister(data.get('name'), data.get('email'), data.get('password'), data.get('confirmPassword'));
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
        <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label={intl.formatMessage({ id: "text.confirmPassword" })}
            type="password"
            id="confirmPassword"
            autoComplete="current-confirm-password"
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
        <CustomAlertSnackbar
            showSnackbar={showError}
            setShowSnackbar={setShowError}
            autoHideDuration={4000}
            message={errorMessage}
        />
    </Box>
}
