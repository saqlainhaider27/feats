// src/App.jsx
import AppBar from "./components/appbar/appbar.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contacts/contacts.jsx";
import Footer from "./components/footer/footer.jsx";
export default function App() {
    return (
        <div className="bg-gray-50 min-h-screen pt-16">
            <AppBar />
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}