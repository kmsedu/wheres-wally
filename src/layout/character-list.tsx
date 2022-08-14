import React from 'react';

interface CharacterListProps {
  foundCharacters: {
    wally: boolean;
    odlaw: boolean;
    wizard: boolean;
  };
}

export function CharacterList(props: CharacterListProps) {
  const {foundCharacters} = props;

  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <img
            src="./wally.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          {foundCharacters.wally ? (
            <p>
              Wally <span className="text-xl">✓</span>
            </p>
          ) : (
            <p>Wally</p>
          )}
        </li>
        <li className="flex items-center gap-2">
          <img
            src="./odlaw.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          {foundCharacters.odlaw ? (
            <p>
              Odlaw <span className="text-xl">✓</span>
            </p>
          ) : (
            <p>Odlaw</p>
          )}
        </li>
        <li className="flex items-center gap-2">
          <img
            src="./wizard.png"
            className="w-12 rounded-full border border-black bg-white"
          ></img>
          {foundCharacters.wizard ? (
            <p>
              Wizard <span className="text-xl">✓</span>
            </p>
          ) : (
            <p>Wizard</p>
          )}
        </li>
      </ul>
    </>
  );
}
