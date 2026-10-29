import { motion } from "framer-motion";
import { aboutData } from "../../data/aboutData.js";
import { HiCheck, HiOutlineSparkles, HiPhone, HiMail, HiBadgeCheck, HiOfficeBuilding } from "react-icons/hi";
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

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
                            Led by Malik Muhammad Riaz — 35+ Years of Proven Multinational Leadership
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

                {/* Leadership Section */}
                <div className="mt-16">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs uppercase tracking-wider font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full">
                            Company Leadership
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                            Meet Our Executive Team
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Guided by decades of international composite engineering mastery and local technical responsiveness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Founder Card: Malik Muhammad Riaz */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg border-2 border-blue-900/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition"
                            whileHover={{ y: -4 }}
                        >
                            <div className="absolute top-0 right-0 bg-blue-900 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
                                35+ Years Experience
                            </div>

                            <div>
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-950 to-blue-800 text-white flex items-center justify-center font-extrabold text-2xl shadow-md mb-6">
                                    MR
                                </div>
                                <div className="flex items-center gap-2">
                                    <h4 className="text-2xl font-bold text-slate-900">
                                        Malik Muhammad Riaz
                                    </h4>
                                    <HiBadgeCheck className="text-blue-600 text-xl" title="Owner & Industry Authority" />
                                </div>
                                <p className="text-blue-900 font-semibold text-sm mb-4">
                                    Founder & Managing Director
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    Former Founder & Head of Technical Strong Trading & Installation Est. (TSTI / Frontline Engineering Group) in the UAE. Veteran composite engineer with over 35 years of specialized expertise across Europe and the GCC. Led major district cooling, piping, and lining works for Emaar (Burj Dubai / Dubai Mall), Dubai Civil Aviation, Mitsubishi Heavy Industries, and PDO Oman. Now dedicated to pioneering advanced composite infrastructure in Pakistan.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-600">
                                <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Composite Piping Specialist</span>
                                <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Former Head of TSTI UAE</span>
                                <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">35+ Years Proven Track Record</span>
                            </div>
                        </motion.div>

                        {/* Marketing Support Engineer: Saqlain Haider */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition"
                            whileHover={{ y: -4 }}
                        >
                            <div className="absolute top-0 right-0 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
                                Engineering & Marketing
                            </div>

                            <div>
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-700 text-white flex items-center justify-center font-extrabold text-2xl shadow-md mb-6">
                                    SH
                                </div>
                                <div className="flex items-center gap-2">
                                    <h4 className="text-2xl font-bold text-slate-900">
                                        Saqlain Haider
                                    </h4>
                                    <HiBadgeCheck className="text-emerald-600 text-xl" title="Marketing Support Engineer" />
                                </div>
                                <p className="text-emerald-800 font-semibold text-sm mb-4">
                                    Marketing Support Engineer
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    Key engineering representative responsible for technical client consultations, composite material selection, bill of quantities (BOQ) estimation, and project coordination across Pakistan. As featured on the FEATS official corporate identity, guiding industrial and commercial clients from specification to on-time execution.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                                <div className="flex items-center gap-2 text-slate-700">
                                    <HiPhone className="text-emerald-600 text-base" />
                                    <span className="font-semibold">0327-8896738</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <HiMail className="text-blue-600 text-base" />
                                    <span className="font-semibold">info@feats.com.pk</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <HiOfficeBuilding className="text-purple-600 text-base" />
                                    <span>Palace Arcade, Gulberg 3, Lahore</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
