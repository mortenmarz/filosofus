import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { questions } from '../data/questions';
import Button from './Button';
import FilosofusLogo from './FilosofusLogo';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const ResultScreen: React.FC = () => {
  const { state, resetQuiz } = useQuiz();
  const { correctAnswers, selectedAnswers, userName } = state;

  const totalQuestions = questions.length;
  const score = `${correctAnswers}/${totalQuestions}`;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  useEffect(() => {
    if (correctAnswers >= 4) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ec7627', '#3aa7a4']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ec7627', '#3aa7a4']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [correctAnswers]);

  let message = "";
  if (percentage === 100) {
    message = `Du er en ægte Filosofus, ${userName}! Fantastisk! Du har svaret rigtigt på alle spørgsmål og vist en skarp sans for filosofi.
    Filosofus bukker med sine lange ører – du er klar til at stille endnu større spørgsmål!`;
  } else if (percentage >= 80) {
    message = `Den reflekterede filosof, ${userName}! Wow! Du har virkelig blik for de store spørgsmål i livet.
    Filosofus er imponeret – du tænker som en ægte filosof og har mod på at udfordre idéer.`;
  } else if (percentage >= 60) {
    message = `Den tænkende elev, ${userName}!
    Du har vist, at du kan tænke selv og stille vigtige spørgsmål. Filosofus kan se, at du er godt på vej.
    Fortsæt rejsen – der er stadig meget at undre sig over!`;
  } else {
    message = `Den nysgerrige begynder, ${userName}! 
    Du er lige begyndt din filosofiske rejse – og det er et fantastisk sted at være!
    Det vigtigste er ikke at have alle svarene, men at stille spørgsmål. Filosofus er stolt af dig!`;
  }

  return (
    <div className="min-h-screen bg-purple-bg flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <FilosofusLogo size="small" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-cream-bg rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-brown-text mb-6 text-center font-display">
            Dine resultater
          </h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center items-center mb-4"
          >
            <div className="text-7xl font-bold text-orange-primary">
              {score}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-brown-text mb-8 text-center font-body"
          >
            {message}
          </motion.p>

          <h2 className="text-2xl font-bold text-brown-text mb-4 font-display">
            Resultatoversigt:
          </h2>

          <div className="space-y-3 mb-8">
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`p-4 rounded-xl border-2 transition-all ${selectedAnswers[index] === question.options.find(opt => opt.isCorrect)?.id
                  ? 'bg-feedback-correct border-teal-accent'
                  : 'bg-feedback-incorrect border-red-500'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-brown-text">
                    Spørgsmål {index + 1}
                  </p>
                  <span className={`font-bold ${selectedAnswers[index] === question.options.find(opt => opt.isCorrect)?.id
                    ? 'text-green-600'
                    : 'text-red-500'
                    }`}>
                    {selectedAnswers[index] === question.options.find(opt => opt.isCorrect)?.id ? 'Korrekt' : 'Ikke helt rigtigt'}
                  </span>
                </div>
                <p className="mt-2 text-brown-text">{question.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="bg-white bg-opacity-60 rounded-xl p-5 mb-6"
          >
            <h3 className="text-xl font-bold text-brown-text mb-3 font-display">
              Filosofus hopper videre, sammen med dig…
            </h3>
            <p className="text-brown-text text-lg font-body leading-relaxed">
              Du har nu taget dine første hop ind i filosofiens verden – ligesom Sofie.
              Spørgsmålene stopper aldrig helt, men det er netop det, der gør dig til en tænker.
            </p>
            <p className="text-brown-text text-lg font-body leading-relaxed mt-3">
              Bliv ved med at undre dig, være nysgerrig og se verden med nye øjne –
              så følger Filosofus dig hele vejen.
            </p>
            <blockquote className="border-l-4 border-orange-primary pl-4 italic mt-4 text-brown-text text-lg">
              "Verden bliver aldrig mere den samme, når først man har været oppe i kaninhullet." — Sofies Verden, Jostein Gaarder
            </blockquote>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={resetQuiz}
              className="px-8"
            >
              Hop tilbage i kaninhullet 🎩🐇
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultScreen;