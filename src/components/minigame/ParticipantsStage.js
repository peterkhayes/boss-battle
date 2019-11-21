// @flow
import React from 'react';
import PageContainer from '../PageContainer';
import { useHotkeys } from 'react-hotkeys-hook';

type Props = {
  nextStage: () => void,
};

export default function ParticipantsStage({ nextStage }: Props) {
  useHotkeys('enter', nextStage);
  return <PageContainer>Participants Stage</PageContainer>;
}
