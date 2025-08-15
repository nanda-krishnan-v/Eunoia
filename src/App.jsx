import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import questionsData from "./data/questions.json";

// Fixed answers array that applies to all questions
const fixedAnswers = [
  { label: "Very Low", emoji: "😞", score: 1 },
  { label: "Low", emoji: "😐", score: 2 },
  { label: "Medium", emoji: "🙂", score: 3 },
  { label: "High", emoji: "😄", score: 4 },
  { label: "Very High", emoji: "🤩", score: 5 },
];

// App states
const APP_STATES = {
  WELCOME: "welcome",
  QUIZ: "quiz",
  RESULT: "result",
};

function App() {
  const [appState, setAppState] = useState(APP_STATES.WELCOME);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState([]);
  const [averageScore, setAverageScore] = useState(0);

  // Function to start the quiz
  const startQuiz = () => {
    // Randomly shuffle questions and select 5
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);

    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setScores([]);
    setAppState(APP_STATES.QUIZ);
  };

  // Function to handle answer selection
  const handleAnswer = (score) => {
    const newScores = [...scores, score];
    setScores(newScores);

    // Check if this was the last question
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate average score and show results
      const average =
        newScores.reduce((sum, score) => sum + score, 0) / newScores.length;
      setAverageScore(average);
      setAppState(APP_STATES.RESULT);
    }
  };

  // Function to try again
  const tryAgain = () => {
    setAppState(APP_STATES.WELCOME);
  };

  // Handle keyboard navigation for Enter key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && appState === APP_STATES.QUIZ) {
        // Auto-select the middle answer (Medium) when Enter is pressed
        const mediumAnswer = fixedAnswers.find(
          (answer) => answer.label === "Medium"
        );
        if (mediumAnswer) {
          handleAnswer(mediumAnswer.score);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [appState, currentQuestionIndex, scores]);

  return (
    <div className="App min-h-screen">
      <AnimatePresence mode="wait">
        {appState === APP_STATES.WELCOME && (
          <WelcomeScreen key="welcome" onStartQuiz={startQuiz} />
        )}

        {appState === APP_STATES.QUIZ && selectedQuestions.length > 0 && (
          <QuestionCard
            key="quiz"
            question={selectedQuestions[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={selectedQuestions.length}
            onAnswer={handleAnswer}
            fixedAnswers={fixedAnswers}
          />
        )}

        {appState === APP_STATES.RESULT && (
          <ResultScreen
            key="result"
            averageScore={averageScore}
            onTryAgain={tryAgain}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
