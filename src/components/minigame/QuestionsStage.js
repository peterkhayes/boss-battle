// @flow
import React from 'react';
import PageContainer from '../PageContainer';
import { useHotkeys } from 'react-hotkeys-hook';

type Props = {
  nextStage: () => void,
};

export default function QuestionsStage({ nextStage }: Props) {
  useHotkeys('enter', nextStage);
  return <PageContainer>Questions Stage</PageContainer>;
}
