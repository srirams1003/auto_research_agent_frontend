import React from 'react';
import './HowItWorks.css'; // We'll create this file for styling

const HowItWorks: React.FC = () => {
  return (
    <div className="main-content">
      <h2 className="title-text">How It Works</h2>
      
      <div className="flowchart-container">
        <div className="flowchart-item">
          <div className="image-circle">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack-vol-1/magnifying-glass-16.png" alt="Step 1" className="flowchart-image" />
          </div>
          <p className="image-description">Enter query in the search <br/> bar</p>
        </div>
        <div className="arrow"></div>
        <div className="flowchart-item">
          <div className="image-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFYCnCKjp3ix4thw5lIcJpqErFdpcd76L-A&s" alt="Step 2" className="flowchart-image" />
          </div>
          <p className="image-description">Uses Ai to breakdown <br/> query</p>
        </div>
        <div className="arrow"></div>
        <div className="flowchart-item">
          <div className="image-circle">
            <img src="https://static.thenounproject.com/png/2018293-200.png" alt="Step 3" className="flowchart-image" />
          </div>
          <p className="image-description">Searches arxiv database for <br/> relevant sources</p>
        </div>
        <div className="arrow"></div>
        <div className="flowchart-item">
          <div className="image-circle">
            <img src="https://tankhuynh.com/wp-content/uploads/2016/08/Screen-Shot-2016-08-27-at-9.04.46-PM.png" alt="Step 4" className="flowchart-image" />
          </div>
          <p className="image-description">Summarizes and returns <br/> results</p>
        </div>
      </div>

    </div>
  );
};

export default HowItWorks;