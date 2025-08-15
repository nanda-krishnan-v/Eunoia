import { motion } from "framer-motion";
import { useEffect } from "react";

const ResultScreen = ({ averageScore, onTryAgain }) => {
  // Play success sound when component mounts
  useEffect(() => {
    // Create a simple success chime using Web Audio API
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.3
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log("Audio not supported or blocked");
    }
  }, []);

  // Determine result based on average score
  const getResult = (score) => {
    if (score >= 4.0) {
      return {
        emoji: "🌟",
        message: "Hey, you're super happy! Keep shining!",
        color: "from-green-400 to-green-500",
        bgColor: "from-green-50 to-green-100",
      };
    } else if (score >= 3.0) {
      return {
        emoji: "😊",
        message:
          "You're doing okay, but treat yourself to something nice today.",
        color: "from-happiness-400 to-happiness-500",
        bgColor: "from-happiness-50 to-happiness-100",
      };
    } else if (score >= 2.0) {
      return {
        emoji: "😐",
        message: "Not the happiest day, but tomorrow's a fresh start.",
        color: "from-yellow-400 to-yellow-500",
        bgColor: "from-yellow-50 to-yellow-100",
      };
    } else {
      return {
        emoji: "💙",
        message:
          "You seem low today — maybe talk to a friend or do something you love.",
        color: "from-blue-400 to-blue-500",
        bgColor: "from-blue-50 to-blue-100",
      };
    }
  };

  const result = getResult(averageScore);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Result Card */}
        <motion.div
          className={`bg-gradient-to-br ${result.bgColor} rounded-2xl p-8 md:p-12 card-shadow border-4 border-white`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Large Result Emoji */}
          <motion.div
            className="text-8xl md:text-9xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
          >
            {result.emoji}
          </motion.div>

          {/* Score Display */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Your Happiness Score
            </h2>
            <div
              className={`inline-block bg-gradient-to-r ${result.color} text-white text-4xl md:text-5xl font-bold px-8 py-4 rounded-full`}
            >
              {averageScore.toFixed(1)}/5.0
            </div>
          </motion.div>

          {/* Result Message */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 font-quicksand leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {result.message}
          </motion.p>

          {/* Visual Score Representation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${
                    i < Math.floor(averageScore)
                      ? `bg-gradient-to-r ${result.color}`
                      : "bg-gray-300"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Try Again Button */}
          <motion.button
            onClick={onTryAgain}
            className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-xl md:text-2xl font-semibold px-8 py-4 rounded-full button-hover card-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            🔄 Try Again
          </motion.button>
        </motion.div>

        {/* Celebration Elements */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-2xl"
          >
            🎉
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
            className="text-2xl"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="text-2xl"
          >
            🌟
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultScreen;
