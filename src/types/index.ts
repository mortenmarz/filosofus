export interface Question {
  id: number;
  text: string;
  options: {
    id: number;
    text: string;
    isCorrect: boolean;
  }[];
  hint: string;
  explanation: string;
}

export type AppScreen = 'intro' | 'story' | 'quiz' | 'results';

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: (number | null)[];
  showHint: boolean;
  showFeedback: boolean;
  correctAnswers: number;
  screen: AppScreen;
  userName: string;
  pendingAnswer: number | null;
}