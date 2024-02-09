import { Link } from 'react-router-dom';
import { Register } from '../common/Register';
import { APP_URL } from "./urls";

export function RegisterPage() {
    return <div>
        <h1>Register</h1>
        <Register />
        <p>
            Already have an account? <Link to={APP_URL.LOGIN}>Sign in</Link>
        </p>
    </div>
}
