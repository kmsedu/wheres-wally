import React from 'react';
import {CharacterList} from './character-list';
import {GameCanvas} from './game-canvas';
import {useState, useEffect} from 'react';
import {firestore} from '../init-firebase';
import {getDoc, doc} from 'firebase/firestore/lite';

export function GameWindow() {
  const [foundCharacters, setFoundCharacters] = useState({
    wally: false,
    odlaw: false,
    wizard: false,
  });

  const [characterLocations, setCharacterLocations] = useState({
    wally: {
      'box-tl': [0, 0],
      'box-br': [0, 0],
    },
    odlaw: {
      'box-tl': [0, 0],
      'box-br': [0, 0],
    },
    wizard: {
      'box-tl': [0, 0],
      'box-br': [0, 0],
    },
  });

  const [clickCoords, setClickCoords] = useState([0, 0]);

  function findCharacter(name: string) {
    if (!Object.keys(foundCharacters).includes(name)) {
      throw Error('Invalid character name.');
    }

    const [clickX, clickY] = clickCoords;
    const characterLocation = characterLocations[name];
    const characterTopLeft = characterLocation['box-tl'];
    const characterBottomRight = characterLocation['box-br'];

    if (
      clickX >= characterTopLeft[0] &&
      clickX <= characterBottomRight[0] &&
      clickY >= characterTopLeft[1] &&
      clickY <= characterBottomRight[1]
    ) {
      console.log('Found', name);
      setFoundCharacters(prevFoundCharacters => {
        return {...prevFoundCharacters, [name]: true};
      });
    }
  }

  useEffect(() => {
    async function getLocations() {
      const docRef = doc(firestore, 'wheres-wally/map1');

      const mapData = await getDoc(docRef);
      const mapObj = {...mapData.data()};

      for (const [key, value] of Object.entries(mapObj)) {
        setCharacterLocations(prevCharacterLocations => {
          return {...prevCharacterLocations, [key]: value};
        });
      }
    }
    getLocations();
  }, []);

  function getClickCoords(x: number, y: number) {
    setClickCoords([x, y]);
  }

  return (
    <main className="relative z-0">
      <section className="bg-red-600 w-44 p-4 mt-16 fixed right-0 font-title text-white rounded-b-lg shadow-md">
        <CharacterList foundCharacters={foundCharacters} />
      </section>
      <GameCanvas
        getClickCoords={getClickCoords}
        findCharacter={findCharacter}
      />
    </main>
  );
}
