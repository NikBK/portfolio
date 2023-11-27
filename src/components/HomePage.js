import "../compoStyle/homePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
// import resume from "../docs/Nikhil_BK_Resume.pdf";
import resume from "../docs/2023_Nikhil_BK_Resume.pdf"
import { useTheme } from "./context";

const HomePage = () => {
    const { theme } = useTheme();
    const [ageMessage, setAgeMessage] = useState("new Date().getFullYear() - 1998");
    function calAge(e) {
        if (ageMessage.length > 3) {
            setAgeMessage(new Date().getFullYear() - 1998);
        }
        else {
            setAgeMessage("new Date().getFullYear() - 1998");
        }
        return null;
    }
    return (
        <div id='homepage'>
            <section className={`home-left ${theme}_home-left`}>
                <IntroBox />
            </section>
            <section className='home-right'>
                <CodingBox theme={theme} calAge={calAge} ageMessage={ageMessage} />
            </section>
        </div>
    )
}

const IntroBox = () => {
    return <>
        <div className='intro-box'>
            <span>Hello, I'm</span>
            <h2 className='my-name'>NIKHIL BK</h2>
            <span className='job-role'>Diligent Software Developer</span>
        </div>
        <div className='resume-box'>
            <a href={resume} download="Nikhil_Resume.pdf">
                <button>Download Resume</button>
            </a>
        </div>
        <div className='links-box'>
            <div className="icon"><a href="https://github.com/NikBK" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
            <div className="icon"><a href="https://www.linkedin.com/in/nikhil-bk-53534417a/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
            <div className="icon"><a href="https://twitter.com/Nikhilbk6" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></div>
        </div>
    </>
}

const CodingBox = ({ theme, calAge, ageMessage }) => {
    return <>
        <div className={`coding-box ${theme}_coding-box`}>
            <pre>
                1&nbsp;class&nbsp;
                <b>AboutMe</b>
                &nbsp;&#123;
            </pre>
            <pre>
                2&nbsp;&nbsp;
                constructor()&nbsp;&#123;
            </pre>
            <pre>
                3&nbsp;&nbsp;&nbsp;&nbsp;
                this.name = "<b>Nikhil BK</b>";
            </pre>
            <pre>
                4&nbsp;&nbsp;&nbsp;&nbsp;
                this.expertise = ["<b>Full Stack</b>","<b>Software Dev</b>"];
            </pre>
            <pre>
                5&nbsp;&nbsp;
                &nbsp;&nbsp;this.age = <span style={{ 'color': theme == "dark" ? "#a8b5f8" : "#000" }} onClick={calAge}>{ageMessage}</span>;
            </pre>
            <pre>
                6&nbsp;&nbsp;
                &#125;
            </pre>
            <pre>
                7&nbsp;
                &#125;
            </pre>
        </div>
    </>
}

export default HomePage
