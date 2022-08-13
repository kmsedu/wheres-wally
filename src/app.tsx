import React from 'react';
import {GameWindow} from './layout/game-window';
import {Navbar} from './layout/navbar';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <GameWindow />
    </>
  );
}

export default App;
