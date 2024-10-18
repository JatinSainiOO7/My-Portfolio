
import "../styles/components.scss";
const NavigationSection = () => {


    return (
        <nav className="navbar-container">
            <a href="/" className="menu"> Jatin Saini</a>
            <div className="menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Work</a>
            </div>

            <div className="theme-container">
                <a color="red" href="">Connect</a>
            </div>

        </nav>
    );
};

export default NavigationSection;
