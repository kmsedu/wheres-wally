import React from 'react';

export function CharacterList() {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <img
            src="./wally.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          <p>Wally</p>
        </li>
        <li className="flex items-center gap-2">
          <img
            src="./odlaw.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          <p>Odlaw</p>
        </li>
        <li className="flex items-center gap-2">
          <img
            src="./wizard.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          <p>Wizard</p>
        </li>
      </ul>
    </>
  );
}
