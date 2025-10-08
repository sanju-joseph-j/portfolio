import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      
      const scrollY = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      sections.forEach((current, index) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80; // navbar offset
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        // Normal highlight logic
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          document
            .querySelectorAll(".nav__menu a")
            .forEach((link) => link.classList.remove("active-link"));
          navLink?.classList.add("active-link");
        }

        // Special case: if you are past the Contact section and Footer is visible → keep Contact active
if (sectionId === "contact") {
  const footer = document.querySelector("footer");
  if (footer && scrollY + window.innerHeight >= footer.offsetTop) {
    document
      .querySelectorAll(".nav__menu a")
      .forEach((link) => link.classList.remove("active-link"));
    navLink?.classList.add("active-link");
  }
}


        // ✅ Special case: bottom of page → force last section active
        if (index === sections.length - 1 && scrollY >= maxScroll - 10) {
          document
            .querySelectorAll(".nav__menu a")
            .forEach((link) => link.classList.remove("active-link"));
          navLink?.classList.add("active-link");
        }

        // ✅ Special case: if footer is visible, keep Contact active
        if (sectionId === "contact") {
          const footer = document.querySelector("footer");
          if (footer && scrollY + window.innerHeight >= footer.offsetTop) {
            document
              .querySelectorAll(".nav__menu a")
              .forEach((link) => link.classList.remove("active-link"));
            navLink?.classList.add("active-link");
          }
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sanju Joseph
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualifications" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Qualifications
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
