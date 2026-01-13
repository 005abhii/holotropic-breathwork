'use client';

import { motion } from 'framer-motion';
import { Wind, Brain, Heart, Sparkles, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function HolotropicBreathworkPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            What is Holotropic Breathwork™?
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-base sm:text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Holotropic Breathwork™ is a powerful approach to self-exploration and healing that
              combines accelerated breathing, evocative music, focused bodywork, and mandala drawing
              in a safe, supportive environment.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
              {[
                {
                  icon: Wind,
                  title: 'Accelerated Breathing',
                  description: 'Faster, deeper breathing to access non-ordinary states'
                },
                {
                  icon: Brain,
                  title: 'Expanded Consciousness',
                  description: 'Journey beyond everyday awareness into deeper realms'
                },
                {
                  icon: Heart,
                  title: 'Emotional Release',
                  description: 'Release stored traumas and emotional blockages'
                },
                {
                  icon: Sparkles,
                  title: 'Spiritual Awakening',
                  description: 'Connect with transpersonal and mystical dimensions'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-earth-50 rounded-lg p-6 sm:p-8"
                >
                  <item.icon className="h-10 w-10 text-earth-600 mb-4" />
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-earth-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
              The Origins
            </h2>
            <p>
              Developed by Dr. Stanislav Grof and Christina Grof in the 1970s, Holotropic Breathwork™
              emerged from decades of research into non-ordinary states of consciousness. The word
              "holotropic" means "moving toward wholeness" (from Greek holos = whole, trepein = moving toward).
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
              How It Works
            </h2>
            <p>
              In a typical session, participants work in pairs. One person is the "breather" and lies
              down with eyes closed, using accelerated breathing to enter an expanded state of awareness.
              The other person acts as a "sitter," providing support and ensuring safety. Carefully
              selected music guides the journey through different phases of the experience.
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
              The Three Pillars
            </h2>

            <div className="not-prose space-y-6 my-8">
              {[
                {
                  title: '1. Accelerated Breathing',
                  description: 'The breath is used as a gateway to access non-ordinary states of consciousness. Through faster, deeper breathing, we bypass the defenses of the rational mind and allow unconscious material to surface.'
                },
                {
                  title: '2. Evocative Music',
                  description: 'Music serves as a sonic container and guide for the journey. The carefully curated playlist moves through phases that support opening, exploration, breakthrough, and integration.'
                },
                {
                  title: '3. Focused Energy Release',
                  description: 'Facilitators may offer supportive touch or focused pressure to areas of tension, helping to release blocked energy and facilitate deeper experiences.'
                }
              ].map((pillar, index) => (
                <div key={index} className="border-l-4 border-earth-600 pl-6 py-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-earth-900 mb-2">{pillar.title}</h3>
                  <p className="text-gray-700">{pillar.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
              Benefits of Holotropic Breathwork™
            </h2>
            <ul className="space-y-3">
              <li>Release of emotional and physical trauma</li>
              <li>Resolution of psychological symptoms and conflicts</li>
              <li>Access to transpersonal and spiritual dimensions</li>
              <li>Enhanced creativity and insight</li>
              <li>Greater self-awareness and personal growth</li>
              <li>Connection with inner wisdom and healing intelligence</li>
              <li>Relief from anxiety, depression, and PTSD symptoms</li>
              <li>Spiritual awakening and mystical experiences</li>
            </ul>

            <div className="not-prose bg-earth-900 text-white rounded-lg p-6 sm:p-8 my-12">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">Safety & Support</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-earth-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-2">Trained Facilitators</div>
                    <p className="text-earth-200 text-sm">
                      All sessions are led by certified Grof Transpersonal Training facilitators
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-earth-300 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-2">Safe Container</div>
                    <p className="text-earth-200 text-sm">
                      Structured environment with clear guidelines and continuous support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="not-prose flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/sessions"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-6 py-3 text-base font-semibold text-white hover:bg-earth-700"
              >
                Experience a Session
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border-2 border-earth-600 px-6 py-3 text-base font-semibold text-earth-600 hover:bg-earth-50"
              >
                Safety & FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
