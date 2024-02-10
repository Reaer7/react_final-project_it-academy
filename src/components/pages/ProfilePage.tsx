import {
    sendEmailVerification,
    updateEmail,
    updatePassword,
    updateProfile,
    User,
    validatePassword,
    // applyActionCode,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { updateEmailVerified, updateMail, updateName } from "../../store/auth";
import { APP_URL } from "./urls";
import { useNavigate } from "react-router-dom";
// import ReactDOMServer from 'react-dom/server'
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { FormattedMessage } from "react-intl";
import { FormattedButton } from "../common/FormattedButton";

export function ProfilePage() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const authUser: User | null = auth.currentUser;

    async function updateUserName() {
        try {
            let isValidName: boolean = false;
            let name: string = '';
            while (!isValidName) {
                /*TODO: fix
                console.log("before")
                const message: string = ReactDOMServer.renderToString(
                    <FormattedMessage
                        id="page.profile.enter.name"
                    />
                );
                console.log("message", message)

                name = prompt(message)!;
                console.log("after")*/

                name = prompt("Enter your name")!;
                isValidName = name !== null && name.trim().length !== 0;
            }

            await updateProfile(authUser!, {
                displayName: name
            });
            if (authUser) {
                dispatch(updateName({
                    displayName: name,
                }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            alert("Cannot update user name!");
        }
    }

    async function updateUserPassword() {
        try {
            let isValidPassword: boolean = false;
            let password: string;
            while (!isValidPassword) {
                password = prompt("Enter your new password...")!;
                const status = await validatePassword(auth, password);
                isValidPassword = status.isValid;
            }

            await updatePassword(authUser!, password!);
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            alert("Cannot update user password!");
        }
    }

    async function updateUserEmail() {
        try {
            const email: string = prompt("Enter your new email...")!;
            await updateEmail(authUser!, email);
            if (authUser) {
                dispatch(updateMail({
                    email: email,
                }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            alert("Cannot update user email!");
        }
    }

    async function verifyUserEmail() {
        try {
            const actionCodeSettings = {
                url: `https://localhost:3000/?email=${authUser!.email}`,
                handleCodeInApp: true
            };

            await sendEmailVerification(authUser!, actionCodeSettings);
            // TODO: await applyActionCode(auth, code);
            if (authUser) {
                dispatch(updateEmailVerified({
                    emailVerified: true,
                }));
            }
            /*TODO: fix
            alert(<FormattedMessage
                id="page.profile.send.verification"
            />);*/
            alert("На ваш email отправлено письмо для верификации");

            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            /*TODO: fix
            alert(<FormattedMessage
                id="page.profile.not.send.verification"
            />);*/
            alert("Сбой при отправке верификационного письма. Попробуйте еще раз");
        }
    }

    return <div>
        {authUser?.displayName && <p>
			<FormattedMessage
				id="page.profile.name"
				values={{ name: authUser.displayName }}
			/>
		</p>}
        <p>
            <FormattedMessage
                id="page.profile.email"
                values={{ email: authUser?.email }}
            />
        </p>
        {authUser?.emailVerified && <p>
			<FormattedMessage
				id="page.profile.isverified"
			/>
		</p>}
        {!!authUser
            ? <div className="profile-content">
                <FormattedButton
                    messageId={"page.profile.change.name"}
                    clickHandler={updateUserName}
                />
                <FormattedButton
                    messageId={"page.profile.change.password"}
                    clickHandler={updateUserPassword}
                />
                <FormattedButton
                    messageId={"page.profile.change.email"}
                    clickHandler={updateUserEmail}
                />
                {!authUser?.emailVerified && <FormattedButton
					messageId={"page.profile.verify.email"}
					clickHandler={verifyUserEmail}
				/>}
            </div>
            : <></>
        }
    </div>
}
