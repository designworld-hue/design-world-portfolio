import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/whatsapp';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Logo Design',
    'Brand Identity',
    'Packaging Design',
    'Social Media Design',
    'Print Design',
    'Business Cards',
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="inline-block bg-white rounded-xl p-3 mb-6">
              <img src="/logo.webp" alt="Design World - Complete Design & Printing Solution" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Creating memorable brand identities through creative graphic design, branding, packaging, and marketing solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/design.world_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:designworld.print47@gmail.com"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-red-400" />
                <span>Kharghar, Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-red-400" />
                <a href={WHATSAPP_URL} className="hover:text-red-400 transition-colors">
                  +91 9322994747
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 text-red-400" />
                <a href="mailto:designworld.print47@gmail.com" className="hover:text-red-400 transition-colors break-all">
                  designworld.print47@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Design World. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed with{' '}
              <span className="text-red-400">❤</span> by Design World
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};