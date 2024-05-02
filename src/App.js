//TODO : cleanup flow for case studies
//TODO : split slidecard styles out of landing styles

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import Contact from "./pages/Contact";
import CaseStudy from "./components/CaseStudy";
import "./styles/app.scss";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/:slug" component={CaseStudy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
