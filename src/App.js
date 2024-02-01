import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CurriculumDesign from "./pages/CurriculumDesign";
import DesignProcess from "./pages/DesignProcess";
import HuddleUp from "./pages/case-studies/HuddleUp";
import Footer from "./layouts/Footer";
import "./styles/app.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
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
