// @flow
import type { MinigamePlayers } from '../../types/Stage';
import React, { useState, useEffect } from 'react';
import { MINIGAME_NAMES } from '../../config/minigame';
import Title from '../Title';
import sample from 'lodash/sample';

const NAME_INTERVAL = 150;
function useRandomName() {
  const [name, setName] = useState(sample(MINIGAME_NAMES));

  useEffect(() => {
    const interval = setInterval(() => {
      let newName = sample(MINIGAME_NAMES);
      while (newName === name) newName = sample(MINIGAME_NAMES);
      setName(newName);
    }, NAME_INTERVAL);
    return () => clearInterval(interval);
  });

  return name;
}

export default function MinigamePlayersPage({
  player1Ready,
  player2Ready,
}: MinigamePlayers) {
  const randomName = useRandomName();

  const [player1Name, player2Name] = (() => {
    if (!player1Ready) return [randomName, '???'];
    if (!player2Ready) return ['Beryl', randomName];
    return ['Beryl', 'Peter'];
  })();

  return (
    <>
      <div>Player One:</div>
      <Title>{player1Name}</Title>
      <br />
      <br />
      <br />
      <div>Player Two:</div>
      <Title>{player2Name}</Title>
    </>
  );
}
