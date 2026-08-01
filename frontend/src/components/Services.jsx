import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Package, Printer, Share2, FileText, Smartphone, CreditCard, Tag, Heart, TrendingUp, Globe } from 'lucide-react';

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique, memorable logos that define your brand identity',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Package,
      title: 'Brand Identity',
      description: 'Complete branding solutions from concept to execution',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Tag,
      title: 'Packaging Design',
      description: 'Eye-catching packaging that sells your product',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Share2,
      title: 'Social Media Design',
      description: 'Engaging graphics for all social platforms',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Professional print materials that make an impact',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FileText,
      title: 'Brochure & Flyer',
      description: 'Informative designs that capture attention',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Premium cards that leave lasting impressions',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Smartphone,
      title: 'Product Labels',
      description: 'Custom labels that elevate your products',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Heart,
      title: 'Wedding Invitations',
      description: 'Beautiful designs for your special day',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Creatives',
      description: 'Strategic designs that drive conversions',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Modern, responsive and SEO-friendly websites for businesses and brands.',
      color: 'from-cyan-500 to-blue-600',
   },
   ];

  return (
    <section id="services" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-red-100 to-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-red-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow on Hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-semibold text-red-600 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
