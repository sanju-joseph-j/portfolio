import React, { useState, useEffect } from "react";
import "./Projects.css";
import P1 from "../../assets/p1.jpeg";
import P2 from "../../assets/p2.jpeg";
import P3 from "../../assets/p3.jpeg";
import UP from "../../assets/up.jpeg";

const projects = [
  {
    title: "Dream Home Finder",
    desc: "To find your dream home at very good price",
    img: P1,
    link: "https://sanju-joseph-j.github.io/dream_home/"
  },
  {
    title: "AI - Smart Survillance System",
    desc: "To survillance your Home & Office effortlessly",
    img: P2,
    link: "https://smart-surveillance-59mi.onrender.com"
  },
  {
    title: "Portfolio",
    desc: "My personal Portfolio website with a clean B&W professional UI",
    img: P3,
    link: "https://sanju-joseph-j.github.io/portfolio/"
  },
  {
    title: "Upcoming Project",
    desc: "Stay tuned to see my next project, Date will be announced soon",
    img: UP,
    link: "Null"
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const getClassName = (index) => {
    if (index === currentIndex) return "projects__card active"; // center big
    if (index === (currentIndex - 1 + projects.length) % projects.length)
      return "projects__card left"; // left small
    if (index === (currentIndex + 1) % projects.length)
      return "projects__card right"; // right small
    return "projects__card hidden"; // hide others
  };

  // ✅ Swipe support
  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        // swipe left → next
        handleNext();
      } else if (endX - startX > 50) {
        // swipe right → prev
        handlePrev();
      }
    };

    const carousel = document.querySelector(".projects__carousel");
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex]);

  return (
    <section className="projects__section" id="projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__carousel">
        <button className="projects__btn left" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="projects__cards">
          {projects.map((project, i) => (
            <div key={i} className={getClassName(i)}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>

        <button className="projects__btn right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
