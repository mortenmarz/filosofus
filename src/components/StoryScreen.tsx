import React from 'react';
import Button from './Button';
import { useQuiz } from '../context/QuizContext';
import FilosofusLogo from './FilosofusLogo';

const StoryScreen: React.FC = () => {
  const { goToScreen } = useQuiz();

  return (
    <div className="min-h-screen bg-purple-bg flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-cream-bg rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="mb-4 md:mb-0 md:mr-6 animate-wiggle-once">
            <FilosofusLogo size="medium" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-brown-text mb-2 font-display">
              Jagten på de store spørgsmål med Filosofus
            </h2>
            <p className="text-brown-text text-lg font-body">
              Sofies nysgerrige kanin hjælper dig med at undre dig og finde dine egne svar – ligesom Sofie i Sofies Verden.
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-60 rounded-xl p-5 mb-6">
          <p className="text-brown-text font-body text-lg leading-relaxed">
            En dag gik Sofie hjem fra skole, da hun fandt et mystisk brev i postkassen:
            "Hvem er du?", stod der i brevet.<br></br>
            Spørgsmålet satte gang i tanker, hun aldrig før havde tænkt.
            Hvad er meningen med livet? Hvor kommer verden fra? Hvorfor findes vi?
          </p>
          <p className="text-brown-text font-body text-lg leading-relaxed mt-3">
            Men hun var ikke alene med disse tanker.
            Hendes nysgerrige kanin, <b>Filosofus</b>, blev hendes trofaste følgesvend i undringen.
            Han hjalp hende med at hoppe fra det ene store spørgsmål til det næste.
          </p>
          <p className="text-brown-text font-body text-lg leading-relaxed mt-3">
            Nu er det din tur.
            Filosofus vil stille dig fem store spørgsmål.
            Det vigtigste er, at du tør undre dig og tænke selv. Er du klar?
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => goToScreen('quiz')}
            className="transform hover:scale-105 transition-transform"
          >
            Start quizzen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryScreen;