import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import axios from "axios";
import { aboutMe } from "../../types/about-me";

import ReactMarkdown from "react-markdown";

function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState<aboutMe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "about-me/")
      .then((response) => {
        setAboutMeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="aboutMe">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p className="command-line">$ Who am I?</p>
          <ReactMarkdown
            className="response-line"
            children={aboutMeData?.response}
          />
          <p className="cursor-line">
            &gt;<span className="cursor4">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
