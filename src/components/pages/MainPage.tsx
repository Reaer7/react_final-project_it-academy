import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { FormattedMessage } from "react-intl";

export function MainPage() {
    const { displayName }: AuthUserType = useAuth()!;

    return <div className="content-container">
        <h3>
            <FormattedMessage
                id="page.home.head"
                values={{ name: !!displayName && `${displayName}` }}
            />
        </h3>
    </div>
}
