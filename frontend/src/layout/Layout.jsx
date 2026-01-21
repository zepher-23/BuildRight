import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/' }, // Keeping purely simple nav for now
        { name: 'Portfolio', path: '/' },
        { name: 'Contact', path: '/' },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-orange-600 p-2 rounded-lg text-white group-hover:bg-orange-700 transition-colors">
                            <Hammer size={24} />
                        </div>
                        <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>
                            Build<span className="text-orange-600">Right</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contact" // Keeping anchor for contact as it's often a section
                            className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
                        >
                            <Phone size={16} />
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-neutral-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-semibold text-neutral-900"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#contact"
                                className="bg-orange-600 text-white py-4 rounded-xl text-center font-bold text-lg mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-neutral-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="bg-orange-600 p-2 rounded-lg text-white">
                                    <Hammer size={24} />
                                </div>
                                <span className="text-2xl font-bold tracking-tight">
                                    Build<span className="text-orange-600">Right</span>
                                </span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed">
                                Transforming homes with premium craftsmanship and attention to detail. Your vision, our expertise.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Services</h4>
                            <ul className="space-y-4 text-neutral-400">
                                <li><Link to="/services/kitchen" className="hover:text-white transition-colors">Kitchen Remodeling</Link></li>
                                <li><Link to="/services/bathroom" className="hover:text-white transition-colors">Bathroom Renovation</Link></li>
                                <li><Link to="/services/flooring" className="hover:text-white transition-colors">Flooring Installation</Link></li>
                                <li><Link to="/services/countertops" className="hover:text-white transition-colors">Countertops</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-4 text-neutral-400">
                                <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Portfolio</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Testimonials</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Contact</h4>
                            <ul className="space-y-4 text-neutral-400">
                                <li>123 Construction Ave</li>
                                <li>Builder City, ST 12345</li>
                                <li>(555) 123-4567</li>
                                <li>hello@buildright.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-neutral-800 pt-8 text-neutral-500 text-sm text-center">
                        © {new Date().getFullYear()} BuildRight Construction. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
