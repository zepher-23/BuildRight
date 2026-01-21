import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlooringHero from '../assets/flooring hero.jpeg';
import FlooringSection from '../assets/flooring section.jpeg';

const FlooringInstallation = () => {
    return (
        <div className="pt-20">
            <div
                className="relative bg-stone-50 py-32 px-6 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(250,250,249,0.9), rgba(250,250,249,0.8)), url('${FlooringHero}')` }}
            >
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Flooring Installation
                    </motion.h1>
                    <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-medium">
                        Set a solid foundation for your home. We install high-quality flooring that stands the test of time and looks stunning.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Durable & Stylish Materials</h2>
                        <p className="text-neutral-600 mb-6">
                            Using only the best materials, we ensure your floors are scratch-resistant, water-proof (where needed), and perfectly leveled.
                        </p>
                        <ul className="space-y-4">
                            {['Hardwood', 'Luxury Vinyl Plank', 'Porcelain Tile', 'Laminate'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-neutral-700">
                                    <CheckCircle2 className="text-stone-600" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="overflow-hidden rounded-2xl h-80 w-full shadow-lg">
                        <img src={FlooringSection} alt="Premium Flooring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                <div className="bg-neutral-900 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Upgrade your floors today</h2>
                    <Link to="/#contact" className="inline-flex items-center gap-2 bg-stone-600 px-8 py-4 rounded-xl font-bold hover:bg-stone-700 transition-colors">
                        Get a Free Quote <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FlooringInstallation;
