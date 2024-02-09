import { AuthUserType, useAuth } from "../../hooks/useAuth";
import { FormattedMessage } from "react-intl";

export function HomePage() {
    const { displayName }: AuthUserType = useAuth()!;

    return <div>
        <h1>
            <FormattedMessage
                id="page.home.head"
                values={{ name: !!displayName && `${displayName}` }}
            />
        </h1>
    </div>
}
