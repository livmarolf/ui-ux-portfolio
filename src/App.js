import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import CurriculumDesign from "./pages/case-studies/CurriculumDesign";
import DesignProcess from "./pages/DesignProcess";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/design-process" component={DesignProcess} />
        <Route path="/curriculum-design" component={CurriculumDesign} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
