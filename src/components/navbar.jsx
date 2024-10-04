import '../styles/components.scss'

const NavigationSection = () => {
    return (
        <nav className="navbar-container">
            <div><a href="/"><pre className='jatin'>Jatin</pre></a></div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Work</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                </ul>
            </div>
            <div className='contact'><a href="/"><pre>Contact</pre></a></div>

        </nav>
    );
};

export default NavigationSection;