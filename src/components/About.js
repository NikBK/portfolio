import "../compoStyle/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faNode } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "./context";
// import hero_pic from "../images/mypic_2.jpg";

const About = () => {
    const { theme } = useTheme();
    return (
        <section id='aboutpage'>
            <h2 className={`title ${theme}_title`}>About me</h2>
            <div className={`about-container ${theme}_about-item`}>
                <img src="images/mypic_2.jpg" alt='hero' className='hero' />
                {/* <img src='https://im.rediff.com/movies/2022/apr/14kgf4.jpg' alt='hero' className='hero' /> */}
                <article className='about-hero'>
                    Hi, I'm Nikhil BK, a passionate Software Developer with {((new Date() - new Date('09/27/2021')) / (1000 * 60 * 60 * 24 * 365)).toFixed(2)} years of experience in the tech industry.
                    <br />
                    <br />
                    Currently, I am working at <b><i>SA Software Technology</i></b>:
                    <ul>
                        <li>Focusing on Frontend Development using React.js.</li>
                        <li>Collaborating with cross-functional teams to create responsive and engaging user interfaces.</li>
                    </ul>

                    Previously, I was part of <b><i>Dassault Systemes</i></b>:
                    <ul>
                        <li>Delivered Manufacturing Process Intelligence solutions for Jaguar & Land Rover customers.</li>
                        <li>Worked within the Netvibes team to enhance data visualization and user experience.</li>
                    </ul>

                    My passion lies in Full Stack Web Development, and I've created several user interfaces that prioritize user experience and functionality. Additionally, I have served as a coding and MERN stack mentor <b>@<i>Newton School</i></b>, helping aspiring developers enhance their skills and knowledge.
                </article>

            </div>
            <h2 className={`title ${theme}_title`}>Things I Love</h2>
            <div className="things-i-love">
                <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <h3 className="item-title">FrontEnd</h3>
                    <div className="item-description">Designing a website is an art and I love to do that</div>
                </div>
                <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <h3 className="item-title">BackEnd</h3>
                    <div className="item-description">Server Side coding is lot more interesting & challenging</div>
                </div>
                <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <h3 className="item-title">Data Structures</h3>
                    <div className="item-description">Coding is always fun, I love to teach & solve problems</div>
                </div>

                {/* <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <h3 className="item-title">React</h3>
                    <div className="item-description">I like building React applications as it is faster and easier.</div>
                </div>
                <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <h3 className="item-title">Node</h3>
                    <div className="item-description">Node & Express are the best way to build backend.</div>
                </div>
                <div className={`item ${theme}_about-item`} >
                    <div className={`item-icon ${theme}_item-icon`}>
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <h3 className="item-title">JavaScript</h3>
                    <div className="item-description">JS has acquired the universe by it's power and ease.</div>
                </div> */}
            </div>
        </section>
    )
}

export default About
