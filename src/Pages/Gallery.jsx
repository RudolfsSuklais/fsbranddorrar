import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiZoomIn } from "react-icons/fi";
import { Helmet } from "react-helmet";
import "./Gallery.css";

// Project Images
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

const projects = [
    {
        id: 1,
        title: "ALICANTE SPAIN",
        image: alicante_1,
        category: "Residential",
        description:
            "Exklusiva dörrlösningar för ett lyxigt bostadsprojekt i Alicante, Spanien.",
    },
    {
        id: 2,
        title: "VENTSPILS LATVIA",
        image: ventspils_1,
        category: "Commercial",
        description:
            "Hållbara dörrsystem för ett kommersiellt komplex i Ventspils, Lettland.",
    },
    {
        id: 3,
        title: "GRÅALEN, NORRTÄLJE",
        image: graalen_1,
        category: "Residential",
        description:
            "Skräddarsydda entrédörrar för ett bostadsområde i Norrtälje, Sverige.",
    },
    {
        id: 4,
        title: "DSV, LOGISTIC CENTER, DENMARK",
        image: dsv_1,
        category: "Commercial",
        description: "Industridörrar för DSV:s logistikcenter i Danmark.",
    },
    {
        id: 5,
        title: "ARTE, LATVIA",
        image: arte_1,
        category: "Residential",
        description:
            "Moderna dörrlösningar för bostadsprojektet Arte i Lettland.",
    },
    {
        id: 6,
        title: "TUKUMS, LATVIA",
        image: tukums_1,
        category: "Commercial",
        description: "Brandsäkra dörrsystem för kommersiellt bygge i Tukums.",
    },
    {
        id: 7,
        title: "LIEPAJA, LATVIA",
        image: liepaja_1,
        category: "Residential",
        description: "Energisnåla dörrlösningar för bostäder i Liepaja.",
    },
    {
        id: 8,
        title: "ABY ANGAR, SWEDEN",
        image: aby_1,
        category: "Commercial",
        description: "Specialdesignade industridörrar för Aby Angar i Sverige.",
    },
    {
        id: 9,
        title: "HAVSTORENT, SWEDEN",
        image: havstorent_1,
        category: "Commercial",
        description: "Havsbeständiga dörrsystem för kustområde i Sverige.",
    },
    {
        id: 10,
        title: "ORION, SWEDEN",
        image: orion_1,
        category: "Commercial",
        description: "Högteknologiska dörrlösningar för Orion-projektet.",
    },
    {
        id: 11,
        title: "BETONPROCES 20, SWEDEN",
        image: betonproces_1,
        category: "Commercial",
        description: "Specialanpassade dörrar för betongprocessindustrin.",
    },
    {
        id: 12,
        title: "KRISTINESBERG SLOTTSPARK, SWEDEN",
        image: kristinesberg_1,
        category: "Commercial",
        description: "Exklusiva entrélösningar för Kristineberg Slottspark.",
    },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // SEO Metadata
    const pageTitle =
        "Våra Projekt | Professionella Dörrlösningar & Portsystem";
    const pageDescription =
        "Utforska vår portfölj av högkvalitativa dörrlösningar för både privata och kommersiella fastigheter. Se våra senaste projekt inom bostäder och kommersiella byggnader.";
    const canonicalUrl = "https://example.com/projekt";
    const featuredImage = "https://example.com/images/gallery-social-share.jpg";

    // Schema.org markup
    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Våra Projekt Galleri",
        description: pageDescription,
        url: canonicalUrl,
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                image: project.image,
                genre: project.category,
            },
        })),
    };

    // Filter projects by category
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Particle effect
    useEffect(() => {
        const createParticles = () => {
            const container = document.querySelector(".hp-particles");
            if (!container) return;

            container.innerHTML = "";
            const particleCount = Math.floor(window.innerWidth / 20);

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.classList.add("hp-particle");

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
        return () => window.removeEventListener("resize", createParticles);
    }, []);

    return (
        <div className="hp-gallery">
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={featuredImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={featuredImage} />

                {/* Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(gallerySchema)}
                </script>
            </Helmet>

            <div className="hp-particles"></div>

            {/* Hero Section */}
            <section
                className="hp-gallery-hero"
                aria-labelledby="gallery-heading">
                <motion.div
                    className="hp-gallery-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 id="gallery-heading" className="hp-gallery-title">
                        Våra Projekt
                    </h1>
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
                    transition={{ delay: 0.5, duration: 0.8 }}
                    role="region"
                    aria-label="Projektgalleri">
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
                                }}
                                role="article"
                                aria-labelledby={`project-${project.id}-title`}>
                                <div className="hp-project-image-container">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} - ${project.category} projekt`}
                                        className="hp-project-image"
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                    />
                                    <div className="hp-project-overlay">
                                        <button
                                            className="hp-view-details"
                                            onClick={() =>
                                                setSelectedProject(project)
                                            }
                                            aria-label={`Visa detaljer för ${project.title}`}>
                                            <FiZoomIn size={24} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hp-project-info">
                                    <h3
                                        id={`project-${project.id}-title`}
                                        className="hp-project-title">
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
                        onClick={() => setSelectedProject(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title">
                        <motion.div
                            className="hp-modal-content"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                className="hp-modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Stäng projektvy">
                                &times;
                            </button>

                            <div className="hp-modal-image-container">
                                <img
                                    src={selectedProject.image}
                                    alt={`Stor bild av ${selectedProject.title} projekt`}
                                    className="hp-modal-image"
                                />
                            </div>

                            <div className="hp-modal-info">
                                <h2 id="modal-title" className="hp-modal-title">
                                    {selectedProject.title}
                                </h2>
                                <span className="hp-modal-category">
                                    {selectedProject.category}
                                </span>
                                <p className="hp-modal-description">
                                    {selectedProject.description}
                                </p>
                                <a
                                    className="hp-modal-cta"
                                    href="/kontakt"
                                    aria-label="Kontakta oss för liknande lösning">
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
