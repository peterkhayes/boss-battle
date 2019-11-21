// @flow
import type { ReduxState } from '../redux/state';
import { useState, useEffect, useRef, useCallback } from 'react';
import { playSound } from '../utils/sounds';
import { MINIGAME_QUESTIONS } from '../config/minigame';
import {
  INTRO_MUSIC,
  FIGHT_MUSIC,
  MINIGAME_MAIN_MUSIC,
  MINIGAME_END_MUSIC,
} from '../config/music';
import { sampleWithout } from '../utils/random';

const EMPTY_TRACKS: Array<string> = [];

function getTracks(state: ReduxState): Array<string> {
  switch (state.stage) {
    case 'initial':
    case 'choose_name':
    case 'choose_weapon':
    case 'choose_boss':
      return INTRO_MUSIC;
    case 'fight':
      return FIGHT_MUSIC;
    case 'minigame_intro':
    case 'minigame_players':
      return MINIGAME_MAIN_MUSIC;
    case 'minigame_questions': {
      if (state.index === MINIGAME_QUESTIONS.length - 1) {
        return MINIGAME_END_MUSIC;
      } else {
        return MINIGAME_MAIN_MUSIC;
      }
    }
    case 'minigame_celebration':
      return MINIGAME_END_MUSIC;
    default:
      return EMPTY_TRACKS;
  }
}

function getVolume(tracks: Array<string>): number {
  switch (tracks) {
    case FIGHT_MUSIC:
      return 0.3;
    case INTRO_MUSIC:
      return 0.5;
    default:
      return 0.7;
  }
}

// Ugh, only have this here because gatekeeper status isn't in state...
export default function useMusic(state: ReduxState, isGatekeeper: boolean) {
  const trackRef = useRef<?string>(null);
  const [currentTracks, setCurrentTracks] = useState(EMPTY_TRACKS);

  const playNext = useCallback((tracks) => {
    const track = sampleWithout(tracks, [trackRef.current]);
    if (!track) return;

    trackRef.current = track;
    const audio = playSound(track, getVolume(tracks));

    const listener = () => playNext(tracks);
    audio.addEventListener('ended', listener);
    return () => {
      audio.pause();
      audio.removeEventListener('ended', listener);
    };
  }, []);

  useEffect(() => {
    if (!isGatekeeper) return;
    const newTracks = getTracks(state);
    if (newTracks === currentTracks) return;

    setCurrentTracks(newTracks);
  }, [state, isGatekeeper, currentTracks]);

  useEffect(() => {
    if (!isGatekeeper) return;
    return playNext(currentTracks);
  }, [currentTracks, isGatekeeper, playNext]);
}
