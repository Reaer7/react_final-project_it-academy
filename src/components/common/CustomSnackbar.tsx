import { Snackbar } from "@mui/material";

type SnackBarProps = {
    showSnackbar: boolean;
    setShowSnackbar: (showSnackbar: boolean) => void;
    children: any
}

export function CustomSnackbar({ children, setShowSnackbar, showSnackbar }: SnackBarProps) {
    return <Snackbar
        autoHideDuration={2000}
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        {children}
    </Snackbar>
}