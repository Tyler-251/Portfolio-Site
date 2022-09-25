import React from "react"
import ReactDOM from "react-dom/client"
import { AppHeader } from "./components/AppHeader.js"
import { NavBar } from "./components/NavBar.js"
import { AboutMain } from "./components/AboutMain.js"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <AppHeader />
        <NavBar />
        <p>information</p>
    </div>
);

