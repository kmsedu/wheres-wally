import React, {useState} from 'react';
import {MouseEvent} from 'react';
import {Target} from '../components/target';

export function GameCanvas() {
  const [targetShown, setTargetBoxShown] = useState(true);
  const [targetCoords, setTargetBoxCoords] = useState([0, 0]);

  function toggleTargetBoxShown() {
    setTargetBoxShown(true);
  }

  function handleClick(event: MouseEvent<HTMLImageElement>) {
    toggleTargetBoxShown();
    setTargetBoxCoords([event.pageX, event.pageY]);
    console.log(`${event.pageX}, ${event.pageY}`);
  }

  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/wheres-wally-a7ab2.appspot.com/o/wheres-wally1.jpg?alt=media&token=5188a802-e291-4da9-9c50-0c7fc13ad3e3"
        className="min-w-max"
        onClick={handleClick}
      />
      {targetShown && <Target x={targetCoords[0]} y={targetCoords[1]} />}
    </div>
  );
}
