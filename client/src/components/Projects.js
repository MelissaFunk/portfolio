import ProjectCard from "./ProjectCard"
import { useEffect, useState } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects')
      .then(res => res.json())
      .then(setProjects)  
  }, [])

  function eachProject() {
    return projects.map(project => 
        <ProjectCard project={project} key={project.id}/>
      )
  }
 
  return(
    <div className="projects">
      <h1>PROJECTS</h1>
      {eachProject()}
    </div>
  )
}

export default Projects