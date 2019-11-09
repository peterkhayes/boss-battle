// @flow
import React from 'react';
import PageContainer from '../PageContainer';
import { useHotkeys } from 'react-hotkeys-hook';

type Props = {
  nextStage: () => void,
};

export default function InitialMinigameStage({ nextStage }: Props) {
  useHotkeys('enter', nextStage);
  return <PageContainer>InitialMinigame Stage</PageContainer>;
}
