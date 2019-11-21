// @flow

export type MinigameAnswer = {
  label: string,
  answer: string | Array<string>,
};

export type MinigameQuestion = {
  question: string,
  answers: Array<MinigameAnswer>,
};
