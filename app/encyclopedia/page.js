"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaTrain,
  FaThermometerHalf,
  FaTint,
  FaCrosshairs,
  FaFlask,
  FaHome,
} from "react-icons/fa";

export default function EncyclopediaPage() {
  const physicsTopics = [
    {
      id: "kinetic-energy",
      title: "Kinetic Energy",
      description: "The energy possessed by an object due to its motion",
      icon: <FaTrain className="text-white text-2xl" />,
      color: "blue",
      concepts: [
        "KE = ½ × mass × velocity²",
        "Faster objects have more kinetic energy",
        "Kinetic energy increases with the square of velocity",
      ],
    },
    {
      id: "temperature",
      title: "Temperature & Heat Transfer",
      description: "Understanding how heat moves and affects matter",
      icon: <FaThermometerHalf className="text-white text-2xl" />,
      color: "red",
      concepts: [
        "Temperature measures average kinetic energy of particles",
        "Heat flows from hot to cold objects",
        "Conduction, convection, and radiation are heat transfer methods",
      ],
    },
    {
      id: "phase-changes",
      title: "Phase Changes",
      description: "How matter changes between solid, liquid, and gas states",
      icon: <FaTint className="text-white text-2xl" />,
      color: "cyan",
      concepts: [
        "Melting: solid → liquid (absorbs heat)",
        "Freezing: liquid → solid (releases heat)",
        "Evaporation: liquid → gas (absorbs heat)",
        "Condensation: gas → liquid (releases heat)",
      ],
    },
    {
      id: "energy-conservation",
      title: "Energy Conservation",
      description: "Energy cannot be created or destroyed, only transformed",
      icon: <FaBolt className="text-white text-2xl" />,
      color: "yellow",
      concepts: [
        "Total energy in a closed system remains constant",
        "Potential energy can convert to kinetic energy",
        "Energy transformations often involve heat loss",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBolt className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Physics Adventure
              </h1>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Link
              href="/"
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:bg-white transition-all duration-200 shadow-sm flex items-center space-x-2"
            >
              <FaHome className="text-gray-600" />
              <span>Home</span>
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="relative z-0 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Physics Encyclopedia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the fundamental concepts of physics through detailed
              explanations, interactive examples, and real-world applications.
            </p>
          </motion.div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {physicsTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-${topic.color}-200 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${topic.color}-500/5 to-${topic.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${topic.color}-500 to-${topic.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {topic.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                        Key Concepts:
                      </h4>
                      <ul className="space-y-2">
                        {topic.concepts.map((concept, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-sm text-gray-600">
                              {concept}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r from-${topic.color}-500 to-${topic.color}-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-${topic.color}-600 hover:to-${topic.color}-700 transition-all duration-200 shadow-lg hover:shadow-xl`}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Examples Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Interactive Examples
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCrosshairs className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Practice Problems
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Test your understanding with interactive physics problems
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFlask className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Virtual Labs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Conduct experiments in a safe virtual environment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Apply Your Knowledge?
              </h3>
              <p className="text-purple-100 mb-6">
                Now that you've learned the concepts, put them to the test in
                Story Mode!
              </p>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                >
                  <FaTrain className="text-xl" />
                  <span>Start Story Mode</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Expand your physics knowledge and become a master of the natural
            world!
          </p>
        </div>
      </footer>
    </div>
  );
}
