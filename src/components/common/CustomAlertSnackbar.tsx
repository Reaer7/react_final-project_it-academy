import { Alert, Snackbar } from "@mui/material";

type SnackBarProps = Readonly<{
    showSnackbar: boolean;
    setShowSnackbar: (showSnackbar: boolean) => void;
    message: string,
    autoHideDuration?: number,
    severity?: "error" | "info" | "success" | "warning"
}>

export function CustomAlertSnackbar({ showSnackbar, setShowSnackbar, message, autoHideDuration, severity }: SnackBarProps) {
    return <Snackbar
        autoHideDuration={autoHideDuration ?? 2000}
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <Alert variant="filled" severity={severity ?? "error"}>
            <span>{message}</span>
        </Alert>
    </Snackbar>
}