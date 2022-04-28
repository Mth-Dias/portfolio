import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion';


export default function About () {
    
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const cursorVariant = "default";
    
    
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

    return(
        <>Opaaaaaaaaaa
        <motion.div
                 className='cursor'
                 variants={variants}
                 animate={cursorVariant}
        />
        </>
    )
}