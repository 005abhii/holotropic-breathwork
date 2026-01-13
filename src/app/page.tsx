'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Heart, ArrowRight, Quote } from 'lucide-react';
import { events } from '@/data/events';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  const upcomingEvents = events.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[calc(100vh-64px)] max-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-earth-700">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="absolute inset-0 hero-overlay"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2">
              Journey Within
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-earth-100 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the transformative power of Holotropic Breathwork™ with Fr. KC Thomas SDB
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/sessions"
                className="rounded-md bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-earth-900 shadow-lg hover:bg-earth-50 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Explore Sessions
              </Link>
              <Link
                href="/about/holotropic-breathwork"
                className="rounded-md border-2 border-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-earth-900 transition-all w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">
                What is Holotropic Breathwork™?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Holotropic Breathwork™ is a powerful approach to self-exploration and healing that
                induces non-ordinary states of consciousness through accelerated breathing, evocative
                music, and focused energy release work.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Developed by Dr. Stanislav Grof, this practice offers a safe and legal way to access
                the healing potential of expanded states of awareness, facilitating profound personal
                transformation, emotional release, and spiritual awakening.
              </p>
              <Link
                href="/about/holotropic-breathwork"
                className="inline-flex items-center text-earth-600 font-semibold hover:text-earth-700 transition-colors"
              >
                Discover the Method
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600 opacity-80"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800')] bg-cover bg-center"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-3 sm:mb-4">
              Experience Transformation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Join us in exploring the depths of consciousness through authentic Holotropic Breathwork™
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: 'Deep Healing',
                description: 'Access and release emotional blockages, trauma, and limiting patterns'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Learn from Fr. KC Thomas SDB, a certified and experienced facilitator'
              },
              {
                icon: Award,
                title: 'Authentic Practice',
                description: 'Experience genuine Holotropic Breathwork™ in a natural setting'
              },
              {
                icon: Calendar,
                title: 'Regular Sessions',
                description: 'Multiple workshops and retreats throughout the year'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-5 sm:p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-earth-600 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-2 sm:mb-3 md:mb-4">
                Upcoming Events
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Join us for transformative breathwork experiences
              </p>
            </div>
            <Link
              href="/events"
              className="hidden md:inline-flex items-center text-earth-600 font-semibold hover:text-earth-700 transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-earth-700 to-earth-500"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-earth-600 font-semibold hover:text-earth-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/events"
              className="inline-flex items-center text-earth-600 font-semibold hover:text-earth-700 transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-earth-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Voices of Transformation
            </h2>
            <p className="text-lg text-earth-200 max-w-2xl mx-auto">
              Hear from those who have experienced profound healing through Holotropic Breathwork™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-earth-800 rounded-lg p-8 relative"
              >
                <Quote className="h-12 w-12 text-earth-600 mb-4 opacity-50" />
                <p className="text-lg text-earth-100 leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-earth-300">
                        {testimonial.role}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-earth-200 font-semibold hover:text-white transition-colors"
            >
              Read More Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-700 via-earth-600 to-earth-500 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Begin Your Journey of Healing
            </h2>
            <p className="text-xl text-earth-100 mb-10 leading-relaxed">
              Join us for transformative Holotropic Breathwork™ workshops and retreats
              in the peaceful setting of Vidyavanam Ashram, Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-earth-900 shadow-lg hover:bg-earth-50 transition-all transform hover:scale-105"
              >
                View Calendar
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-earth-900 transition-all"
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
