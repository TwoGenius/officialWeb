import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Advantages from "./Components/Advantages"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Advantages />
    </div>
  );
}

export default App;
