import React, { useState } from "react";
import "./App.css";

function App() {
  const [bodyContent, setNewBodyContent] = useState("main");

  return (
    <div id="app">
      <div id="header">
        <nav id="main-menu">
          <ul>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent("main");
                }}
              >
                main()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent("about");
                }}
              >
                about()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent("experience");
                }}
              >
                experience()
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setNewBodyContent("projects");
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
                    setNewBodyContent("main");
                  }}
                >
                  main()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent("about");
                  }}
                >
                  about()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent("experience");
                  }}
                >
                  experience()
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setNewBodyContent("projects");
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
        <p>{bodyContent}</p>
      </div>
    </div>
  );
}

export default App;
