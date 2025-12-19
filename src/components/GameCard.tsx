import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GameCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  delay?: number;
}

export function GameCard({ title, description, icon, color, delay = 0 }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" 
           style={{ backgroundColor: color }} />
      <div className="relative bg-white rounded-3xl p-8 shadow-lg border-4 border-white hover:shadow-2xl transition-all h-full"
           style={{ borderColor: color }}>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform"
             style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3 className="mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
