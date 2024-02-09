import { FormattedMessage } from "react-intl";
import { APP_URL } from "./urls";

export function RootPage() {
    return <div>
        <h1>
            <FormattedMessage
                id="page.root.head"
            />
        </h1>
        <p>
            <FormattedMessage
                id="page.root.description"
                values={{ link: APP_URL.HOME }}
            />
        </p>
    </div>
}