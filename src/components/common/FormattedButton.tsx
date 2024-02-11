import { Button } from "@mui/material";
import { FormattedMessage } from "react-intl";

type ButtonType = {
    messageId: string,
    clickHandler: (() => Promise<void>) | (() => void),
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning",
}

export function FormattedButton({ messageId, clickHandler, color }: ButtonType) {
    return <Button
        variant="text"
        color={color ? color : "primary"}
        className="profile-button"
        onClick={clickHandler}
    >
        <FormattedMessage
            id={messageId}
        />
    </Button>
}