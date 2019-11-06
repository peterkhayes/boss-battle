// @flow
import React from 'react';

type Props = {
  src: string,
  className?: string,
  width?: number,
  height?: number,
};

export default function Image({ src, className, width, height }: Props) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundImage: `url('${src}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
}
