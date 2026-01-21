import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
// Import image with vite-imagetools directives
import HeroImageSrcSet from '../assets/Homepage-hero.jpeg?w=500;800;1200;1600&format=webp&as=srcset';
import HeroImageFallback from '../assets/Homepage-hero.jpeg?w=1200&format=jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-50">
            {/* Background Graphic Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 rounded-bl-[100px] -z-10 hidden md:block" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-tr-[100px] -z-10 opacity-50" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-neutral-100">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-neutral-600">Available for new projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6">
                            Elevate Your <br />
                            <span className="text-orange-600">Living Space</span>
                        </h1>

                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
                            Expert craftsmanship for kitchen remodels, bathroom renovations, and premium flooring. We turn your house into the home of your dreams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="#contact"
                                className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                            >
                                Start Your Project
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#portfolio"
                                className="bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-center shadow-sm"
                            >
                                View Portfolio
                            </a>
                        </div>

                        <div className="flex gap-8 text-neutral-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                <span>10+ Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                            <img
                                srcSet={HeroImageSrcSet}
                                src={HeroImageFallback}
                                alt="Modern Living Room Renovation"
                                width="800"
                                height="1000"
                                className="w-full h-full object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floaty Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Project Satisfaction</p>
                                    <p className="text-2xl font-bold text-neutral-900">100%</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
