import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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

root.render(
    <div>
        <Router>
            <AppHeader />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeMain/>}/>
                <Route path="/projects" element={<ProjectsMain/>}/>
                <Route path="/info" element={<InfoMain/>}/>
                <Route path="/about" element={<AboutMain/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
            <Footer />
        </Router>
    </div>
);

