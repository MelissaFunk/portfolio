import { Link } from "react-router-dom"

function Navbar() {

  return(
    <div className="navbar">
      <Link to="/" className="navbar-item"><h3 className="navbar-name">MELISSA FUNK</h3></Link>
      <Link to="/contact" className="navbar-item"><h3>Contact</h3></Link>
      {/* <Link to="/resume" className="navbar-item"><h3>Resume</h3></Link> */}
      <Link to="/my-projects" className="navbar-item"><h3>Projects</h3></Link>
      <Link to="/my-blogs" className="navbar-item"><h3>Blogs</h3></Link>
      <Link to="/about" className="navbar-item"><h3>About</h3></Link>
    </div>
  )
}

export default Navbar