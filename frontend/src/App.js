import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [papers, setPapers] = useState([]);

  const handleSearch = () => {
    // Dummy papers (later will come from backend)
    const results = [
      {
        title: "Deep Learning for Image Recognition",
        authors: "A. Smith, B. Kumar",
      },
      {
        title: "Natural Language Processing with Transformers",
        authors: "C. Lee, D. Sharma",
      },
      {
        title: "Graph Neural Networks",
        authors: "J. Brown",
      },
    ];

    setPapers(results);
  };

  return (
    <div className="container">
      <h1>Research Paper Recommendation System</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter research topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results">
        {papers.map((paper, index) => (
          <div key={index} className="card">
            <h3>{paper.title}</h3>
            <p>{paper.authors}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;