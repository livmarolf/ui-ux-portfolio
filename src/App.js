import Navbar from "./layouts/Navbar";
// import DesignProcess from "./pages/DesignProcess";
import Landing from "./pages/Landing";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <DesignProcess /> */}
    </div>
  );
}

export default App;
