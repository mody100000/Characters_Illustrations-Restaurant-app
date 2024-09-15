import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo or Title */}
                    <div className="text-2xl font-bold">
                        MyCoolWebsite
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <a href="#about" className="hover:text-gray-400">About Us</a>
                        <a href="#services" className="hover:text-gray-400">Services</a>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                        <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-20">
                        <a href="#facebook" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#twitter" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#instagram" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#linkedin" className="hover:text-gray-400">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-9 border-t border-gray-700"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500">
                    &copy; 2024 MyCoolWebsite. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
