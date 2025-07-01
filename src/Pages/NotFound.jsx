import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
    return (
        <motion.div
            className="not-found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="not-found__container">
                <div className="not-found__content">
                    <motion.h1
                        className="not-found__title"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4 }}>
                        404
                    </motion.h1>
                    <motion.h2
                        className="not-found__subtitle"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}>
                        Sidan hittades inte
                    </motion.h2>
                    <motion.p
                        className="not-found__text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}>
                        Sidan du letar efter finns inte eller har flyttats.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}>
                        <Link to="/">
                            <motion.button
                                className="not-found__button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                Till startsidan
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    style={{ marginLeft: "8px" }}>
                                    <path
                                        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className="not-found__image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    <div className="not-found__image-placeholder" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NotFound;
