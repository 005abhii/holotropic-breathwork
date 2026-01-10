'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MapPin, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SessionsPage() {
  const offerings = [
    {
      id: 'individual',
      title: 'One-Day Workshops',
      duration: '8-10 hours',
      participants: '12-20 people',
      price: '₹8,000',
      description: 'Experience a full Holotropic Breathwork session in a supportive group setting. Includes one complete breathwork session (both as breather and sitter), mandala creation, and sharing circle.',
      features: [
        'One complete breathwork experience',
        'Experienced facilitator guidance',
        'Group support and sharing',
        'Mandala creation for integration',
        'Light refreshments included',
        'Integration resources provided'
      ]
    },
    {
      id: 'weekend',
      title: 'Weekend Intensives',
      duration: '2-3 days',
      participants: '15-25 people',
      price: '₹18,000',
      description: 'Immerse yourself in a weekend of deep exploration with two full breathwork sessions, extended integration time, teachings on the holotropic paradigm, and community building.',
      features: [
        'Two complete breathwork sessions',
        'Extended integration sessions',
        'Teachings on holotropic principles',
        'Group process and sharing',
        'Meals and accommodations available',
        'Follow-up integration support'
      ]
    },
    {
      id: 'retreat',
      title: 'Residential Retreats',
      duration: '5-7 days',
      participants: '12-18 people',
      price: '₹45,000 - ₹65,000',
      description: 'Transform your life in our immersive residential retreats. Multiple breathwork sessions combined with meditation, nature connection, bodywork, and deep community in beautiful natural settings.',
      features: [
        '3-4 breathwork sessions',
        'Daily meditation and yoga',
        'Nature walks and contemplation',
        'Optional bodywork sessions',
        'All meals and accommodation',
        'Beautiful natural setting',
        'Small group for deep connection',
        'Comprehensive integration support'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly Circles',
      duration: '1 day',
      participants: '8-15 people',
      price: '₹3,500',
      description: 'Join our regular monthly practice circles for ongoing support in your breathwork journey. Open to those who have completed at least one workshop.',
      features: [
        'Regular practice opportunity',
        'Ongoing community support',
        'Deepening of practice',
        'Integration of previous sessions',
        'Special themes each month',
        'Priority booking for events'
      ]
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
              Sessions & Retreats
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Choose the experience that's right for your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              We offer various formats to accommodate different schedules, experience levels, and intentions.
              Whether you're new to breathwork or a seasoned practitioner, there's an opportunity for you
              to explore the depths of consciousness in a safe, supportive container.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 sm:py-16 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="bg-gradient-to-br from-earth-700 to-earth-500 p-6 sm:p-8 md:w-80 flex flex-col justify-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{offering.title}</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>{offering.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-3" />
                        <span>{offering.participants}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-3" />
                        <span className="text-2xl font-bold">{offering.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1">
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                      {offering.description}
                    </p>

                    <h3 className="font-semibold text-earth-900 mb-4">What's Included:</h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
                      {offering.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-earth-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/events"
                        className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-6 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
                      >
                        View Upcoming Dates
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border-2 border-earth-600 px-6 py-3 text-base font-semibold text-earth-600 hover:bg-earth-50 transition-colors"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6 sm:mb-8 text-center">
              What to Expect
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-3">Before Your Session</h3>
                <p>
                  You'll receive detailed preparation guidelines including dietary recommendations,
                  what to bring, and how to set intentions for your experience. We'll also conduct
                  a brief health screening to ensure breathwork is appropriate for you.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-3">During the Session</h3>
                <p>
                  The day begins with an opening circle where we create sacred space and build group
                  connection. You'll then participate in a breathwork session (alternating between
                  breather and sitter roles in workshops). Trained facilitators are present throughout
                  to provide support. After breathing, you'll create a mandala to help integrate your
                  experience, followed by a sharing circle.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-3">After the Session</h3>
                <p>
                  Integration is crucial. We provide resources and guidance for the integration process,
                  and you're welcome to reach out with questions or concerns. Many participants find it
                  helpful to journal, engage in creative expression, and maintain regular contact with
                  the community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-earth-700 to-earth-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">
              Ready to Begin?
            </h2>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100 mb-6 sm:mb-8">
              Take the first step on your journey of self-discovery and healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-earth-900 hover:bg-earth-50 transition-colors"
              >
                View Calendar
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
    </div>
  );
}
