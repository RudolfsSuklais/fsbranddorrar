import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductsSection.css";
import image1 from "../assets/PE78EI_Design-Line_EI30-1-1.webp";
import image2 from "../assets/PE78EI_Design-Line_EI60-1-2.webp";
import image3 from "../assets/PE78EI_eco_EI30-1-1.webp";
import image4 from "../assets/PE78EI_Design-Line_EI90-1-1.webp";
import image5 from "../assets/PE78EI_Design-Line_EI120-1-1.webp";
import image6 from "../assets/PE78EI_kl_EI30-2.webp";
import image7 from "../assets/ponzio-pe78ei-kl-ei60-1-1-1.webp";
import image8 from "../assets/PE78EI_kl_EI90-1-1.webp";
import image9 from "../assets/PE78EI_okno_RU_kl_EI30-1-1.webp";
import image10 from "../assets/PE78EI_scianki_bezszprosowe_kl_EI30-1-1.webp";
import image11 from "../assets/PE78EI_scianki_bezszprosowe_kl_EI60-1-1.webp";
import image12 from "../assets/PF152EI_kl_EI30-1-1.webp";
import image13 from "../assets/PF152EI_kl_EI60-1-1.webp";
import image14 from "../assets/PF152EI_kl_EI60-1-1.webp";

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState("aluminium");

    const products = {
        aluminium: [
            {
                id: 1,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30",
                image: image1,
                features: [
                    "10-year warranty",
                    "Custom finishes",
                    "Bullet-resistant option",
                ],
                badge: "Bästsäljare",
            },
            {
                id: 2,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image2,
                features: [
                    "Hidden hinges",
                    "Integrated smart lock",
                    "Soundproofing",
                ],
                badge: "NY",
            },
            {
                id: 3,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30 ekonomivariant",
                image: image3,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 4,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image4,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 5,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI120",
                image: image5,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 6,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30",
                image: image6,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 7,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image7,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 8,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image8,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 9,
                title: "PE78EI",
                description: "klass EI30-TT fönster",
                image: image9,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 10,
                title: "PE78EI",
                description: "klass EI30 glasad skiljevägg med stötfog",
                image: image10,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 11,
                title: "PE78EI",
                description: "klass EI60 glasad skiljevägg med stötfog",
                image: image11,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 12,
                title: "PF152EI ",
                description: "klass EI30",
                image: image12,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 13,
                title: "PF152EI ",
                description: "klass EI60",
                image: image13,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },

            {
                id: 14,
                title: "PF152EI ",
                description: "klass EI60",
                image: image14,
                features: [
                    "Handcrafted details",
                    "Antique patina options",
                    "Historic compliance",
                ],
            },
        ],
        steel: [
            {
                id: 1,
                title: "Fortis Security",
                description: "Military-grade steel entry doors",
                features: [
                    "Ballistic-rated",
                    "Multi-point locking",
                    "Fireproof core",
                ],
                badge: "Flagship",
            },
            {
                id: 2,
                title: "Moderna Steel",
                description: "Contemporary steel pivot doors",
                features: [
                    "Slim 45mm profile",
                    "Full-height glass options",
                    "Custom etchings",
                ],
                badge: "Design Award",
            },
            {
                id: 3,
                title: "Artisan Forged",
                description: "Hand-forged steel masterpieces",
                features: [
                    "Custom designs",
                    "Blacksmith finishes",
                    "Lifetime warranty",
                ],
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
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
        <section className="hp-products">
            <div className="hp-products__container">
                <div className="hp-products__header">
                    <motion.h2
                        className="hp-products__title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}>
                        VÅRA PRODUKTER
                    </motion.h2>

                    <motion.div
                        className="hp-products__tabs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}>
                        <button
                            className={`hp-products__tab ${
                                activeTab === "aluminium" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("aluminium")}>
                            <span>ALUMINIUM</span>
                            {activeTab === "aluminium" && (
                                <motion.div
                                    className="hp-products__tab-indicator"
                                    layoutId="tab-indicator"
                                />
                            )}
                        </button>
                        <button
                            className={`hp-products__tab ${
                                activeTab === "steel" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("steel")}>
                            <span>STÅL</span>
                            {activeTab === "steel" && (
                                <motion.div
                                    className="hp-products__tab-indicator"
                                    layoutId="tab-indicator"
                                />
                            )}
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="hp-products__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}>
                    {products[activeTab].map((product) => (
                        <motion.div
                            key={product.id}
                            className="hp-products__card"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}>
                            {product.badge && (
                                <div className="hp-products__card-badge">
                                    {product.badge}
                                </div>
                            )}
                            <div className="hp-products__card-image">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                />
                                <div className="hp-products__card-overlay"></div>
                            </div>
                            <div className="hp-products__card-content">
                                <h3 className="hp-products__card-title">
                                    {product.title}
                                </h3>
                                <p className="hp-products__card-description">
                                    {product.description}
                                </p>
                                <ul className="hp-products__card-features">
                                    {product.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="hp-products__card-feature">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M20 6L9 17L4 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="hp-products__card-button">
                                    Explore Series
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
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
