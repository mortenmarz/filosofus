import React from 'react';
import { useQuiz } from '../context/QuizContext';

interface QuizOptionProps {
  id: number;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  disabled: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({ 
  id, 
  text, 
  isSelected, 
  isCorrect,
  disabled
}) => {
  const { selectAnswer } = useQuiz();
  
  const baseClasses = "relative p-4 rounded-xl border-2 mb-3 cursor-pointer transition-all duration-200 transform";
  
  let optionClass = baseClasses;
  
  if (!disabled) {
    optionClass += isSelected
      ? " border-orange-primary bg-orange-primary bg-opacity-10"
      : " border-cream-bg hover:border-orange-primary hover:bg-orange-primary hover:bg-opacity-5";
  } else {
    if (isSelected) {
      optionClass += isCorrect 
        ? " border-teal-accent bg-feedback-correct"
        : " border-red-500 bg-feedback-incorrect";
    } else {
      optionClass += " border-transparent bg-cream-bg bg-opacity-50 cursor-default";
    }
  }

  return (
    <div 
      className={optionClass}
      onClick={() => !disabled && selectAnswer(id)}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 ${
          isSelected
            ? "border-orange-primary bg-orange-primary"
            : "border-brown-text"
        }`}>
          {isSelected && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          )}
        </div>
        <p className={`text-brown-text font-body text-lg ${
          isSelected ? "font-semibold" : ""
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default QuizOption;