import { motion } from "framer-motion";
import {aboutData} from "../../data/aboutData.js";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
    return (
        <section id = "about" className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                {/* Our Story */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {aboutData.story.heading}
                    </h2>
                    <p className="text-gray-700 text-lg sm:text-xl">{aboutData.story.text}</p>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                        Meet the Team
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {aboutData.team.map((member) => (
                            <motion.div
                                key={member.name}
                                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                />
                                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <div className="flex space-x-4 mt-2">
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 hover:text-blue-900 transition"
                                        >
                                            <FaLinkedin size={20} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-600 transition"
                                        >
                                            <FaTwitter size={20} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}