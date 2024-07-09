import "./Home.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";

function Home() {
  const scrollToAboutSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="Home">
        <h1 className="title">Cyril</h1>
        <h2 className="subtitle">Software Engineer Apprentice</h2>
        <div className="social-icons">
          <div className="social-icon">
            <SocialIcon
              className="logo"
              url="https://github.com/Gr1ll"
              network="github"
              bgColor="#1b2a41"
              target="_blank"
            />
          </div>
          <div className="social-icon">
            <SocialIcon
              className="logo"
              url="https://stackoverflow.com/users/18949209/grill"
              network="stackoverflow"
              bgColor="#1b2a41"
              target="_blank"
            />
          </div>
          <div className="social-icon">
            <SocialIcon
              className="logo"
              url="https://x.com/DevGrillo"
              network="x"
              bgColor="#1b2a41"
              target="_blank"
            />
          </div>
        </div>
        <a onClick={scrollToAboutSection}>
          <div className="scroll-down">
            <FaArrowDownLong />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
