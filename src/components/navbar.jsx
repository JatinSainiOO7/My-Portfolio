
import "../styles/components.scss";
import light from '../assets/svg/light-theme-button.svg'
const NavigationSection = () => {


    return (
        <nav className="navbar-container">
            <div>
                <a href="/">
                    <p className="jatin">Jatin Saini</p>
                </a>
            </div>
            <div className="menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Work</a>
                <a href="">Connect</a>
            </div>

            <div className="theme-container">
                <img width="30px" src={light}/>
            </div>

        </nav>
    );
};

export default NavigationSection;
