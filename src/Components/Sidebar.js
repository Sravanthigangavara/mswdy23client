import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [content, setContent] = useState(null);

    const handleHomeClick = () => {
        setContent(
            <div className="home-content">
                <h2>Home</h2>
                <p>Welcome to the Home page!</p>
            </div>
        );
    };

    const handleAcademicRegistrationClick = () => {
        setContent(
            <div className="academic-registration-content">
                <h2>Academic Registration</h2>
                <p>Here you can register for your courses and view your academic information.</p>
            </div>
        );
    };

    const handleAttendanceRegisterClick = () => {
        setContent(
            <div className="attendance-register-content">
                <h2>Attendance Register</h2>
                <p>Here you can view your attendance records.</p>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <button className="sidebar-item" onClick={handleHomeClick}>Home</button>
                <button className="sidebar-item" onClick={handleAcademicRegistrationClick}>Academic Registration</button>
                <button className="sidebar-item" onClick={handleAttendanceRegisterClick}>Attendance Register</button>
                <button className="sidebar-item">Career Choice</button>
                <button className="sidebar-item">Courses</button>
                <button className="sidebar-item">Counselling Diary</button>
                <button className="sidebar-item">Clubs/Activities</button>
                <button className="sidebar-item">Exam Section</button>
                <button className="sidebar-item">Feedback</button>
                <button className="sidebar-item">Fee Payments</button>
                <button className="sidebar-item">Hostel Management</button>
                <button className="sidebar-item">Hallticket</button>
            </div>
            <div className="content-section">
                {content}
            </div>
        </div>
    );
}

export default Sidebar;
