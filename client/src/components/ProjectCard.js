function ProjectCard({ project }) {

  return(
    <div className="project-img-container">
      <img className="project-img" src={project.image} alt={project.title}/>
      <div className="middle">
        <div className="project-overlay">
          <h1 className="project-title" onClick={() => window.open(project.link, '_blank')}>{project.title}</h1>
          <h3 className="project-description">{project.description}</h3>
          <h3 className="project-link" onClick={() => window.open(project.youtube, '_blank')}>Demo Video | </h3>
          <h3 className="project-link" onClick={() => window.open(project.github, '_blank')}>Github</h3>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard