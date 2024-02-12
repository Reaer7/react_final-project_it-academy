import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { auth } from "../../config/firebase";
import { login } from "../../store/auth";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { User } from "firebase/auth";

export type ContentPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement>;
type FirebaseUser = User | null;

export function AuthStateContainer({ children }: ContentPropsType) {
    const dispatch = useStoreDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user: FirebaseUser) => {
            if (user) {
                dispatch(login({
                    id: user.uid,
                    accessToken: user.refreshToken || null,
                    displayName: user.displayName || null,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoUrl: user.photoURL || null,
                }));
            }
        });
    }, [dispatch])

    return <div className="content">
        {children}
    </div>
}