'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';

export default function TestimonialsPage() {
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
              Voices of Transformation
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Stories from those who have experienced profound healing through Holotropic Breathwork
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <Quote className="h-10 w-10 text-earth-600 opacity-50" />
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-earth-900 text-base sm:text-lg">
                    {testimonial.name}
                  </div>
                  {testimonial.role && (
                    <div className="text-sm text-gray-600 mt-1">
                      {testimonial.role}
                    </div>
                  )}
                  {testimonial.date && (
                    <div className="text-xs text-gray-500 mt-2">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Share Your Story CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-14 md:mt-16 bg-gradient-to-br from-earth-700 to-earth-600 rounded-lg p-8 sm:p-10 md:p-12 text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
              Share Your Story
            </h2>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Have you experienced transformation through Holotropic Breathwork?
              We'd love to hear about your journey and share it with others who may benefit.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-earth-900 hover:bg-earth-50 transition-colors"
            >
              Share Your Experience
            </Link>
          </motion.div>

          {/* Begin Your Journey CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
              Ready to Begin Your Own Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6">
              Experience the transformative power of Holotropic Breathwork for yourself
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sessions"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-6 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
              >
                Explore Sessions
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border-2 border-earth-600 px-6 py-3 text-base font-semibold text-earth-600 hover:bg-earth-50 transition-colors"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
