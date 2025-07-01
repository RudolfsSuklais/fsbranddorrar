import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
    FaPlay,
    FaBuilding,
    FaCogs,
    FaShieldAlt,
    FaLightbulb,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import "./About.css";

const About = () => {
    // All state management is client-side
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Data is stored locally in the component
    const features = [
        {
            icon: <FaBuilding size={24} />,
            title: "MODERN PRODUKTION",
            description:
                "Avancerade produktionsanläggningar i GUSTAV III:S BOULEVARD 34, 169 73 Solna",
        },
        {
            icon: <FaCogs size={24} />,
            title: "SKRÄDDARSYDA LÖSNINGAR",
            description: "Anpassade aluminium- och stålkonstruktioner",
        },
        {
            icon: <FaShieldAlt size={24} />,
            title: "BRANDSÄKERHET",
            description: "Certifierade brandsäkra konstruktioner",
        },
        {
            icon: <FaLightbulb size={24} />,
            title: "INNOVATION",
            description:
                "Förvandlar visioner till verklighet med moderna tekniker",
        },
    ];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Simulate video loading (optional)
    const handlePlayVideo = () => {
        setVideoLoaded(true);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <motion.div
            className="hp-about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>
                    Om Finestra Solution | Modern Produktion av
                    Aluminiumkonstruktioner
                </title>
                <meta
                    name="description"
                    content="Finestra Solution erbjuder skräddarsydda aluminium- och stålkonstruktioner, moderna produktionsanläggningar i Solna, och certifierade brandsäkra lösningar."
                />
                <meta
                    name="keywords"
                    content="aluminiumkonstruktioner, stålkonstruktioner, fönsterproduktion, dörrproduktion, fasadlösningar, brandsäkra konstruktioner, Solna, Finestra Solution"
                />
                <meta
                    property="og:title"
                    content="Om Finestra Solution | Modern Produktion av Aluminiumkonstruktioner"
                />
                <meta
                    property="og:description"
                    content="Specialister på aluminium- och stålkonstruktioner med moderna produktionsanläggningar i Solna."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.fsbranddorrar.se/om-oss"
                />
                <meta
                    property="og:image"
                    content="https://www.fsbranddorrar.se/images/og-about-image.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Om Finestra Solution | Modern Produktion av Aluminiumkonstruktioner"
                />
                <meta
                    name="twitter:description"
                    content="Specialister på aluminium- och stålkonstruktioner med moderna produktionsanläggningar i Solna."
                />
                <meta
                    name="twitter:image"
                    content="https://www.fsbranddorrar.se/images/twitter-about-image.jpg"
                />
                <link
                    rel="canonical"
                    href="https://www.fsbranddorrar.se/om-oss"
                />
            </Helmet>

            {/* Background elements - purely visual */}
            <div className="hp-about-background">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="hp-about-bg-circle"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${10 + Math.random() * 50}px`,
                            height: `${10 + Math.random() * 50}px`,
                        }}
                    />
                ))}
            </div>

            {/* Hero section */}
            <section className="hp-about-hero">
                <motion.div
                    className="hp-about-hero-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <h1 className="hp-about-title">
                        <span className="hp-about-title-line">OM OSS</span>
                        <span className="hp-about-title-line">PRODUKTION</span>
                    </h1>
                    <motion.p
                        className="hp-about-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}>
                        Modern teknik • Erfaren personal • Anpassade lösningar
                    </motion.p>
                </motion.div>
            </section>

            {/* Main content */}
            <div className="hp-about-container">
                {/* Video section */}
                <motion.section
                    className="hp-about-video-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}>
                    <div
                        className="hp-about-video-wrapper"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        ref={videoRef}>
                        <div
                            className="hp-about-video-placeholder"
                            style={{
                                background: `radial-gradient(circle at ${
                                    cursorPos.x
                                }px ${cursorPos.y}px, 
                                rgba(255,255,255,${isHovering ? 0.1 : 0.03}), 
                                rgba(0,0,0,0.8) 70%)`,
                            }}>
                            {!videoLoaded && (
                                <motion.div
                                    className="hp-about-video-loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={handlePlayVideo}>
                                    <FaPlay size={48} />
                                    <motion.span
                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}>
                                        Klicka för att spela
                                    </motion.span>
                                </motion.div>
                            )}

                            <iframe
                                className={`hp-about-video ${
                                    videoLoaded ? "loaded" : ""
                                }`}
                                src={
                                    videoLoaded
                                        ? "https://www.youtube.com/embed/YDI2sdyq5xk?autoplay=1"
                                        : ""
                                }
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onLoad={() => setVideoLoaded(true)}
                                style={{
                                    opacity: videoLoaded ? 1 : 0,
                                }}
                            />
                        </div>

                        <motion.div
                            className="hp-about-video-reflection"
                            animate={{
                                opacity: isHovering ? 0.8 : 0.3,
                                backgroundPosition: isHovering
                                    ? `${cursorPos.x - 100}px ${
                                          cursorPos.y - 100
                                      }px`
                                    : "center",
                            }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </div>
                </motion.section>

                {/* Production info */}
                <section className="hp-about-production">
                    <motion.div
                        className="hp-about-production-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}>
                        <h2 className="hp-about-section-title">
                            ”FINESTRA SOLUTION” har sina produktionsanläggningar
                            i GUSTAV III:S BOULEVARD 34, 169 73 Solna.
                        </h2>
                        <p className="hp-about-section-text">
                            Alla aluminiumkonstruktioner förbereds för
                            monteringsarbete med hjälp av modern teknik och
                            erfaren arbetskraft.
                        </p>
                    </motion.div>
                </section>

                {/* Features section */}
                <section className="hp-about-features">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`hp-about-feature-card ${
                                hoveredCard === index ? "hovered" : ""
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.9 + index * 0.1,
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}>
                            <motion.div
                                className="hp-about-feature-icon"
                                animate={{
                                    scale: hoveredCard === index ? 1.2 : 1,
                                    color:
                                        hoveredCard === index
                                            ? "#ffffff"
                                            : "#a0a0a0",
                                }}>
                                {feature.icon}
                            </motion.div>
                            <h3 className="hp-about-feature-title">
                                {feature.title}
                            </h3>
                            <p className="hp-about-feature-description">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </section>

                {/* Full description */}
                <motion.section
                    className="hp-about-full-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}>
                    <p>
                        Design, produktion, leverans, montering och service av
                        fönster, dörrar, fasader och andra aluminium- och
                        stålkonstruktioner. AB ”FINESTRA SOLUTION" handlar om
                        tillverkning av fönster, dörrar, fasader och andra
                        aluminium-och stålkonstruktioner. Vi använder modern
                        teknik och ett individuellt förhållningssätt till varje
                        kunds önskemål.
                    </p>
                    <p>
                        Vi erbjuder även certifierade brandsäkra konstruktioner
                        som är brandmotståndskraftiga och förhindrar
                        brandspridning, samt underlättar säker evakuering i
                        nödsituationer.
                    </p>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default About;
