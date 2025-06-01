import React, { useEffect, useRef } from 'react';
import { useQuiz } from '../context/QuizContext';
import { questions } from '../data/questions';
import Button from './Button';
import QuizOption from './QuizOption';
import FeedbackMessage from './FeedbackMessage';
import ProgressIndicator from './ProgressIndicator';
import FilosofusLogo from './FilosofusLogo';
import { LightbulbIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const QuizScreen: React.FC = () => {
  const { state, nextQuestion, toggleHint, checkAnswer, goToScreen } = useQuiz();
  const feedbackRef = useRef<HTMLDivElement>(null);
  const { 
    currentQuestionIndex, 
    selectedAnswers, 
    showHint, 
    showFeedback,
    pendingAnswer,
    userName
  } = state;
  
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = selectedAnswers[currentQuestionIndex];
  const selectedOption = currentQuestion.options.find(opt => opt.id === currentAnswer);
  const isCorrect = selectedOption?.isCorrect || false;

  useEffect(() => {
    if (showFeedback) {
      feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      if (isCorrect) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  }, [showFeedback, isCorrect]);

  return (
    <div className="min-h-screen bg-purple-bg flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <div className="animate-wiggle-once">
            <FilosofusLogo size="small" onClick={() => goToScreen('intro')} className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cream-bg font-medium">
              Hej, {userName}!
            </span>
            <ProgressIndicator 
              current={currentQuestionIndex + 1} 
              total={questions.length} 
            />
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-cream-bg rounded-[40px] border-4 border-orange-light shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brown-text mb-6 mt-2 font-display">
              {currentQuestion.text}
            </h2>
            
            <motion.button 
              className={`flex items-center transition-colors mb-2 ${
                showHint ? 'text-orange-primary' : 'text-teal-accent hover:text-teal-500'
              }`}
              onClick={toggleHint}
              whileTap={{ scale: 0.95 }}
            >
              {showHint ? (
                <>
                  <XIcon size={20} className="mr-1" />
                  <span>Skjul ledetråd</span>
                </>
              ) : (
                <>
                  <LightbulbIcon size={20} className="mr-1" />
                  <span>Vis ledetråd</span>
                </>
              )}
            </motion.button>
            
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", stiffness: 400, damping: 40 }}
                  className="bg-teal-accent bg-opacity-10 border-l-4 border-teal-accent p-3 my-4 rounded-r-lg"
                >
                  <p className="text-brown-text italic">{currentQuestion.hint}</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="space-y-2 mb-4">
              {currentQuestion.options.map(option => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuizOption
                    id={option.id}
                    text={option.text}
                    isSelected={pendingAnswer === option.id}
                    isCorrect={option.isCorrect}
                    disabled={showFeedback}
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mb-2">
              {!showFeedback && pendingAnswer !== null && (
                <Button
                  onClick={checkAnswer}
                  variant="secondary"
                  className="px-8"
                >
                  Tjek svar
                </Button>
              )}
            </div>
            
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  ref={feedbackRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <FeedbackMessage 
                    isCorrect={isCorrect}
                    explanation={currentQuestion.explanation}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex justify-center">
              {showFeedback && (
                <Button
                  onClick={nextQuestion}
                  className="px-8"
                >
                  Næste spørgsmål
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizScreen;