import React from "react";
import "./footer.style.css"

import LinkedinLogo from "../../assets/images/linkedin.png"

export default function Footer () {

    return(
        <footer>
            <p className="footer-text">Built with React.js</p>
            <a href="https://www.linkedin.com/in/matheus-dias-158547185/">
            <img className="linkedin-logo" src={LinkedinLogo} alt="Linkedin-Logo"></img>
            </a>
        </footer>
    )
}