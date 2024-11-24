import '../styles/components.scss'
import code from '../assets/svg/code.svg'
import api from '../assets/svg/api.svg'
import uxui from '../assets/svg/uxui.svg'
import frontend from '../assets/svg/fronted.svg'
const WorkSection = () => {
    return (
        <>
        <div className="work-section">
            <center><h1 className='work-title '>What I Do_</h1></center>
            <div className='work-card-container'>
                <div className='card'>
                    <center><div className="card-img">
                            <img src={frontend} alt="" /></div></center>
                    <center><h1 className='card-title'>Frontend Development</h1></center>
                    <center><p className='card-dis'>Crafting sleek, responsive, and modern web applications</p></center>
                </div>
                <div className='card'>
                    <center><div className="card-img">
                    <img src={code} alt="" /></div></center>
                    <center><h1 className='card-title'>Design To Code</h1></center>
                    <center><p className='card-dis'>Transforming Figma designs into pixel-perfect React components</p></center>
                </div>
                <div className='card'>
                        <center><div className="card-img">
                            <img src={uxui} alt="" /></div></center>
                    <center><h1 className='card-title'>UI/UX Design</h1></center>
                    <center><p className='card-dis'>Crafting sleek, responsive, and modern web applications</p></center>
                </div>
                <div className='card'>
                    <center><div className="card-img">
                    <img src={api} alt="" /></div></center>
                    <center><h1 className='card-title'>API Integration</h1></center>
                    <center><p className='card-dis'>Implementing robust APIs to enhance dynamic functionalities</p></center>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkSection;