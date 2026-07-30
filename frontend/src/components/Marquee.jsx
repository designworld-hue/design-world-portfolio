import { motion } from 'framer-motion';

export const Marquee = () => {
  const text = "CREATIVE DESIGN • BRANDING • PACKAGING • PRINT DESIGN • SOCIAL MEDIA • ";
  
  return (
    <div className="relative py-8 bg-gradient-to-r from-red-600 via-red-700 to-red-600 overflow-hidden">
      {/* Animated Marquee */}
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
