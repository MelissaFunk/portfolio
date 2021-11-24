import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path ="/"><Welcome /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/my-blogs"><Blogs /></Route>
        <Route exact path="/my-projects"><Projects /></Route>
        <Route exact path="/resume"><Resume /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
    </div>
  );
}

export default App;
