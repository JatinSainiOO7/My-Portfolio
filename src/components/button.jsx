import "../styles/global.scss";
const buttonComponent = () => {

  const TechButtons = [
    { name: "Github", link: "https://github.com" },
    { name: "Figma", link: "https://www.figma.com" },
    { name: "P5.js", link: "https://p5js.org" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "VsCode", link: "https://threejs.org/" },
    { name: "Github", link: "https://github.com" },
    { name: "Figma", link: "https://www.figma.com" },
    { name: "P5.js", link: "https://p5js.org" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "VsCode", link: "https://threejs.org/" },
    { name: "Github", link: "https://github.com" },
    { name: "Figma", link: "https://www.figma.com" },
    { name: "P5.js", link: "https://p5js.org" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "VsCode", link: "https://threejs.org/" },
    { name: "Github", link: "https://github.com" },
    { name: "Figma", link: "https://www.figma.com" },
    { name: "P5.js", link: "https://p5js.org" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "VsCode", link: "https://threejs.org/" },
    { name: "Github", link: "https://github.com" },
    { name: "Figma", link: "https://www.figma.com" },
    { name: "P5.js", link: "https://p5js.org" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "SCSS", link: "https://sass-lang.com/" },
  ]
  return (
    <div className="tech_buttons">
      {TechButtons.map((button, index) => (
        <a key={index} href={button.link} className="tech-button">{button.name}</a>
      ))}

      {/* <a className="tech-button" href="https://github.com/JatinSainiOO7" >React</a> */}
    </div>
  );
};

export default buttonComponent;
