import { Link } from "react-router-dom";

export function Footer() {
    return <footer className="footer">
        <div className="container">
            <img
                className="logo"
                alt="logo"
                src={require("../../images/vflm-logo.png")}
            />
            <div
                className="footer-text"
            >
                <span>
                    {`2009 - ${new Date().getFullYear()} © `}
                    <Link className="footer-link" to="https://iisus.by">iisus.by</Link>
                    {" - Церковь «Вифлеем» Союза Евангельских Христиан Баптистов,"}
                </span>
                <div>
                    {" г. Минск, ул. Горецкого, 93, 220019, Республика Беларусь"}
                </div>
            </div>
            <div className="nav-link signout" />
        </div>
    </footer>
}