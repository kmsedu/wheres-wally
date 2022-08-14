import React, {useState} from 'react';
import {MouseEvent} from 'react';
import {Dropdown} from '../components/dropdown';
import {Target} from '../components/target';

interface GameCanvasProps {
  getClickCoords: Function;
  findCharacter: Function;
}

export function GameCanvas(props: GameCanvasProps) {
  const [targetShown, setTargetShown] = useState(false);
  const [targetCoords, setTargetCoords] = useState([0, 0]);
  const [dropdownShown, setDropdownShown] = useState(false);

  const {getClickCoords, findCharacter} = props;

  function toggleTargetShown() {
    setTargetShown(!targetShown);
  }

  function toggleDropdownShown() {
    setDropdownShown(!dropdownShown);
  }

  function handleClick(event: MouseEvent<HTMLImageElement>) {
    toggleDropdownShown();
    setTargetCoords([event.pageX, event.pageY]);
    toggleTargetShown();
    getClickCoords(event.pageX, event.pageY);
  }

  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/wheres-wally-a7ab2.appspot.com/o/wheres-wally1.jpg?alt=media&token=5188a802-e291-4da9-9c50-0c7fc13ad3e3"
        className="min-w-max pt-16"
        onClick={handleClick}
      />
      {targetShown && <Target x={targetCoords[0]} y={targetCoords[1]} />}
      {dropdownShown && (
        <Dropdown
          x={targetCoords[0]}
          y={targetCoords[1]}
          findCharacter={findCharacter}
        />
      )}
    </div>
  );
}
