'use client';

import { motion } from 'framer-motion';

export default function GameCard({ 
  title, 
  description, 
  icon, 
  gradient, 
  hoverGradient, 
  buttonText, 
  onClick, 
  children,
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="group"
    >
      <div className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-${hoverGradient}-200 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-${gradient}-500/5 to-${hoverGradient}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-r from-${gradient}-500 to-${gradient}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white text-2xl">{icon}</span>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          {children}
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`w-full bg-gradient-to-r from-${gradient}-500 to-${gradient}-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-${gradient}-600 hover:to-${gradient}-700 transition-all duration-200 shadow-lg hover:shadow-xl`}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 