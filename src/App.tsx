import React, { useState } from "react";
import "./App.css";
import mainContent from "./bodyContent/main";
import aboutContent from "./bodyContent/about";
import experienceContent from "./bodyContent/experience";
import projectsContent from "./bodyContent/projects";

function App() {
  const [bodyContent, setNewBodyContent] = useState(mainContent);
  return (
    <div id="app">
      <div id="header">
        <nav id="main-menu">
          <ul>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent(mainContent);
                }}
              >
                main()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent(aboutContent);
                }}
              >
                about()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent(experienceContent);
                }}
              >
                experience()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent(projectsContent);
                }}
              >
                projects()
              </button>
            </li>
          </ul>
        </nav>

        <input type="checkbox" id="hamburger-input" className="burger-shower" />
        <label id="hamburger-menu" htmlFor="hamburger-input">
          <nav id="sidebar-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent(mainContent);
                  }}
                >
                  main()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent(aboutContent);
                  }}
                >
                  about()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent(experienceContent);
                  }}
                >
                  experience()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent(projectsContent);
                  }}
                >
                  projects()
                </button>
              </li>
            </ul>
          </nav>
        </label>
      </div>
      <div id="body" className="gradient-border">
        <p dangerouslySetInnerHTML={{ __html: bodyContent }}></p>
      </div>
    </div>
  );
}

export default App;
