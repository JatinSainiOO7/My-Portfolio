import PropTypes from "prop-types";
import github from '../assets/svg/github.svg';
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
const IconComponent = ( {icon} ) => {
    return (
        <>
        <div>
            <img src={icon} />
        </div>
        </>
    )
}

IconComponent.propTypes = {
    icon: PropTypes.string,
    key: PropTypes.oneOf([
        github,
        figma,
        p5,
        python,
        react,
        scss,
        tailwind,
        three,
        vs,
        vscode,
        webstrom
    ]).isRequired,
  };
export default IconComponent;