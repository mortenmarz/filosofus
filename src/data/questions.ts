import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Hvad er en myte?",
    options: [
      { id: 1, text: "En videnskabelig teori", isCorrect: false },
      { id: 2, text: "En gammel måde at forklare verden på", isCorrect: true },
      { id: 3, text: "En gåde uden svar", isCorrect: false },
      { id: 4, text: "En moderne fortælling", isCorrect: false }
    ],
    hint: "Tænk på hvordan folk i gamle dage prøvede at forklare natur og liv – før der fandtes videnskab.",
    explanation: "Myter er gamle fortællinger, som mennesker brugte til at forklare verden."
  },
  {
    id: 2,
    text: "Hvordan adskiller filosoffer sig fra dem, der laver myter?",
    options: [
      { id: 1, text: "Filosoffer tror på alt, de hører", isCorrect: false },
      { id: 2, text: "Filosoffer digter bedre historier", isCorrect: false },
      { id: 3, text: "Filosoffer stiller spørgsmål og undersøger selv", isCorrect: true },
      { id: 4, text: "Filosoffer bor i templer", isCorrect: false }
    ],
    hint: "Myter giver svar - filosoffer stiller spørgsmål og undersøger selv.",
    explanation: "Yes! Filosoffer prøver at forstå verden med deres egne tanker."
  },
  {
    id: 3,
    text: "Hvorfor begyndte mennesker at filosofere?",
    options: [
      { id: 1, text: "De kedede sig", isCorrect: false },
      { id: 2, text: "De blev nysgerrige på verden", isCorrect: true },
      { id: 3, text: "De skulle lave lektier", isCorrect: false },
      { id: 4, text: "De ville underholde hinanden", isCorrect: false }
    ],
    hint: "Når man undrer sig over noget og vil forstå det – så er man allerede i gang med filosofi.",
    explanation: "Præcis! Filosofi begynder med nysgerrighed."
  },
  {
    id: 4,
    text: "Hvad vil det sige at have et 'åbent sind'?",
    options: [
      { id: 1, text: "Aldrig at danne sig sin egen mening", isCorrect: false },
      { id: 2, text: "At tro på alt, man hører", isCorrect: false },
      { id: 3, text: "At være villig til at overveje nye idéer", isCorrect: true },
      { id: 4, text: "Altid at skifte mening", isCorrect: false }
    ],
    hint: "Tænk over balancen mellem at holde fast i dine overbevisninger og være åben for nye perspektiver.",
    explanation: "At have et åbent sind betyder, at man er villig til at overveje og vurdere nye idéer – også selvom de udfordrer det, man allerede tror på."
  }
  ,
  {
    id: 5,
    text: "Hvorfor er det vigtigt at tænke selvstændigt?",
    options: [
      { id: 1, text: "Så du altid kan få ret", isCorrect: false },
      { id: 2, text: "For at udvikle sin egen forståelse af verden", isCorrect: true },
      { id: 3, text: "Så du kan ignorere andres meninger", isCorrect: false },
      { id: 4, text: "For at gøre tingene mere besværlige", isCorrect: false }
    ],
    hint: "Tænk over, hvad du får ud af at danne dine egne tanker i stedet for kun at følge andres.",
    explanation: "Når du tænker selvstændigt, udvikler du din egen forståelse af verden og træffer mere reflekterede beslutninger."
  }
];