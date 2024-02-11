import { sendEmailVerification, User } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useIntl } from "react-intl";

export class UserLogic {
    intl = useIntl();

    async verifyEmail() {
        try {
            const authUser: User | null = auth.currentUser;

            const actionCodeSettings = {
                url: `http://localhost:3000/profile`,
                handleCodeInApp: true
            };

            await sendEmailVerification(authUser!, actionCodeSettings);
            // TODO: fix, if it needed
            // await applyActionCode(auth, code);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = this.intl.formatMessage({
                id: "page.profile.not.send.verification"
            });
            throw Error(message);
        }
    }
}
