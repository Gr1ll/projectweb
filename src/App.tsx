import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-me" Component={AboutMe} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
