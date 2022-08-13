import React from 'react';
import {CharacterList} from '../character-list';
import {GameCanvas} from './game-canvas';

export function GameWindow() {
  return (
    <main className="relative z-0">
      <section className="bg-red-600 w-40 p-4 mt-16 fixed right-0 font-title text-white rounded-b-lg shadow-md">
        <CharacterList />
      </section>
      <GameCanvas />
    </main>
  );
}
