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
    DialogContentText,
    DialogTitle,
    Slide,
} from "@mui/material";
import { APP_URL } from "./urls";
import { logout, updateMail, updateName } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { useNavigate } from "react-router-dom";
import { forwardRef, ReactElement, Ref, useState } from "react";
import { TransitionProps } from '@mui/material/transitions';

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
    const authUser: User | null = auth.currentUser;
    const userLogic = new UserLogic();

    async function updateUserName() {
        try {
            let isValidName: boolean = false;
            let name: string = '';
            while (!isValidName) {
                const message: string = intl.formatMessage({
                    id: "page.profile.enter.name"
                });
                // https://mui.com/material-ui/react-dialog/#form-dialogs
                name = prompt(message)!;
                isValidName = name !== null && name.trim().length !== 0;
            }

            await updateProfile(authUser!, {
                displayName: name
            });
            if (authUser) {
                dispatch(updateName({
                    displayName: name,
                }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = intl.formatMessage({
                id: "page.profile.not.change.name"
            });
            throw Error(message);
        }
    }

    async function updateUserPassword() {
        try {
            let isValidPassword: boolean = false;
            let password: string;
            while (!isValidPassword) {
                const message: string = intl.formatMessage({
                    id: "page.profile.enter.password"
                });
                password = prompt(message)!;
                const status = await validatePassword(auth, password);
                isValidPassword = status.isValid;
            }

            await updatePassword(authUser!, password!);
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = intl.formatMessage({
                id: "page.profile.not.change.password"
            });
            throw Error(message);
        }
    }

    async function updateUserEmail() {
        try {
            const message: string = intl.formatMessage({
                id: "page.profile.enter.email"
            });
            const email: string = prompt(message)!;
            await updateEmail(authUser!, email);
            if (authUser) {
                dispatch(updateMail({
                    email: email,
                }));
            }
            navigate(`${APP_URL.PROFILE}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            const message: string = intl.formatMessage({
                id: "page.profile.not.change.email"
            });
            throw Error(message);
        }
    }

    const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState<boolean>(false);

    function handleOpenDeleteUserDialog() {
        setOpenDeleteUserDialog(true);
    }

    function handleCloseDeleteUserDialog() {
        setOpenDeleteUserDialog(false);
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
            const message: string = intl.formatMessage({
                id: "page.profile.not.delete.user"
            });
            throw Error(message);
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
                    clickHandler={() => updateUserName()}
                />
                <FormattedButton
                    messageId={"page.profile.change.password"}
                    clickHandler={() => updateUserPassword()}
                />
                <FormattedButton
                    messageId={"page.profile.change.email"}
                    clickHandler={() => updateUserEmail()}
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
                    clickHandler={() => handleOpenDeleteUserDialog()}
                />
            </div>
            : <></>
        }
        <Dialog
            open={openDeleteUserDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDeleteUserDialog}
        >
            <DialogTitle>
                {intl.formatMessage({ id: "page.profile.delete.user" }) + "?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={dropUser}>
                    {intl.formatMessage({ id: "text.yes" })}
                </Button>
                <Button onClick={handleCloseDeleteUserDialog}>
                    {intl.formatMessage({ id: "text.no" })}
                </Button>
            </DialogActions>
        </Dialog>
    </Box>
}
