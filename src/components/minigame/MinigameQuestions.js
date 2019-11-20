// @flow
import type { MinigameQuestions } from '../../types/Stage';
import classNames from 'classnames';
import { Container } from 'nes-react';
import React from 'react';
import PageContainer from '../PageContainer';
import Marquee from './Marquee';
import styles from './Minigame.css';
import { MINIGAME_QUESTIONS } from '../../config/minigame';

// TODO selection of answers...

export default function MinigameQuestionsPage({ index }: MinigameQuestions) {
  const question = MINIGAME_QUESTIONS[index];
  return (
    <PageContainer>
      <Marquee position="top" />
      <Question>{question.question}</Question>
      <div className={styles.answers}>
        {question.answers.map((answer, i) => (
          <Answer key={i} label={answer.label} selected={false}>
            {answer.answer}
          </Answer>
        ))}
      </div>
      <Marquee position="bottom" />
    </PageContainer>
  );
}

function Question({ children }: { children: React$Node }) {
  return <div className={styles.question}>{children}</div>;
}

type AnswerProps = {
  label: string,
  selected: boolean,
  children: React$Node,
};

function Answer({ label, selected, children }: AnswerProps) {
  return (
    <Container
      className={classNames(styles.answer, selected && styles.selected)}
      dark
      title={label}
    >
      <div className={styles.answerText}>{children}</div>
    </Container>
  );
}
