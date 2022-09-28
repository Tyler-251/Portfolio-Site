// #region imports
import React from "react"
import poop from "../img/purpleguy.gif"

// #endregion
export const Error = (props) => {
    return (
        <div class="main">
            <div class="errormain row">
                <div class="col-sm-12 col-md-6">
                    <h1>Hrng!</h1>
                    <h4>The page you're looking for doesn't exist!</h4>  
                    <h4>You can stay here and boogie with this guy if you want.</h4>                  
                </div>
                <div class="col-sm-12 col-md-6">
                    <img src={poop} alt="Dancing purple guy" />
                </div>
            </div>
        </div>
    );
};