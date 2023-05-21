import "../compoStyle/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faNode } from "@fortawesome/free-brands-svg-icons";
// import hero_pic from "../images/mypic_2.jpg";

const About = () => {
    return (
        <section id='aboutpage'>
            <h2 className='title'>About me</h2>
            <div className='about-container'>
                <img src="images/mypic_2.jpg" alt='hero' className='hero' />
                {/* <img src='https://im.rediff.com/movies/2022/apr/14kgf4.jpg' alt='hero' className='hero' /> */}
                <article className='about-hero'>
                    Hi, I'm Nikhil BK, a passionate Software developer having {new Date().getFullYear() - 2021} years of experience in PLM Domain.
                    I am currently working for <b><i>Dassault Systemes</i></b>, as part of Netvibes team.
                    I have delivered Manufacturing Process Intelligence for the Jaguar & Land Rover customers.
                    <br />
                    <br />
                    I have love towards Full stack web development and have created few user interfaces.
                    I have worked as a coding & MERN stack mentor @<i>Newton School</i>
                </article>
            </div>
            <h2 className="title">Things I Love</h2>
            <div className="things-i-love">
                <div className="item">
                    <div className="item-icon">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <h3 className="item-title">FrontEnd</h3>
                    <div className="item-description">Designing a website is an art and I love to do that</div>
                </div>
                <div className="item">
                    <div className="item-icon">
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <h3 className="item-title">BackEnd</h3>
                    <div className="item-description">Server Side coding is lot more interesting & challenging</div>
                </div>
                <div className="item">
                    <div className="item-icon">
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <h3 className="item-title">Data Structures</h3>
                    <div className="item-description">Coding is always fun, I love to teach & solve problems</div>
                </div>

                {/* <div className="item">
                    <div className="item-icon">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <h3 className="item-title">React</h3>
                    <div className="item-description">I like building React applications as it is faster and easier.</div>
                </div>
                <div className="item">
                    <div className="item-icon">
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <h3 className="item-title">Node</h3>
                    <div className="item-description">Node & Express are the best way to build backend.</div>
                </div>
                <div className="item">
                    <div className="item-icon">
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
