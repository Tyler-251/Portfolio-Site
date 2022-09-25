// #region imports
import React from "react"
import poop from "../img/poop.png"

// #endregion
export const Error = (props) => {
    return (
        <div class="main">
            <div class="errormain">
                <h1>Uh oh!</h1>
                <h4>The page you're looking for doesn't exist!</h4>
                <img src={poop} alt="Poop emoji" />
            </div>
        </div>
    );
};