import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "../../data/contactsData.js";
import { servicesData } from "../../data/servicesData.js";
import {
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineClock,
    HiOutlineGlobeAlt,
    HiCheckCircle,
    HiOutlineShieldCheck
} from "react-icons/hi";
import { FaWhatsapp, FaUserTie } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "FRP Pipes Engineering & Projects",
        city: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", form);
        setSubmitted(true);
    };

    const sendWhatsAppMessage = () => {
        const text = `Hello FEATS Engineering Team,\n\nMy name is ${form.name || "a client"}.\nService Interest: ${form.service}\nLocation: ${form.city || "Pakistan"}\nPhone: ${form.phone || "N/A"}\nMessage: ${form.message || "I would like to inquire about your composite engineering and installation services."}`;
        const url = `https://wa.me/923278896738?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="contact" className="bg-white py-20 lg:py-28 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 mb-3 uppercase tracking-wider">
                        <HiOutlinePhone className="text-blue-700" />
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {contactData.heading}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        {contactData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Contact Information & Official Profile Card */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Quick Contact Info Card */}
                        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                                Head Office & Technical Support
                            </h3>

                            <div className="space-y-4 text-sm">
                                {/* Address */}
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiOutlineLocationMarker className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Head Office</div>
                                        <div className="font-semibold text-slate-800 leading-relaxed">
                                            {contactData.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Phone & WhatsApp */}
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaWhatsapp className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Phone & WhatsApp</div>
                                        <div className="font-semibold text-slate-800">
                                            <a href={`tel:${contactData.phone}`} className="hover:text-blue-900 transition">
                                                {contactData.phone}
                                            </a>
                                            {" "} / {" "}
                                            <a href={contactData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                                                Direct Chat
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiOutlineMail className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Official Email</div>
                                        <a href={`mailto:${contactData.email}`} className="font-semibold text-blue-900 hover:underline">
                                            {contactData.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Website */}
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiOutlineGlobeAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Official Web</div>
                                        <a href={`https://${contactData.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-800 hover:underline">
                                            {contactData.website}
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiOutlineClock className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-bold text-slate-400">Working Hours</div>
                                        <div className="font-semibold text-slate-800">{contactData.officeHours}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Direct WhatsApp Callout Button */}
                            <div className="pt-2">
                                <a
                                    href={contactData.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    <span>Chat Directly on WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Engineering Personnel Badge */}
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
                            <div className="flex items-center gap-3 mb-2">
                                <FaUserTie className="text-cyan-300 text-lg" />
                                <span className="text-xs uppercase font-bold tracking-wider text-cyan-300">
                                    Technical Point of Contact
                                </span>
                            </div>
                            <div className="text-lg font-bold text-white">
                                {contactData.marketingEngineer.name}
                            </div>
                            <div className="text-xs text-slate-300 mb-3">
                                {contactData.marketingEngineer.role}
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                Available for immediate project estimation, site technical visits, and bill of quantities (BOQ) review for industrial clients across Pakistan.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact & Quotation Form */}
                    <motion.div
                        className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-10"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            Request a Proposal or Technical Consultation
                        </h3>
                        <p className="text-sm text-slate-600 mb-8">
                            Fill in your project details below and our engineering team will get back to you promptly with technical advice and pricing.
                        </p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                                    <HiCheckCircle />
                                </div>
                                <h4 className="text-xl font-bold text-emerald-900">
                                    Inquiry Received Successfully!
                                </h4>
                                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                                    Thank you, <strong>{form.name}</strong>. Our engineering marketing team will review your requirements for <strong>{form.service}</strong> and contact you at {form.phone || form.email}.
                                </p>
                                <div className="pt-2">
                                    <button
                                        onClick={sendWhatsAppMessage}
                                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold inline-flex items-center gap-2 shadow-sm"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        <span>Forward Directly via WhatsApp</span>
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your name or company name"
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Phone / WhatsApp */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                            Phone / WhatsApp *
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. 0327-8896738"
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                                        />
                                    </div>

                                    {/* City / Location */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                            Project City / Location
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            placeholder="e.g. Lahore, Karachi, Faisalabad"
                                            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Service Interest */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                        Primary Service Required *
                                    </label>
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800 bg-white"
                                    >
                                        {servicesData.map((s) => (
                                            <option key={s.id} value={s.cardName}>
                                                {s.cardName}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                        Project Scope & Requirements *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Describe your piping specifications, pipeline diameters, medium/chemicals, lining requirements, or raw material needs..."
                                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-slate-800"
                                    />
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <button
                                        type="submit"
                                        className="flex-1 py-3.5 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm shadow-md transition text-center"
                                    >
                                        Submit Technical Request
                                    </button>
                                    <button
                                        type="button"
                                        onClick={sendWhatsAppMessage}
                                        className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        <span>Send via WhatsApp</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
