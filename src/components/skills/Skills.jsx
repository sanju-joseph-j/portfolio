import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const tabs = ["hard", "soft"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("hard");
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const hardSkills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js",
    "Express.js", "MongoDB", "API Integrations", "Version Control (Git & Github)", "Server Management",
    "Database Management", "Security Management", "Testing & Debugging", "Deployment", "DSA",
    "Devops", "CI/CD", "Cloud Computing"
  ];

  const softSkills = [
    "Designing Skills", "Attention to Details", "Professionalism",
    "Continuous Learning", "Project Management", "Time Management", "Creative Thinking",
    "Decision Making", "Problem Solving", "Communication",
    "Collaboration", "Leadership", "Teamwork",
    "Adaptability", "Patience", "Work Ethic"
  ];

  // Auto-rotate every 5s unless paused
  useEffect(() => {
    let index = tabs.indexOf(activeTab);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        index = (index + 1) % tabs.length;
        setActiveTab(tabs[index]);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeTab, isPaused]);

  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>

      {/* Tab Buttons */}
      <div className="skills__tabs">
        <button
          className={`skills__tab ${activeTab === "hard" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("hard");
            setIsPaused(true);
          }}
        >
          Hard Skills
        </button>
        <button
          className={`skills__tab ${activeTab === "soft" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("soft");
            setIsPaused(true);
          }}
        >
          Soft Skills
        </button>
      </div>

      {/* Tab Content */}
      <div
        className="skills__content"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {activeTab === "hard" && (
          <div className="skills__box fade">
            <h3>Hard Skills</h3>
            <div className="skills__list">
              {hardSkills.map((skill, i) => (
                <span key={i} className="skills__item">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "soft" && (
          <div className="skills__box fade">
            <h3>Soft Skills</h3>
            <div className="skills__list">
              {softSkills.map((skill, i) => (
                <span key={i} className="skills__item">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
