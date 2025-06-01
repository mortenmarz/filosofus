import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { questions } from '../data/questions';
import { AppScreen, QuizState } from '../types';

interface QuizContextType {
  state: QuizState;
  goToScreen: (screen: AppScreen) => void;
  selectAnswer: (optionId: number) => void;
  nextQuestion: () => void;
  toggleHint: () => void;
  resetQuiz: () => void;
  setUserName: (name: string) => void;
  checkAnswer: () => void;
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: Array(questions.length).fill(null),
  showHint: false,
  showFeedback: false,
  correctAnswers: 0,
  screen: 'intro',
  userName: '',
  pendingAnswer: null,
};

type QuizAction =
  | { type: 'GO_TO_SCREEN'; payload: AppScreen }
  | { type: 'SELECT_ANSWER'; payload: number }
  | { type: 'CHECK_ANSWER' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'TOGGLE_HINT' }
  | { type: 'RESET_QUIZ' }
  | { type: 'SET_USER_NAME'; payload: string };

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'GO_TO_SCREEN':
      return { ...state, screen: action.payload };
    
    case 'SELECT_ANSWER':
      return {
        ...state,
        pendingAnswer: action.payload,
        showFeedback: false,
      };
    
    case 'CHECK_ANSWER': {
      const currentQuestion = questions[state.currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(option => option.id === state.pendingAnswer);
      const isCorrect = selectedOption?.isCorrect || false;
      
      const newSelectedAnswers = [...state.selectedAnswers];
      newSelectedAnswers[state.currentQuestionIndex] = state.pendingAnswer;
      
      return {
        ...state,
        selectedAnswers: newSelectedAnswers,
        showFeedback: true,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
      };
    }
    
    case 'NEXT_QUESTION':
      if (state.currentQuestionIndex < questions.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          showFeedback: false,
          showHint: false,
          pendingAnswer: null,
        };
      } else {
        return {
          ...state,
          screen: 'results',
          showFeedback: false,
          showHint: false,
          pendingAnswer: null,
        };
      }
    
    case 'TOGGLE_HINT':
      return { ...state, showHint: !state.showHint };
    
    case 'RESET_QUIZ':
      return initialState;
    
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload };
    
    default:
      return state;
  }
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const goToScreen = (screen: AppScreen) => {
    dispatch({ type: 'GO_TO_SCREEN', payload: screen });
  };

  const selectAnswer = (optionId: number) => {
    dispatch({ type: 'SELECT_ANSWER', payload: optionId });
  };

  const checkAnswer = () => {
    dispatch({ type: 'CHECK_ANSWER' });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const toggleHint = () => {
    dispatch({ type: 'TOGGLE_HINT' });
  };

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  const setUserName = (name: string) => {
    dispatch({ type: 'SET_USER_NAME', payload: name });
  };

  return (
    <QuizContext.Provider value={{ 
      state, 
      goToScreen, 
      selectAnswer, 
      nextQuestion, 
      toggleHint, 
      resetQuiz,
      setUserName,
      checkAnswer
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};