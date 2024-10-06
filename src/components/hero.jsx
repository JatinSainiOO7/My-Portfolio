import "../styles/components.scss"
import github from '../assets/svg/github.svg'
import Icon from './icon.jsx'
const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="coll">
          <h1 className="name">
            Hey! My name is
            <strong> Jatin Saini i am Front-End Developer.</strong>
          </h1>
          <p className="sulogan">
            TypeScript is a strongly typed programming language that builds on
            JavaScript, giving you better tooling at any scale.
          </p>
            <a className="visit-button" href="https://github.com/JatinSainiOO7" >
              <div className="visit-container">
                <h4>GitHub</h4>
                <h5>visit my GitHub</h5>
              </div>
              <div className="visit-img">
                <Icon icon = {github} />
              </div>
            </a>
        </div>
        <div className="coll">
          <div className="slide-window">
            <div className="slide">
              <ul>
                <li>
                  <h6 className="slide-title">javascript</h6>
                </li>
                <li>
                  <h6 className="slide-title">C++</h6>
                </li>
                <li>
                  <h6 className="slide-title">Python</h6>
                </li>
                <li>
                  <h6 className="slide-title">P5.js</h6>
                </li>
              </ul>
            </div>
            <div className="result"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
