import React from "react";
import "./header.style.css"
import logo from "../../assets/images/Logo.png"

export default function Header () {
    return(
        <header className="nav-bar">
            <img src={logo} className="nav-logo" alt="logo"/>
            <ul>
                <a href={"/"}>
                <li className="nav-item">
                    Home
                </li>
                </a>
                <a href={"/"}>
                <li className="nav-item">
                    About
                </li>
                </a>
                <a href={"/"}>
                <li className="nav-item">
                    Experience
                </li>
                </a>
                <a href={"/"}>
                <li className="nav-item">
                    Work
                </li>
                </a>
                <a href={"/"}> 
                <li className="nav-item">
                    Contact
                </li>
                </a>
            </ul>
        </header>
    )
}
