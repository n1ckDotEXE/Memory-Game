import React from 'react';
import Card from './components/Card';
import MemoryCard from './MemoryCard.js';

import './App.css';

function App() {
  const projects = [
    { name: 'Project 1', likes: 10 },
    { name: 'Project 2', likes: 10 },
    { name: 'Project 3', likes: 10 },
    { name: 'Project 4', likes: 10 },
    { name: 'Project 5', likes: 10 },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        <h4 class="subtitle">Match Cards to Win!</h4>
      </div>
      { projects.map((project, index) => {
        return <Card
          name={project.name}
          key={index} 
          likes={project.likes}
          ></Card>
      })}
    </div>
  );
}

export default App;