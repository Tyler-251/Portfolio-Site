import React from "react"
import { FlyingText } from "./FlyingText"
import { InitFlyingText } from "./InitFlyingText"
import {animated} from "react-spring"


export const AppHeader = () => {
    return (
        <div class="headerdiv">
            <a href="/">Tyler Russell</a>
            {InitFlyingText("Welcome to my site,", 0, 10)}
            {InitFlyingText("stick around", -5, 30)}
            {InitFlyingText("and enjoy!", -10, 50)}
            {FlyingText("PYTHON")}
            {FlyingText("PYTHON")}
            {FlyingText("HTML")}
            {FlyingText("HTML")}
            {FlyingText("REACT")}
            {FlyingText("REACT")}
            {FlyingText("CSS")}
            {FlyingText("C++")}
            {FlyingText("C++")}
            {FlyingText("UI/UX")}
            {FlyingText("UNITY")}
            {FlyingText("UNITY ENGINE")}
            {FlyingText("BOOTSTRAP")}
            {FlyingText("GRAPHIC DESIGN")}
            {FlyingText("JAVASCRIPT")}
            {FlyingText("JAVASCRIPT")}
            {FlyingText("<>")} 
            {FlyingText("</>")}                                 
        </div>        
    );
};
