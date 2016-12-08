import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CSS from "./scss/main.scss";

const runApp = () => {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById("app")
    );
};

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', runApp);
} else {
    window.attachEvent('onload', runApp);
}