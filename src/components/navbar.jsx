
import "../styles/components.scss";
// import resume from '../assets/resume.pdf'
const NavigationSection = () => {


    return (
        <nav className="navbar-container-1">
            <div className="navbar-container-1">
                <div href="/" className="j">
                    <div className="box"><a className="bjs">JS</a></div> JatinSaini</div>
                <div className="menu">
                    <a className="n" href="https://jatinsainioo7.github.io/My-Portfolio/">Home</a>
                    <a className="n" href="https://github.com/JatinSainiOO7?tab=repositories" target="_blank">Work</a>
                    <a className="n" href="https://editor.p5js.org/JatinSainiOO7/sketches" target="_blank">GenrativeArt</a>
                    <a className="n" href="https://www.linkedin.com/in/jatin-saini-711055294/" target="_blank">LinkedIn</a>
                    <a className="n" href="https://leetcode.com/u/JatinSainiOO7/" target="_blank">LeetCode</a>
                    <a className="n" href="https://x.com/JatinSaini0O7" target="_blank">Twitter</a>
                </div>
            </div>

            <a href="https://drive.google.com/file/d/1dnKOkp8wmtR_I3HTq4SXlpswpmPlIFfb/view?usp=drive_link" target="_blank">
                <div className="resume">
                    <a color="red">Resume</a>
                </div>
            </a>
        </nav>
    );
};

export default NavigationSection;
