import { useTranslation } from "react-i18next";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Zap, Heart, MapPin, Briefcase } from 'lucide-react';

// Brand-colored keyword highlight
const Nav = ({ children }) => (
  <span className="font-semibold text-[#001F54]">{children}</span>
);
const Red = ({ children }) => (
  <span className="font-semibold text-red-600">{children}</span>
);

export const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const features = [
  {
    icon: Award,
    title: t("about.features.excellence.title"),
    description: t("about.features.excellence.description"),
  },
  {
    icon: Users,
    title: t("about.features.client.title"),
    description: t("about.features.client.description"),
  },
  {
    icon: Zap,
    title: t("about.features.delivery.title"),
    description: t("about.features.delivery.description"),
  },
  {
    icon: Heart,
    title: t("about.features.passion.title"),
    description: t("about.features.passion.description"),
  },
];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #001F54 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">{t("about.badge")}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            {t("about.title1")}{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {t("about.title2")}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo with glassmorphism profile card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src="/founder.webp"
                alt="Vivekanand Garje - Founder of Design World"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
            </div>

            {/* Glassmorphism profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-8 bg-white/60 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl shadow-black/20 border border-white/60"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">
                    Vivekanand Garje
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-red-600">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {t("about.founderRole")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[#001F54]">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                    {t("about.company")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                    {t("about.location")}
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001F54] to-blue-800 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-xl font-bold text-white">VG</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-gradient-to-br from-red-400/30 to-blue-600/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6 lg:pl-6 mt-12 lg:mt-0">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-lg text-gray-600 leading-relaxed"
            >
              <p>
                Hi, I'm <Nav>Vivekanand Garje</Nav>, founder of <Red>Design World</Red>. Since
                launching <Red>Design World</Red> in <Nav>January 2023</Nav>, I've been helping
                businesses create impactful brand identities through <Red>graphic design</Red>,{' '}
                <Nav>branding</Nav>, <Red>packaging</Red>, <Nav>print design</Nav>, and{' '}
                <Red>marketing solutions</Red>.
              </p>
              <p>
                Based in <Nav>Kharghar, Navi Mumbai</Nav>, Design World specializes in{' '}
                <Red>Branding</Red>, <Red>Packaging</Red>, <Red>Print Design</Red>, and{' '}
                <Red>Social Media Design</Red>. Every project is an opportunity to create
                something extraordinary.
              </p>
              <p>
                My mission is simple: deliver designs that not only look beautiful but also drive
                results. Whether you're a startup or an established business, I'm here to bring
                your vision to life.
              </p>
            </motion.div>

            {/* Feature grid */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-5 pt-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
