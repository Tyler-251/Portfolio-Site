import React from "react"
import data from "../data/projects-desc.json"

export const ProjectsMain = (props) => {
    return (
        <div class="main projects-main">
            <h1>Projects</h1>
            <ProjectDiv />
        </div>
    );
}
const ProjectDiv = (props) => {
    let datA = [];
    for (const i in data) {
        datA.push(data[i]);
    }
    return (
        <>
            {datA.map(year => (
                <div class="year-section">
                    <h3>{year[0]}</h3>
                    {year.map(project => (
                        project === year[0] ?
                        null :
                        <div class="project-section">
                            {project.imgpath === "" ? null : <img src={project.imgpath}/>}
                            <h5 id={project.id}><a class="project-title-link" href={'#' + project.id}>{project.name}</a></h5>
                            <h4>{project.date}</h4>
                            <p class="desc">{project.desc}</p>
                            {project.repo === "" ? null : <p class="repo-link">Github Repository: <a href={project.repo} target="_blank" rel="noreferrer">{project.repo}</a></p>}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}