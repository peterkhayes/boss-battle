// @flow
import React from 'react';

type Props = {
  src: string,
  glow?: boolean,
  className?: string,
  width?: number,
  height?: number,
  style?: Object,
};

export default function Image({ src, glow, className, width, height, style }: Props) {
  return (
    <div className={className} style={{ width, height, position: 'relative', ...style }}>
      {glow && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: 'scale(1.01)',
            filter: 'brightness(0) invert(0.7) blur(5px)',
          }}
        />
      )}
      <div
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('${src}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}
