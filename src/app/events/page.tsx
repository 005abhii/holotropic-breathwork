'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, User, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { events } from '@/data/events';

export default function EventsPage() {
  const eventsByMonth = events.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'retreat': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-purple-100 text-purple-800';
      case 'breathwork': return 'bg-orange-100 text-orange-800';
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
              Events Calendar
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-earth-100">
              Join us for transformative Holotropic Breathwork™ experiences throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {Object.entries(eventsByMonth).map(([month, monthEvents], monthIndex) => (
            <div key={month} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-6 sm:mb-8"
              >
                {month}
              </motion.h2>

              <div className="space-y-4 sm:space-y-6">
                {monthEvents.map((event, eventIndex) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: eventIndex * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="md:flex">
                      {/* Date Badge */}
                      <div className="bg-earth-700 text-white p-6 md:w-48 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm uppercase tracking-wide">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        {event.endDate && (
                          <>
                            <div className="text-xs my-1">to</div>
                            <div className="text-2xl font-bold">
                              {new Date(event.endDate).getDate()}
                            </div>
                            <div className="text-xs uppercase">
                              {new Date(event.endDate).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-earth-900 mb-2">
                              {event.title}
                            </h3>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-earth-600" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="h-4 w-4 mr-2 text-earth-600" />
                            {event.facilitator}
                          </div>
                          {event.price && (
                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="h-4 w-4 mr-2 text-earth-600" />
                              {event.price}
                            </div>
                          )}
                        </div>

                        <Link
                          href={event.registrationLink || '/contact#register'}
                          className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-6 py-2 text-sm font-semibold text-white hover:bg-earth-700 transition-colors"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Note about second half */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-earth-100 border-l-4 border-earth-600 rounded-lg p-6 sm:p-8 mb-12"
          >
            <h3 className="text-xl font-semibold text-earth-900 mb-2">
              Second Half of 2026
            </h3>
            <p className="text-gray-700">
              Workshops and retreats for the second half of 2026 will be announced later.
              Stay connected with us for updates on upcoming dates.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-earth-50 rounded-lg p-6 sm:p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4">
              Questions or Special Requests?
            </h3>
            <p className="text-lg text-gray-700 mb-4 sm:mb-6">
              Contact us for inquiries about the workshops and retreats
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-earth-600 px-8 py-3 text-base font-semibold text-white hover:bg-earth-700 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
