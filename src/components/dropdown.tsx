import React from 'react';

interface dropdownProps {
  x: number;
  y: number;
}

export function Dropdown(props: dropdownProps) {
  const {x, y} = props;

  const dropdownStyle = {
    top: y + 32,
    left: x + 32,
  };

  return (
    <ul
      className="absolute bg-red-600 flex flex-col gap-2 text-white font-title rounded cursor-pointer"
      style={dropdownStyle}
    >
      <li className="hover:bg-red-400 p-4 transition-colors">Wally</li>
      <li className="hover:bg-red-400 p-4 transition-colors">Odlaw</li>
      <li className="hover:bg-red-400 p-4 transition-colors">Wizard</li>
    </ul>
  );
}
