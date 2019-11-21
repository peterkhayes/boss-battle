// @flow
import type { MinigameQuestion } from '../types/Minigame';

export const MINIGAME_CODE = 'llamas';

export const MINIGAME_NAMES = [
  'Padton',
  'Poontab',
  'Poot',
  'Madame Clavae',
  'Snacks',
  'Frankie',
  'Gary',
];

export const MINIGAME_QUESTIONS: Array<MinigameQuestion> = [
  {
    question: 'Define the word "decanter".',
    answers: [
      { label: 'A', answer: '??????' },
      { label: 'B', answer: 'Guava' },
      { label: 'C', answer: "Padton's magic scepter" },
      { label: 'D', answer: 'I love wine' },
    ],
  },
  {
    question:
      'In this seminal work of television, what is it which must be said to the dress?',
    answers: [
      { label: 'A', answer: "I'm baby" },
      { label: 'B', answer: 'It be like that sometimes' },
      { label: 'C', answer: '...perhaps...' },
      { label: 'D', answer: 'Yes' },
    ],
  },
  {
    question: 'Could you say that one more time?',
    answers: [
      { label: 'A', answer: 'Yes' },
      { label: 'B', answer: 'Yes' },
      { label: 'C', answer: 'No' },
      { label: 'D', answer: 'Yes' },
    ],
  },
];
