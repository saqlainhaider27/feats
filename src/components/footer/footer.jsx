import { motion } from "framer-motion";
import { footerData } from "../../data/footerData.js";
import { companyInfo } from "../../data/companyData.js";
import logoImg from "../../assets/logo.png";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineGlobeAlt } from "react-icons/hi";

export default function Footer() {
    const scrollToSection = (id) => {
        const cleanId = id.replace("#", "").toLowerCase();
        const el = document.getElementById(cleanId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Column 1: Company Profile & Leadership Note */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-xl bg-white flex items-center justify-center shadow-md">
                                <img src={logoImg} alt="FEATS Logo" className="h-7 w-auto object-contain" />
                            </div>
                            <div>
                                <span className="text-xl font-extrabold text-white tracking-tight">
                                    {footerData.company.shortName}
                                </span>
                                <span className="ml-2 text-xs uppercase px-2 py-0.5 font-semibold bg-blue-900/60 text-cyan-300 rounded border border-blue-700/50">
                                    {footerData.company.tagline}
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            {footerData.company.description}
                        </p>

                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                            <div className="font-bold text-cyan-300 uppercase tracking-wider text-[11px]">
                                International Heritage
                            </div>
                            <p className="leading-relaxed text-slate-400">
                                {footerData.company.founderNote}
                            </p>
                        </div>
                    </div>

                    {/* Column 2: 8 Services from the Card */}
                    <div className="lg:col-span-4 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                            Our 8 Core Services
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-400">
                            {footerData.servicesList.map((service, idx) => (
                                <li key={idx} className="hover:text-cyan-200 transition">
                                    • {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact & Office */}
                    <div className="lg:col-span-3 space-y-4 text-xs text-slate-300">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                            Head Office
                        </h4>

                        <div className="space-y-2.5">
                            <div className="flex items-start gap-2 text-slate-400">
                                <HiOutlineLocationMarker className="text-base text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{footerData.contact.address}</span>
                            </div>

                            <div className="flex items-center gap-2 text-slate-400">
                                <HiOutlinePhone className="text-base text-emerald-400 flex-shrink-0" />
                                <a href={`tel:${footerData.contact.phone}`} className="hover:text-white transition">
                                    {footerData.contact.phoneDisplay}
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-slate-400">
                                <HiOutlineMail className="text-base text-blue-400 flex-shrink-0" />
                                <a href={`mailto:${footerData.contact.email}`} className="hover:text-white transition">
                                    {footerData.contact.email}
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-slate-400">
                                <HiOutlineGlobeAlt className="text-base text-purple-400 flex-shrink-0" />
                                <span>{footerData.contact.website}</span>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="pt-2 flex items-center gap-3">
                            <a
                                href="https://wa.me/923278896738"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-600/50 flex items-center justify-center text-base transition"
                                title="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/saqlain-haider"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-600/50 flex items-center justify-center text-base transition"
                                title="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={`mailto:${footerData.contact.email}`}
                                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center text-base transition"
                                title="Email Us"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <div>
                        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={() => scrollToSection("#about")} className="hover:text-slate-300 transition">About</button>
                        <button onClick={() => scrollToSection("#services")} className="hover:text-slate-300 transition">Services</button>
                        <button onClick={() => scrollToSection("#projects")} className="hover:text-slate-300 transition">Projects (18)</button>
                        <button onClick={() => scrollToSection("#contact")} className="hover:text-slate-300 transition">Contact</button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
