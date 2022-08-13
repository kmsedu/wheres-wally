import React from 'react';
import {CharacterList} from '../character-list';

export function GameWindow() {
  return (
    <main className="relative">
      <section className="bg-red-600 w-40 p-4 absolute right-0 font-title text-white rounded-b-lg shadow-md">
        <CharacterList />
      </section>
    </main>
  );
}
