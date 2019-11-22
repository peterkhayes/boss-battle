// @flow
import type { Direction } from '../types/Direction';
import React, { useCallback } from 'react';
import PageContainer from './PageContainer';
import Image from './Image';
import Title from './Title';
import styles from './Carousel.css';
import { useHotkeys } from 'react-hotkeys-hook';
import throttle from 'lodash/throttle';
// import { sounds, playSound } from '../utils/sounds';

type Props<T> = {
  title: string,
  options: Array<T>,
  selectedIndex: number,
  lastMove: ?Direction,
  glow?: boolean,
  changeSelectedIndex: (delta: number) => mixed,
  selectOption: () => mixed,
  getOptionProps: (T) => { name: string, image: string, description?: string },
};

export default function Carousel<T>({
  title,
  options,
  glow,
  selectedIndex,
  lastMove,
  changeSelectedIndex,
  selectOption,
  getOptionProps,
}: Props<T>) {
  const numOptions = options.length;
  const updateSelectedIndex = useCallback(
    throttle(changeSelectedIndex, 250, { trailing: false }),
  );

  useHotkeys('left', () => updateSelectedIndex(-1), [updateSelectedIndex]);
  useHotkeys('right', () => updateSelectedIndex(1), [updateSelectedIndex]);
  useHotkeys('enter', () => selectOption(), [selectOption]);

  return (
    <PageContainer>
      <Title size="large">{title}</Title>
      <div className={styles.track}>
        {options.map((option, index) => {
          let offset = index - selectedIndex;
          if (offset <= -2) offset += numOptions;
          if (offset >= numOptions - 2) offset -= numOptions;

          const distance = Math.abs(offset);
          const shrink = Math.pow(0.66, distance);

          // Prevent items wrapping around the carousel from flying across the screen
          const shouldHide = (() => {
            if (lastMove === 'left') return offset <= -2;
            if (lastMove === 'right') return offset >= 2;
            return false;
          })();

          const style = {
            opacity: shrink,
            transform: `scale(${shrink})`,
            left: `${50 + 50 * offset}%`,
            visibility: shouldHide ? 'hidden' : 'visible',
          };

          const { image, name, description } = getOptionProps(option);

          return (
            <div
              key={name}
              onClick={distance === 0 ? selectOption : undefined}
              className={styles.option}
              style={style}
            >
              <Image className={styles.optionImage} src={image} glow={glow} />
              <div className={styles.optionName}>{name}</div>
              {description && (
                <div className={styles.optionDescription}>{description}</div>
              )}
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
