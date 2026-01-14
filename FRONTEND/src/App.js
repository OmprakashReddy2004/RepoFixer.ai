import "./App.css";
import FloatingLines from "./components/FloatingLines";
import Navbar from "./components/Navbar";
import Things from "./components/Things";
import Body from "./components/body";
import Video from "./components/video";

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
