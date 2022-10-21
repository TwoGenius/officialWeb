import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import Nopage from "./Pages/Nopage";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
