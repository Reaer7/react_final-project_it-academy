import { FormattedMessage } from "react-intl";

type ButtonType = {
    messageId: string,
    clickHandler: () => Promise<void>
}

export function FormattedButton({ messageId, clickHandler }: ButtonType) {
    return <button className="profile-button" onClick={clickHandler}>
        <FormattedMessage
            id={messageId}
        />
    </button>
}