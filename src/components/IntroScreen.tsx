import React, { useState } from 'react';
import Button from './Button';
import { useQuiz } from '../context/QuizContext';
import FilosofusLogo from './FilosofusLogo';

const IntroScreen: React.FC = () => {
  const { goToScreen, setUserName } = useQuiz();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (name.trim().length < 2) {
      setError('Indtast dit navn (mindst 2 bogstaver)');
      return;
    }
    setUserName(name.trim());
    goToScreen('story');
  };

  return (
    <div className="min-h-screen bg-purple-bg flex flex-col items-center justify-center p-4 text-center">
      <div className="mb-2 animate-bounce-slow">
        <FilosofusLogo size="large" />
      </div>
      
      <h1 className="text-5xl font-normal text-orange-primary mb-6 font-display tracking-wide">
        Velkommen til<br /><span className="text-6xl font-semibold">Filosofus</span>
      </h1>
      
      <p className="text-cream-bg text-xl mb-4 max-w-xl font-body leading-relaxed">
        Filosofus er Sofies nysgerrige kanin – med store ører og endnu større spørgsmål!
        Han hopper rundt mellem undren, tanker og mysterier, og nu er det din tur til at følge med.
      </p>
      
      <p className="text-cream-bg text-xl mb-8 max-w-xl font-body leading-relaxed">
        Er du klar til at tage det første hop ned i kaninhullet – og begynde din filosofiske rejse?
      </p>

      <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          placeholder="Indtast dit navn"
          className="w-full px-4 py-3 text-lg rounded-lg bg-cream-bg text-brown-text placeholder-brown-text/50 border-2 border-transparent focus:border-orange-primary focus:outline-none"
        />
        {error && (
          <p className="text-orange-primary mt-2 text-sm">{error}</p>
        )}
      </div>
      
      <Button 
        onClick={handleStart}
        className="mt-4 transform hover:scale-105 transition-transform"
      >
        Start rejsen!
      </Button>

      <div className="absolute bottom-4 left-4 text-cream-bg text-sm opacity-70">
        Udviklet for Gyldendal
      </div>
    </div>
  );
};

export default IntroScreen;