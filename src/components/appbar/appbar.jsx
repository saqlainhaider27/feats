import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyData.js";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false); // close mobile menu after click
        }
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16 flex-nowrap">

                    {/* Logo and Abbreviation */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        {/* Logo */}
                        <img src={companyInfo.logo} Logo className="h-6 sm:h-6 lg:h-8 w-auto flex-shrink-0 mx-auto lg:mx-0" /> {/* Name: only visible on sm+ */} <h1 className="hidden sm:block font-bold text-lg lg:text-xl text-gray-900 whitespace-nowrap overflow-hidden"> {companyInfo.name} </h1> </div>

                    {/* Desktop Nav (lg+) */}
                    <nav className="hidden lg:flex flex-1 justify-end space-x-12">
                        {companyInfo.navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.name)}
                                className="relative text-gray-700 font-medium group hover:text-blue-900 transition"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile / Tablet Hamburger */}
                    <button
                        className="lg:hidden p-2 rounded-full text-gray-700 hover:text-blue-900 focus:outline-none bg-gray-100 hover:bg-blue-50 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    </button>

                </div>
            </div>

            {/* Mobile / Tablet Nav */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white shadow-md overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-3">
                            {companyInfo.navLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.name)}
                                    className="text-gray-700 font-medium hover:text-blue-900 transition text-left"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}