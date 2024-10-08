import "../styles/components.scss";


import github from "../assets/svg/githubWhite.svg";
import figma from "../assets/svg/figma.svg";
import p5 from "../assets/svg/p5.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import scss from "../assets/svg/scss.svg";
import tailwind from "../assets/svg/tailwind.svg";
import three from "../assets/svg/three.svg";
import vs from "../assets/svg/vs.svg";
import vscode from "../assets/svg/vscode.svg";
import webstrom from "../assets/svg/webstrom.svg";
import Git from "../assets/svg/git.svg";


const SliderComponent = () => {
  // TODO: Implement a slider component using HTML, CSS, and JavaScript, with dynamic content.
  // You can use libraries like React Swiper or Slick for creating the slider.
  // Ensure that the slider component is responsive and adapts to different screen sizes.

const SliderItem = [
  {
    id: 1,
    img: github,
    name: "GitHub",
  },
  {
    id: 2,
    img: figma,
    name: "Figma",
  },
  {
    id: 3,
    img: scss,
    name: "SCSS",
  },
  {
    id: 4,
    img: vs,
    name: "VisualStudio",
  },
  {
    id: 5,
    img: vscode,
    name: "VsCode",
  },
  {
    id: 6,
    img: tailwind,
    name: "TailwindCss",
  },
  {
    id: 7,
    img: three,
    name: "Three.js",
  },
  {
    id: 8,
    img: webstrom,
    name: "WebStrom",
  },
  {
    id: 9,
    img: react,
    name: "React",
  },
  {
    id: 10,
    img: python,
    name: "Python",
  },
  {
    id: 11,
    img: p5,
    name: "p5.js",
  },
  {
    id: 12,
    img: Git,
    name: "Git",
  },
];

  return (
    <div>
      <div className="slider-section">
      <div className="slider-container">
        {SliderItem.map((item) => {
          return (
              <div key={item.id} className="slider-item">
                <img src={item.img} />
                <p className="slider-name">{item.name}</p>
              </div>
          );
        })}
        </div>
        <div className="slider-container">
        {SliderItem.map((item) => {
          return (
              <div key={item.id} className="slider-item">
                <img src={item.img} />
                <p className="slider-name">{item.name}</p>
              </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
