// @flow
import React, { useState, useEffect } from 'react';

type Props = {|
  colors: Array<string>,
  colorTransitionTime: number,
  children: React$Node,
  display?: string,
|};

export default function AnimatedText({
  colors,
  colorTransitionTime,
  children,
  display,
}: Props) {
  const [colorIdx, setColorIdx] = useState(0);
  const color = colors[colorIdx % colors.length];
  useEffect(() => {
    const interval = setInterval(
      () => setColorIdx((idx) => idx + 1),
      colorTransitionTime,
    );
    return () => clearInterval(interval);
  }, [colorTransitionTime]);

  const style = {
    display,
    color,
    transition: `color ${colorTransitionTime}ms linear`,
  };

  return <div style={style}>{children}</div>;
}
AnimatedText.defaultProps = {
  colorTransitionTime: 1000,
};
