import "../styles/global.scss";
import { useState } from "react";

const buttonComponent = () => {

  const TechButtons = [
    { name: "Github", link: "https://github.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Figma", link: "https://www.figma.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "P5.js", link: "https://p5js.org", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Python", link: "https://www.python.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "React", link: "https://reactjs.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "SCSS", link: "https://sass-lang.com/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "VsCode", link: "https://threejs.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Github", link: "https://github.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Figma", link: "https://www.figma.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "P5.js", link: "https://p5js.org", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Python", link: "https://www.python.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "React", link: "https://reactjs.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "SCSS", link: "https://sass-lang.com/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "VsCode", link: "https://threejs.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Github", link: "https://github.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Figma", link: "https://www.figma.com", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "P5.js", link: "https://p5js.org", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "Python", link: "https://www.python.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "React", link: "https://reactjs.org/", img: "https://www.svgrepo.com/show/530642/folder.svg" },
    { name: "SCSS", link: "https://sass-lang.com/", img: "https://www.svgrepo.com/show/530642/folder.svg" },

  ]


  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    // Capture the mouse coordinates
    setMousePosition({ x: e.pageX, y: e.pageY });
  };


  return (
    <div className="tech_buttons" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove} >
      {TechButtons.map((button, index) => (
        <a key={index} href={button.link} className="tech-button">{button.name}</a>
      ))}

      {/* The pop-up container with image appears on hover at the pointer's position */}
      {isHovered && (
        <div
          className="popup-container"
          style={{
            top: mousePosition.y-200 + "px",
            left: mousePosition.x-100 + "px",
          }}
        >
          <img
            src="https://www.svgrepo.com/show/530642/folder.svg"
            alt="Related to link"
            className="popup-image"
          />
        </div>
      )}



      {/* <a className="tech-button" href="https://github.com/JatinSainiOO7" >React</a> */}
    </div>
  );
};

export default buttonComponent;
