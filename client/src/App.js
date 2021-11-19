import { Route, Switch } from 'react-router-dom'
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
        <Route exact path="/"><About /></Route>
        <Route exact path="/blogs"><Blogs /></Route>
        <Route exact path="/projects"><Projects /></Route>
        <Route exact path="/resume"><Resume /></Route>
      </Switch>
    </div>
  );
}

export default App;
