// @flow
import type { ReduxMiddleware } from './store';

function nameTemplate(fullText, playerName, bossName) {
  return fullText.replace(/\[Name\]/g, playerName).replace(/\[BOSS\]/g, bossName);
}

const gatekeeperTextMiddleware: ReduxMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const currentState = store.getState();

  if (
    currentState.stage === 'fight' &&
    ['perform_player_attack', 'perform_boss_attack'].includes(action.type)
  ) {
    if (currentState.attack) {
      const attackObj = currentState.player.weapon.attacks.filter(
        (attack) => currentState.attack && attack.name === currentState.attack.name,
      );
      if (attackObj && attackObj.length > 0) {
        const attackTemplateText = attackObj[0].description;
        if (attackTemplateText) {
          const textToRead = nameTemplate(
            attackTemplateText,
            currentState.player.name,
            currentState.boss.name,
          );
          window.localStorage.setItem('attackText', textToRead);
        }
      }
    }
  }

  // $FlowFixMe - hmmm
  return result;
};

export default gatekeeperTextMiddleware;
