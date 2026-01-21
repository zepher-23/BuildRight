import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CountertopInstallation = () => {
    return (
        <div className="pt-20">
            <div className="bg-slate-50 py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Countertop Installation
                    </motion.h1>
                    <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                        The perfect finish for your kitchen or bathroom. Our precision cut and installed countertops add elegance and value.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Premium Stone Surfaces</h2>
                        <p className="text-neutral-600 mb-6">
                            We offer a wide selection of natural and engineered stones to match your design palette.
                        </p>
                        <ul className="space-y-4">
                            {['Quartz', 'Granite', 'Marble', 'Soapstone'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-neutral-700">
                                    <CheckCircle2 className="text-slate-600" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-200 rounded-2xl h-80 w-full flex items-center justify-center text-neutral-500">
                        Countertop Image
                    </div>
                </div>

                <div className="bg-neutral-900 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get your dream countertops</h2>
                    <Link to="/#contact" className="inline-flex items-center gap-2 bg-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                        Get a Free Quote <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountertopInstallation;
