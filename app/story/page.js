"use client";

import { useGameStore } from "../store/gameStore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaBolt,
  FaHome,
  FaTrain,
  FaCrosshairs,
  FaLightbulb,
  FaCheck,
  FaStar,
  FaBookOpen,
} from "react-icons/fa";

export default function StoryPage() {
  const { gameProgress, startGame, completeGame } = useGameStore();
  const [currentScene, setCurrentScene] = useState("intro");
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(50);
  const [currentEnergy, setCurrentEnergy] = useState(25);
  const [trainPosition, setTrainPosition] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [tipMessage, setTipMessage] = useState("");

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentScene("gameplay");
    startGame("story-mode");
  };

  const handleCompleteGame = () => {
    completeGame("game1", 85);
    setCurrentScene("completed");
  };

  const handleSpeedChange = (newSpeed) => {
    setCurrentSpeed(newSpeed);
    setCurrentEnergy(Math.max(0, 100 - newSpeed * 1.5));

    // Show physics tip
    if (newSpeed > 70) {
      setTipMessage(
        "High speed means high kinetic energy! Remember: KE = ½mv²"
      );
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4000);
    } else if (newSpeed < 30) {
      setTipMessage(
        "Low speed means low kinetic energy. Position is key for success!"
      );
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4000);
    }
  };

  const handleJoystickMove = (direction) => {
    let newPosition = trainPosition;
    switch (direction) {
      case "up":
        newPosition = Math.max(-50, trainPosition - 10);
        break;
      case "down":
        newPosition = Math.min(50, trainPosition + 10);
        break;
      case "left":
        newPosition = Math.max(-50, trainPosition - 15);
        break;
      case "right":
        newPosition = Math.min(50, trainPosition + 15);
        break;
    }
    setTrainPosition(newPosition);
  };

  if (currentScene === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="relative z-10 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBolt className="text-white font-bold text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Physics Adventure
              </h1>
            </Link>

            <Link
              href="/"
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:bg-white transition-all duration-200 shadow-sm"
            >
              <FaHome className="inline mr-2" /> Menu
            </Link>
          </div>
        </header>

        {/* Introduction Scene */}
        <main className="relative z-0 px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome to Story Mode
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Embark on an exciting journey through physics challenges where
                your knowledge and skills will be put to the test!
              </p>
            </motion.div>

            {/* Story Introduction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8"
            >
              <div className="text-6xl mb-6 text-blue-500">
                <FaTrain className="mx-auto" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Story Introduction
              </h4>
              <p className="text-gray-600 leading-relaxed">
                You are a train engineer facing an emergency situation. A bridge
                ahead has been compromised, and you must use your understanding
                of physics to safely divert the train. Your knowledge of speed,
                kinetic energy, and positioning will determine the success of
                your mission.
              </p>
            </motion.div>

            {/* Game Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8"
            >
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Your Mission
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <FaCrosshairs className="mr-2 text-blue-500" /> Objective
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Safely divert the train by controlling its speed and
                    position. Avoid obstacles and reach the safe zone within the
                    time limit.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <FaBolt className="mr-2 text-yellow-500" /> Physics Focus
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Understand how speed affects kinetic energy, and how
                    positioning affects your ability to navigate obstacles
                    successfully.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Start Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartGame}
              className="px-12 py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-xl"
            >
              <FaTrain className="inline mr-3" /> Start Your Journey
            </motion.button>
          </div>
        </main>
      </div>
    );
  }

  if (currentScene === "gameplay") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Game Header */}
        <header className="relative z-10 p-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBolt className="text-white font-bold text-sm" />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Emergency Divert Challenge
              </span>
            </div>

            <Link
              href="/"
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm"
            >
              <FaHome className="inline mr-2" /> Exit
            </Link>
          </div>
        </header>

        {/* Game Interface */}
        <main className="relative z-0 px-6 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Game Area */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Panel - Controls */}
              <div className="space-y-6">
                {/* Speed Control */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaTrain className="mr-2 text-blue-500" /> Speed Control
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Speed: {currentSpeed} km/h
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={currentSpeed}
                        onChange={(e) =>
                          handleSpeedChange(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <div className="text-sm text-gray-600">
                      Kinetic Energy: {currentEnergy.toFixed(1)} kJ
                    </div>
                  </div>
                </div>

                {/* Joystick */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaCrosshairs className="mr-2 text-green-500" /> Direction
                    Control
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200">
                      ↖
                    </button>
                    <button
                      onClick={() => handleJoystickMove("up")}
                      className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
                    >
                      ↑
                    </button>
                    <button className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200">
                      ↗
                    </button>
                    <button
                      onClick={() => handleJoystickMove("left")}
                      className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
                    >
                      ←
                    </button>
                    <button className="p-4 bg-gray-200 rounded-lg">●</button>
                    <button
                      onClick={() => handleJoystickMove("right")}
                      className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
                    >
                      →
                    </button>
                    <button className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200">
                      ↙
                    </button>
                    <button
                      onClick={() => handleJoystickMove("down")}
                      className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
                    >
                      ↓
                    </button>
                    <button className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200">
                      ↘
                    </button>
                  </div>
                </div>
              </div>

              {/* Center Panel - Game View */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-96 relative overflow-hidden">
                  {/* Game Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-100">
                    {/* Track */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800"></div>

                    {/* Obstacles */}
                    <div className="absolute top-20 left-1/4 w-4 h-20 bg-red-500 rounded"></div>
                    <div className="absolute top-20 right-1/4 w-4 h-20 bg-red-500 rounded"></div>

                    {/* Safe Zone */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-green-500 rounded-lg border-4 border-white"></div>
                  </div>

                  {/* Train */}
                  <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300"
                    style={{ left: `${50 + trainPosition * 0.5}%` }}
                  >
                    <div className="text-6xl text-blue-600">
                      <FaTrain />
                    </div>
                  </div>

                  {/* Educational Tip */}
                  {showTip && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-4 left-4 right-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <FaLightbulb className="text-yellow-600 text-lg" />
                        <p className="text-yellow-800 font-medium">
                          {tipMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Game Instructions */}
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaCrosshairs className="mr-2 text-purple-500" /> Current
                    Challenge
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Control the train's speed and position to navigate through
                    obstacles and reach the safe zone. Remember: higher speed
                    means higher kinetic energy, but also more momentum to
                    control!
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <strong>Speed:</strong> {currentSpeed} km/h
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <strong>Position:</strong>{" "}
                      {trainPosition > 0
                        ? "Right"
                        : trainPosition < 0
                        ? "Left"
                        : "Center"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Game Button */}
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCompleteGame}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaCheck className="inline mr-2" /> Complete Challenge
              </motion.button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (currentScene === "completed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Header */}
        <header className="relative z-10 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBolt className="text-white font-bold text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Physics Adventure
              </h1>
            </Link>

            <Link
              href="/"
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:bg-white transition-all duration-200 shadow-sm"
            >
              <FaHome className="inline mr-2" /> Menu
            </Link>
          </div>
        </header>

        {/* Completion Screen */}
        <main className="relative z-0 px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <div className="text-8xl mb-6 text-green-500">
                <FaStar />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Challenge Completed!
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Congratulations! You've successfully completed the Emergency
                Divert Challenge. Your understanding of physics concepts has
                saved the day!
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Your Results
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    <FaTrain />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    Story Mode
                  </div>
                  <div className="text-gray-600">Game 1 Completed!</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <FaStar />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {gameProgress.game1.score}
                  </div>
                  <div className="text-gray-600">Points Earned</div>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                What You Learned
              </h3>
              <div className="text-left space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">
                    <FaCheck />
                  </span>
                  <span>Speed directly affects kinetic energy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">
                    <FaCheck />
                  </span>
                  <span>Position and velocity determine success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">
                    <FaCheck />
                  </span>
                  <span>Energy conservation in motion</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaHome className="inline mr-2" /> Back to Menu
                </motion.button>
              </Link>

              <Link href="/encyclopedia">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaBookOpen className="inline mr-2" /> Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
