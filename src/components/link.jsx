import github from '../assets/svg/github.svg';
import leetcode from '../assets/svg/leetcode.svg';
import twitter from '../assets/svg/twitter.svg';
import linkedin from '../assets/svg/linkedin.svg';
import dev from '../assets/svg/dev.svg';


const IconComponent = () => {
    return (
        <div className="link-container">
            <li><a alt="github" href="https://github.com/JatinSainiOO7">
                <img src={github} alt="github" />
                <p>GitHub</p></a></li>

            <li><a alt="Twitter" href="https://x.com/JatinSaini0O7">
                <img src={twitter} alt="twitter" />
                <p>Twitter</p></a></li>

            <li><a alt="LinkedIn" href="https://www.linkedin.com/in/jatin-saini-711055294/">
                <img src={linkedin} alt="" />
                <p>LinkedIn</p></a></li>

            <li><a alt="LeetCode" href="https://leetcode.com/u/JatinSainiOO7/">
                <img src={leetcode} alt="leetcode" />
                <p>LeetCode</p></a></li>

            <li><a alt="Dev" href="https://dev.to/jatinsainioo7">
                <img src={dev} alt="dev" />
                <p>Dev</p></a></li>
        </div>
    )
}


export default IconComponent;