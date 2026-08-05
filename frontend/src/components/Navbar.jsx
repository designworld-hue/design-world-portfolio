import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/whatsapp';
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }
}, [i18n]);

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
  setIsLanguageOpen(false);
};
  const navItems = [
  { label: t("navbar.home"), href: "#home" },
  { label: t("navbar.about"), href: "#about" },
  { label: t("navbar.portfolio"), href: "#portfolio" },
  { label: t("navbar.services"), href: "#services" },
  { label: t("navbar.process"), href: "#process" },
  { label: t("navbar.contact"), href: "#contact" },
];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/logo.webp" alt="Design World - Complete Design & Printing Solution" className="h-12 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Language + CTA */}
<div className="hidden md:flex items-center gap-4">

  <div className="relative">
    <button
      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
      className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition"
    >
      <Globe size={18} />
      <span>{i18n.language === "mr" ? "मराठी" : "English"}</span>
      <ChevronDown size={16} />
    </button>

    {isLanguageOpen && (
      <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

        <button
  onClick={() => changeLanguage("en")}
  className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50"
>
  <span>🇬🇧</span>
  <span>English</span>
</button>

<button
  onClick={() => changeLanguage("mr")}
  className="flex items-center gap-2 w-full px-4 py-3 hover:bg-gray-50"
>
  <span>🇮🇳</span>
  <span>मराठी</span>
</button>

      </div>
    )}
  </div>

  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-medium shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300"
  >
    {t("navbar.letsTalk")}
  </motion.a>

</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                {item.label}
              </a>
            ))}

           <div className="flex gap-3 pt-2">

  <button
    onClick={() => changeLanguage("en")}
    className={`flex-1 py-3 rounded-xl border ${
      i18n.language === "en"
        ? "bg-red-600 text-white"
        : "bg-white text-gray-700"
    }`}
  >
    🇬🇧 English
  </button>

  <button
    onClick={() => changeLanguage("mr")}
    className={`flex-1 py-3 rounded-xl border ${
      i18n.language === "mr"
        ? "bg-red-600 text-white"
        : "bg-white text-gray-700"
    }`}
  >
    🇮🇳 मराठी
  </button>

</div>

            <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-medium text-center"
>
  {t("navbar.letsTalk")}
</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};