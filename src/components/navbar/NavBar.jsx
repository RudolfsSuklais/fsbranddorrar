import { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../../assets/fsbranddorrar_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`hp-navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="hp-navbar-container">
                <a href="/" className="hp-logo">
                    <img src={Logo} alt="FS Branddörrar Logo" />
                </a>

                <div
                    className={`hp-hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    className={`hp-nav-links-container ${
                        isMenuOpen ? "active" : ""
                    }`}>
                    <ul className="hp-nav-links">
                        <li>
                            <a
                                href="/"
                                className="hp-nav-link"
                                onClick={toggleMenu}>
                                Hem
                            </a>
                        </li>
                        <li>
                            <a
                                href="/produkter"
                                className="hp-nav-link"
                                onClick={toggleMenu}>
                                Produkter
                            </a>
                        </li>
                        <li>
                            <a
                                href="/galleri"
                                className="hp-nav-link"
                                onClick={toggleMenu}>
                                Galleri
                            </a>
                        </li>
                        <li>
                            <a
                                href="/om-oss"
                                className="hp-nav-link"
                                onClick={toggleMenu}>
                                Om Oss
                            </a>
                        </li>
                        <li>
                            <a
                                href="/kontakt"
                                className="hp-nav-link"
                                onClick={toggleMenu}>
                                Kontakt
                            </a>
                        </li>
                    </ul>
                    <a className="hp-cta-button" href="/kontakt">
                        Boka Konsultation
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
