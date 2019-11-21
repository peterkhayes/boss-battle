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
  'Babka',
  'Gary',
  'Zucchini',
  'The Grease Queen',
  'Stevie',
  'Steve',
  'Babby',
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
    question: 'Who lives where?',
    answers: [
      { label: 'A', answer: ['Demi: Ground Floor', 'Poot: Basement'] },
      { label: 'B', answer: ['Demi: Basement', 'Poot: Ground Floor'] },
      { label: 'C', answer: ['Demi: Penthouse', 'Poot: Ground Floor'] },
      { label: 'D', answer: ['Demi: Basement', 'Poot: Also Basement'] },
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

// $FlowFixMe
const imagesContext = require.context('../images/celebration');

export const MINIGAME_IMAGES: Array<string> = imagesContext
  .keys()
  .map((key) => imagesContext(key));
