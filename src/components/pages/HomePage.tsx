import { AuthUserType, useAuth } from "../../hooks/useAuth";

export function HomePage() {
    const { displayName }: AuthUserType = useAuth()!;

    return <div>
        <h1>Welcome {!!displayName && `${displayName}`}</h1>
    </div>
}
