import React, { useState, useEffect, useRef } from "react";
import "./Qualifications.css";

// ✅ Moved outside to avoid ESLint dependency warning
const tabs = ["education", "experience", "certificate"];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-rotate every 6s unless paused
  useEffect(() => {
    let index = tabs.indexOf(activeTab);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        index = (index + 1) % tabs.length;
        setActiveTab(tabs[index]);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeTab, isPaused]); // ✅ clean now

  return (
    <section className="qualification__section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>

      {/* Tab Buttons */}
      <div className="qualification__tabs">
        <button
          className={`qualification__tab ${
            activeTab === "education" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("education");
            setIsPaused(true);
          }}
        >
          Education
        </button>
        <button
          className={`qualification__tab ${
            activeTab === "experience" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("experience");
            setIsPaused(true);
          }}
        >
          Experience
        </button>
        <button
          className={`qualification__tab ${
            activeTab === "certificate" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("certificate");
            setIsPaused(true);
          }}
        >
          Certificates
        </button>
      </div>

      {/* Timeline Content */}
      <div
        className="qualification__content"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {activeTab === "education" && (
          <div className="qualification__timeline fade">
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline__item">
                B.E. CSE @LMEC Madurai [2021-2025] - 76%
              </div>
              <div className="timeline__item">
                HSC @St. Britto HSS Madurai [2020-2021] - 75%
              </div>
              <div className="timeline__item">
                SSLC - @St. Britto HSS Madurai [2018-2019] - 68%
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="qualification__timeline fade">
            <h3>Experience</h3>
            <div className="timeline">
              <div className="timeline__item">
                Full Stack Developer Intern @Marcello Tech Trichy [Jul 2024-Sep2024] Remote
              </div>
            </div>
          </div>
        )}

        {activeTab === "certificate" && (
          <div className="qualification__timeline fade">
            <h3>Certificates</h3>
            <div className="timeline">
              <div className="timeline__item">Certificate of internship completion of Full stack development by Marcello tech</div>
              <div className="timeline__item">Certificate of participation in React Bootcamp provided by Scaler</div>
              <div className="timeline__item">Certificate of achievement provided by Edunet foundation</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
