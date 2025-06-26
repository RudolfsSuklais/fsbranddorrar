import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import Logo from "../../assets/fsbranddorrar_logo.png";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="hp-footer">
            <div className="hp-footer-container">
                <div className="hp-footer-col">
                    <div className="hp-footer-logo">
                        <img src={Logo} alt="FS Branddörrar Logo" />
                    </div>
                    <div className="hp-footer-company-info">
                        <p>Finestra Solution LTD</p>
                        <p>Department of Sweden</p>
                        <p>GUSTAV III:S BOULEVARD 34</p>
                        <p>169 73 Solna</p>
                    </div>
                </div>

                <div className="hp-footer-col">
                    <h3 className="hp-footer-heading">Länkar</h3>
                    <ul className="hp-footer-links">
                        <li>
                            <a href="/" className="hp-footer-link">
                                Hem
                            </a>
                        </li>
                        <li>
                            <a href="/produkter" className="hp-footer-link">
                                Produkter
                            </a>
                        </li>
                        <li>
                            <a href="/galleri" className="hp-footer-link">
                                Galleri
                            </a>
                        </li>
                        <li>
                            <a href="/om-oss" className="hp-footer-link">
                                Om Oss
                            </a>
                        </li>
                        <li>
                            <a href="/kontakt" className="hp-footer-link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hp-footer-col">
                    <h3 className="hp-footer-heading">Kontakt</h3>
                    <div className="hp-footer-contact">
                        <div className="hp-footer-contact-item">
                            <FaMapMarkerAlt className="hp-footer-contact-icon" />
                            <span>GUSTAV III:S BOULEVARD 34, 169 73 Solna</span>
                        </div>
                        <div className="hp-footer-contact-item">
                            <FaEnvelope className="hp-footer-contact-icon" />
                            <a
                                href="mailto:info@fsbranddorrar.se"
                                className="hp-footer-link">
                                info@fsbranddorrar.se
                            </a>
                        </div>
                        <div className="hp-footer-contact-item">
                            <FaPhone className="hp-footer-contact-icon" />
                            <a
                                href="tel:+46724547821"
                                className="hp-footer-link">
                                +46 724547821
                            </a>
                        </div>
                    </div>

                    <div className="hp-footer-social">
                        <a
                            href="#"
                            className="hp-footer-social-link"
                            aria-label="Facebook">
                            <FaFacebook className="hp-footer-social-icon" />
                        </a>
                        <a
                            href="#"
                            className="hp-footer-social-link"
                            aria-label="Instagram">
                            <FaInstagram className="hp-footer-social-icon" />
                        </a>
                        <a
                            href="#"
                            className="hp-footer-social-link"
                            aria-label="LinkedIn">
                            <FaLinkedin className="hp-footer-social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hp-footer-bottom">
                <div className="hp-footer-copyright">
                    &copy; {new Date().getFullYear()} Finestra Solution LTD.
                    Alla rättigheter reserverade.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
