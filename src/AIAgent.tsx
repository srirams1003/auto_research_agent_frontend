import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // You can rename this to AIAgent.css if you prefer

const AIAgent = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:8000/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setResult("Error fetching result.");
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AI Research Agent</h1>
      <div className="card">
        <p>
          Ask Any Questions and get answers from the latest research papers
        </p>
      </div>
      
      {/* Loading Animation */}
      {loading && (
        <div className="loading-container">
          <div className="mini-logo-container">
            <img src={reactLogo} className="mini-logo" alt="React logo" />
          </div>
          <p className="fetching-text">Fetching your result...</p>
        </div>
      )}
      
      {result && (
        <div style={{ marginTop: "1rem", backgroundColor: "gray", padding: "10px", borderRadius: "10px" }}>
          <h3 style={{ color: "rgb(4, 0, 128)" }}>Result:</h3>
          <p style={{ color: "black", backgroundColor: "white", padding: "15px", borderRadius: "20px", margin: "10px", border: "1px solid black" }}>{result}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem", backgroundColor: "gray", padding: "10px", borderRadius: "10px" }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter your research question"
          style={{ width: "500px", marginRight: "1rem", borderRadius: "10px", height: "35px", color: "black", backgroundColor: "white"}}
        />
        <button type="submit" disabled={loading || !query}>
          {loading ? "Searching..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default AIAgent;
