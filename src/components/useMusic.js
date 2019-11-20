// @flow
import type { ReduxState } from '../redux/state';
import { useState, useEffect, useRef, useCallback } from 'react';
import { playSound } from '../utils/sounds';
import { INTRO_MUSIC, FIGHT_MUSIC } from '../config/music';
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
    default:
      return EMPTY_TRACKS;
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
    const audio = playSound(track);

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
