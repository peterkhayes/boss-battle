// @flow
import React, { useState, useCallback } from 'react';
import InitialMinigameStage from './InitialMinigameStage';
import ParticipantsStage from './ParticipantsStage';
import QuestionsStage from './QuestionsStage';
import CelebrationStage from './CelebrationStage';

// import classNames from 'classnames';
// import PageContainer from '../PageContainer';
// import { Container } from 'nes-react';
// import styles from './Minigame.css';
// import { useHotkeys } from 'react-hotkeys-hook';

/*
  TODOS:
  
  - intro screen
  - fun "lottery" that picks "Petor" and "Beryl" as participants, flipping through silly names
  - more fun header/question text
  - 1-2 more questions
  - figure out the phrasing of actual vocabulary bees
*/

const STAGES = ['INITIAL', 'PARTICIPANTS', 'QUESTIONS', 'CELEBRATION'];

export default function Minigame() {
  const [stageIndex, setStageIndex] = useState(0);
  const stage = STAGES[stageIndex];
  const nextStage = useCallback(
    () => setStageIndex((i) => Math.min(i + 1, STAGES.length - 1)),
    [],
  );

  if (stage === 'INITIAL') {
    return <InitialMinigameStage nextStage={nextStage} />;
  } else if (stage === 'PARTICIPANTS') {
    return <ParticipantsStage nextStage={nextStage} />;
  } else if (stage === 'QUESTIONS') {
    return <QuestionsStage nextStage={nextStage} />;
  } else {
    return <CelebrationStage />;
  }
}

// type AnswerData = {
//   label: string,
//   answer: string,
// };

// type QuestionData = {
//   question: string,
//   answers: Array<AnswerData>,
// };

// const QUESTIONS: Array<QuestionData> = [
//   {
//     question: 'Define the word "decanter".',
//     answers: [
//       { label: 'A', answer: '??????' },
//       { label: 'B', answer: 'Guava' },
//       { label: 'A', answer: "Padton's magic scepter" },
//       { label: 'A', answer: 'I love wine' },
//     ],
//   },
//   {
//     question:
//       'In the seminal work of television, what is it that must be said to the dress?',
//     answers: [
//       { label: 'A', answer: "I'm baby" },
//       { label: 'B', answer: 'It be like that sometimes' },
//       { label: 'C', answer: '...perhaps...' },
//       { label: 'D', answer: 'Yes' },
//     ],
//   },
//   {
//     question: 'Could you say that one more time?',
//     answers: [
//       { label: 'A', answer: 'Yes' },
//       { label: 'B', answer: 'Yes' },
//       { label: 'C', answer: 'No' },
//       { label: 'D', answer: 'Yes' },
//     ],
//   },
// ];

// export default function Minigame() {
//   const [questionIdx, setQuestionIdx] = useState(-2);
//   const question = QUESTIONS[questionIdx];

//   const [answerIdx, setAnswerIdx] = useState(0);
//   useHotkeys('right', () => setAnswerIdx((i) => (i % 2 ? i : i + 1)));
//   useHotkeys('left', () => setAnswerIdx((i) => (i % 2 ? i - 1 : i)));
//   useHotkeys('down', () => setAnswerIdx((i) => (i < 2 ? i + 2 : i)));
//   useHotkeys('up', () => setAnswerIdx((i) => (i < 2 ? i : i - 2)));
//   useHotkeys('enter', () => setQuestionIdx((i) => Math.min(i + 1, QUESTIONS.length - 1)));

//   if (questionIdx === -2) {
//     return (
//       <PageContainer>
//         <div className={styles.titleHeader}>WELCOME TO</div>
//         <div className={styles.titleText}>I N T E R M I S S I O N</div>
//       </PageContainer>
//     );
//   }

//   if (questionIdx === -1) {

//   }

//   return (
//     <PageContainer>
//       <Marquee position="top" />
//       <Question>{question.question}</Question>
//       <div className={styles.answers}>
//         {question.answers.map((answer, i) => (
//           <Answer key={i} label={answer.label} selected={i === answerIdx}>
//             {answer.answer}
//           </Answer>
//         ))}
//       </div>
//       <Marquee position="bottom" />
//     </PageContainer>
//   );
// }

// function Question({ children }: { children: React$Node }) {
//   return <div className={styles.question}>{children}</div>;
// }

// type AnswerProps = {
//   label: string,
//   selected: boolean,
//   children: React$Node,
// };
// function Answer({ label, selected, children }: AnswerProps) {
//   return (
//     <Container
//       className={classNames(styles.answer, selected && styles.selected)}
//       dark
//       title={label}
//     >
//       <div className={styles.answerText}>{children}</div>
//     </Container>
//   );
// }

// type MarqueeProps = {
//   position: 'top' | 'bottom',
// };

// function Marquee({ position }: MarqueeProps) {
//   return (
//     <div className={classNames(styles.marquee, styles[position])}>
//       <div className={styles.marqueeText}>I N T E R M I S S I O N</div>
//     </div>
//   );
// }
