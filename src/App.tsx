import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import PublicProjects from "./pages/publicProjects/publicProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about-me" Component={AboutMe} />
        <Route path="/public-projects" Component={PublicProjects} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
