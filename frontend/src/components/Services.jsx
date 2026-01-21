import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Bath, Layers, Grid3X3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Kitchen Remodeling',
            description: 'Transform your kitchen into a culinary haven. From custom cabinetry to modern appliances, we design spaces that inspire.',
            icon: <Utensils size={32} />,
            color: 'bg-orange-100 text-orange-600',
            link: '/services/kitchen',
        },
        {
            id: 2,
            title: 'Bathroom Renovation',
            description: 'Create a spa-like retreat in your own home. Luxury fixtures, spacious showers, and elegant tile work.',
            icon: <Bath size={32} />,
            color: 'bg-blue-100 text-blue-600',
            link: '/services/bathroom',
        },
        {
            id: 3,
            title: 'Flooring Installation',
            description: 'Durable and stylish flooring options including hardwood, tile, laminate, and luxury vinyl plank.',
            icon: <Layers size={32} />,
            color: 'bg-stone-100 text-stone-600',
            link: '/services/flooring',
        },
        {
            id: 4,
            title: 'Countertop Installation',
            description: 'Premium granite, quartz, and marble countertops that serve as the centerpiece of your kitchen or bath.',
            icon: <Grid3X3 size={32} />,
            color: 'bg-slate-100 text-slate-600',
            link: '/services/countertops',
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Expertise</h2>
                    <p className="text-neutral-600">
                        We specialize in four key areas to bring the most value to your home. Quality craftsmanship guaranteed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link to={service.link} key={service.id} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-neutral-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-neutral-100 cursor-pointer h-full"
                            >
                                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors">
                                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
