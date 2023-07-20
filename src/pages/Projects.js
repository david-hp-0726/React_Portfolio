import React from 'react'
import ProjectItem from '../components/ProjectItem';
import ProjectList from '../data/ProjectList.js';
import '../styles/Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1 className="projectTitle">Personal Projects</h1>
            <div className="projectList">
                {
                    ProjectList.map((project) => {
                        return (
                            <ProjectItem
                            name={project.name}
                            language={project.language}
                            framework_library={project.framework_library}
                            github_link={project.github_link}
                            image={project.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
