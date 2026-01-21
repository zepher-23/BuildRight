import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BathroomRenovation = () => {
    return (
        <div className="pt-20">
            <div className="bg-blue-50 py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Bathroom Renovation
                    </motion.h1>
                    <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                        Create a spa-like retreat in your own home. We combine luxury fixtures with efficient layouts to maximize your space.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Relaxation Redefined</h2>
                        <p className="text-neutral-600 mb-6">
                            From master suites to guest bathrooms, our renovations bring value and comfort to your home.
                        </p>
                        <ul className="space-y-4">
                            {['Walk-in Showers', 'Freestanding Tubs', 'Double Vanities', 'Heated Flooring'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-neutral-700">
                                    <CheckCircle2 className="text-blue-600" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-200 rounded-2xl h-80 w-full flex items-center justify-center text-neutral-500">
                        Bathroom Image
                    </div>
                </div>

                <div className="bg-neutral-900 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Start your bathroom transformation</h2>
                    <Link to="/#contact" className="inline-flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                        Get a Free Quote <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BathroomRenovation;
