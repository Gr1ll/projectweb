import React, { useState, useEffect } from 'react';
import "./AboutMe.css";
import Menu from "../../menu/Menu";
import axios from 'axios';
import {aboutMe} from "../../types/about-me";

function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState<aboutMe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.cyrilk.dev/about-me/')
        .then(response => {
          setAboutMeData(response.data[0]);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
      <div>
        <Menu />
        <div className="aboutMe">
          <div className="fakeMenu">
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
          </div>
          <div className="fakeScreen">
            <p className="command-line">$ Who am I?</p>
            <p className="response-line">
              {aboutMeData?.response1}
            </p>
            <p className="response-line">
              {aboutMeData?.response2}
            </p>
            <p className="response-line">
              {aboutMeData?.response3}
            </p>
            <p className="response-line">
              Make sure to check out my{" "}
              <a href="https://www.github.com/Gr1ll" target="_blank" rel="noopener noreferrer">
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
