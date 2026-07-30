import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Clock, Star, Users } from 'lucide-react';

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Star,
      title: 'Creative Excellence',
      description: 'Every design is crafted with creativity, passion, and attention to detail that sets your brand apart.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We don\'t just create beautiful designs—we create designs that achieve your business goals.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure your projects are delivered on time, every time.',
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'Your satisfaction is our priority. We work closely with you throughout the entire process.',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4">
            <span className="text-sm font-semibold text-red-400">Why Design World</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We combine creativity, strategy, and dedication to deliver exceptional design solutions
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-red-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '250+', label: 'Projects Completed' },
            { value: '120+', label: 'Happy Clients' },
            { value: '3+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};