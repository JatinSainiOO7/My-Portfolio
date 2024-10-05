import '../styles/components.scss'
import Button from '../components/button.jsx'

const AboutSection = () => {
    return (
        <>
            <div className="about-section">
                <center> <h1 className='title'>About My Self_</h1></center>
                <div className='about-container'>
                    <div className='about-img'></div>
                    <hr />
                    <div className='about-me'>
                        <h1 className='jatin'>Hey! I am Jatin</h1>
                        <p className='about-dis'>
                            I am a Front-End Developer, currently a student at Rajasthan University Kota.
                            I focus on building modern and dynamic web-apps that enhance lead generation and user experience.
                            I am passionate about clean code and innovative design, always striving to create seamless digital experiences that make a real impact.
                        </p>
                        <h1 className='jatin'>Tech Stack</h1>  
                        <div className = "tech-button-container">
                            <Button />
                        </div>
                    </div>
                </div>
                <div className='about-links'></div>
            </div>
        </>
    )
}

export default AboutSection;
