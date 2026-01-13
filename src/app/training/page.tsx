'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Mail } from 'lucide-react';

export default function TrainingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Holotropic Breathing Technique Training
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Information Coming Soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-earth-50 rounded-lg p-8 sm:p-12 mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6">
                About Our Training Program
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Fr. KC Thomas SDB is GTT's (Grof Transpersonal Training) representative in India
                  and has been conducting training programs in breathwork techniques.
                </p>
                <p>
                  We have filed for a trademark for "Holotropic Breathing Technique" with the
                  Government of India, which is currently pending approval.
                </p>
                <p>
                  While we continue to offer authentic Holotropic Breathwork™ workshops and retreats,
                  information about our training programs will be updated once the trademark
                  approval process is complete.
                </p>
              </div>
            </div>

            <div className="bg-earth-900 text-white rounded-lg p-8 sm:p-12">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-earth-200 mb-6">
                For inquiries about future training opportunities, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-base font-semibold text-earth-900 hover:bg-earth-50 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-earth-900 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  View Workshops & Retreats
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 bg-earth-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4">
              Experience Holotropic Breathwork™ First
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We encourage everyone to first experience the profound healing potential of
              Holotropic Breathwork™ through our regular workshops and retreats at
              Vidyavanam Ashram, Bangalore.
            </p>
            <Link
              href="/sessions"
              className="inline-flex items-center justify-center rounded-md bg-earth-600 px-8 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
            >
              Explore Workshops & Retreats
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
