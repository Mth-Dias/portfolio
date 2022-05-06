import React from "react";

import "./header.style.css"

import logo from "../../assets/images/Logo.svg"

export default function Header () {
    return(
        <header className="nav-bar">
            <img src={logo} className="nav-logo" alt="logo"/>
            <ul id="desktop-menu">
                <a href={"/"}>
                <li className="nav-item link">
                    Home
                </li>
                </a>
                <li className="nav-item deact">
                    About
                </li>
                <li className="nav-item deact">
                    Experience
                </li>
                <li className="nav-item deact">
                    Work
                </li>
                <li className="nav-item deact">
                    Contact
                </li>
            </ul>
            <ul className="mobile-menu">

            </ul>

        </header>
    )
}
