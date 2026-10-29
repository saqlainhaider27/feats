import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../../data/projectsData.js";
import {
    HiOutlineLocationMarker,
    HiOutlineOfficeBuilding,
    HiOutlineShieldCheck,
    HiCheck,
    HiChevronDown,
    HiSearch,
    HiOutlineSparkles,
    HiOutlineFilter
} from "react-icons/hi";
import { FaGlobeAmericas, FaIndustry, FaWater, FaPlane, FaFire, FaFlask } from "react-icons/fa";

export default function Projects() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedProjectId, setExpandedProjectId] = useState(1); // project 1 open by default

    // Filter categories
    const filterTabs = [
        { id: "all", label: "All Projects (18)" },
        { id: "uae", label: "United Arab Emirates (5)" },
        { id: "oman", label: "Sultanate of Oman (13)" },
        { id: "cooling", label: "District Cooling & Water" },
        { id: "power", label: "Power & Desalination" },
        { id: "aviation", label: "Airports & Aviation" },
        { id: "industrial", label: "Industrial & Petrochemical" },
    ];

    // Filter and search logic
    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            // Tab filter
            let matchesTab = true;
            if (selectedFilter === "uae") {
                matchesTab = project.country === "UAE";
            } else if (selectedFilter === "oman") {
                matchesTab = project.country === "Oman";
            } else if (selectedFilter === "cooling") {
                matchesTab =
                    project.pipelineType.toLowerCase().includes("cooling") ||
                    project.pipelineType.toLowerCase().includes("chilled") ||
                    project.pipelineType.toLowerCase().includes("water");
            } else if (selectedFilter === "power") {
                matchesTab =
                    project.sector.toLowerCase().includes("power") ||
                    project.sector.toLowerCase().includes("desalination");
            } else if (selectedFilter === "aviation") {
                matchesTab =
                    project.sector.toLowerCase().includes("aviation") ||
                    project.name.toLowerCase().includes("airport");
            } else if (selectedFilter === "industrial") {
                matchesTab =
                    project.sector.toLowerCase().includes("petrochemical") ||
                    project.sector.toLowerCase().includes("steel") ||
                    project.sector.toLowerCase().includes("fertilizer") ||
                    project.sector.toLowerCase().includes("oil & gas");
            }

            // Search query filter
            const query = searchQuery.toLowerCase().trim();
            const matchesQuery =
                !query ||
                project.name.toLowerCase().includes(query) ||
                project.client.toLowerCase().includes(query) ||
                (project.contractor && project.contractor.toLowerCase().includes(query)) ||
                project.material.toLowerCase().includes(query) ||
                project.location.toLowerCase().includes(query);

            return matchesTab && matchesQuery;
        });
    }, [selectedFilter, searchQuery]);

    const toggleProject = (id) => {
        setExpandedProjectId(expandedProjectId === id ? null : id);
    };

    return (
        <section id="projects" className="bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 mb-3 uppercase tracking-wider">
                        <FaGlobeAmericas className="text-blue-700" />
                        TSTI / Frontline Engineering Reference Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Landmark Multinational Projects
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Executed by our leadership team under TSTI across the United Arab Emirates and the Sultanate of Oman. Featuring landmark infrastructure for Emaar (Burj Dubai / Dubai Mall), Dubai International Airport, Mitsubishi Heavy Industries, SEPCO III, SUEZ Tractebel, and Petroleum Development Oman (PDO).
                    </p>
                </div>

                {/* Controls: Filter Tabs & Search Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                    {/* Tabs */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedFilter(tab.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                                    selectedFilter === tab.id
                                        ? "bg-blue-900 text-white shadow-md shadow-blue-900/20"
                                        : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search client, material, city..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                        />
                    </div>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
                    <span>
                        Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} Completed Reference Projects
                    </span>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="text-blue-700 hover:underline font-semibold"
                        >
                            Clear search
                        </button>
                    )}
                </div>

                {/* Projects Grid / Accordion Cards */}
                <div className="space-y-6">
                    {filteredProjects.map((project) => {
                        const isExpanded = expandedProjectId === project.id;

                        return (
                            <motion.div
                                key={project.id}
                                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                                    isExpanded
                                        ? "border-blue-900/40 ring-1 ring-blue-900/10 shadow-lg"
                                        : "border-slate-200 hover:border-slate-300"
                                }`}
                                layout
                            >
                                {/* Project Card Header Strip */}
                                <div
                                    onClick={() => toggleProject(project.id)}
                                    className="p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-slate-50/60 transition"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Number Badge */}
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-950 to-blue-800 text-white flex items-center justify-center font-extrabold text-base flex-shrink-0 shadow-sm">
                                            #{project.id}
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                                    project.country === "UAE"
                                                        ? "bg-amber-100 text-amber-900 border border-amber-200"
                                                        : "bg-emerald-100 text-emerald-900 border border-emerald-200"
                                                }`}>
                                                    {project.country === "UAE" ? "🇦🇪 United Arab Emirates" : "🇴🇲 Sultanate of Oman"}
                                                </span>
                                                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                                    {project.sector}
                                                </span>
                                            </div>

                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                                {project.name}
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-600">
                                                <span className="flex items-center gap-1 font-medium">
                                                    <strong className="text-slate-800">Client:</strong> {project.client}
                                                </span>
                                                {project.consultant && (
                                                    <span className="hidden sm:inline">
                                                        <strong className="text-slate-800">Consultant:</strong> {project.consultant}
                                                    </span>
                                                )}
                                                {project.contractor && (
                                                    <span className="hidden md:inline">
                                                        <strong className="text-slate-800">Contractor:</strong> {project.contractor}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Diameters & Expand Trigger */}
                                    <div className="flex items-center justify-between lg:justify-end gap-4 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                                        <div className="text-left lg:text-right">
                                            <div className="text-xs font-semibold text-slate-800">
                                                {project.diameters ? `Diameters: ${project.diameters}` : "Custom Vessel / Liner"}
                                            </div>
                                            <div className="text-[11px] text-blue-700 font-medium">
                                                {project.material}
                                            </div>
                                        </div>

                                        <button
                                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition"
                                            aria-label="Toggle Project Details"
                                        >
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiChevronDown className="text-xl" />
                                            </motion.div>
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Detailed Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-8"
                                        >
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                                                {/* Left Column: Scope & Metadata */}
                                                <div className="lg:col-span-8 space-y-5">
                                                    {/* Summary */}
                                                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                                                        {project.description}
                                                    </p>

                                                    {/* Technical Specifications Matrix */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-4 rounded-xl border border-slate-200">
                                                        <div>
                                                            <span className="text-slate-400 block uppercase font-bold text-[10px]">Pipeline / System</span>
                                                            <span className="font-semibold text-slate-800">{project.pipelineType}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-400 block uppercase font-bold text-[10px]">Material Specification</span>
                                                            <span className="font-semibold text-blue-900">{project.material}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-400 block uppercase font-bold text-[10px]">Diameters / Dimensions</span>
                                                            <span className="font-semibold text-slate-800">{project.diameters || "Standard Specification"}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-400 block uppercase font-bold text-[10px]">Location & Client</span>
                                                            <span className="font-semibold text-slate-800">{project.location} — {project.client}</span>
                                                        </div>
                                                        {project.consultant && (
                                                            <div>
                                                                <span className="text-slate-400 block uppercase font-bold text-[10px]">Consultant / Engineer</span>
                                                                <span className="font-semibold text-slate-800">{project.consultant}</span>
                                                            </div>
                                                        )}
                                                        {project.contractor && (
                                                            <div>
                                                                <span className="text-slate-400 block uppercase font-bold text-[10px]">Main Contractor</span>
                                                                <span className="font-semibold text-slate-800">{project.contractor}</span>
                                                            </div>
                                                        )}
                                                        {project.thirdParty && (
                                                            <div className="sm:col-span-2">
                                                                <span className="text-slate-400 block uppercase font-bold text-[10px]">Third Party Verification</span>
                                                                <span className="font-semibold text-emerald-800">{project.thirdParty}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Work Executed Checklist */}
                                                    <div>
                                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                                                            <HiOutlineShieldCheck className="text-blue-700 text-base" />
                                                            Scope of Work Executed
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {project.workExecuted.map((step, sIdx) => (
                                                                <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                        <HiCheck className="text-xs font-bold" />
                                                                    </div>
                                                                    <span>{step}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Right Column: Project Image */}
                                                <div className="lg:col-span-4">
                                                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
                                                        <img
                                                            src={project.image}
                                                            alt={project.name}
                                                            className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                                            onError={(e) => {
                                                                e.target.src = "/about-img.jpg";
                                                            }}
                                                        />
                                                        <div className="p-3 bg-slate-900 text-white text-[11px] text-center font-medium">
                                                            TSTI Project Record #{project.id} — {project.location}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Callout Strip */}
                <div className="mt-16 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="text-xs uppercase font-bold text-cyan-300 tracking-wider">
                            Ready for Deployment in Pakistan
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                            Deploy Proven Multinational Engineering on Your Upcoming Project
                        </h3>
                        <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                            Bring the same field-proven composite engineering, ISO 9001 quality controls, and certified jointing that powered the Burj Dubai, Salalah IWPP, and Dubai Airport to your industrial or municipal site in Pakistan.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a
                            href="#contact"
                            className="inline-block px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-lg transition"
                        >
                            Discuss Your Project
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
