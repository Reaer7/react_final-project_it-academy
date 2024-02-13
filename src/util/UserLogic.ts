import { sendEmailVerification, User } from "firebase/auth";
import { auth } from "../config/firebase";
import { useIntl } from "react-intl";
import { APP_URL } from "../components/pages/urls";
import { useNavigate } from "react-router-dom";

export class UserLogic {
    navigate = useNavigate();
    intl = useIntl();

    async verifyEmail() {
        try {
            const authUser: User | null = auth.currentUser;

            const actionCodeSettings = {
                url: `${process.env.REACT_APP_BASE_URL}/profile`,
                handleCodeInApp: true
            };

            await sendEmailVerification(authUser!, actionCodeSettings);
            // TODO: fix, if it needed
            // await applyActionCode(auth, code);

            this.navigate(`${APP_URL.ROOT}`, {
                state: {
                    isShowNotification: true
                }
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            this.navigate(`${APP_URL.ERROR}`, {
                state: {
                    message: this.intl.formatMessage({ id: "page.profile.not.send.verification" })
                }
            });
        }
    }
}
