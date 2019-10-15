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

function AppContents() {
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
    default: {
      (state.stage: empty);
      return <ErrorPage />;
    }
  }
}

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppContents />
    </div>
  );
}

export default hot(App);
