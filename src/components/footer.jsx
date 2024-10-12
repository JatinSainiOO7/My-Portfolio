import '../styles/components.scss'
import Slider from '../components/slider.jsx'
const FooterSection = () => {
    return (
        <>
            <div className='footer-slider'>
                <Slider />
            </div>
            <div className='footer-section'>
                <center><p className='f-p hov'>@ 2024 Jatin Saini</p></center>
                <center><p className='f-p'>Made with React and ChatGPT</p></center>
                <center><p className='f-p'>All Rights Reserved.</p></center>
                <center><p className='f-p'>Well I am not a lawyer, but it sounds fancy 🤡👈</p></center>
            </div>
        </>
    )
}

export default FooterSection;