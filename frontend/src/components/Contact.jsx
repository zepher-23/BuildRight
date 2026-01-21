import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Let's Build Something Together</h2>
                        <p className="text-neutral-600 mb-12 text-lg">
                            Ready to start your project? Contact us today for a free consultation and estimate.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Phone</h4>
                                    <p className="text-neutral-600">(555) 123-4567</p>
                                    <p className="text-sm text-neutral-500">Mon-Fri 8am-6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Email</h4>
                                    <p className="text-neutral-600">hello@buildright.com</p>
                                    <p className="text-sm text-neutral-500">Online support 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Office</h4>
                                    <p className="text-neutral-600">123 Construction Ave</p>
                                    <p className="text-neutral-600">Builder City, ST 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 shadow-lg border border-neutral-100">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">Service Interested In</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all">
                                    <option>Kitchen Remodeling</option>
                                    <option>Bathroom Renovation</option>
                                    <option>Flooring Installation</option>
                                    <option>Countertop Installation</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
