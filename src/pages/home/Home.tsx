import "./Home.css";
import Menu from "../../menu/Menu";

import { SocialIcon } from 'react-social-icons'

function Home() {
  return (
    <div>
      <Menu />
      <div className="Home">
        <h1 className="title">Cyril</h1>
        <h2 className="subtitle">Software Engineer Apprentice</h2>
        <div className="social-icons">
          <div className="social-icon">
            <SocialIcon className="logo"  url="https://github.com/Gr1ll" network="github" bgColor="#1e2124"/>
          </div>
          <div className="social-icon">
            <SocialIcon className="logo" url="https://stackoverflow.com/users/18949209/grill" network="stackoverflow" bgColor="#1e2124"/>
          </div>
          <div className="social-icon">
            <SocialIcon className="logo"  url="https://x.com/DevGrillo" network="x" bgColor="#1e2124"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
