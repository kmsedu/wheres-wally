import React, {useState} from 'react';
import {MouseEvent} from 'react';
import {Dropdown} from '../components/dropdown';
import {Target} from '../components/target';

export function GameCanvas() {
  const [targetShown, setTargetBoxShown] = useState(false);
  const [targetCoords, setTargetBoxCoords] = useState([0, 0]);
  const [dropdownShown, setDropdownShown] = useState(false);

  function toggleTargetBoxShown() {
    setTargetBoxShown(!targetShown);
  }

  function toggleDropdownShown() {
    setDropdownShown(!dropdownShown);
  }

  function handleClick(event: MouseEvent<HTMLImageElement>) {
    toggleTargetBoxShown();
    toggleDropdownShown();
    setTargetBoxCoords([event.pageX, event.pageY]);
    console.log(`${event.pageX}, ${event.pageY}`);
  }

  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/wheres-wally-a7ab2.appspot.com/o/wheres-wally1.jpg?alt=media&token=5188a802-e291-4da9-9c50-0c7fc13ad3e3"
        className="min-w-max pt-16"
        onClick={handleClick}
      />
      {targetShown && <Target x={targetCoords[0]} y={targetCoords[1]} />}
      {dropdownShown && <Dropdown x={targetCoords[0]} y={targetCoords[1]} />}
    </div>
  );
}
