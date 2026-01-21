import React from 'react';
import { motion } from 'framer-motion';
// Images with imagetools directives
import KitchenFarmhouse from '../assets/Kitchen Modern Farmhouse Kitchen.jpeg?w=400;800&format=webp&as=srcset';
import BathroomLuxury from '../assets/Bathroom Luxury Master Bath.jpeg?w=400;800&format=webp&as=srcset';
import FlooringHardwood from '../assets/Flooring Hardwood Restoration.jpeg?w=400;800&format=webp&as=srcset';
import CountertopsQuartz from '../assets/Countertops Quartz Island Installation.jpeg?w=400;800&format=webp&as=srcset';
import KitchenMinimalist from '../assets/Kitchen Minimalist Chef Kitchen.jpeg?w=400;800&format=webp&as=srcset';
import BathroomGuest from '../assets/Bathroom Guest Bathroom Remodel.jpeg?w=400;800&format=webp&as=srcset';

// Fallbacks
import KitchenFarmhouseFallback from '../assets/Kitchen Modern Farmhouse Kitchen.jpeg?w=800&format=jpg';
import BathroomLuxuryFallback from '../assets/Bathroom Luxury Master Bath.jpeg?w=800&format=jpg';
import FlooringHardwoodFallback from '../assets/Flooring Hardwood Restoration.jpeg?w=800&format=jpg';
import CountertopsQuartzFallback from '../assets/Countertops Quartz Island Installation.jpeg?w=800&format=jpg';
import KitchenMinimalistFallback from '../assets/Kitchen Minimalist Chef Kitchen.jpeg?w=800&format=jpg';
import BathroomGuestFallback from '../assets/Bathroom Guest Bathroom Remodel.jpeg?w=800&format=jpg';

const Portfolio = () => {
    const projects = [
        { id: 1, category: 'Kitchen', title: 'Modern Farmhouse Kitchen', image: KitchenFarmhouse, fallback: KitchenFarmhouseFallback },
        { id: 2, category: 'Bathroom', title: 'Luxury Master Bath', image: BathroomLuxury, fallback: BathroomLuxuryFallback },
        { id: 3, category: 'Flooring', title: 'Hardwood Restoration', image: FlooringHardwood, fallback: FlooringHardwoodFallback },
        { id: 4, category: 'Countertops', title: 'Quartz Island Installation', image: CountertopsQuartz, fallback: CountertopsQuartzFallback },
        { id: 5, category: 'Kitchen', title: 'Minimalist Chef Kitchen', image: KitchenMinimalist, fallback: KitchenMinimalistFallback },
        { id: 6, category: 'Bathroom', title: 'Guest Bathroom Remodel', image: BathroomGuest, fallback: BathroomGuestFallback },
    ];

    return (
        <section id="portfolio" className="py-24 bg-neutral-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-neutral-400">
                            Explore our recent work. We take pride in every detail.
                        </p>
                    </div>
                    <button className="text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-neutral-900 transition-colors">
                        View All Projects
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                        >
                            <img
                                srcSet={project.image}
                                src={project.fallback}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-orange-400 text-sm font-semibold mb-2">{project.category}</span>
                                <h3 className="text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
