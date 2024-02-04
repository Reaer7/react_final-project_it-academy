import { Link } from "react-router-dom";

export function Header() {
    return <header className="header">
        <nav>
            <Link className="nav-link" to='/'>Root</Link>
            <Link className="nav-link" to='/home'>Home</Link>
            <Link className="nav-link" to='/login'>Login</Link>
            <Link className="nav-link" to='/register'>Register</Link>
            |
            <Link className="nav-link" to='/ui/bootstrap'>Bootstrap</Link>
            <Link className="nav-link" to='/ui/blueprint'>Blueprint</Link>
            <Link className="nav-link" to='/ui/antd'>AntDesign</Link>
            <Link className="nav-link" to='/ui/mui'>MaterialUI</Link>
        </nav>
    </header>;
}