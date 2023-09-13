import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import {BrowserRouter} from "react-router-dom";

ReactGA.initialize("G-BP8VQ0SWCS");

ReactDOM.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
    document.getElementById('root')
);

const SendAnalytics = ()=> {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
