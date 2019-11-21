// @flow
import type { MinigameQuestions } from '../../types/Stage';
import classNames from 'classnames';
import { Container } from 'nes-react';
import React from 'react';
import styles from './Minigame.css';
import Modal from '../Modal';
import Title from '../Title';
import { MINIGAME_QUESTIONS } from '../../config/minigame';

export default function MinigameQuestionsPage({ index, answered }: MinigameQuestions) {
  const question = MINIGAME_QUESTIONS[index];
  return (
    <>
      <Question>{question.question}</Question>
      <div className={styles.answers}>
        {question.answers.map((answer, i) => (
          <Answer key={i} label={answer.label} selected={false}>
            {answer.answer}
          </Answer>
        ))}
      </div>
      {answered && (
        <Modal>
          <Title>Correct!!!</Title>
        </Modal>
      )}
    </>
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
      <div className={styles.answerText}>
        {Array.isArray(children)
          ? children.map((child, i) => <div key={i}>{child}</div>)
          : children}
      </div>
    </Container>
  );
}
