// #region imports
import React, { useState } from "react"
import IFrame from "react-iframe"
import portrait from "../img/portrait.png"
import Typical from "react-typical"
import { wait } from "@testing-library/user-event/dist/utils";
// #endregion
export const HomeMain = (props) => {
    const [line, setLine] = useState(1);
    //setTimeout(setLine(2), 5000);
    return (
        <div class="main">
            <div class="bar homebar"/>
            <div class="home-main">
                <Typical
                    steps={['>', 1000,
                    '> Hi!', 1000,
                    '> Hi! Welcome to my page', 3000,
                    '> Hi! Welcome to my page :)', 1000]}
                    loop={1}
                    wrapper="h1"
                />
                <div class="p-space"/>
                <Typical
                    steps={['', 5000,
                    '> I\'m a coder XD', 1000
                    ]}
                    loop={1}
                    wrapper="h1"
                />
            </div>
            <div class="bar homebar"/>
            <div id="home-carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block" src={portrait} alt="First slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};