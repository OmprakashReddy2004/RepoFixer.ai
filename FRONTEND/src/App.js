import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import Video from "./components/video";
import FloatingLines from "./components/FloatingLines";
import Things from "./components/Things";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <FloatingLines />
        <Body />
        <Video />
        <Things />
      </div>
    </>
  );
}

export default App;
