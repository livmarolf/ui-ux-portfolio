import Navbar from "./layouts/Navbar";
import HuddleUp from "./pages/case-studies/HuddleUp";
// import DesignProcess from "./pages/DesignProcess";
// import Landing from "./pages/Landing";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      {/* <DesignProcess /> */}
      <HuddleUp />
    </div>
  );
}

export default App;
