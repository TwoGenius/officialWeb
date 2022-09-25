import "./App.css";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
import Projects from "./Components/Projects"
import Advantages from "./Components/Advantages"
function App() {
  return <div className="App">
    <Navbar />
    {/* <Projects/> */}
    <Advantages />
  </div>;
=======
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
>>>>>>> a6a2a5caa8e0631c6f6f2a182ef7851fbe4bd43d
}

export default App;
