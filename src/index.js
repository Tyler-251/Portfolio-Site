import React from "react"
import ReactDOM from "react-dom/client"
import { AppHeader } from "./components/AppHeader.js"
import { NavBar } from "./components/NavBar.js"
import { AboutMain } from "./components/AboutMain.js"
import { InfoMain } from "./components/InfoMain.js"
import { HomeMain } from "./components/HomeMain.js"
import { ProjectsMain } from "./components/ProjectsMain.js"
import { Footer } from "./components/Footer.js"
import { Error } from "./components/Error.js"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

let MainDiv;
switch (window.location.pathname) {
    case "/":
        MainDiv = HomeMain;
        break;
    case "/info":
        MainDiv = InfoMain;
        break;
    case "/projects":
        MainDiv = ProjectsMain;
        break;
    case "/about":
        MainDiv = AboutMain;
        break;
    default:
        MainDiv = Error;

}

root.render(
    <div>
        <AppHeader />
        <NavBar />
        <MainDiv />
        <Footer />
    </div>
);

