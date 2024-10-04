import '../styles/components.scss'

const SliderComponent = () => {
    // TODO: Implement a slider component using HTML, CSS, and JavaScript, with dynamic content.
    // You can use libraries like React Swiper or Slick for creating the slider.
    // Ensure that the slider component is responsive and adapts to different screen sizes.
    return (
        <>
        <div className='slider-container'>
            <ul>
                <li><a href="/">React</a></li>
                <li><a href="/">TailwindCss</a></li>
                <li><a href="/">P5.js</a></li>
                <li><a href="/">Three.js</a></li>
                <li><a href="/">GSAP</a></li>
                <li><a href="/">C++</a></li>
                <li><a href="/">JavaScript</a></li>
            </ul>
        </div>
        </>
    )
}

export default SliderComponent;