// @flow
import type { MinigameCelebration } from '../../types/Stage';
import React, { useState, useEffect } from 'react';
import Title from '../Title';
import Image from '../Image';
import styles from './Minigame.css';
import { MINIGAME_IMAGES } from '../../config/minigame';
import { sampleWithout, randInt } from '../../utils/random';

type ImageInfo = {
  id: number,
  src: string,
  size: number,
  top: string,
  left: string,
};
let counter = 0;

export default function MinigameCelebrationPage(_props: MinigameCelebration) {
  const [images, setImages] = useState<Array<ImageInfo>>([]);
  useEffect(() => {
    let interval;
    let timeout;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setImages((igs) => {
          const image: ImageInfo = {
            id: counter++,
            src: sampleWithout(MINIGAME_IMAGES, igs.slice(-20).map((i) => i.src)),
            size: randInt(300, 400),
            top: randInt(0, 110) + '%',
            left: randInt(0, 110) + '%',
          };
          return igs.concat(image).slice(-100);
        });
      }, 200);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {images.map(({ id, src, size, top, left }) => (
        <Image
          key={id}
          src={src}
          className={styles.celebrationImage}
          style={{ top, left, width: size, height: size, position: 'absolute' }}
        />
      ))}
      <Title>Beryl and Peter are getting married!</Title>
    </>
  );
}
