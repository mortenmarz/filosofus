import React from 'react';

interface FeedbackMessageProps {
  isCorrect: boolean;
  explanation: string;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ isCorrect, explanation }) => {
  return (
    <div className={`p-4 rounded-xl mb-6 text-lg ${
      isCorrect ? 'bg-feedback-correct' : 'bg-feedback-incorrect'
    }`}>
      <p className={`font-bold mb-1 ${
        isCorrect ? 'text-green-600' : 'text-red-600'
      }`}>
        {isCorrect ? 'Godt tænkt!' : 'Ikke helt rigtigt'}
      </p>
      <p className={`${
        isCorrect ? 'text-green-700' : 'text-red-600'
      }`}>
        {explanation}
      </p>
    </div>
  );
};

export default FeedbackMessage;