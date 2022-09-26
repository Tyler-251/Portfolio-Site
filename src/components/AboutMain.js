// #region imports
import React from "react"
import IFrame from "react-iframe"

import insta from "../img/insta.png"
import linked from "../img/linked.png"
import github from "../img/github.png"
import email from "../img/email.png"
import me from "../img/me.png"
// #endregion
export const AboutMain = (props) => {
    return (
        <div class="main">
            <div class="bar aboutbar"/>
            <div class="about-header">
                <h1>About Me:</h1>
                <div class="link-logos">
                    <a target="_blank" class="link-logo" href="https://www.instagram.com/tyler.hat/"><img class="mx-auto d-block" src={insta} alt="Instagram Logo"/></a>
                    <a target="_blank" class="link-logo" href="https://www.linkedin.com/in/tyler-russell251/"><img class="mx-auto d-block" src={linked} alt="LinkedIn Logo"/></a>
                    <a target="_blank" class="link-logo" href="https://github.com/Tyler-251"><img class="mx-auto d-block" src={github} alt="GitHub Logo"/></a>
                    <a target="_blank" class="link-logo" href="mailto:tyler.wayne2002+fromwebsite@hotmail.com"><img class="mx-auto d-block" src={email} alt="Email Logo"/></a>
                </div>
            </div>
            <div class="bar aboutbar"/>
            <div class="about-main row">
                <div class="col-sm-12 col-md-6">
                    <img src={me} alt="A Picture of Me"/>
                </div>
                <div class="col-sm-12 col-md-6">
                    <p>
                        <pre/><strong class="text-lead">&nbsp; &nbsp; Hi!</strong> My name's Tyler Russell and I'm currently a
                        student at Missouri State University pursuing a degree in Computer Science. My main
                        hobbies include skydiving, deep-sea scuba-diving, and none of the aforementioned. My real 
                        hobbies are actually game-design and music. I've played trumpet for years and started
                        piano during the pandemic. I love all things jazz, and my favorite artist over the years
                        has been Dizzy Gillespie. <br/>
                            <div class="p-space"/>
                        &nbsp; &nbsp; &nbsp; I've always been interested in learning design programs. When I was 
                        in middle school, I began messing around with Adobe programs such as PhotoShop, Premiere Pro,
                        and Illustrator. I then graduated to working with more 3D design workspaces such as Unity Engine
                        and Blender. Throughout high-school, I slowly began to learn the basics of C# which served as the 
                        groundwork for my collegiate studies in Computer Science. A lot of my personal studies have gone 
                        into graphic design within the spaces of video games, web pages and logos.
                            <div class="p-space"/>
                        &nbsp; &nbsp; &nbsp; Music has always been a huge part of my life, and with my interest in programs,
                        dabbling in songwriting was inevitable. I started using FL Studio and graduated to Ableton Live,
                        where I was able to make most of my projects. While my knowledge in music theory is far from none, 
                        I do find it hard to get material ready and good enough to publish. I'm surrounded by millions of 
                        incomplete projects, and I don't think that will ever change.
                    </p>
                        
                    <div class="song">
                        <h4>A song that I love:</h4>
                        <IFrame
                            style="border-radius:12px"
                            src="https://open.spotify.com/embed/track/6xEHCWUvalb0fNYuAo591v?utm_source=generator&theme=0" 
                            width="100%" 
                            height="80" 
                            frameBorder="0" 
                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            class="iframe"
                        />
                    </div>
                </div>  
            </div>
        </div>
    );
};