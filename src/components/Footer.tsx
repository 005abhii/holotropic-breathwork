import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">
              Holotropic Breathwork India
            </h3>
            <p className="text-earth-200 text-sm leading-relaxed">
              Led by Father KC Thomas, we offer authentic Holotropic Breathwork
              sessions, retreats, and facilitator training in Bangalore and across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/holotropic-breathwork" className="text-earth-200 hover:text-white transition-colors">
                  What is Holotropic Breathwork
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="text-earth-200 hover:text-white transition-colors">
                  Sessions & Retreats
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-earth-200 hover:text-white transition-colors">
                  Facilitator Training
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-earth-200 hover:text-white transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-earth-200 hover:text-white transition-colors">
                  Resources & Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-earth-200 hover:text-white transition-colors">
                  FAQ & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-earth-300 mt-0.5 flex-shrink-0" />
                <span className="text-earth-200">
                  Bangalore, Karnataka<br />India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-earth-300 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-earth-200 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-earth-300 flex-shrink-0" />
                <a href="mailto:info@holotropicbreathwork.in" className="text-earth-200 hover:text-white transition-colors">
                  info@holotropicbreathwork.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-earth-200 text-sm mb-4">
              Subscribe to our newsletter for updates on events and workshops.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-l-md border-0 bg-earth-800 px-3 py-2 text-sm text-white placeholder-earth-400 focus:ring-2 focus:ring-earth-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-earth-600 px-4 py-2 text-sm font-semibold hover:bg-earth-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-earth-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-earth-300">
              © {new Date().getFullYear()} Holotropic Breathwork India. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-earth-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-earth-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
