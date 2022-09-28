// #region imports
import React, { useState, useEffect } from "react"
import portrait from "../img/horsepic.jpg"
import Typical from "react-typical";
// #endregion
export const HomeMain = (props) => {

    return (
        <div class="main">
            <div class="home-main">
                <div class="content">
                    <Typical
                        steps={['', 1000, 'Hi!', 1000, 'Hi! I\'m Tyler', 500]}
                        loop={1}
                        wrapper="h1"
                    />
                    <img src={portrait}/>
                </div>
            </div>
            <div class="home-desc">
                <h4>Student at <strong>Missouri State University</strong></h4>
                <h4>Studying Computer Science</h4>
                <h4>Take a look at my <a href="/projects">projects</a>, <a href="/info">resume</a>, or <a href="/about">learn more about me</a>.</h4>
            </div>
        </div>
    );
};