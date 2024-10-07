import '../styles/global.scss';
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Slider from './slider.jsx'

const HeaderSection = () => {
    return (
        <>
        <div className="header-container">
            <Navbar />
            <Hero />
            <Slider />
        </div>
        </>
    )
}

export default HeaderSection;