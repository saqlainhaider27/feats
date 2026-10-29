import AppBar from "./components/appbar/appbar.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Services from "./components/services/services.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contacts/contacts.jsx";
import Footer from "./components/footer/footer.jsx";

export default function App() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-900 selection:text-white">
            <AppBar />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
