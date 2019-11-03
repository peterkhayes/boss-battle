// @flow
import React, { useState } from 'react';
import styles from './Carousel.css';
import { useHotkeys } from 'react-hotkeys-hook';

interface Option {
  name: string;
  image: string;
}

type Props<T: Option> = {
  options: Array<T>,
  selectOption: (T) => void,
};

export default function Carousel<T: Option>({ options, selectOption }: Props<T>) {
  const numOptions = options.length;
  const [idx, setIdx] = useState(0);
  const prevIdx = (idx + numOptions - 1) % numOptions;
  const nextIdx = (idx + 1) % numOptions;

  const previous = options[prevIdx];
  const current = options[idx];
  const next = options[nextIdx];

  useHotkeys('left', () => setIdx(nextIdx), [nextIdx]);
  useHotkeys('right', () => setIdx(prevIdx), [prevIdx]);
  useHotkeys('enter', () => selectOption(current), [selectOption]);

  return (
    <div className={styles.carousel}>
      <div className={styles.prev}>
        <img className={styles.image} src={previous.image} />
        <h3 className={styles.title}>{previous.name}</h3>
      </div>
      <div className={styles.current}>
        <img className={styles.image} src={current.image} />
        <h3 className={styles.title}>{current.name}</h3>
      </div>
      <div className={styles.next}>
        <img className={styles.image} src={next.image} />
        <h3 className={styles.title}>{next.name}</h3>
      </div>
    </div>
  );
}
