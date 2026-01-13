'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function FatherKCThomasPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Fr. KC Thomas SDB
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-earth-100">
              Certified Holotropic Breathwork™ Facilitator & Spiritual Guide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-earth-700 to-earth-500 mb-6"></div>
                <div className="bg-earth-50 rounded-lg p-6 sm:p-8">
                  <h3 className="font-semibold text-earth-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Certified GTT Facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>20+ years of experience</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>1000+ sessions facilitated</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Author & Speaker</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Biography Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
                  A Journey of Service and Healing
                </h2>
                <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Fr. KC Thomas SDB has dedicated his life to the integration of spiritual wisdom
                    and therapeutic healing. As a certified Holotropic Breathwork™ facilitator trained
                    in the Grof Transpersonal Training tradition, he brings together the ancient
                    spiritual traditions of India with cutting-edge approaches to consciousness
                    exploration and transformation.
                  </p>

                  <p>
                    His journey began in the contemplative traditions of Christian mysticism, where
                    he discovered the profound depths of inner silence and prayer. This foundation
                    led him to explore various contemplative practices and ultimately to the work
                    of Dr. Stanislav Grof, whose cartography of consciousness resonated deeply with
                    his own spiritual experiences and understanding.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
                  Training & Qualifications
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-earth-600 pl-4 sm:pl-6 py-2">
                    <div className="font-semibold text-earth-900">
                      Grof Transpersonal Training (GTT)
                    </div>
                    <div className="text-sm text-gray-600">
                      Certified Holotropic Breathwork™ Facilitator
                    </div>
                  </div>
                  <div className="border-l-4 border-earth-600 pl-4 sm:pl-6 py-2">
                    <div className="font-semibold text-earth-900">
                      Transpersonal Psychology
                    </div>
                    <div className="text-sm text-gray-600">
                      Advanced training in consciousness studies
                    </div>
                  </div>
                  <div className="border-l-4 border-earth-600 pl-4 sm:pl-6 py-2">
                    <div className="font-semibold text-earth-900">
                      Theological Studies
                    </div>
                    <div className="text-sm text-gray-600">
                      Deep grounding in contemplative spirituality
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
                  Approach to Facilitation
                </h3>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p>
                    Fr. KC's facilitation style is characterized by deep presence, compassion,
                    and trust in the inherent wisdom of the psyche. He creates a sacred container
                    where participants feel safe to explore the depths of their consciousness,
                    knowing they are held with care and respect.
                  </p>
                  <p>
                    His unique contribution lies in his ability to integrate the spiritual richness
                    of Indian mysticism with the therapeutic framework of Holotropic Breathwork™.
                    This synthesis honors both the transcendent and the deeply personal dimensions
                    of healing, recognizing that true transformation encompasses both psychological
                    and spiritual dimensions.
                  </p>
                  <p>
                    Participants consistently speak of his gentle strength, his ability to hold
                    space for even the most challenging experiences, and his genuine respect for
                    each person's unique journey. His presence embodies the qualities he teaches:
                    trust, surrender, and openness to the mystery of consciousness.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
                  Workshops & Retreats
                </h3>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p>
                    Fr. KC facilitates regular workshops and retreats at Vidyavanam Ashram in Bangalore,
                    offering participants the opportunity to experience the profound healing potential
                    of Holotropic Breathwork™. These residential programs are carefully designed to
                    provide a safe container for deep exploration and transformation.
                  </p>
                  <p>
                    He is also GTT's (Grof Transpersonal Training) representative in India, bringing
                    this authentic practice to seekers across the country. His workshops emphasize
                    not only the breathwork experience but also integration, community support, and
                    ongoing personal growth.
                  </p>
                </div>
              </div>

              <div className="bg-earth-50 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">
                  Words from Fr. KC
                </h3>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-earth-600 pl-4 sm:pl-6">
                  "The breath is our most intimate companion, the bridge between life and
                  consciousness. In learning to breathe consciously and deeply, we open to
                  dimensions of our being that have been waiting, sometimes for lifetimes,
                  to be welcomed home. This work is not about achieving anything or becoming
                  someone different. It is about remembering who we already are beneath the
                  layers of conditioning and trauma - whole, connected, and infinitely capable
                  of healing and love."
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link
                  href="/events"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-earth-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-earth-700 transition-colors"
                >
                  View Upcoming Events
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-earth-600 px-6 py-3 text-base font-semibold text-earth-600 hover:bg-earth-50 transition-colors"
                >
                  Contact Fr. KC
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
