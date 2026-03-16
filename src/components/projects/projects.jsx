import { motion } from "framer-motion";
import {projectsData} from "../../data/projectsData.js";

export default function Projects() {
    return (
        <section id = "projects" className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                    Our Projects Timeline
                </h2>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

                    <div className="space-y-16">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.name}
                                className={`flex flex-col md:flex-row items-center ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Timeline marker */}
                                <div className="flex-shrink-0 md:w-1/2 md:flex md:justify-center">
                                    <div className="w-6 h-6 bg-blue-900 rounded-full z-10 relative md:top-0"></div>
                                </div>

                                {/* Project Content */}
                                <div className="mt-4 md:mt-0 md:w-1/2 bg-white p-6 rounded-lg shadow-md relative z-20">
                  <span className="text-sm text-blue-900 font-semibold">
                    {project.year}
                  </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-700 mt-2">{project.description}</p>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="mt-4 rounded-lg object-cover w-full max-h-64"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}