// @flow

export type SoundCategory = 'boost_vibes' | 'hurt_vibes';

export type Sound = {
  src: string,
  category?: SoundCategory,
};
