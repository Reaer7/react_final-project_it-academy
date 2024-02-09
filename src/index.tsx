import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./components/App";
import { WrapperLanguage } from "./components/layouts/WrapperLanguage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <WrapperLanguage>
        <App />
    </WrapperLanguage>
);
