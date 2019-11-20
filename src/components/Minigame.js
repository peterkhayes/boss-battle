// @flow
import React, { useState } from 'react';
import classNames from 'classnames';
import PageContainer from './PageContainer';
import { Container } from 'nes-react';
import Title from './Title';
// import styles from './Minigame.css';
import { useHotkeys } from 'react-hotkeys-hook';

/*
  TODOS:
  
  - intro screen
  - fun "lottery" that picks "Petor" and "Beryl" as participants, flipping through silly names
  - more fun header/question text
  - 1-2 more questions
  - figure out the phrasing of actual vocabulary bees
*/
export default function Minigame() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const question = QUESTIONS[questionIdx];

  const [answerIdx, setAnswerIdx] = useState(0);
  useHotkeys('right', () => setAnswerIdx((i) => (i % 2 ? i : i + 1)));
  useHotkeys('left', () => setAnswerIdx((i) => (i % 2 ? i - 1 : i)));
  useHotkeys('down', () => setAnswerIdx((i) => (i < 2 ? i + 2 : i)));
  useHotkeys('up', () => setAnswerIdx((i) => (i < 2 ? i : i - 2)));
  useHotkeys('enter', () => setQuestionIdx((i) => Math.min(i + 1, QUESTIONS.length - 1)));

  return (
    <PageContainer>
      <Marquee position="top" />
      <Question>{question.question}</Question>
      <div className={styles.answers}>
        {question.answers.map((answer, i) => (
          <Answer key={i} label={answer.label} selected={i === answerIdx}>
            {answer.answer}
          </Answer>
        ))}
      </div>
      <Marquee position="bottom" />
    </PageContainer>
  );
}
