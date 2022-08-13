import React from 'react';

interface targetProps {
  x: number;
  y: number;
}

export function Target(props: targetProps) {
  const {x, y} = props;

  const targetStyle = {
    top: `${y - 32}px`,
    left: `${x - 32}px`,
    width: '64px',
    height: '64px',
  };

  return (
    <div
      className={
        'absolute text-4xl border-red-700 border-4 pointer-events-none rounded-full'
      }
      style={targetStyle}
    />
  );
}
