import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="container">
            <h1 className="main-title">Welcome to AI Research Agent</h1>
            <p className="sub-text">Search for any research paper and get the answer! Click the button below to get started.</p>
            <a href="/ai-agent" className="action-button">Go to AI Agent</a>
        </div>
    );
};

export default Home;
