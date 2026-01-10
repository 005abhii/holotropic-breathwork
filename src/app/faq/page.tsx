'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'safety', label: 'Safety' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'training', label: 'Training' },
    { id: 'sessions', label: 'Sessions' }
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[300px] sm:min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Everything you need to know about Holotropic Breathwork
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-earth-50 border-b border-earth-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-earth-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-earth-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-earth-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-earth-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-earth-600 flex-shrink-0 transition-transform ${
                      activeId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeId === faq.id ? 'auto' : 0,
                    opacity: activeId === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Safety Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-14 md:mt-16 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-4">
              Important Safety Information
            </h3>
            <p className="text-amber-800 mb-4">
              Holotropic Breathwork is a powerful practice that is contraindicated for certain conditions.
              Please consult with your physician if you have any of the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-amber-800">
              <li>Cardiovascular disease or high blood pressure</li>
              <li>History of aneurysm, stroke, or seizures</li>
              <li>Glaucoma or retinal detachment</li>
              <li>Recent surgery or injury</li>
              <li>Pregnancy</li>
              <li>Severe mental illness</li>
            </ul>
            <p className="text-amber-800 mt-4">
              If you have any health concerns, please discuss them with us before registering for a session.
            </p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6">
              We're here to help. Contact us for personalized answers to your questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-8 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
