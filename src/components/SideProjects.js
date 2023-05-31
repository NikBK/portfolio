import { projectData } from "../data/projectDetails";
import "../compoStyle/sideProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SideProjects = ({ darkTheme }) => {
    return (
        <div id="sideProjects">
            <h2 className="title" style={{ 'color': darkTheme ? "#fff" : "#6c66fa" }}>Projects</h2>
            <div className="project-container">
                {projectData.map(projectDeails => <Project key={projectDeails.id} projectDetails={projectDeails} />)}
            </div>
        </div>
    )
}

const Project = ({ projectDetails }) => {
    const { name, info, imageLink, gitLink, hostedLink, icons } = { ...projectDetails }

    return <>
        <div className="project-card">
            <div className="project-img">
                <img src={imageLink} alt={name} />
            </div>
            <div className="project-footer">
                <h3>{name}</h3>
                <div>
                    <a href={hostedLink} target="_blank" rel="noreferrer" title="Live Demo" >
                        <FontAwesomeIcon icon={faWindowMaximize} size="1x" />
                    </a>
                    <a href={gitLink} target="_blank" rel="noreferrer" title="Source Code" >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default SideProjects
