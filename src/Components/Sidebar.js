import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [content, setContent] = useState(null);

    const handleHomeClick = () => {
        setContent(
            <div className="page-layout">
                <h2>Home</h2>
                <p>Welcome to your academic portal! Use the sidebar .</p>
                <p>Here, you can access recent announcements and check your notifications.</p>
            </div>
        );
    };

    const handleAcademicRegistrationClick = () => {
        setContent(
            <div className="page-layout">
                <h2>Academic Registration</h2>
                <p>Register for courses, drop courses, or view your academic record all in one place.</p>
                <h3>Available Courses</h3>
                <ul>
                    <li>Mathematics 101</li>
                    <li>Physics 202</li>
                    <li>Chemistry 301</li>
                    <li>Computer Science 101</li>
                </ul>
                <button className="register-button">Register for Selected Courses</button>
            </div>
        );
    };

    const handleAttendanceRegisterClick = () => {
        setContent(
            <div className="page-layout">
                <h2>Attendance Register</h2>
                <p>View and monitor your attendance to ensure you meet course requirements.</p>
                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Total Sessions</th>
                            <th>Attended</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics 101</td>
                            <td>30</td>
                            <td>28</td>
                            <td>93%</td>
                        </tr>
                        <tr>
                            <td>Physics 202</td>
                            <td>25</td>
                            <td>20</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>Chemistry 301</td>
                            <td>20</td>
                            <td>18</td>
                            <td>90%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const handleCoursesClick = () => {
        setContent(
            <div className="card">
                <h2>Courses</h2>
                <p>Access your enrolled courses, assignments, and other resources directly from here.</p>
            </div>
        );
    };

    const handleCounsellingDiaryClick = () => {
        setContent(
            <div className="card">
                <h2>Counselling Diary</h2>
                <p>Record your counseling sessions and gain insights from your advisors to make informed decisions.</p>
            </div>
        );
    };

    // Other handlers with page layout
    const handleCareerChoiceClick = () => {
        setContent(
            <div className="page-layout">
                <h2>Career Choice</h2>
                <p>Explore various career paths based on your interests and academic performance.</p>
                <ul>
                    <li>Data Science</li>
                    <li>Software Engineering</li>
                    <li>Research and Development</li>
                </ul>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <button className="sidebar-item" onClick={handleHomeClick}>Home</button>
                <button className="sidebar-item" onClick={handleAcademicRegistrationClick}>Academic Registration</button>
                <button className="sidebar-item" onClick={handleAttendanceRegisterClick}>Attendance Register</button>
                <button className="sidebar-item" onClick={handleCareerChoiceClick}>Career Choice</button>
                <button className="sidebar-item" onClick={handleCoursesClick}>Courses</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Counselling Diary</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Club/Activities</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Exam section</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Feedback</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>FeePayments</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>HostelMangement</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Hallticket</button>
                <button className="sidebar-item" onClick={handleCounsellingDiaryClick}>Timetable</button>
            </div>
            <div className="content-section">
                {content}
            </div>
        </div>
    );
}

export default Sidebar;