// @flow
import type { GatekeeperModeStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import styles from './GatekeeperMode.css';

export type State = {
  message: String,
};

class GatekeeperMode extends React.Component<GatekeeperModeStage, State> {
  constructor(props: GatekeeperModeStage) {
    super(props);
    this.state = {
      message: window.localStorage.getItem('attackText'),
    };
  }

  componentDidMount() {
    window.addEventListener('storage', this.syncLocalStorageToState);
  }

  syncLocalStorageToState = () => {
    console.log('localstorage event seen');
    this.setState({ message: window.localStorage.getItem('attackText') });
  };

  render() {
    return (
      <PageContainer>
        <div className={styles.attackText}>{this.state.message}</div>
      </PageContainer>
    );
  }
}

export default GatekeeperMode;
