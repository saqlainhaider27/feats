import { motion } from "framer-motion";
import { footerData } from "../../data/footerData.js";

import {
    FaLinkedin,
    FaFacebook,
    FaTwitter
} from "react-icons/fa";

const iconMap = {
    linkedin: FaLinkedin,
    facebook: FaFacebook,
    twitter: FaTwitter
};

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-20">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-12">

                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8 sm:mb-10">

                    <img
                        src={footerData.company.logo}
                        alt="FEATS logo"
                        className="h-6 sm:h-8 lg:h-10 w-auto"
                    />

                    <p className="text-gray-800 font-semibold mt-2 text-sm sm:text-base">
                        {footerData.company.name}
                    </p>

                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-6">

                    {/* Email */}
                    <div className="text-gray-600 text-sm break-all">
                        {footerData.contact.email}
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 sm:gap-5">
                        {footerData.socials.map((social) => {
                            const Icon = iconMap[social.icon];

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-600 hover:text-blue-900 text-lg sm:text-xl transition"
                                >
                                    <Icon />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Phone */}
                    <div className="text-gray-600 text-sm">
                        {footerData.contact.phone}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t mt-8 sm:mt-10 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-gray-500">
                    © {new Date().getFullYear()} {footerData.company.name}. All rights reserved.
                </div>

            </div>

        </footer>
    );
}