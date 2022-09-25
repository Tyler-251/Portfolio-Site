import React from "react"

export const NavBar = () => {
    return (
        <nav class="navbar navbar-toggleable">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar" />                       
                </div>
                <div class="collapse navbar-collapse show" id="myNavbar">
                    <div class="navbar nav">
                        <a class="col-md-3 col-sm-6 text-center" href="./">Home</a>
                        <a class="col-md-3 col-sm-6 text-center alt-nav" href="./projects">Projects</a>
                        <a class="col-md-3 col-sm-6 text-center" href="./info">Information</a>
                        <a class="col-md-3 col-sm-6 text-center alt-nav" href="./about">About</a>           
                    </div>
                </div>
            </div>
        </nav>
    );
};