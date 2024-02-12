import { Snackbar } from "@mui/material";

type SnackBarProps = {
    showSnackbar: boolean;
    setShowSnackbar: (showSnackbar: boolean) => void;
    children: any,
    autoHideDuration?: number
}

export function CustomSnackbar({ children, setShowSnackbar, showSnackbar, autoHideDuration }: SnackBarProps) {
    return <Snackbar
        autoHideDuration={autoHideDuration}
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        {children}
    </Snackbar>
}