import { useTranslation } from "react-i18next";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Search, Rocket, Palette, RefreshCw, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL, trackWhatsAppClick } from '../lib/whatsapp';

export const DesignProcess = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: t("process.steps.consultation.title"),
    description: t("process.steps.consultation.description"),
    color: "from-red-500 to-red-600",
  },
  {
    number: "02",
    icon: Search,
    title: t("process.steps.research.title"),
    description: t("process.steps.research.description"),
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "03",
    icon: Rocket,
    title: t("process.steps.concept.title"),
    description: t("process.steps.concept.description"),
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    icon: Palette,
    title: t("process.steps.design.title"),
    description: t("process.steps.design.description"),
    color: "from-pink-500 to-pink-600",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: t("process.steps.revision.title"),
    description: t("process.steps.revision.description"),
    color: "from-green-500 to-green-600",
  },
  {
    number: "06",
    icon: CheckCircle,
    title: t("process.steps.delivery.title"),
    description: t("process.steps.delivery.description"),
    color: "from-yellow-500 to-yellow-600",
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
            <span className="text-sm font-semibold text-red-600">{t("process.badge")}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("process.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("process.description")}
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
          onClick={() => trackWhatsAppClick("Design Process")}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
          >
            {t("process.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};