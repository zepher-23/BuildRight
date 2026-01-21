import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    // Placeholder data - ideally these would be images we generate later
    const projects = [
        { id: 1, category: 'Kitchen', title: 'Modern Farmhouse Kitchen', image: 'bg-neutral-200' },
        { id: 2, category: 'Bathroom', title: 'Luxury Master Bath', image: 'bg-stone-200' },
        { id: 3, category: 'Flooring', title: 'Hardwood Restoration', image: 'bg-orange-100' },
        { id: 4, category: 'Countertops', title: 'Quartz Island Installation', image: 'bg-slate-200' },
        { id: 5, category: 'Kitchen', title: 'Minimalist Chef Kitchen', image: 'bg-neutral-300' },
        { id: 6, category: 'Bathroom', title: 'Guest Bathroom Remodel', image: 'bg-blue-100' },
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
                            <div className={`w-full h-full ${project.image} transition-transform duration-500 group-hover:scale-110`} />

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
