import { motion } from "framer-motion";
import { heroData } from "../../data/heroData.js";
import { HiCheckCircle, HiArrowSmRight, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";

export default function Hero() {
    const scrollToSection = (id) => {
        const cleanId = id.replace("#", "").toLowerCase();
        const el = document.getElementById(cleanId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
            {/* Background Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            {/* Subtle Glowing Orb */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-15 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Top Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
                    >
                        <HiOutlineSparkles className="text-cyan-400 text-base" />
                        <span>{heroData.badge}</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Pioneering <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Fiberglass & Composite</span> Engineering in Pakistan
                    </motion.h1>

                    {/* Subtitle with Founder & Vision context */}
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {heroData.subtitle}
                    </motion.p>

                    {/* Key Highlights Bullet Pills */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-slate-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                    >
                        {heroData.keyPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 shadow-sm">
                                <HiCheckCircle className="text-cyan-400 text-base flex-shrink-0" />
                                <span className="text-slate-300">{point}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {heroData.buttons.map((btn) => {
                            let btnClasses = "w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ";
                            if (btn.style === "primary") {
                                btnClasses += "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-900/40 hover:scale-105";
                            } else if (btn.style === "secondary") {
                                btnClasses += "bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-500";
                            } else {
                                btnClasses += "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40";
                            }

                            return (
                                <button
                                    key={btn.name}
                                    onClick={() => scrollToSection(btn.href)}
                                    className={btnClasses}
                                >
                                    <span>{btn.name}</span>
                                    <HiArrowSmRight className="text-lg" />
                                </button>
                            );
                        })}
                    </motion.div>

                </div>

                {/* Quantitative Impact Statistics Strip */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80 max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                >
                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                        <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">35+</div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Years International Experience</div>
                        <div className="text-[11px] text-slate-400">Europe, UAE & Pakistan</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                        <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">18</div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Multinational Projects</div>
                        <div className="text-[11px] text-slate-400">UAE & Oman Landmarks</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Corrosion Immunity</div>
                        <div className="text-[11px] text-slate-400">Zero Maintenance Life</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                        <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">8</div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Core Service Domains</div>
                        <div className="text-[11px] text-slate-400">Turnkey GRP/GRE Solutions</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
