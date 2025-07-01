import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init("9KjtOhPPSSwigiOqj"); // Replace with your EmailJS public key
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await emailjs.sendForm(
                "service_m7yjpzd", // Replace with your EmailJS service ID
                "template_oafnse6", // Replace with your EmailJS template ID
                formRef.current,
                "9KjtOhPPSSwigiOqj" // Replace with your EmailJS public key
            );

            setSubmitStatus({
                success: true,
                message:
                    "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
            });

            // Reset form
            formRef.current.reset();
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                success: false,
                message: "Något gick fel. Vänligen försök igen senare.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: <FaPhone size={24} />,
            title: "TELEFON",
            info: "+46 123 456 789",
            link: "tel:+46123456789",
        },
        {
            icon: <FaEnvelope size={24} />,
            title: "E-POST",
            info: "info@fsbranddorrar.se",
            link: "mailto:info@fsbranddorrar.se",
        },
        {
            icon: <FaMapMarkerAlt size={24} />,
            title: "ADRESS",
            info: "GUSTAV III:S BOULEVARD 34, 169 73 Solna",
            link: "https://maps.google.com",
        },
    ];

    return (
        <motion.div
            className="hp-contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>
                    Kontakta Finestra Solution | Specialister på brandsäkra
                    dörrar och fönster
                </title>
                <meta
                    name="description"
                    content="Kontakta oss för frågor om brandsäkra lösningar, aluminiumkonstruktioner eller för att boka ett möte. Vi finns i Solna och svarar snabbt på alla förfrågningar."
                />
                <meta
                    name="keywords"
                    content="kontakt Finestra Solution, brandsäkra dörrar, fönsterproduktion, aluminiumkonstruktioner, Solna, kontaktformulär"
                />
                <meta
                    property="og:title"
                    content="Kontakta Finestra Solution | Specialister på brandsäkra dörrar och fönster"
                />
                <meta
                    property="og:description"
                    content="Kontakta oss för frågor om brandsäkra lösningar eller för att boka ett möte. Vi finns i Solna och svarar snabbt på alla förfrågningar."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.fsbranddorrar.se/kontakt"
                />
                <meta
                    property="og:image"
                    content="https://www.fsbranddorrar.se/images/og-contact-image.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Kontakta Finestra Solution | Specialister på brandsäkra dörrar och fönster"
                />
                <meta
                    name="twitter:description"
                    content="Kontakta oss för frågor om brandsäkra lösningar eller för att boka ett möte. Vi finns i Solna och svarar snabbt."
                />
                <meta
                    name="twitter:image"
                    content="https://www.fsbranddorrar.se/images/twitter-contact-image.jpg"
                />
                <link
                    rel="canonical"
                    href="https://www.fsbranddorrar.se/kontakt"
                />

                {/* Structured Data for Local Business */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Finestra Solution",
                        "image": "https://www.fsbranddorrar.se/images/logo.jpg",
                        "telephone": "+46123456789",
                        "email": "info@fsbranddorrar.se",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "GUSTAV III:S BOULEVARD 34",
                            "addressLocality": "Solna",
                            "postalCode": "169 73",
                            "addressCountry": "SE"
                        },
                        "url": "https://www.fsbranddorrar.se",
                        "openingHours": "Mo-Fr 08:00-17:00",
                        "priceRange": "$$",
                        "sameAs": [
                            "https://www.facebook.com/finestrasolution",
                            "https://www.linkedin.com/company/finestrasolution"
                        ]
                    }
                    `}
                </script>
            </Helmet>

            {/* Background elements */}
            <div className="hp-contact-background">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="hp-contact-bg-circle"
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
            <section className="hp-contact-hero">
                <motion.div
                    className="hp-contact-hero-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <h1 className="hp-contact-title">
                        <span className="hp-contact-title-line">KONTAKTA</span>
                        <span className="hp-contact-title-line">OSS</span>
                    </h1>
                    <motion.p
                        className="hp-contact-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}>
                        Har du frågor eller vill boka ett möte? Vi hjälper dig
                        gärna.
                    </motion.p>
                </motion.div>
            </section>

            {/* Main content */}
            <div className="hp-contact-container">
                {/* Contact information */}
                <motion.section
                    className="hp-contact-info-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}>
                    <div className="hp-contact-methods">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                className="hp-contact-method-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7 + index * 0.1,
                                }}
                                whileHover={{ y: -5 }}>
                                <div className="hp-contact-method-icon">
                                    {method.icon}
                                </div>
                                <h3 className="hp-contact-method-title">
                                    {method.title}
                                </h3>
                                <a
                                    href={method.link}
                                    className="hp-contact-method-info"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {method.info}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact form */}
                <motion.section
                    className="hp-contact-form-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="hp-contact-form">
                        <motion.h2
                            className="hp-contact-form-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}>
                            SKICKA ETT MEDDELANDE
                        </motion.h2>

                        <motion.div
                            className="hp-form-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="hp-form-input"
                                placeholder=" "
                            />
                            <label htmlFor="name" className="hp-form-label">
                                Ditt namn
                            </label>
                        </motion.div>

                        <motion.div
                            className="hp-form-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="hp-form-input"
                                placeholder=" "
                            />
                            <label htmlFor="email" className="hp-form-label">
                                E-postadress
                            </label>
                        </motion.div>

                        <motion.div
                            className="hp-form-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="hp-form-input"
                                placeholder=" "
                            />
                            <label htmlFor="phone" className="hp-form-label">
                                Telefonnummer (valfritt)
                            </label>
                        </motion.div>

                        <motion.div
                            className="hp-form-group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="hp-form-input hp-form-textarea"
                                placeholder=" "
                                rows="4"
                            />
                            <label htmlFor="message" className="hp-form-label">
                                Ditt meddelande
                            </label>
                        </motion.div>

                        <motion.div
                            className="hp-form-submit-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}>
                            <button
                                type="submit"
                                className="hp-form-submit-btn"
                                disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span>Skickar...</span>
                                ) : (
                                    <>
                                        <span>Skicka meddelande</span>
                                        <FaPaperPlane />
                                    </>
                                )}
                            </button>
                        </motion.div>

                        {submitStatus && (
                            <motion.div
                                className={`hp-form-status ${
                                    submitStatus.success ? "success" : "error"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}>
                                {submitStatus.message}
                            </motion.div>
                        )}
                    </form>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default Contact;
