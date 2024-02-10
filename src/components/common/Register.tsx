import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { UserLogic } from "../util/UserLogic";

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogic = new UserLogic();

    //TODO: change to Form
    return <>
        <div className="form">
            <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
            />
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button
                className="form-button"
                onClick={() => userLogic.handleRegister(name, email, password)}
            >
                {<FormattedMessage
                    id="page.register.message"
                />}
            </button>
        </div>
        <SignInWithGoogle />
    </>
}
