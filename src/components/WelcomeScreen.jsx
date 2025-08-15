import { motion } from 'framer-motion';

const WelcomeScreen = ({ onStartQuiz }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Floating Emojis Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-emoji">😊</div>
        <div className="floating-emoji">🌟</div>
        <div className="floating-emoji">🎉</div>
        <div className="floating-emoji">💖</div>
        <div className="floating-emoji">🌈</div>
        <div className="floating-emoji">✨</div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Large Emoji */}
        <motion.div
          className="text-8xl mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          😊
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How Happy Are You Today?
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 font-quicksand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's find out your happiness level in under a minute!
        </motion.p>

        {/* Start Button */}
        <motion.button
          onClick={onStartQuiz}
          className="bg-gradient-to-r from-happiness-400 to-happiness-500 text-white text-xl md:text-2xl font-semibold px-8 py-4 rounded-full button-hover card-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Start Quiz
        </motion.button>

        {/* Decorative Elements */}
        <motion.div 
          className="mt-12 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          ✨ Quick • Fun • Insightful ✨
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
