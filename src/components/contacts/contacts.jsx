import { useState } from "react";
import { motion } from "framer-motion";
import {contactData} from "../../data/contactsData.js";
export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Message sent:", form);

        // Reset form
        setForm({
            name: "",
            email: "",
            message: ""
        });

        alert("Message sent successfully!");
    };

    return (
        <section id = "contact" className="bg-gray-50 min-h-screen py-16">

            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {contactData.heading}
                    </h2>

                    <p className="text-gray-600 mt-3">
                        {contactData.subtitle}
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-8 space-y-6"
                >

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Message
                        </label>

                        <textarea
                            name="message"
                            required
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        Send Message
                    </button>

                </motion.form>

                {/* Extra Contact Info */}
                <div className="text-center mt-10 text-gray-600 space-y-2">
                    <p>Email: {contactData.email}</p>
                    <p>Phone: {contactData.phone}</p>
                    <p>{contactData.location}</p>
                </div>

            </div>

        </section>
    );
}