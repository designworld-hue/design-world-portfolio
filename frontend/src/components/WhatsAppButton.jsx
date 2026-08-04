import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WHATSAPP_URL } from "../lib/whatsapp";

export const WhatsAppButton = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 mb-2 mr-2"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 max-w-xs">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>

                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    {t("whatsapp.title")}
                  </p>

                  <p className="text-xs text-gray-600">
                    {t("whatsapp.description")}
                  </p>

                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="floating-whatsapp-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative group block"
          >
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />

            <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center group-hover:shadow-green-500/70 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};