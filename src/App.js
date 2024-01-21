import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import CurriculumDesign from "./pages/CurriculumDesign";
import DesignProcess from "./pages/DesignProcess";
import "./styles/app.scss";
import HuddleUp from "./pages/case-studies/HuddleUp";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/design-process" component={DesignProcess} />
        <Route path="/curriculum-design" component={CurriculumDesign} />
        <Route path="/huddleup" component={HuddleUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
