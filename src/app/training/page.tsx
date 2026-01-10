'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Users, BookOpen, Heart, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TrainingPage() {
  const modules = [
    {
      number: 1,
      title: 'Foundations of Holotropic Breathwork',
      duration: '7 days',
      topics: ['History and development', 'Theoretical foundations', 'Cartography of the psyche', 'Safety protocols', 'First breathwork experiences']
    },
    {
      number: 2,
      title: 'The Art of Holding Space',
      duration: '7 days',
      topics: ['Facilitator presence', 'Working with difficult experiences', 'Bodywork techniques', 'Group dynamics', 'Supervised practice']
    },
    {
      number: 3,
      title: 'Perinatal and Transpersonal Dimensions',
      duration: '7 days',
      topics: ['Birth matrices', 'Transpersonal experiences', 'Spiritual emergency', 'Integration practices', 'Advanced facilitation']
    },
    {
      number: 4,
      title: 'Specialized Topics and Skills',
      duration: '7 days',
      topics: ['Working with trauma', 'Music selection', 'Mandala interpretation', 'Ethics and boundaries', 'Personal work']
    },
    {
      number: 5,
      title: 'Advanced Practice and Supervision',
      duration: '7 days',
      topics: ['Supervised facilitation', 'Complex situations', 'Professional development', 'Community building', 'Personal integration']
    },
    {
      number: 6,
      title: 'Certification and Beyond',
      duration: '7 days',
      topics: ['Final assessments', 'Starting your practice', 'Ongoing development', 'Network building', 'Certification ceremony']
    }
  ];

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
              Facilitator Training
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Become a certified Holotropic Breathwork facilitator
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
              Train in the Authentic Tradition
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our comprehensive facilitator training program in Bangalore follows the Grof Transpersonal
              Training (GTT) methodology, enriched with Father KC Thomas's unique integration of Indian
              spiritual wisdom and decades of experience. This is not just learning a technique—it's
              a profound journey of personal transformation and professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {[
              { icon: Calendar, title: '600+ Hours', desc: 'Comprehensive training over 2-3 years' },
              { icon: Users, title: 'Small Groups', desc: '12-16 participants for deep learning' },
              { icon: Award, title: 'GTT Certification', desc: 'Internationally recognized credential' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-earth-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-10 w-10 text-earth-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-12 sm:py-16 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4">
              Six-Module Program
            </h2>
            <p className="text-lg text-gray-600">
              Each module is a week-long intensive, typically scheduled 3-6 months apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-earth-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-earth-900">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-earth-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6 sm:mb-8 text-center">
              Training Requirements
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-4">Prerequisites</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">At least 3 prior Holotropic Breathwork experiences as a breather</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sincere commitment to personal growth and healing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Good physical and mental health (contraindications apply)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Application and interview with training team</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-4">Certification Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Completion of all six training modules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Minimum of 15 additional breathwork sessions as breather during training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Supervised facilitation practicum (minimum 6 workshops)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Written case studies and integration work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Final assessment and approval by training team</span>
                  </li>
                </ul>
              </div>

              <div className="bg-earth-50 rounded-lg p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-4">Investment</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Per Module:</strong> ₹85,000</p>
                  <p><strong>Full Program (6 modules):</strong> ₹5,10,000</p>
                  <p className="text-sm mt-4">Payment plans available. Does not include additional breathwork sessions, practicum expenses, or accommodation.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-12 sm:py-16 bg-earth-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center">
              Why Train With Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Authentic Lineage',
                  desc: 'Direct training in the Grof Transpersonal Training tradition'
                },
                {
                  icon: BookOpen,
                  title: 'Spiritual Integration',
                  desc: 'Unique synthesis with Indian contemplative wisdom'
                },
                {
                  icon: Users,
                  title: 'Experienced Faculty',
                  desc: '20+ years of facilitation and training experience'
                },
                {
                  icon: GraduationCap,
                  title: 'Ongoing Support',
                  desc: 'Mentorship and community continue after certification'
                }
              ].map((item, index) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="bg-earth-700 rounded-full p-3 flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                    <p className="text-earth-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
              Ready to Begin Your Training?
            </h2>
            <p className="text-lg text-gray-700 mb-6 sm:mb-8">
              The next training cohort begins in 2026. Applications are now being accepted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-8 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border-2 border-earth-600 px-8 py-3 text-base font-semibold text-earth-600 hover:bg-earth-50 transition-colors"
              >
                View Training Dates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
