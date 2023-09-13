import React from 'react';
import './App.css';

import githubLogo from './assets/github.png';
import stackoverflowLogo from './assets/stackoverflow.png';
import xLogo from './assets/x.png';

function App() {
    return (
        <div className="App">
            <h1 className="title">Cyril</h1>
            <h2 className="subtitle">Software Developer Apprentice</h2>
            <div className="social-icons">
                <div className="social-icon">
                    <a href="https://github.com/Gr1ll" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="logo" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://stackoverflow.com/users/18949209/grill" target="_blank" rel="noopener noreferrer">
                        <img src={stackoverflowLogo} alt="Stack Overflow" className="logo" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://x.com/DevGrillo" target="_blank" rel="noopener noreferrer">
                        <img src={xLogo} alt="Twitter" className="logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;