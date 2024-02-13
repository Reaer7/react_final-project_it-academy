import { deleteUser, updateEmail, updatePassword, updateProfile, User, validatePassword, } from "firebase/auth";
import { auth } from "../../config/firebase";
import { FormattedMessage, useIntl } from "react-intl";
import { FormattedButton } from "../common/FormattedButton";
import { UserLogic } from "../util/UserLogic";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
} from "@mui/material";
import { APP_URL } from "./urls";
import { logout, updateMail, updateName } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";
import { FormEvent, forwardRef, ReactElement, Ref, useState } from "react";
import { TransitionProps } from '@mui/material/transitions';
import { CustomAlertSnackbar } from "../common/CustomAlertSnackbar";
import { FirebaseError } from "firebase/app";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function ProfilePage() {
    const dispatch = useStoreDispatch();
    const navigate = useNavigate();
    const intl = useIntl();
    const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState<boolean>(false);
    const [openChangeNameDialog, setOpenChangeNameDialog] = useState<boolean>(false);
    const [openChangePasswordDialog, setOpenChangePasswordDialog] = useState<boolean>(false);
    const [openChangeEmailDialog, setOpenChangeEmailDialog] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authUser: User | null = auth.currentUser;
    // const [authUser, setAuthUser] = useState<User | null>(auth.currentUser);
    const userLogic = new UserLogic();

    // useEffect(() => {
    //     if (auth.currentUser) {
    //         setAuthUser(auth.currentUser);
    //     }
    // }, [auth.currentUser]);

    async function updateUserName(name: string | null) {
        try {
            if (name === null || name.trim().length === 0) {
                setErrorMessage(intl.formatMessage({
                    id: "page.register.empty.textfield"
                }));
                setShowError(true);
                return;
            }

            await updateProfile(authUser!, { displayName: name });
            if (authUser) {
                dispatch(updateName({ displayName: name, }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            setErrorMessage(intl.formatMessage({
                id: "page.profile.not.change.name"
            }));
            setShowError(true);
        }
        setOpenChangeNameDialog(false);
    }

    async function updateUserPassword(password: string | null) {
        try {
            if (password === null || password.trim().length === 0) {
                setErrorMessage(intl.formatMessage({ id: "page.register.empty.textfield" }));
                setShowError(true);
                return;
            }
            const status = await validatePassword(auth, password);
            if (!status.isValid) {
                setErrorMessage(intl.formatMessage({ id: "page.register.weak.password" }));
                setShowError(true);
                return;
            }

            await updatePassword(authUser!, password!);
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if(error instanceof FirebaseError){
                if (error.code === "auth/requires-recent-login") {
                    setErrorMessage(intl.formatMessage({ id: "page.profile.conflict.email" }));
                }
            } else if (error instanceof Error) {
                console.log(error.message);
            }
            setErrorMessage(intl.formatMessage({ id: "page.profile.not.change.password" }));
            setShowError(true);
        }
        setOpenChangePasswordDialog(false);
    }

    async function updateUserEmail(email: string | null) {
        try {
            if (email === null || email.trim().length === 0) {
                setErrorMessage(intl.formatMessage({ id: "empty.input.field" }));
                setShowError(true);
                return;
            }

            await updateEmail(authUser!, email);
            if (authUser) {
                dispatch(updateMail({ email: email, }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            setErrorMessage(intl.formatMessage({ id: "page.profile.not.change.email" }));
            setShowError(true);
        }
        setOpenChangeEmailDialog(false);
    }

    async function dropUser() {
        try {
            if (authUser) {
                await deleteUser(authUser);
                dispatch(logout());
            }
            navigate(`${APP_URL.ROOT}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            setErrorMessage(intl.formatMessage({ id: "page.profile.not.delete.user" }));
            setShowError(true);
        }
    }

    return <Box sx={{ mt: 1 }}>
        {!authUser && <CircularProgress />}
        {authUser?.displayName && <p>
            <FormattedMessage
                id="page.profile.name"
                values={{ name: authUser.displayName }}
            />
        </p>}
        {authUser?.email && <p>
            <FormattedMessage
                id="page.profile.email"
                values={{
                    sup: (<sup>{!!authUser?.emailVerified
                        ? <CheckCircleOutlineRoundedIcon />
                        : <BlockRoundedIcon />
                    }</sup>),
                    email: authUser?.email
                }}
            />
        </p>}
        {!!authUser
            ? <div className="profile-content">
                <FormattedButton
                    messageId={"page.profile.change.name"}
                    clickHandler={() => setOpenChangeNameDialog(true)}
                />
                <FormattedButton
                    messageId={"page.profile.change.password"}
                    clickHandler={() => setOpenChangePasswordDialog(true)}
                />
                <FormattedButton
                    messageId={"page.profile.change.email"}
                    clickHandler={() => setOpenChangeEmailDialog(true)}
                />
                {!authUser?.emailVerified && <FormattedButton
                    messageId={"page.profile.verify.email"}
                    clickHandler={() => userLogic.verifyEmail()}
                />}
                <div style={{ justifyContent: "normal" }}>
                    <hr />
                </div>
                <FormattedButton
                    messageId={"page.profile.delete.user"}
                    color="error"
                    clickHandler={() => setOpenDeleteUserDialog(true)}
                />
            </div>
            : <></>
        }
        <Dialog
            open={openChangeNameDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenChangeNameDialog(false)}
            PaperProps={{
                component: 'form',
                onSubmit: (event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const data = new FormData(event.currentTarget);
                    updateUserName(data.get('name')?.toString() ?? null);
                },
            }}
        >
            <DialogTitle>
                {intl.formatMessage({ id: "page.profile.enter.name" })}
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    id="name"
                    name="name"
                    label={intl.formatMessage({ id: "text.name" })}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit">
                    {intl.formatMessage({ id: "text.confirm" })}
                </Button>
                <Button onClick={() => setOpenChangeNameDialog(false)}>
                    {intl.formatMessage({ id: "text.cancel" })}
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={openChangePasswordDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenChangePasswordDialog(false)}
            PaperProps={{
                component: 'form',
                onSubmit: (event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const data = new FormData(event.currentTarget);
                    updateUserPassword(data.get('password')?.toString() ?? null);
                },
            }}
        >
            <DialogTitle>
                {intl.formatMessage({ id: "page.profile.enter.password" })}
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    id="password"
                    name="password"
                    label={intl.formatMessage({ id: "text.password" })}
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit">
                    {intl.formatMessage({ id: "text.confirm" })}
                </Button>
                <Button onClick={() => setOpenChangePasswordDialog(false)}>
                    {intl.formatMessage({ id: "text.cancel" })}
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={openChangeEmailDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenChangeEmailDialog(false)}
            PaperProps={{
                component: 'form',
                onSubmit: (event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const data = new FormData(event.currentTarget);
                    updateUserEmail(data.get('email')?.toString() ?? null);
                },
            }}
        >
            <DialogTitle>
                {intl.formatMessage({ id: "page.profile.enter.email" })}
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    id="email"
                    name="email"
                    label={intl.formatMessage({ id: "text.email" })}
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit">
                    {intl.formatMessage({ id: "text.confirm" })}
                </Button>
                <Button onClick={() => setOpenChangeEmailDialog(false)}>
                    {intl.formatMessage({ id: "text.cancel" })}
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={openDeleteUserDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenDeleteUserDialog(false)}
        >
            <DialogTitle>
                {intl.formatMessage({ id: "page.profile.delete.user" }) + "?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={dropUser}>
                    {intl.formatMessage({ id: "text.yes" })}
                </Button>
                <Button onClick={() => setOpenDeleteUserDialog(false)}>
                    {intl.formatMessage({ id: "text.no" })}
                </Button>
            </DialogActions>
        </Dialog>
        <CustomAlertSnackbar
            showSnackbar={showError}
            setShowSnackbar={setShowError}
            message={errorMessage}
        />
    </Box>
}
