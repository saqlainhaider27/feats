import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../../data/servicesData.js";
import {
    HiChevronDown,
    HiCheckCircle,
    HiOutlineBriefcase,
    HiOutlineSparkles,
    HiOutlineCube,
    HiOutlineShieldCheck
} from "react-icons/hi";
import {
    FaProjectDiagram,
    FaWrench,
    FaCheckDouble,
    FaSun,
    FaLayerGroup,
    FaWater,
    FaFileAlt,
    FaBoxes
} from "react-icons/fa";

// Map each service to a distinctive icon
const serviceIcons = {
    "frp-pipes-engineering": FaProjectDiagram,
    "frp-gre-jointing-works": FaWrench,
    "frp-pipes-installation-testing": FaCheckDouble,
    "waterproofing-uv-protection": FaSun,
    "fiberglass-lining-works": FaLayerGroup,
    "frp-tanks-cooling-towers": FaWater,
    "frp-corrugated-sheets": FaFileAlt,
    "fiberglass-products-trading": FaBoxes,
};

export default function Services() {
    // Open the first 2 by default so user immediately sees rich details
    const [expandedCards, setExpandedCards] = useState({
        "frp-pipes-engineering": true,
        "frp-gre-jointing-works": true
    });

    const toggleCard = (id) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const expandAll = () => {
        const all = {};
        servicesData.forEach((s) => (all[s.id] = true));
        setExpandedCards(all);
    };

    const collapseAll = () => {
        setExpandedCards({});
    };

    return (
        <section id="services" className="bg-white py-20 lg:py-28 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 mb-3 uppercase tracking-wider">
                        <HiOutlineSparkles className="text-blue-700" />
                        Card-Featured Capabilities
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Our Specialized Engineering Services
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        As detailed on our official business card and profile, FEATS provides 8 specialized composite engineering, installation, testing, and trading services across Pakistan.
                    </p>

                    {/* Expand / Collapse Controls */}
                    <div className="flex justify-center gap-3 mt-6">
                        <button
                            onClick={expandAll}
                            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                        >
                            Expand All Details
                        </button>
                        <button
                            onClick={collapseAll}
                            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                        >
                            Collapse All
                        </button>
                    </div>
                </div>

                {/* 8 Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => {
                        const isExpanded = !!expandedCards[service.id];
                        const IconComponent = serviceIcons[service.id] || FaProjectDiagram;

                        return (
                            <motion.div
                                key={service.id}
                                className={`rounded-2xl transition-all duration-300 border ${
                                    isExpanded
                                        ? "bg-slate-50/70 border-blue-900/30 shadow-lg"
                                        : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                                } flex flex-col justify-between overflow-hidden`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="p-6 sm:p-7">
                                    {/* Service Header Row */}
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center text-xl shadow-md flex-shrink-0">
                                                <IconComponent />
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                                    {service.category}
                                                </span>
                                                <h3 className="text-xl font-bold text-slate-900 mt-1">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => toggleCard(service.id)}
                                            className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-900 transition flex-shrink-0"
                                            aria-label="Toggle details"
                                        >
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiChevronDown className="text-xl" />
                                            </motion.div>
                                        </button>
                                    </div>

                                    {/* Short Overview */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        {service.shortDetail}
                                    </p>

                                    {/* Expandable In-Depth Engineering Details */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden space-y-4 pt-4 border-t border-slate-200"
                                            >
                                                {/* Long Description */}
                                                <p className="text-slate-700 text-sm leading-relaxed">
                                                    {service.longDetail}
                                                </p>

                                                {/* Detailed Engineering Features Checklist */}
                                                <div>
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                                                        <HiOutlineShieldCheck className="text-blue-700 text-base" />
                                                        Technical Specifications & Scope
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, fIdx) => (
                                                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                                <HiCheckCircle className="text-emerald-600 text-base flex-shrink-0 mt-0.5" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Application Sectors */}
                                                <div className="pt-2">
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                                                        <HiOutlineBriefcase className="text-blue-700 text-base" />
                                                        Key Application Sectors
                                                    </h4>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {service.applications.map((app, aIdx) => (
                                                            <span
                                                                key={aIdx}
                                                                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-medium"
                                                            >
                                                                {app}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Footer Toggle Button Bar */}
                                <button
                                    onClick={() => toggleCard(service.id)}
                                    className="w-full py-2.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-between border-t border-slate-200 transition"
                                >
                                    <span>
                                        {isExpanded ? "Collapse Technical Details" : "View Full Scope & Specifications"}
                                    </span>
                                    <HiChevronDown className={`text-base transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Callout */}
                <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        Need a Custom Composite Solution or Immediate Site Quotation?
                    </h3>
                    <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
                        Our engineering and technical marketing team in Lahore is ready to assist with design consultation, bill of quantities (BOQ), material selection, and site execution anywhere in Pakistan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-sm font-semibold shadow-md transition"
                        >
                            Request Technical Consultation
                        </a>
                        <a
                            href="https://wa.me/923278896738"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold shadow-md transition"
                        >
                            Instant WhatsApp Support
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
