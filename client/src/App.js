import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path ="/"><Welcome /></Route>
        <Route exact path="/about-me"><About /></Route>
        <Route exact path="/my-blogs"><Blogs /></Route>
        <Route exact path="/my-projects"><Projects /></Route>
        <Route exact path="/my-resume"><Resume /></Route>
      </Switch>
    </div>
  );
}

export default App;
