import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiZoomIn } from "react-icons/fi";
import "./Gallery.css";

import alicante_1 from "../assets/alicante/alicante-spain-1.jpg";
import ventspils_1 from "../assets/ventspils/ventspils-3.jpg";
import graalen_1 from "../assets/graalen/graalen-3.jpg";
import dsv_1 from "../assets/DSV-1.jpg";
import arte_1 from "../assets/arte-1.jpg";
import tukums_1 from "../assets/tukums-1.jpg";
import liepaja_1 from "../assets/liepaja-1.jpg";
import aby_1 from "../assets/aby-1.jpg";
import havstorent_1 from "../assets/havstorent-1.jpg";
import orion_1 from "../assets/orion-1.jpg";
import betonproces_1 from "../assets/betonproces-1.jpg";
import kristinesberg_1 from "../assets/kristinesberg-1.jpg";

// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        title: "ALICANTE SPAIN",
        image: alicante_1,
        category: "Residential",
    },
    {
        id: 2,
        title: "VENTSPILS LATVIA",
        image: ventspils_1,
        category: "Commercial",
    },
    {
        id: 3,
        title: "GRÅALEN, NORRTÄLJE",
        image: graalen_1,
        category: "Residential",
    },
    {
        id: 4,
        title: "DSV, LOGISTIC CENTER, DENMARK",
        image: dsv_1,
        category: "Commercial",
    },
    {
        id: 5,
        title: "ARTE, LATVIA",
        image: arte_1,
        category: "Residential",
    },
    {
        id: 6,
        title: "TUKUMS, LATVIA",
        image: tukums_1,
        category: "Commercial",
    },
    {
        id: 7,
        title: "LIEPAJA, LATVIA",
        image: liepaja_1,
        category: "Residential",
    },
    {
        id: 8,
        title: "ABY ANGAR, SWEDEN",
        image: aby_1,
        category: "Commercial",
    },

    {
        id: 9,
        title: "HAVSTORENT, SWEDEN",
        image: havstorent_1,
        category: "Commercial",
    },

    {
        id: 10,
        title: "ORION, SWEDEN",
        image: orion_1,
        category: "Commercial",
    },

    {
        id: 11,
        title: "BETONPROCES 20, SWEDEN",
        image: betonproces_1,
        category: "Commercial",
    },

    {
        id: 12,
        title: "KRISTINESBERG SLOTTSPARK, SWEDEN",
        image: kristinesberg_1,
        category: "Commercial",
    },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filter projects by category
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Add this to your Gallery component
    useEffect(() => {
        const createParticles = () => {
            const container = document.querySelector(".hp-particles");
            if (!container) return;

            // Clear existing particles
            container.innerHTML = "";

            // Create particles based on screen size
            const particleCount = Math.floor(window.innerWidth / 20);

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.classList.add("hp-particle");

                // Random properties
                const size = Math.random() * 5 + 1;
                const posX = Math.random() * window.innerWidth;
                const delay = Math.random() * 15;
                const duration = 10 + Math.random() * 20;

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}px`;
                particle.style.bottom = `-10px`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;

                container.appendChild(particle);
            }
        };

        createParticles();
        window.addEventListener("resize", createParticles);

        return () => {
            window.removeEventListener("resize", createParticles);
        };
    }, []);

    return (
        <div className="hp-gallery">
            <div className="hp-particles"></div>
            {/* Hero Section */}
            <section className="hp-gallery-hero">
                <motion.div
                    className="hp-gallery-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="hp-gallery-title">Våra Projekt</h1>
                    <p className="hp-gallery-subtitle">
                        Utforska vårt portfölj av exklusiva dörrlösningar för
                        både privata och kommersiella utrymmen.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            {isLoading ? (
                <div className="hp-gallery-loading">
                    <div className="hp-loading-spinner"></div>
                </div>
            ) : (
                <motion.div
                    className="hp-gallery-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="hp-project-card"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                                }}>
                                <div className="hp-project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="hp-project-image"
                                    />
                                    <div className="hp-project-overlay">
                                        <button
                                            className="hp-view-details"
                                            onClick={() =>
                                                setSelectedProject(project)
                                            }>
                                            <FiZoomIn size={24} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hp-project-info">
                                    <h3 className="hp-project-title">
                                        {project.title}
                                    </h3>
                                    <span className="hp-project-category">
                                        {project.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="hp-project-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}>
                        <motion.div
                            className="hp-modal-content"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                className="hp-modal-close"
                                onClick={() => setSelectedProject(null)}>
                                &times;
                            </button>

                            <div className="hp-modal-image-container">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="hp-modal-image"
                                />
                            </div>

                            <div className="hp-modal-info">
                                <h2 className="hp-modal-title">
                                    {selectedProject.title}
                                </h2>
                                <span className="hp-modal-category">
                                    {selectedProject.category}
                                </span>
                                <p className="hp-modal-description">
                                    {/* You can add project descriptions here */}
                                    Detta exklusiva projekt visar våra
                                    högkvalitativa dörrlösningar i en{" "}
                                    {selectedProject.category.toLowerCase()}{" "}
                                    miljö.
                                </p>
                                <a className="hp-modal-cta" href="/kontakt">
                                    Kontakta oss för liknande lösning
                                    <FiArrowRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
