import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Optimized background image
import BathroomHeroUrl from '../assets/bathroom hero.jpeg?w=1600&format=webp&q=80';
// Optimized section images
import BathroomSectionSrcSet from '../assets/bathroom section.jpeg?w=400;800;1200&format=webp&as=srcset';
import BathroomSectionFallback from '../assets/bathroom section.jpeg?w=800&format=jpg';

const BathroomRenovation = () => {
    return (
        <div className="pt-20">
            <div
                className="relative bg-blue-50 py-32 px-6 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(239,246,255,0.9), rgba(239,246,255,0.8)), url('${BathroomHeroUrl}')` }}
            >
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Bathroom Renovation
                    </motion.h1>
                    <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-medium">
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
                    <div className="overflow-hidden rounded-2xl h-80 w-full shadow-lg">
                        <img
                            srcSet={BathroomSectionSrcSet}
                            src={BathroomSectionFallback}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt="Luxury Bathroom"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
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
