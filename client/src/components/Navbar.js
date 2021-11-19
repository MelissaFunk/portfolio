import { Link } from "react-router-dom"

function Navbar() {

  return(
    <div>
      <Link to="/"><button>About</button></Link>
      <Link to="/blogs"><button>Blogs</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/resume"><button>Resume</button></Link>
    </div>
  )
}

export default Navbar