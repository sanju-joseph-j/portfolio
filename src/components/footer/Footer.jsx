import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sanju Joseph</h1>
                <ul className="footer__list">
                <li>
                    <a href="#qualifications" className="footer__link"><u>Qualifications</u></a>
                </li>

                <li>
                    <a href="#skills" className="footer__link"><u>Skills</u></a>
                </li>

                <li>
                    <a href="#projects" className="footer__link"><u>Projects</u></a>
                </li>
                </ul>

                <div className="footer__social">
                <a href="https://github.com/sanju-joseph-j" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt oci"></i>
            </a>

            <a href="https://www.linkedin.com/in/sanju-joseph-j" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin-alt oci"></i>
            </a>

            <a href="https://www.instagram.com/sanjujosephofficial/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-instagram oci"></i>
            </a>
                </div>

                <span className="footer__copy">Copyright &#169;2025 All rights reserved | Designed and Developed by Sanju Joseph.</span>
            </div>
        </footer>
    )
}

export default Footer