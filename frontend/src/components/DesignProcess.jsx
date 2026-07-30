import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Search, Rocket, Palette, RefreshCw, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/whatsapp';

export const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Consultation',
      description: 'We start by understanding your business, goals, and design requirements',
      color: 'from-red-500 to-red-600',
    },
    {
      number: '02',
      icon: Search,
      title: 'Research',
      description: 'Deep dive into market trends, competitors, and target audience insights',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Concept',
      description: 'Brainstorming creative ideas and developing initial design concepts',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '04',
      icon: Palette,
      title: 'Design',
      description: 'Crafting polished designs with attention to every detail',
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: '05',
      icon: RefreshCw,
      title: 'Revisions',
      description: 'Refining the design based on your feedback until perfect',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '06',
      icon: CheckCircle,
      title: 'Final Delivery',
      description: 'Delivering all files in required formats, ready to use',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section id="process" ref={ref} className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">How We Work</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Design Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach ensuring exceptional results every time
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-blue-200 to-purple-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="relative"
                >
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl shadow-black/10 mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 text-6xl font-bold text-gray-100">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};