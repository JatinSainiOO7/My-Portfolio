
import './App.css'
import Headrer from './components/header.jsx'
import Main from './components/mainsec.jsx'
import Footer from './components/footer.jsx'
import github from './assets/svg/github.svg'
import linkedin from './assets/svg/linkedin.svg'
import mail from './assets/svg/mail.svg'
import twitter from './assets/svg/twitter.svg'
function App() {
  return (
    <>
    <div className='social-container'>
      <a href="https://github.com/JatinSainiOO7">
        <img className='img-h' src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/jatin-saini-711055294/">
        <img className='img-h' src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://x.com/JatinSaini0O7">
        <img className='img-h' src={twitter} alt="twitter" />
      </a>
      <a href="https://mail.google.com/mail/u/0/#sent?compose=new">
        <img className='img-h' src={mail} alt="Mail" />
      </a>
    </div>
    <Headrer />
    <Main />
    <Footer />
    </>
  )
}

export default App
