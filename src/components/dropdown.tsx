import React from 'react';

interface dropdownProps {
  x: number;
  y: number;
  findCharacter: Function;
}

export function Dropdown(props: dropdownProps) {
  const {x, y, findCharacter} = props;

  const dropdownStyle = {
    top: y + 32,
    left: x + 32,
  };

  return (
    <ul
      className="absolute bg-red-600 flex flex-col gap-2 text-white font-title rounded cursor-pointer"
      style={dropdownStyle}
    >
      <li
        className="hover:bg-red-400 p-4 transition-colors"
        onClick={() => findCharacter('wally')}
      >
        Wally
      </li>
      <li
        className="hover:bg-red-400 p-4 transition-colors"
        onClick={() => findCharacter('odlaw')}
      >
        Odlaw
      </li>
      <li
        className="hover:bg-red-400 p-4 transition-colors"
        onClick={() => findCharacter('wizard')}
      >
        Wizard
      </li>
    </ul>
  );
}
