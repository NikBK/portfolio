import "../compoStyle/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faHtml5, faCss3, faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons";

const Skills = ({ darkTheme }) => {
    return (
        <div id="skillspage">
            <h2 className="title" style={{ 'color': darkTheme ? "#fff" : "#6c66fa" }}>My Skills</h2>
            <div className="skills-container">
                <span className="skill">
                    <div className="skill-label">Java</div>
                    <FontAwesomeIcon icon={faJava} size="4x" />
                </span>
                <span className="skill">
                    <div className="skill-label">HTML</div>
                    <FontAwesomeIcon icon={faHtml5} size="4x" />
                </span>
                <span className="skill">
                    <div className="skill-label">CSS</div>
                    <FontAwesomeIcon icon={faCss3} size="4x" />
                </span>
                <span className="skill">
                    <div className="skill-label">JavaScript</div>
                    <FontAwesomeIcon icon={faJs} size="4x" />
                </span>
                <span className="skill">
                    <div className="skill-label">React</div>
                    <FontAwesomeIcon icon={faReact} size="4x" />
                </span>
                <span className="skill">
                    <div className="skill-label">Node</div>
                    <FontAwesomeIcon icon={faNode} size="4x" />
                </span>
            </div>
        </div>
    )
}

export default Skills;
