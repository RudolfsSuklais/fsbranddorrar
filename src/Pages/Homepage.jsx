import React from "react";
import { motion } from "framer-motion";
import "./Homepage.css";
import ProductsSection from "./ProductsSection";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Homepage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <div>
            <Helmet>
                <title>
                    Strukturell Elegans | Premium Aluminium & Stål Lösningar
                </title>
                <meta
                    name="description"
                    content="Strukturell Elegans erbjuder skräddarsydda lösningar i aluminium och stål för modern arkitektur. Grundad 2016 med fokus på kvalitet, design och precision."
                />
                <meta
                    name="keywords"
                    content="aluminium konstruktion, stålbyggnad, arkitektur, byggnadsdesign, strukturell design, fönster, dörrar, fasadsystem"
                />

                {/* Open Graph / Social Media */}
                <meta
                    property="og:title"
                    content="Strukturell Elegans | Premium Aluminium & Stål Lösningar"
                />
                <meta
                    property="og:description"
                    content="Skräddarsydda lösningar i aluminium och stål för modern arkitektur. Kombination av styrka, stil och precision."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.strukturellelegans.se"
                />
                <meta
                    property="og:image"
                    content="https://www.strukturellelegans.se/images/og-image.jpg"
                />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Strukturell Elegans | Premium Aluminium & Stål Lösningar"
                />
                <meta
                    name="twitter:description"
                    content="Skräddarsydda lösningar i aluminium och stål för modern arkitektur. Kombination av styrka, stil och precision."
                />
                <meta
                    name="twitter:image"
                    content="https://www.strukturellelegans.se/images/twitter-image.jpg"
                />
            </Helmet>
            <section className="hp-hero">
                <div className="hp-hero__background">
                    <div className="hp-hero__background-overlay"></div>
                </div>

                <div className="hp-hero__container">
                    <motion.div
                        className="hp-hero__content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <div className="hp-hero__text-container">
                            <motion.div
                                className="hp-hero__label"
                                variants={itemVariants}>
                                <span>Grundad 2016</span>
                                <div className="hp-hero__label-line"></div>
                            </motion.div>

                            <motion.h1
                                className="hp-hero__headline"
                                variants={itemVariants}>
                                <span className="hp-hero__headline--thin">
                                    Strukturell
                                </span>
                                <span className="hp-hero__headline--bold">
                                    Elegans
                                </span>
                            </motion.h1>

                            <motion.p
                                className="hp-hero__subheadline"
                                variants={itemVariants}>
                                Aluminium och Stål – skräddarsytt för modern
                                arkitektur med styrka, stil och precision
                            </motion.p>

                            <motion.div
                                className="hp-hero__cta-container"
                                variants={itemVariants}>
                                <Link to="/produkter">
                                    <motion.button
                                        className="hp-hero__cta-button"
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor:
                                                "rgba(255,255,255,0.1)",
                                            borderColor:
                                                "rgba(255,255,255,0.5)",
                                        }}
                                        whileTap={{ scale: 0.98 }}>
                                        <span>SE PRODUKTER</span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.button>
                                </Link>

                                <a
                                    href="/kontakt"
                                    className="hp-hero__secondary-link">
                                    <span>KONTAKTA OSS</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M6 12L10 8L6 4"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hp-hero__product-container"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}>
                        <div className="hp-hero__product-image">
                            <div className="hp-hero__product-badge">
                                <span>Utvalda projekt</span>
                                <div className="hp-hero__product-badge-line"></div>
                            </div>
                            <div className="hp-hero__product-features">
                                <div className="hp-hero__product-feature">
                                    <span>Värmebrytteknik</span>
                                </div>
                                <div className="hp-hero__product-feature">
                                    <span>Anpassad anodiserad yta</span>
                                </div>
                                <div className="hp-hero__product-feature">
                                    <span>Skräddarsydd stålkonstruktion</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ProductsSection />
        </div>
    );
};

export default Homepage;
