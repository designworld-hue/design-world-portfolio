import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Marquee = () => {
  const { t } = useTranslation();

  const text = t("marquee.text");

  return (
    <div className="relative py-8 bg-gradient-to-r from-red-600 via-red-700 to-red-600 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-bold text-white/20">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};