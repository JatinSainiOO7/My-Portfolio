
import About from './about.jsx'
import Work from './work.jsx'
import Contact from './contact.jsx'
// import Project from './projects.jsx'
const MainSection = () => {
    return (
        <div className='main'>
            <About />
            <Work />
            <Contact />
            {/* <Project /> */}
        </div>
    )
}

export default MainSection;