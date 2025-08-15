import { motion } from 'framer-motion';
import { useEffect } from 'react';

const QuestionCard = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer, 
  fixedAnswers 
}) => {
  // Handle Enter key press for keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        // Auto-select the middle answer (Medium) when Enter is pressed
        const mediumAnswer = fixedAnswers.find(answer => answer.label === "Medium");
        if (mediumAnswer) {
          onAnswer(mediumAnswer.score);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onAnswer, fixedAnswers]);

  // Calculate progress percentage
  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div 
        className="w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-gray-700">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-happiness-400 to-happiness-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 card-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
            {question}
          </h2>

          {/* Answer Buttons */}
          <div className="space-y-4">
            {fixedAnswers.map((answer, index) => (
              <motion.button
                key={answer.label}
                onClick={() => onAnswer(answer.score)}
                className="w-full bg-gradient-to-r from-happiness-50 to-happiness-100 hover:from-happiness-100 hover:to-happiness-200 text-gray-800 font-semibold py-4 px-6 rounded-xl button-hover border-2 border-transparent hover:border-happiness-300 transition-all duration-300 flex items-center justify-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{answer.emoji}</span>
                <span className="text-lg">{answer.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Keyboard Hint */}
          <motion.p 
            className="text-center text-gray-500 text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            💡 Tip: Press Enter to select "Medium"
          </motion.p>
        </motion.div>

        {/* Happiness Meter Visual */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 card-shadow">
            <span className="text-sm font-semibold text-gray-700">Happiness Meter</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < Math.floor(progressPercentage / 20) 
                      ? 'bg-happiness-400' 
                      : 'bg-gray-300'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuestionCard;
