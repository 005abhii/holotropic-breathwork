'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] sm:min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              We're here to answer your questions and guide you on your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-earth-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-earth-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-earth-900 mb-1">Location</div>
                    <div className="text-gray-600">
                      Bangalore, Karnataka<br />
                      India
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-earth-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-earth-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-earth-900 mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-earth-600">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-earth-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-earth-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-earth-900 mb-1">Email</div>
                    <a href="mailto:info@holotropicbreathwork.in" className="text-gray-600 hover:text-earth-600">
                      info@holotropicbreathwork.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 bg-earth-50 rounded-lg p-6">
                <h3 className="font-semibold text-earth-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" id="register">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
                    Send Us a Message
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="session">Session Registration</option>
                      <option value="training">Facilitator Training</option>
                      <option value="retreat">Retreat Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 sm:px-6 lg:px-8 py-2 focus:border-earth-500 focus:ring-earth-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-earth-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-earth-700 transition-colors "
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map placeholder - Add Google Maps integration here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
