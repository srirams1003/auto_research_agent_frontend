import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import AIAgent from './AIAgent';
import HowItWorks from './HowItWorks';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
