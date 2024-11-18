
import './App.css'
import { useState, useEffect } from 'react';

import Headrer from './components/header.jsx'
import Main from './components/mainsec.jsx'
import Footer from './components/footer.jsx'
import github from './assets/svg/github.svg'
import linkedin from './assets/svg/linkedin.svg'
import twitter from './assets/svg/twitter.svg'
import light from './assets/svg/light-theme-button.svg';
import dark from './assets/svg/dark-theme.svg';
function App() {

  // State to track the theme ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
    <Headrer />
    <Main />
    <Footer />
    </>
  )
}


export default App
