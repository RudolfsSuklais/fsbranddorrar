import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Homepage from "./Pages/Homepage.jsx";
import ProductsSection from "./Pages/ProductsSection.jsx"; // Make sure to import your ProductsSection
import ProductDetailPage from "./Pages/ProductDetailPage.jsx"; // Import the new ProductDetailPage
import Footer from "./components/footer/Footer.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
    return (
        <ParallaxProvider>
            <Router>
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </ParallaxProvider>
    );
}

export default App;
