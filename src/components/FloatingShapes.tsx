import { motion } from 'motion/react';

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Étoiles flottantes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-12 h-12"
      >
        <svg viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-16 h-16"
      >
        <svg viewBox="0 0 24 24" fill="#FF6B6B">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-20 w-14 h-14"
      >
        <svg viewBox="0 0 24 24" fill="#4ECDC4">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-60 right-40 w-10 h-10"
      >
        <svg viewBox="0 0 24 24" fill="#95E1D3">
          <rect x="6" y="6" width="12" height="12" rx="2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-16 h-16"
      >
        <svg viewBox="0 0 24 24" fill="#F38181">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </motion.div>
    </div>
  );
}
