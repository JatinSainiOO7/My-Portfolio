import "../styles/components.scss";

import github from "../assets/svg/github.svg";
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
const SliderComponent = () => {
  // TODO: Implement a slider component using HTML, CSS, and JavaScript, with dynamic content.
  // You can use libraries like React Swiper or Slick for creating the slider.
  // Ensure that the slider component is responsive and adapts to different screen sizes.
  return (
    <>
      <div className="slider-section">
        <div className="slider-container">
          <div className="slider-item">
            <img src={react} />
            <p className="slider-name">React</p>
          </div>
          <div className="slider-item">
            <img src={three} />
            <p className="slider-name">Three.js</p>
          </div>
          <div className="slider-item">
            <img src={vscode} />
            <p className="slider-name">VsCode</p>
          </div>
          <div className="slider-item">
            <img src={scss} />
            <p className="slider-name">SCSS</p>
          </div>
          <div className="slider-item">
            <img src={tailwind} />
            <p className="slider-name">TailwindCss</p>
          </div>
          <div className="slider-item">
            <img src={vs} />
            <p className="slider-name">VisuaStudio</p>
          </div>
          <div className="slider-item">
            <img src={p5} />
            <p className="slider-name">P5.js</p>
          </div>
          <div className="slider-item">
            <img src={figma} />
            <p className="slider-name">Figma</p>
          </div>
          <div className="slider-item">
            <img src={github} />
            <p className="slider-name">GitHub</p>
          </div>
          <div className="slider-item">
            <img src={python} />
            <p className="slider-name">Python</p>
          </div>
          <div className="slider-item">
            <img src={webstrom} />
            <p className="slider-name">WebStrom</p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-item">
            <img src={react} />
            <p className="slider-name">React</p>
          </div>
          <div className="slider-item">
            <img src={three} />
            <p className="slider-name">Three.js</p>
          </div>
          <div className="slider-item">
            <img src={vscode} />
            <p className="slider-name">VsCode</p>
          </div>
          <div className="slider-item">
            <img src={scss} />
            <p className="slider-name">SCSS</p>
          </div>
          <div className="slider-item">
            <img src={tailwind} />
            <p className="slider-name">TailwindCss</p>
          </div>
          <div className="slider-item">
            <img src={vs} />
            <p className="slider-name">VisuaStudio</p>
          </div>
          <div className="slider-item">
            <img src={p5} />
            <p className="slider-name">P5.js</p>
          </div>
          <div className="slider-item">
            <img src={figma} />
            <p className="slider-name">Figma</p>
          </div>
          <div className="slider-item">
            <img src={github} />
            <p className="slider-name">GitHub</p>
          </div>
          <div className="slider-item">
            <img src={python} />
            <p className="slider-name">Python</p>
          </div>
          <div className="slider-item">
            <img src={webstrom} />
            <p className="slider-name">WebStrom</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderComponent;
