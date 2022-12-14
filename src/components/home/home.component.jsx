import React, {useEffect, useState} from "react";
import { motion } from 'framer-motion';

import "./home.style.css"

import ProfilePic from "../../assets/images/react.png"
import LogoUnderlined from "../../assets/images/LogoUnderline.png"

export default function Home () {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(200, 200, 200)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

    return(
        <section id="home">
          <div className="fadein-logo">
            <img onMouseEnter={textEnter} onMouseLeave={textLeave} src={ProfilePic} alt="Foto Matheus Dias" className="profile-pic"/>
          </div>
          <div>
            <img onMouseEnter={textEnter} onMouseLeave={textLeave} src={LogoUnderlined} alt="Logotipo" className="logo-underlined"/>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="subtitle">Front-end Developer</p>
          </div>
          <motion.div
                 className='cursor'
                 variants={variants}
                 animate={cursorVariant}
          />
        </section>
    )
}