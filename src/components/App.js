// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from '../redux/store';
import { GatekeeperContext } from './useGatekeeper';
import InitialPage from './InitialPage';
import ChooseNamePage from './ChooseNamePage';
import ChooseWeaponPage from './ChooseWeaponPage';
import ChooseBossPage from './ChooseBossPage';
import ErrorPage from './ErrorPage';
import FightPage from './FightPage';
import Minigame from './minigame/Minigame';
import useMusic from './useMusic';

function App() {
  const state = useSelector((state) => state);
  const isGatekeeper = window.location.hash.includes('gatekeeper');
  useMusic(state, isGatekeeper);

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
          case 'minigame_intro':
            return <Minigame stage="minigame_intro" {...state} />;
          case 'minigame_players':
            return <Minigame stage="minigame_players" {...state} />;
          case 'minigame_questions':
            return <Minigame stage="minigame_questions" {...state} />;
          case 'minigame_celebration':
            return <Minigame stage="minigame_celebration" {...state} />;
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
