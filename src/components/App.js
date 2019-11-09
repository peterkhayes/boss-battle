// @flow
import React, { useState, useEffect, useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSelector } from '../redux/store';
import { GatekeeperContext } from './useGatekeeper';
import InitialPage from './InitialPage';
import ChooseNamePage from './ChooseNamePage';
import ChooseWeaponPage from './ChooseWeaponPage';
import ChooseBossPage from './ChooseBossPage';
import ErrorPage from './ErrorPage';
import FightPage from './FightPage';
import Minigame from './Minigame/Minigame';

function useMinigame() {
  const [showingMinigame, setShowingMinigame] = useState(true);

  const code = 'llamas';
  const [codeProgress, setCodeProgress] = useState<string>('');

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const updatedProgress = codeProgress + e.key;
      if (code === updatedProgress) {
        setShowingMinigame(true);
      } else if (code.startsWith(updatedProgress)) {
        setCodeProgress(updatedProgress);
      } else {
        setCodeProgress('');
      }
    },
    [codeProgress],
  );

  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);
    return () => window.removeEventListener('keypress', onKeyPress);
  });

  useHotkeys('esc', () => setShowingMinigame(false));

  return showingMinigame;
}

function App() {
  const showingMinigame = useMinigame();
  const state = useSelector((state) => state);
  const isGatekeeper = window.location.hash.includes('gatekeeper');

  return (
    <GatekeeperContext.Provider value={isGatekeeper}>
      {(() => {
        switch (state.stage) {
          case 'initial':
            return <InitialPage {...state} />;
          case 'choose_name':
            return <ChooseNamePage {...state} />;
          case 'choose_weapon':
            return <ChooseWeaponPage {...state} />;
          case 'choose_boss':
            return <ChooseBossPage {...state} />;
          case 'fight':
            return <FightPage {...state} />;
          default: {
            (state.stage: empty);
            return <ErrorPage />;
          }
        }
      })()}
    </GatekeeperContext.Provider>
  );
}

export default hot(App);
