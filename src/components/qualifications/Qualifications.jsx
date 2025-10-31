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
                B.E. in Computer Science @LMEC, Madurai [2021-2025] - 76.6%
              </div>
              <div className="timeline__item">
                HSC in Computer Science @St. Britto HSS, Madurai [2020-2021] - Cum. : 65.40%
              </div>
              <div className="timeline__item">
                SSLC - @St. Britto HSS, Madurai [2018-2019] - 68%
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="qualification__timeline fade">
            <h3>Experience</h3>
            <div className="timeline">
              <div className="timeline__item">
                Full Stack Developer Intern @Marcello Tech, Trichy [7/2024-9/2024]
              </div>
            </div>
          </div>
        )}

        {activeTab === "certificate" && (
          <div className="qualification__timeline fade">
            <h3>Certificates</h3>
            <div className="timeline">
              <div className="timeline__item">Full stack development by Marcello tech 
                <a class="link" href="https://drive.google.com/file/d/1FhwpHk9y2X28mwFaQPcuQq20DLr2PbDy/view" target="blank"> - [LINK]</a>
              </div>
              <div className="timeline__item">Node.js Bootcamp by LetsUpgrade 
                 <a class="link" href="https://drive.google.com/file/d/1lVE5puetAueF3aMnRUvmtrVK1wgR26p9/view?usp=sharing" target="blank"> - [LINK]</a>
              </div>
              <div className="timeline__item">React Bootcamp by Scaler 
                 <a class="link" href="https://drive.google.com/file/d/1LVZOGzqjLCNHdEJosdBM2AeCuDmV4yVC/view?usp=sharing" target="blank"> - [LINK]</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
