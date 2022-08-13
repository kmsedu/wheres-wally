import React from 'react';
import {MouseEvent} from 'react';

export function GameCanvas() {
  function handleClick(event: MouseEvent<HTMLImageElement>) {
    console.log(`${event.pageX}, ${event.pageY}`);
  }
  return (
    <img
      src="https://firebasestorage.googleapis.com/v0/b/wheres-wally-a7ab2.appspot.com/o/wheres-wally1.jpg?alt=media&token=5188a802-e291-4da9-9c50-0c7fc13ad3e3"
      className="min-w-max"
      onClick={event => handleClick(event)}
    />
  );
}
