import { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../../assets/fsbranddorrar_logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    // Helper function to check if a path is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={`hp-navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="hp-navbar-container">
                <Link to="/" className="hp-logo">
                    <img src={Logo} alt="FS Branddörrar Logo" />
                </Link>

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
                            <Link
                                to="/"
                                className={`hp-nav-link ${
                                    isActive("/") ? "active" : ""
                                }`}
                                onClick={toggleMenu}>
                                Hem
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/produkter"
                                className={`hp-nav-link ${
                                    isActive("/produkter") ? "active" : ""
                                }`}
                                onClick={toggleMenu}>
                                Produkter
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/galleri"
                                className={`hp-nav-link ${
                                    isActive("/galleri") ? "active" : ""
                                }`}
                                onClick={toggleMenu}>
                                Galleri
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/om-oss"
                                className={`hp-nav-link ${
                                    isActive("/om-oss") ? "active" : ""
                                }`}
                                onClick={toggleMenu}>
                                Om Oss
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/kontakt"
                                className={`hp-nav-link ${
                                    isActive("/kontakt") ? "active" : ""
                                }`}
                                onClick={toggleMenu}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    <Link className="hp-cta-button" to="/kontakt">
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
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
