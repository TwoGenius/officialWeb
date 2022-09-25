import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Advantages from "./Components/Advantages"
import Projects from "./Components/Projects"
import Blogs from "./Components/Blog"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Advantages />
      <Projects />
      <Blogs />
    </div>
  );
}

export default App;
