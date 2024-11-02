import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import HomePage from './Components/Maincontent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
