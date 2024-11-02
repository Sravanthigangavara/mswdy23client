import React from 'react';
import './Maincontent.css';
//import Sidebar from './Sidebar';
function Sidebar() {
  return (
    <div className="sidebar">
  
      {/* Add other sidebar items here */}
    </div>
  );
}

function Card({ title, count, icon }) {
  return (
    <div className="card">
      <img src={icon} alt={title} />
      <div className="card-title">{title}</div>
      <div className="card-count">{count}</div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Sidebar />
      <div className="content-section">
        {/* <div className="welcome-message">Welcome 2300032939</div> */}
        {/* <div className="cards-container"> */}
          {/* <Card title="Journals & Conferences" count="0" icon="icon-url-1.png" /> */}
         
        </div>
      </div>
    // </div>
  );
}

export default MainContent;