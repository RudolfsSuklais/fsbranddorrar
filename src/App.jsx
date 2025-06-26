import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Homepage from "./Pages/Homepage.jsx";
import ProductsSection from "./Pages/ProductsSection.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
    return (
        <ParallaxProvider>
            <Router basename="/">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/produkter" element={<ProductsSection />} />
                    <Route
                        path="/produkter/:category/:id"
                        element={<ProductDetailPage />}
                    />
                    <Route path="/galleri" element={<Gallery />} />
                    <Route path="/om-oss" element={<About />} />
                    <Route path="/kontakt" element={<Contact />} />
                    {/* Add a catch-all route for 404s */}
                    <Route path="*" element={<Homepage />} />
                </Routes>
                <Footer />
            </Router>
        </ParallaxProvider>
    );
}

export default App;
