import { useState } from 'react';

interface FormPropsType {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

export function Form({title, handleClick}: FormPropsType) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
        />
        <button onClick={() => handleClick(email, password)}>
            {title}
        </button>
    </div>
}
