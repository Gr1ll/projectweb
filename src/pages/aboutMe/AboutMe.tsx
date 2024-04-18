import "./AboutMe.css";

import Menu from "../../menu/Menu";

function AboutMe() {
  return (
    <div>
      <Menu />
      <div className="Home">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p className="command-line">$ Who am I?</p>
          <p className="response-line">
            I am an 18 Year old Software Engineer Apprentice from switzerland. I
            am currently in my 3rd year of apprenticeship.
          </p>
          <p className="response-line">
            I am interested in all kinds of technology. I love coding and
            solving problems.
          </p>
          <p className="response-line">
            I am fascinated by how technology works and how it can be used.
          </p>
          <p className="response-line">
            Make sure to check out my{" "}
            <a href="https://www.github.com/Gr1ll" target="_blank">
              GitHub
            </a>{" "}
            where my personal projects are viewable.
          </p>
          <p className="cursor-line">
            &gt;<span className="cursor4">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
