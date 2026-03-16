import { useState } from "react";
import { motion } from "framer-motion";
import {servicesData} from "../../data/servicesData.js";
import { HiChevronDown } from "react-icons/hi";

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleService = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id = "services" className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                    Our Services
                </h2>

                <div className="space-y-6">
                    {servicesData.map((service, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={service.title}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleService(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {service.title}
                                        </h3>

                                        {!isActive && (
                                            <p className="text-gray-600 text-sm mt-1">
                                                {service.shortDetail}
                                            </p>
                                        )}
                                    </div>

                                    <motion.div
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <HiChevronDown className="text-blue-900 text-xl" />
                                    </motion.div>
                                </button>

                                {/* Expandable Content */}
                                <motion.div
                                    initial={false}
                                    animate={{ height: isActive ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-700">
                                        {service.longDetail}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}