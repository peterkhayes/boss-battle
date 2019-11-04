// @flow
import React, { useState, useCallback } from 'react';
import PageContainer from './PageContainer';
import Title from './Title';
import styles from './Carousel.css';
import { useHotkeys } from 'react-hotkeys-hook';
import throttle from 'lodash/throttle';

type Props<T> = {
  title: string,
  options: Array<T>,
  selectOption: (T) => mixed,
  getOptionProps: (T) => { name: string, image: string, description?: string },
};

export default function Carousel<T>({
  title,
  options,
  selectOption,
  getOptionProps,
}: Props<T>) {
  const numOptions = options.length;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lastMove, setLastMove] = useState<'left' | 'right' | null>(null);

  const updateSelectedIndex = useCallback(
    throttle(
      (n, direction) => {
        setSelectedIndex((i) => (i + n + numOptions) % numOptions);
        setLastMove(direction);
      },
      250,
      { trailing: false },
    ),
    [numOptions],
  );

  useHotkeys('left', () => updateSelectedIndex(1, 'left'), [numOptions]);
  useHotkeys('right', () => updateSelectedIndex(-1, 'right'), [numOptions]);
  useHotkeys('enter', () => selectOption(options[selectedIndex]), [
    selectedIndex,
    options,
    selectOption,
  ]);

  return (
    <PageContainer>
      <Title>{title}</Title>
      <div className={styles.track}>
        {options.map((option, index) => {
          let offset = index - selectedIndex;
          if (offset <= -2) offset += numOptions;
          if (offset >= numOptions - 2) offset -= numOptions;

          const distance = Math.abs(offset);
          const shrink = Math.pow(0.66, distance);

          // Prevent items wrapping around the carousel from flying across the screen
          const shouldHide = (() => {
            if (lastMove === 'left') return offset >= 2;
            if (lastMove === 'right') return offset <= -2;
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
              onClick={() => selectOption(option)}
              className={styles.option}
              style={style}
            >
              <img className={styles.optionImage} src={image} />
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
