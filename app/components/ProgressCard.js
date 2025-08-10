'use client';

import { motion } from 'framer-motion';

export default function ProgressCard({ gameProgress }) {
  const completedGames = Object.values(gameProgress).filter(game => game.completed).length;
  const totalScore = Object.values(gameProgress).reduce((sum, game) => sum + game.score, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Progress</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700">Story Mode Progress</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Game 1</span>
                <div className="flex items-center space-x-2">
                  {gameProgress.game1.completed && (
                    <span className="text-green-500 text-lg">✓</span>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {gameProgress.game1.completed ? 'Completed' : 'Not Started'}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Game 2</span>
                <div className="flex items-center space-x-2">
                  {gameProgress.game2.completed && (
                    <span className="text-green-500 text-lg">✓</span>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {gameProgress.game2.completed ? 'Completed' : 'Not Started'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700">Learning Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Games Completed</span>
                <span className="text-sm font-medium text-gray-700">
                  {completedGames}/2
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Score</span>
                <span className="text-sm font-medium text-gray-700">
                  {totalScore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 