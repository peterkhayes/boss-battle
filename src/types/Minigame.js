// @flow

export type MinigameAnswer = {
  label: string,
  answer: string,
};

export type MinigameQuestion = {
  question: string,
  answers: Array<MinigameAnswer>,
};
