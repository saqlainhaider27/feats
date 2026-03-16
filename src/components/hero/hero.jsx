import { motion } from "framer-motion";
import { heroData } from "../../data/heroData.js";

export default function Hero() {
    // Smooth scroll function
    const scrollToSection = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                {/* Hero Text */}
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {heroData.heading}
                </motion.h1>

                <motion.p
                    className="text-gray-700 text-lg sm:text-xl mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {heroData.subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {heroData.buttons.map((btn) => (
                        <motion.button
                            key={btn.name}
                            onClick={() =>
                                btn.href.startsWith("#")
                                    ? scrollToSection(btn.href.replace("#", ""))
                                    : null
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={
                                btn.style === "primary"
                                    ? "w-56 text-center px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition"
                                    : "w-56 text-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition"
                            }
                        >
                            {btn.name}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}