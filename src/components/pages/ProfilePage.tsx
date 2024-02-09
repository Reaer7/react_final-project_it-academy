import {
    sendEmailVerification,
    updateEmail,
    updatePassword,
    updateProfile,
    User,
    validatePassword,
    applyActionCode,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { updateEmailVerified, updateMail, updateName } from "../../store/auth";
import { APP_URL } from "./urls";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";

export function ProfilePage() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const authUser: User | null = auth.currentUser;

    async function updateUserName() {
        try {
            let isValidName: boolean = false;
            let name: string = '';
            while (!isValidName) {
                name = prompt("Enter your new name...")!;
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
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            alert("Cannot update user email verified!");
        }
    }

    return <div>
        {authUser?.displayName && <p>
			<strong>Name:</strong> {authUser.displayName}
		</p>}
        <p>
            <strong>Email:</strong> {authUser?.email}
        </p>
        {authUser?.emailVerified && <p>
			<strong>Email verified:</strong> {authUser.emailVerified}
		</p>}
        {!!authUser
            ? <div className="profile-content">
                <button className="profile-button" onClick={updateUserName}>
                    Change name
                </button>
                <button className="profile-button" onClick={updateUserPassword}>
                    Change password
                </button>
                <button className="profile-button" onClick={updateUserEmail}>
                    Change email
                </button>
                <button className="profile-button" onClick={verifyUserEmail}>
                    Verify email
                </button>
            </div>
            : <></>
        }
    </div>
}
