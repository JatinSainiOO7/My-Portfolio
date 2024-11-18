import github from '../assets/svg/github.svg';
import leetcode from '../assets/svg/leetcode.svg';
import twitter from '../assets/svg/twitter.svg';
import linkedin from '../assets/svg/linkedin.svg';
import dev from '../assets/svg/dev.svg';


function IconComponent() {
    return (
        <div className="link-container">
            <li><a alt="github" href="https://github.com/JatinSainiOO7">
                <img src={github} alt="github" />
            </a></li>

            <li><a alt="Twitter" href="https://x.com/JatinSaini0O7">
                <img src={twitter} alt="twitter" />
            </a></li>

            <li><a alt="LinkedIn" href="https://www.linkedin.com/in/jatin-saini-711055294/">
                <img src={linkedin} alt="" />
            </a></li>

            <li><a alt="LeetCode" href="https://leetcode.com/u/JatinSainiOO7/">
                <img src={leetcode} alt="leetcode" />
            </a></li>

            <li><a alt="Dev" href="https://dev.to/jatinsainioo7">
                <img src={dev} alt="dev" />
            </a></li>
        </div>
    );
}


export default IconComponent;