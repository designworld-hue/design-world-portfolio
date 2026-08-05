import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Palette, Package, Printer, Share2 } from 'lucide-react';
import { WHATSAPP_URL, trackWhatsAppClick } from '../lib/whatsapp';

export const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 500], [0, 120]);
  const yBlob2 = useTransform(scrollY, [0, 500], [0, -90]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const services = [
  { icon: Palette, label: t("hero.services.logo") },
  { icon: Package, label: t("hero.services.brand") },
  { icon: Printer, label: t("hero.services.print") },
  { icon: Share2, label: t("hero.services.social") },
];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-blue-50/40"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: yBlob1 }}
          className="absolute -top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-300/30 to-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-blue-900/10 rounded-full blur-3xl"
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #001F54 1px, transparent 0)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={lineVariants}
          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/70 backdrop-blur-xl rounded-full border border-gray-200/60 shadow-lg shadow-black/5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-red-600" />
          <span className="text-sm font-semibold text-gray-700 tracking-wide">
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Headline with line-by-line reveal — single semantic h1 */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.32] tracking-tight mb-8">
          <span className="block overflow-hidden pt-2 pb-2">
  <motion.span variants={lineVariants} className="block text-gray-900">
    {t("hero.title1")}
  </motion.span>
</span>

<span className="block overflow-hidden py-2">
  <motion.span variants={lineVariants} className="block text-gray-900">
    {t("hero.title2")}
  </motion.span>
</span>

<span className="block overflow-hidden pt-2">
  <motion.span variants={lineVariants} className="block">
    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
      {t("hero.title3")}
    </span>{" "}
    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
      {t("hero.title4")}
    </span>
  </motion.span>
</span>
        </h1>

        {/* Subheading */}
        <motion.p
          variants={lineVariants}
          className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={lineVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href={WHATSAPP_URL}
            onClick={() => trackWhatsAppClick("Hero")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(220, 38, 38, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 min-w-[280px] bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-2xl shadow-red-500/40 flex items-center justify-center space-x-2 transition-all duration-300 w-full sm:w-auto"
          >
            <span>{t("hero.whatsapp")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#portfolio"
            data-testid="hero-portfolio-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
          >
            {t("hero.portfolio")}
          </motion.a>
        </motion.div>

        {/* Floating service pills */}
        <motion.div
          variants={lineVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/60 shadow-md shadow-black/5"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{service.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats — premium animated cards */}
        <motion.div
          variants={lineVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-16 pt-10 border-t border-gray-200/70"
        >
          {[
            { value: "250+", label: t("hero.stats.projects") },
            { value: "120+", label: t("hero.stats.clients") },
            { value: "3+", label: t("hero.stats.experience") },
            { value: "100%", label: t("hero.stats.satisfaction") },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.12, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/60 shadow-md shadow-black/5 px-5 py-6 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-3xl sm:text-4xl lg:text-5xl font-bold font-display bg-gradient-to-br from-[#001F54] to-red-700 bg-clip-text text-transparent leading-tight pb-1">
                {stat.value}
              </div>
              <div className="relative text-xs sm:text-sm font-medium text-gray-600 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
