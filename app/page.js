"use client";

import { useGameStore } from "./store/gameStore";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgressCard from "./components/ProgressCard";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaTrain,
  FaBookOpen,
  FaCrosshairs,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  const { gameProgress, startGame, showTutorial, toggleTutorial } =
    useGameStore();
  const router = useRouter();

  const handleStartGame = (gameType) => {
    startGame(gameType);
    if (gameType === "encyclopedia") {
      router.push("/encyclopedia");
    } else if (gameType === "story-mode") {
      // In a real app, you would navigate to the story mode page here
      console.log(`Starting ${gameType}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header showTutorial={showTutorial} onToggleTutorial={toggleTutorial} />

      <main className="relative z-0 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Hero />

          {/* Game Options Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Story Mode */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaTrain className="text-white text-2xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Story Mode
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Experience the adventure through narrative-driven
                    challenges. Start with the Emergency Divert Challenge and
                    progress through increasingly complex physics scenarios.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          gameProgress.game1.unlocked
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      />
                      <span className="text-sm text-gray-600">
                        Game 1: Emergency Divert Challenge
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          gameProgress.game2.unlocked
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      />
                      <span className="text-sm text-gray-600">
                        Game 2: Frostfire Cavern Challenge
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStartGame("story-mode")}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Start Adventure
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Encyclopedia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaBookOpen className="text-white text-2xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Encyclopedia
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Deep dive into physics concepts with detailed explanations,
                    diagrams, and examples. Perfect for understanding the
                    science behind the games.
                  </p>

                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Temperature & Heat Transfer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Phase Changes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Kinetic Energy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Energy Conservation</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStartGame("encyclopedia")}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore Knowledge
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Section */}
          <ProgressCard gameProgress={gameProgress} />

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaTrain className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Story Mode
              </h4>
              <p className="text-gray-600">
                Immersive narrative-driven challenges that teach physics
                concepts through gameplay.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaBookOpen className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Encyclopedia
              </h4>
              <p className="text-gray-600">
                Comprehensive learning resources with detailed explanations and
                interactive examples.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Progress Tracking
              </h4>
              <p className="text-gray-600">
                Monitor your learning journey with detailed progress reports and
                achievements.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Embark on your physics adventure and discover the wonders of science
            through interactive gameplay!
          </p>
        </div>
      </footer>
    </div>
  );
}
