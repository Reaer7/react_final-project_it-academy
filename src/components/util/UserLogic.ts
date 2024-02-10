import {
    createUserWithEmailAndPassword,
    sendEmailVerification, signInWithEmailAndPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    User,
    validatePassword
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { login, updateEmailVerified, updateMail, updateName } from "../../store/auth";
import { APP_URL } from "../pages/urls";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

const authUser: User | null = auth.currentUser;

export class UserLogic {
    dispatch = useStoreDispatch();
    navigate = useNavigate();
    intl = useIntl();

    async updateName() {
        try {
            let isValidName: boolean = false;
            let name: string = '';
            while (!isValidName) {
                const message: string = this.intl.formatMessage({
                    id: "page.profile.enter.name"
                });
                name = prompt(message)!;
                isValidName = name !== null && name.trim().length !== 0;
            }

            await updateProfile(authUser!, {
                displayName: name
            });
            if (authUser) {
                this.dispatch(updateName({
                    displayName: name,
                }));
            }
            this.navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.not.change.name"
            });
            alert(message);
        }
    }

    async updatePassword() {
        try {
            let isValidPassword: boolean = false;
            let password: string;
            while (!isValidPassword) {
                const message: string = this.intl.formatMessage({
                    id: "page.profile.enter.password"
                });
                password = prompt(message)!;
                const status = await validatePassword(auth, password);
                isValidPassword = status.isValid;
            }

            await updatePassword(authUser!, password!);
            this.navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.not.change.password"
            });
            alert(message);
        }
    }

    async updateEmail() {
        try {
            const message: string = this.intl.formatMessage({
                id: "page.profile.enter.email"
            });
            const email: string = prompt(message)!;
            await updateEmail(authUser!, email);
            if (authUser) {
                this.dispatch(updateMail({
                    email: email,
                }));
            }
            this.navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.not.change.email"
            });
            alert(message);
        }
    }

    async verifyEmail() {
        try {
            let authUser: User | null = auth.currentUser;
            const actionCodeSettings = {
                url: `http://localhost:3000/profile`,
                handleCodeInApp: true
            };

            await sendEmailVerification(authUser!, actionCodeSettings);
            // TODO: fix
            // await applyActionCode(auth, code);
            if (authUser) {
                this.dispatch(updateEmailVerified({
                    emailVerified: true,
                }));
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.send.verification"
            });
            alert(message);

            this.navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.not.send.verification"
            });
            alert(message);
        }
    }

    async handleRegister(name: string, email: string, password: string) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            this.dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken,
                displayName: name,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL,
            }));

            await updateProfile(auth.currentUser!, {
                displayName: name
            });

            await this.verifyEmail();

            this.navigate(`${APP_URL.ROOT}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            this.navigate(`${APP_URL.ERROR}`, {
                state: {
                    message: this.intl.formatMessage({
                        id: "message.503"
                    })
                }
            });
        }
    }

    async handleLogin(email: string, password: string) {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            this.dispatch(login({
                id: user.uid,
                accessToken: user.refreshToken || null,
                displayName: user.displayName || null,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL || null,
            }));

            if (!user.emailVerified) {
                this.navigate(`${APP_URL.PROFILE}`);
            } else {
                this.navigate(`${APP_URL.MAIN}`, { state: { name: user.displayName } });
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "message.401"
            });
            alert(message);
        }
    }
}
