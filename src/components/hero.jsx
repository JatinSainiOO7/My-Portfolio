import { useState } from 'react';
import "../styles/components.scss"
import python from '../assets/svg/python.svg'
import javascript from '../assets/svg/javascript.svg'
import typescript from '../assets/svg/typescript.svg'
import cpp from '../assets/svg/cpp.svg'
import github from '../assets/svg/github.svg'
const HeroSection = () => {


  const content1 = (
    <div className='result-container'>
      <img className='img9' src={javascript}></img>
      <p className='result-p'>Solid understanding of JavaScript fundamentals, including ES6 features such as arrow functions, promises, async/await, and modules. I can write clean, efficient, and maintainable code.</p>
      <p className='result-p'>Skilled in using JavaScript to manipulate the Document Object Model (DOM) to create responsive user interfaces and enhance user experiences.</p>
      <p className='result-p'><strong>FrameWorks:   </strong> <a href="https://react.dev/">react</a>, <a href="https://editor.p5js.org/JatinSainiOO7/sketches">p5.js</a>, <a href="https://threejs.org/">three.js</a></p>
      <p className='result-p'><strong>Projects:   </strong> <a href="https://react.dev/">Portfolio</a></p>
    </div>
  );

  const content2 = (
    <div className='result-container'>
      <img className='img9' src={typescript}></img>
      <p className='result-p'>Basic understanding of TypeScript, including its core features like typing, interfaces, and classes. He is familiar with its integration into modern JavaScript frameworks such as React, enabling him to enhance code quality, maintainability, and development efficiency.</p>    
      <p className='result-p'><strong>Projects:   </strong> <a href="https://react.dev/">WebBook</a>, <a href="https://editor.p5js.org/JatinSainiOO7/sketches">JSSD.com</a></p>
    </div>
      
  );

  const content3 = (
    <div className='result-container'>
      <img className='img9' src={cpp}></img>
      <p className='result-p'>Basic understanding of C++ fundamentals, including object-oriented programming concepts such as classes, inheritance, polymorphism, and encapsulation. I can write clean, efficient, and maintainable code.</p>
      <p className='result-p'>Skilled in managing memory in C++, utilizing pointers, references, and dynamic memory allocation to ensure efficient resource usage and prevent memory leaks.</p>
      <p className='result-p'><strong>FrameWorks:   </strong> <a href="https://juce.com/">juce</a>, <a href="https://www.fltk.org/">FLTK</a></p>
      </div>
  );

  const content4 = (
    <div className='result-container'>
      <img className='img9' src={python}></img>
      <p className='result-p'>Basic understanding of Python programming, including core concepts such as variables, data types, control structures (if statements, loops), and functions. I can write clear and organized code.</p>
      <p className='result-p'>Familiar with Python built-in data structures, including lists, tuples, dictionaries, and sets, for storing and manipulating data effectively.</p>
      <p className='result-p'><strong>FrameWorks:   </strong> <a href="https://www.ibm.com/quantum/qiskit">QusKit</a></p>
      </div>
  );


  const [result, setResult] = useState(content1);

  const handleButtonClick = (content) => {
    setResult(content); // Update the result with the clicked button's content

    // Select all child a elements within the parent div
    const links = document.querySelectorAll('#parent .child');

    // Add a click event listener to each link
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
      });
    });
  };
  return (
    <>
      <div className="hero-container">
        <div className="coll">
          <h1 className="name">
            Hey! My name is
            <strong> Jatin Saini i am Front-End Developer.</strong>
          </h1>
          <p className="sulogan">
               I am working as a developer. I love to design and make new web experiences for the people.
          </p>
          <a className="visit-button" href="https://github.com/JatinSainiOO7" >
            <div className="visit-container">
              <h4>GitHub</h4>
              <h5>visit my GitHub</h5>
            </div>
            <div className="visit-img">
              <img src={github} />
            </div>
          </a>
        </div>
        <div className="coll">
          <div className="slide-window">
            <div className="slide">
              <ul id="parent">
                <h6 className="child active" onClick={() => handleButtonClick(content1)}>JavaScript</h6>
                <h6 className="child" onClick={() => handleButtonClick(content2)}>TypeScript</h6>
                <h6 className="child" onClick={() => handleButtonClick(content3)}>C++</h6>
                <h6 className="child" onClick={() => handleButtonClick(content4)}>Python</h6></ul>
            </div>
            <div className="result">
              <p>{result}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
