// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from '../redux/store';
import InitialPage from './InitialPage';
import ChooseNamePage from './ChooseNamePage';
import ChooseWeaponPage from './ChooseWeaponPage';
import ChooseBossPage from './ChooseBossPage';
import FightPage from './FightPage';
import ErrorPage from './ErrorPage';
import GatekeeperMode from './GatekeeperMode';

function App() {
  const state = useSelector((state) => state);

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
    case 'gatekeeper_mode':
      return <GatekeeperMode {...state} />;
    default: {
      (state.stage: empty);
      return <ErrorPage />;
    }
  }
}

export default hot(App);
