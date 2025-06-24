import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/navbar/NavBar";
import Homepage from "./Pages/Homepage.jsx";

function App() {
    return (
        <ParallaxProvider>
            <Navbar />
            <Homepage />
        </ParallaxProvider>
    );
}

export default App;
