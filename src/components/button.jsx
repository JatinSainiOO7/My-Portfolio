import "../styles/global.scss";
import { useState } from "react";

// Import your SVG assets
import github from '../assets/svg/githubWhite.svg';
import figma from '../assets/svg/figma.svg';
import p5 from '../assets/svg/p5.svg';
import python from '../assets/svg/python.svg';
import react from '../assets/svg/react.svg';
import scss from '../assets/svg/scss.svg';
import tailwind from '../assets/svg/tailwind.svg';
import three from '../assets/svg/three.svg';
import vs from '../assets/svg/vs.svg';
import vscode from '../assets/svg/vscode.svg';
import webstrom from '../assets/svg/webstrom.svg'

const ButtonComponent = () => {
  const TechButtons = [
    {
      name: "GitHub",
      link: "https://github.com",
      img: github,  // Corrected here
    },
    {
      name: "Figma",
      link: "https://www.figma.com",
      img: figma,   // Corrected here
    },
    {
      name: "P5.js",
      link: "https://p5js.org",
      img: p5,      // Corrected here
    },
    {
      name: "Python",
      link: "https://www.python.org/",
      img: python,  // Corrected here
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      img: react,   // Corrected here
    },
    {
      name: "SCSS",
      link: "https://sass-lang.com/",
      img: scss,    // Corrected here
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      img: tailwind, // Corrected here
    },
    {
      name: "Visual Studio",
      link: "https://code.visualstudio.com/",
      img: vs,      // Corrected here
    },
    {
      name: "webstrom",
      link: "https://code.visualstudio.com/",
      img: webstrom,      // Corrected here
    },
    {
      name: "vs Code",
      link: "https://code.visualstudio.com/",
      img: vscode,      // Corrected here
    },
    {
      name: "Three.js",
      link: "https://code.visualstudio.com/",
      img: three,      // Corrected here
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState("");

  const handleMouseEnter = (img) => {
    setCurrentImage(img);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImage("");
  };

  const handleMouseMove = (e) => {
    // Capture the mouse coordinates
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      className="tech_buttons"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {TechButtons.map((button, index) => (
        <a key={index} href={button.link} className="tech-button" onMouseEnter={() => handleMouseEnter(button.img)}>
          {button.name}
        </a>
      ))}

      {/* The pop-up container with image appears on hover at the pointer's position */}
      {isHovered && currentImage && (
        <div
          className="popup-container"
          style={{
            top: mousePosition.y - 220 + "px",
            left: mousePosition.x - 100 + "px",
          }}
        >
          <img src={currentImage} alt="Related technology" className="popup-image" /> {/* Added alt attribute */}
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
