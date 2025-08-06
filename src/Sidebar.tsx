import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/ai-agent" onClick={toggleSidebar}>AI Agent</Link></li>
            <li><Link to="/how-it-works" onClick={toggleSidebar}>How It Works</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
