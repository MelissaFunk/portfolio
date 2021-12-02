function AboutCard({ about }) {

  return(
    <div className="about-card">
      <div className="about-img">
        <img src={about.image} alt={about.title}/>
      </div>
      <h2 className="about-card-title">{about.title}</h2>
      <h3 className="about-card-description">{about.description}</h3>
    </div>
  )
}

export default AboutCard