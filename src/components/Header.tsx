'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    subItems: [
      { name: 'Fr. KC Thomas SDB', href: '/about/father-kc-thomas' },
      { name: 'What is Holotropic Breathwork™', href: '/about/holotropic-breathwork' },
    ]
  },
  {
    name: 'Experience',
    href: '/sessions',
    subItems: [
      { name: 'Workshops & Retreats', href: '/sessions' },
      { name: 'Events Calendar', href: '/events' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ & Safety', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-earth-800 whitespace-nowrap">
                Holotropic Breathwork
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2 lg:ml-auto">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-earth-600 transition-colors whitespace-nowrap">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-earth-50 hover:text-earth-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-earth-600 transition-colors whitespace-nowrap inline-block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact#register"
              className="ml-2 rounded-md bg-earth-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-earth-700 transition-colors whitespace-nowrap"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="space-y-1 pb-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-earth-50 hover:text-earth-600"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-1"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-earth-50 hover:text-earth-600"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-earth-50 hover:text-earth-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact#register"
                  className="block rounded-md bg-earth-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-earth-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}