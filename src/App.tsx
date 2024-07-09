import "./App.css";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import PublicProjects from "./pages/publicProjects/publicProjects";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div>
      <Home />
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <PublicProjects />
    </div>
  );
}

export default App;
