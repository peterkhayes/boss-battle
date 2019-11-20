// @flow
import type { MinigamePlayers } from '../../types/Stage';
import React, { useState, useEffect } from 'react';
import { MINIGAME_NAMES } from '../../config/minigame';
import sample from 'lodash/sample';

const NAME_INTERVAL = 300;
function useRandomName() {
  const [name, setName] = useState(sample(MINIGAME_NAMES));

  useEffect(() => {
    const interval = setInterval(() => {
      setName(sample(MINIGAME_NAMES));
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
    <div>
      Player 1: {player1Name}
      Player 2: {player2Name}
    </div>
  );
}
