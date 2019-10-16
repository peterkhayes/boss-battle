// @flow
import type { Sound } from '../types/Sound';

// TODO: figure out typings for these imports
// $FlowFixMe
import hurray1Src from '../sounds/hurray_1.mp3';
// $FlowFixMe
import sad1Src from '../sounds/im_sad_1.mp3';
// $FlowFixMe
import nice1Src from '../sounds/nice_1.mp3';
// $FlowFixMe
import thisSucks1Src from '../sounds/this_sucks_1.mp3';
// $FlowFixMe
import wow1Src from '../sounds/wow_1.mp3';
// $FlowFixMe
import bestFriendsSrc from '../sounds/best_friends.mp3';
// $FlowFixMe
import leavingPartySrc from '../sounds/leaving_party.mp3';

export const hurray1: Sound = {
  src: hurray1Src,
  category: 'boost_vibes',
};

export const sad1: Sound = {
  src: sad1Src,
  category: 'hurt_vibes',
};

export const nice1: Sound = {
  src: nice1Src,
  category: 'boost_vibes',
};

export const thisSucks1: Sound = {
  src: thisSucks1Src,
  category: 'hurt_vibes',
};

export const wow1: Sound = {
  src: wow1Src,
  category: 'boost_vibes',
};

export const bestFriends: Sound = {
  src: bestFriendsSrc,
};

export const leavingParty: Sound = {
  src: leavingPartySrc,
};
