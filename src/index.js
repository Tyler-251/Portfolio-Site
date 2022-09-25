import React from "react"
import ReactDOM from "react-dom/client"
import { AppHeader } from "./components/AppHeader.js"
import { NavBar } from "./components/NavBar.js"
import { AboutMain } from "./components/AboutMain.js"
import { InfoMain } from "./components/InfoMain.js"
import { Error } from "./components/Error.js"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

let MainDiv;
switch (window.location.pathname) {
    case "/":
        MainDiv = AboutMain;
        break;
    case "/info":
        MainDiv = InfoMain;
        break;
    default:
        MainDiv = Error;

}

root.render(
    <div>
        <AppHeader />
        <NavBar />
        <MainDiv />
    </div>
);

