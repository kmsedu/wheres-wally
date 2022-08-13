import React from 'react';
import {Timer} from '../components/timer';

export function Navbar() {
  return (
    <div className="font-title flex justify-between items-center bg-red-600 px-8 text-white pt-1 shadow-md">
      <h1 className="flex gap-4 items-center text-2xl">
        <img src="./main-logo.png" alt="Main logo" width="60px"></img>
        Where's Wally?
      </h1>
      <p>
        Time: <Timer />
      </p>
    </div>
  );
}
