import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./utils/router/AppRouter";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </React.StrictMode>
    );

reportWebVitals();
