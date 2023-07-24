import React from 'react'

function ProjectItem({ name, language, framework_library, github_link, image}) {
    return (
        <button onClick={() => window.open(github_link)}>
            <div className="projectItem">
                <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
                <h1>{name}</h1>
                <h4>({language}, {framework_library})</h4>
            </div>
        </button>
    )
}

export default ProjectItem
