// @flow
import type {
  MinigameIntro,
  MinigamePlayers,
  MinigameQuestions,
  MinigameCelebration,
} from '../../types/Stage';

import { useDispatch } from '../../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import React from 'react';
import * as actions from '../../redux/actions';
import PageContainer from '../PageContainer';
import Marquee from './Marquee';
import MinigameIntroPage from './MinigameIntro';
import MinigamePlayersPage from './MinigamePlayers';
import MinigameQuestionsPage from './MinigameQuestions';
import MinigameCelebrationPage from './MinigameCelebration';
// import styles from './Minigame.css';

type Props = MinigameIntro | MinigamePlayers | MinigameQuestions | MinigameCelebration;

export default function Minigame(props: Props) {
  const dispatch = useDispatch();
  useHotkeys('enter', () => dispatch(actions.advanceMinigame()));
  useHotkeys('esc', () => dispatch(actions.resetGame()));

  return (
    <PageContainer>
      <Marquee position="top" />
      {(() => {
        switch (props.stage) {
          case 'minigame_intro':
            return <MinigameIntroPage {...props} />;
          case 'minigame_players':
            return <MinigamePlayersPage {...props} />;
          case 'minigame_questions':
            return <MinigameQuestionsPage {...props} />;
          default: {
            (props.stage: 'minigame_celebration');
            return <MinigameCelebrationPage {...props} />;
          }
        }
      })()}
      <Marquee position="bottom" />
    </PageContainer>
  );
}
