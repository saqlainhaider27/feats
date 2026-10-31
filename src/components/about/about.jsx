import { motion } from "framer-motion";
import { aboutData } from "../../data/aboutData.js";
import { HiCheck } from "react-icons/hi";
import { FaAward, FaIndustry, FaGlobeAmericas } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 mb-3 uppercase tracking-wider">
                        <FaAward className="text-blue-700" />
                        {aboutData.story.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {aboutData.story.heading}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        {aboutData.story.lead}
                    </p>
                </div>

                {/* Story Grid with Usable Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Image Column */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                            <img
                                src={aboutData.story.usableImage}
                                alt="FEATS Fiberglass and GRP Pipeline Works"
                                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = "/placeholders/about-placeholder.svg";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-blue-600 text-white font-bold">
                                        <FaIndustry className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-cyan-300">Composite & GRP Pipeline Mastery</div>
                                        <div className="text-xs text-slate-300">From UAE Multinational Landmark Projects to Pakistan</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-5 rounded-2xl shadow-xl border-2 border-white text-center">
                            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">35+</div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">Years Industry<br />Experience</div>
                        </div>
                    </motion.div>

                    {/* Narrative & Vision Column */}
                    <motion.div
                        className="lg:col-span-7 space-y-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-200">
                            <FaGlobeAmericas />
                            <span>International Heritage: UAE & Sultanate of Oman</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                            Over 35+ Years of Proven Multinational Engineering Leadership
                        </h3>

                        {aboutData.story.paragraphs.map((para, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                                {para}
                            </p>
                        ))}

                        {/* Key Pillar Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                            {aboutData.story.highlights.map((h, i) => (
                                <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        <HiCheck className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{h.label} ({h.number})</div>
                                        <div className="text-xs text-slate-500 mt-0.5">{h.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
