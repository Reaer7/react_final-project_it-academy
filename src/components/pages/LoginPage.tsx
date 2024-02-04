import { Link } from 'react-router-dom';
import { Login } from '../common/Login';
import { APP_URL } from "../App";

export function LoginPage() {
    return <div>
        <h1>Login</h1>
        <Login />
        <p>
            Or <Link to={APP_URL.REGISTER}>register</Link>
        </p>
    </div>
}