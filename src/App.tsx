import React from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import IntroScreen from './components/IntroScreen';
import StoryScreen from './components/StoryScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const AppContent: React.FC = () => {
  const { state } = useQuiz();
  
  const renderScreen = () => {
    switch (state.screen) {
      case 'intro':
        return <IntroScreen />;
      case 'story':
        return <StoryScreen />;
      case 'quiz':
        return <QuizScreen />;
      case 'results':
        return <ResultScreen />;
      default:
        return <IntroScreen />;
    }
  };

  return (
    <div className="font-body">
      {renderScreen()}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
};

export default App;