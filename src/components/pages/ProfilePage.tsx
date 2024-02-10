import { User, } from "firebase/auth";
import { auth } from "../../config/firebase";
import { FormattedMessage } from "react-intl";
import { FormattedButton } from "../common/FormattedButton";
import { UserLogic } from "../util/UserLogic";

export function ProfilePage() {
    const authUser: User | null = auth.currentUser;
    const userLogic = new UserLogic();

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
                    clickHandler={() => userLogic.updateName()}
                />
                <FormattedButton
                    messageId={"page.profile.change.password"}
                    clickHandler={() => userLogic.updatePassword()}
                />
                <FormattedButton
                    messageId={"page.profile.change.email"}
                    clickHandler={() => userLogic.updateEmail()}
                />
                {!authUser?.emailVerified && <FormattedButton
					messageId={"page.profile.verify.email"}
					clickHandler={() => userLogic.verifyEmail()}
				/>}
            </div>
            : <></>
        }
    </div>
}
