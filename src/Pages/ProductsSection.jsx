import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductsSection.css";
import { Link } from "react-router-dom";

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
import image14 from "../assets/dach_przeszklony_REI30_RE45-2-1.webp";
import image15 from "../assets/Ponzio_PF152ESG_EI30_2k_2023-2-1.webp";
import image16 from "../assets/PF152EI60_ESG_2k_2023-1-1.webp";

import i1 from "../assets/csm_Janisol-2-Tuer-Jansen_3495070f94-3.webp";
import i2 from "../assets/csm_Janisol-2-Fingerschutztuere-Jansen_fad3f8353a-1-2.webp";
import i3 from "../assets/csm_Jansen-Economy-50-E30-Jansen_f6a1e976f6-2.webp";
import i4 from "../assets/csm_Jansen-Economy-60-E30-Jansen_c31f7581f7-1-1.webp";
import i5 from "../assets/csm_Janisol-C4-Jansen_3fbd689c57-1-1.webp";
import i6 from "../assets/Janisol-1-window-Jansen.webp";
import i7 from "../assets/csm_Janisol-2-Brandschutzschiebetuer-Jansen_e454d1cf3e.webp";
import i8 from "../assets/csm_Janisol-2-EI60-EI30-Jansen_fe515a63fa.webp";
import i9 from "../assets/csm_VISS-Fire-TVS-Dachverglasung_5f4a6a09a3-1.webp";
import i10 from "../assets/csm_Viss-Fire-Fassade-Jansen_b2bf49bf1c-1-1.webp";
import i11 from "../assets/VISS-TVS-Fire-Jansen-scaled.webp";
import i12 from "../assets/VISS-Fire-Fassade_EI60-Jansen-scaled.webp";

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
                    "30 min brandmotstånd",
                    "Anodiserad eller pulverlackerad",
                    "Passar för höga säkerhetskrav",
                ],
                badge: "Populär",
            },
            {
                id: 2,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image2,
                features: [
                    "60 min brandmotstånd",
                    "Förstärkt konstruktion",
                    "Värmebrytande profil",
                ],
                badge: "Premium",
            },
            {
                id: 3,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30 ekonomivariant",
                image: image3,
                features: [
                    "Kostnadseffektiv lösning",
                    "30 min brandskydd",
                    "Enkel installation",
                ],
            },
            {
                id: 4,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image4,
                features: [
                    "90 min brandmotstånd",
                    "Extra tjock isolering",
                    "Industrikvalitet",
                ],
                badge: "Högpresterande",
            },
            {
                id: 5,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI120",
                image: image5,
                features: [
                    "120 min brandskydd",
                    "Specialdesignad för extrem säkerhet",
                    "Certifierad för offentliga byggnader",
                ],
                badge: "Topklass",
            },
            {
                id: 6,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30",
                image: image6,
                features: [
                    "Smidig design",
                    "Lättvikt aluminium",
                    "Anpassningsbar färg",
                ],
            },
            {
                id: 7,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image7,
                features: [
                    "Dubbel tätning",
                    "Automatisk slutning",
                    "Handtagslös design",
                ],
            },
            {
                id: 8,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image8,
                features: [
                    "Hög säkerhetsklass",
                    "Specialglas",
                    "Integrerad rökavskiljning",
                ],
            },
            {
                id: 9,
                title: "PE78EI",
                description: "klass EI30-TT fönster",
                image: image9,
                features: [
                    "Brandsäkert fönster",
                    "Termisk brytning",
                    "Energisnål design",
                ],
            },
            {
                id: 10,
                title: "PE78EI",
                description: "klass EI30 glasad skiljevägg med stötfog",
                image: image10,
                features: [
                    "Sömlös design",
                    "Ljudisolerande",
                    "Maximal ljusinsläpp",
                ],
            },
            {
                id: 11,
                title: "PE78EI",
                description: "klass EI60 glasad skiljevägg med stötfog",
                image: image11,
                features: [
                    "60 min brandskydd",
                    "Stor spännvidd",
                    "Arkitektonisk flexibilitet",
                ],
            },
            {
                id: 12,
                title: "PF152EI",
                description: "klass EI30",
                image: image12,
                features: [
                    "Extra bred profil",
                    "Hög lastkapacitet",
                    "Modern minimalistisk design",
                ],
            },
            {
                id: 13,
                title: "PF152EI",
                description: "klass EI60",
                image: image13,
                features: [
                    "Stabil konstruktion",
                    "Lång livslängd",
                    "Underhållsfritt",
                ],
            },
            {
                id: 14,
                title: "PF152EI",
                description: "klass REI30/RE45 glasat tak",
                image: image14,
                features: [
                    "Takglas med brandskydd",
                    "UV-filter",
                    "Regn- och vindtät",
                ],
                badge: "Innovativ",
            },
            {
                id: 15,
                title: "PF152ESG",
                description: "klass EI30",
                image: image15,
                features: ["Säkerhetsglas", "Hög transparens", "Skärskyddad"],
            },
            {
                id: 16,
                title: "PF152ESG",
                description: "klass EI60",
                image: image16,
                features: [
                    "Dubbla säkerhetsglas",
                    "Extra stark konstruktion",
                    "Lång garanti",
                ],
            },
        ],
        steel: [
            {
                id: 1,
                title: "EI30",
                description: "Branddörrar och brandsäkra skiljeväggar",
                image: i1,
                features: [
                    "30 min brandmotstånd",
                    "Hållbart stål",
                    "Korrosionsskyddad",
                ],
                badge: "Standard",
            },
            {
                id: 2,
                title: "EI30",
                description: "Branddörrar med finger nypa skydd",
                image: i2,
                features: [
                    "Skydd mot fingerskador",
                    "Säker för barn",
                    "Enkel manövrering",
                ],
            },
            {
                id: 3,
                title: "Economy 50 E30/EW30/E60/EW60",
                description: "Branddörrar och brandklassade skiljeväggar",
                image: i3,
                features: [
                    "Kostnadseffektiv",
                    "Snabb installation",
                    "Grundläggande brandskydd",
                ],
                badge: "Budget",
            },
            {
                id: 4,
                title: "Economy 60 E30/EW30/E60/EW60",
                description: "brandskyddsdörrar",
                image: i4,
                features: ["60 minuters skydd", "Förstärkt karm", "Tung duty"],
            },
            {
                id: 5,
                title: "C4 EI60 / EI90",
                description: "brandskyddsdörr",
                image: i5,
                features: [
                    "Avancerad brandteknologi",
                    "Hög säkerhetsnivå",
                    "Professionell installation krävs",
                ],
                badge: "Avancerad",
            },
            {
                id: 6,
                title: "Brandsäkra",
                description: "fönster",
                image: i6,
                features: [
                    "Brandsäkert glas",
                    "Ventilerbar",
                    "Nödutrymningsfunktion",
                ],
            },
            {
                id: 7,
                title: "Brandsäker",
                description: "skjutdörr",
                image: i7,
                features: [
                    "Glidande mekanism",
                    "Kompakt design",
                    "Automatisk brandavstängning",
                ],
                badge: "Platsbesparande",
            },
            {
                id: 8,
                title: "Kombinationsbrandskydd",
                description: "EI30 70 mm",
                image: i8,
                features: [
                    "Multi-funktionell",
                    "Extra tjock konstruktion",
                    "Ljudisolerande",
                ],
            },
            {
                id: 9,
                title: "Brandskyddande",
                description: "takglas",
                image: i9,
                features: [
                    "Taklösning med brandskydd",
                    "Maximal dagsljusinsläpp",
                    "Väderbeständig",
                ],
                badge: "Speciallösning",
            },
            {
                id: 10,
                title: "Brandfasad",
                description: "",
                image: i10,
                features: [
                    "Hel fasadlösning",
                    "Arkitektonisk integration",
                    "Hög prestanda",
                ],
            },
            {
                id: 11,
                title: "Brand",
                description: "EI30 fasad",
                image: i11,
                features: ["30 min brandskydd", "Modern design", "Energisnål"],
            },
            {
                id: 12,
                title: "Brandfasad",
                description: "EI60 fasad",
                image: i12,
                features: [
                    "60 min brandmotstånd",
                    "Storformat",
                    "Specialbeställd",
                ],
                badge: "Premium",
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
                                <Link
                                    to={`/produkter/${activeTab}/${product.id}`}
                                    className="hp-products__card-button">
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
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
