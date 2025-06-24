import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductsSection.css";
import image1 from "../assets/PE78EI_Design-Line_EI30-1-1.webp";

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState("aluminium");

    const products = {
        aluminium: [
            {
                id: 1,
                title: "PE78EI DESIGN LINE ",
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
                title: "Linear Minimalist",
                description: "Floor-to-ceiling aluminium door systems",
                features: [
                    "Hidden hinges",
                    "Integrated smart lock",
                    "Soundproofing",
                ],
                badge: "NY",
            },
            {
                id: 3,
                title: "Heritage Flush",
                description: "Traditional design with modern performance",
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
