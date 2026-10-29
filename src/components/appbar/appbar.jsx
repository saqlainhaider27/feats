import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyData.js";
import logoImg from "../../assets/logo.png";
import { HiOutlineMenu, HiOutlineX, HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (id) => {
        const cleanId = id.replace("#", "").toLowerCase();
        const el = document.getElementById(cleanId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false);
        }
    };

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo and Company Branding */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-3 text-left group focus:outline-none"
                    >
                        <img
                            src={logoImg}
                            alt="FEATS Logo"
                            className="h-9 sm:h-11 w-auto object-contain flex-shrink-0"
                        />
                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="font-extrabold text-xl text-blue-950 tracking-tight">
                                    {companyInfo.shortName}
                                </span>
                                <span className="hidden sm:inline-block text-xs uppercase px-2 py-0.5 font-semibold bg-blue-50 text-blue-900 rounded-md border border-blue-200">
                                    {companyInfo.tagline}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium truncate hidden md:block">
                                {companyInfo.name}
                            </p>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {companyInfo.navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors py-2 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                    </nav>

                    {/* Contact CTA Button & WhatsApp (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <a
                            href={companyInfo.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium shadow-sm transition"
                            title="Chat on WhatsApp"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href={`tel:${companyInfo.phone}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold shadow-sm transition"
                        >
                            <HiPhone className="text-base" />
                            <span>{companyInfo.phone}</span>
                        </a>
                    </div>

                    {/* Mobile / Tablet Hamburger */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <a
                            href={companyInfo.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-emerald-600 text-white rounded-lg shadow-sm"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-lg" />
                        </a>
                        <button
                            className="p-2.5 rounded-lg text-gray-700 hover:text-blue-900 focus:outline-none bg-gray-100 hover:bg-blue-50 transition"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile / Tablet Nav Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
                    >
                        <div className="px-6 py-5 space-y-3">
                            {companyInfo.navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block w-full text-left py-2 text-base font-semibold text-gray-800 hover:text-blue-900 transition"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-900 text-white rounded-lg font-semibold text-sm"
                                >
                                    <HiPhone />
                                    <span>Call: {companyInfo.phone}</span>
                                </a>
                                <p className="text-xs text-center text-gray-500 pt-1">
                                    Head Office: Gulberg 3, Lahore, Pakistan
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
