import { useState } from "react";

import "./DashBoard.css";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const labs = [
    {
      title: "Brute Force Simulation",
      description: "Understand password guessing through a controlled local simulation.",
      level: "Beginner",
      status: "Start Lab",
      icon: "⌘",
    },
    {
      title: "Password Security",
      description: "Analyze password strength, hashing, and secure storage.",
      level: "Beginner",
      status: "Start Lab",
      icon: "◈",
    },
    {
      title: "Authentication Testing",
      description: "Explore login validation and authentication defenses.",
      level: "Intermediate",
      status: "Coming Soon",
      icon: "⌁",
    },
  ];

  const activities = [
    { name: "Account Created", date: "Your lab journey starts here", status: "Complete" },
    { name: "Brute Force Simulation", date: "Practice environment", status: "Not Started" },
    { name: "Password Security", date: "Practice environment", status: "Not Started" },
  ];

  return (
    <div className="lab-dashboard">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">⌘</span>
          <span>CyberLab<span className="brand-dot">.</span></span>
        </div>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">
          {["Dashboard", "Challenges", "My Progress", "Activity", "Settings"].map(
            (item) => (
              <button
                key={item}
                className={`nav-item ${activeTab === item ? "active" : ""}`}
                onClick={() => setActiveTab(item)}
              >
                <span>{{
                  Dashboard: "▦",
                  Challenges: "⌘",
                  "My Progress": "◷",
                  Activity: "≋",
                  Settings: "⚙",
                }[item]}</span>
                {item}
              </button>
            )
          )}
        </nav>

        <div className="sidebar-bottom">
          <div className="online-indicator" />
          <div>
            <strong>Lab Environment</strong>
            <p>Local practice mode</p>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <div className="breadcrumb">Workspace / {activeTab}</div>
          <div className="user-menu">
            <div className="user-avatar">U</div>
            <div>
              <strong>Lab User</strong>
              <p>Security Learner</p>
            </div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">CYBERSECURITY TRAINING PLATFORM</p>
            <h1>{activeTab === "Dashboard" ? "Your Security Lab" : activeTab}</h1>
            <p className="welcome-description">
              Learn, experiment, and build practical cybersecurity skills
              in your controlled lab environment.
            </p>
          </div>
          <div className="system-status">
            <span className="status-dot" />
            Environment Ready
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">AVAILABLE LABS</span>
            <h2>03</h2>
            <p>Hands-on learning modules</p>
          </div>
          <div className="stat-card">
            <span className="stat-label">COMPLETED</span>
            <h2>00</h2>
            <p>Labs successfully completed</p>
          </div>
          <div className="stat-card">
            <span className="stat-label">TOTAL SCORE</span>
            <h2>0 <span className="score-unit">XP</span></h2>
            <p>Earn points by completing labs</p>
          </div>
          <div className="stat-card">
            <span className="stat-label">CURRENT STREAK</span>
            <h2>0 <span className="score-unit">days</span></h2>
            <p>Keep learning consistently</p>
          </div>
        </section>

        <section className="labs-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LEARN BY DOING</p>
              <h2>Available Labs</h2>
            </div>
            <button
              className="text-button"
              onClick={() => setActiveTab("Challenges")}
            >
              View all challenges →
            </button>
          </div>

          <div className="labs-grid">
            {labs.map((lab) => (
              <article className="lab-card" key={lab.title}>
                <div className="lab-card-top">
                  <div className="lab-icon">{lab.icon}</div>
                  <span className={`level-tag ${lab.level === "Intermediate" ? "intermediate" : ""}`}>
                    {lab.level}
                  </span>
                </div>
                <h3>{lab.title}</h3>
                <p className="lab-description">{lab.description}</p>
                <div className="lab-card-footer">
                  <span className="lab-duration">◷ Self-paced</span>
                  <button
                    className="start-button"
                    disabled={lab.status === "Coming Soon"}
                    onClick={() => {
                      if (lab.title === "Brute Force Simulation") {
                        window.location.href = "/labs/brute-force";
                      } else if (lab.title === "Password Security") {
                        window.location.href = "/labs/password-security";
                      }
                    }}
                  >
                    {lab.status}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="activity-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR LEARNING JOURNEY</p>
              <h2>Recent Activity</h2>
            </div>
            <button
              className="text-button"
              onClick={() => setActiveTab("Activity")}
            >
              View history →
            </button>
          </div>

          <div className="activity-table">
            <div className="activity-row activity-header">
              <span>ACTIVITY</span>
              <span>DETAILS</span>
              <span>STATUS</span>
            </div>
            {activities.map((activity) => (
              <div className="activity-row" key={activity.name}>
                <strong>{activity.name}</strong>
                <span className="activity-date">{activity.date}</span>
                <span className={`activity-status ${activity.status === "Complete" ? "complete" : ""}`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>CyberLab © 2026</span>
          <span>Practice responsibly. Test only authorized environments.</span>
        </footer>
      </main>
    </div>
  );
}