import { Link } from "react-router-dom"

function Welcome() {

  return(
    <div className="welcome">
      <h1 className="welcome-hello">Hi, I'm <span className="welcome-name">Melissa</span>.</h1>
      <h1 className="welcome-desc1">Software Engineer, Full Stack Developer, </h1>
      <h1 className="welcome-desc2">Vinyl DJ, and Hot Dog Enthusiast</h1>
      <Link to="about"><button className="welcome-button">Learn More</button></Link>
    </div>
  )
}

export default Welcome