'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { resources } from '@/data/resources';

export default function ResourcesPage() {
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'article', label: 'Articles' },
    { id: 'research', label: 'Research' },
    { id: 'guide', label: 'Guides' }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'guide': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              Resources & Insights
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Deepen your understanding of Holotropic Breathwork and consciousness exploration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Explore articles, research findings, and practical guides to support your journey
              of self-discovery and healing. These resources offer insights into the holotropic
              paradigm, practical guidance for your practice, and perspectives on consciousness exploration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {resources.map((resource, index) => (
              <motion.article
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(resource.category)}`}>
                      {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                    </span>
                    {resource.readTime && (
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {resource.readTime}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-3">
                    {resource.title}
                  </h2>

                  <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {resource.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(resource.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const modal = document.getElementById(`modal-${resource.id}`);
                        if (modal) modal.classList.remove('hidden');
                      }}
                      className="inline-flex items-center text-earth-600 font-semibold hover:text-earth-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <div
                  id={`modal-${resource.id}`}
                  className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      e.currentTarget.classList.add('hidden');
                    }
                  }}
                >
                  <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
                          {resource.title}
                        </h2>
                        <button
                          onClick={() => {
                            const modal = document.getElementById(`modal-${resource.id}`);
                            if (modal) modal.classList.add('hidden');
                          }}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 sm:mb-6 text-sm text-gray-600">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(resource.category)}`}>
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {resource.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(resource.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        {resource.readTime && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {resource.readTime}
                          </div>
                        )}
                      </div>

                      <div className="prose prose-lg max-w-none">
                        {resource.content.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-earth-700 to-earth-600 rounded-lg p-8 sm:p-10 md:p-12 text-center text-white"
          >
            <BookOpen className="h-16 w-16 mx-auto mb-4 sm:mb-6 text-earth-200" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
              Want to Learn More?
            </h2>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              These resources are just the beginning. Experience the transformative power
              of Holotropic Breathwork firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sessions"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-earth-900 hover:bg-earth-50 transition-colors"
              >
                Explore Sessions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-earth-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-12 sm:py-16 bg-earth-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6 sm:mb-8 text-center">
              Recommended Reading
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: 'The Holotropic Mind', author: 'Stanislav Grof' },
                { title: 'When the Impossible Happens', author: 'Stanislav Grof' },
                { title: 'Healing Our Deepest Wounds', author: 'Stanislav & Christina Grof' },
                { title: 'The Stormy Search for the Self', author: 'Stanislav & Christina Grof' },
                { title: 'Psychology of the Future', author: 'Stanislav Grof' }
              ].map((book, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center">
                  <BookOpen className="h-6 w-6 text-earth-600 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-earth-900">{book.title}</div>
                    <div className="text-sm text-gray-600">by {book.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
