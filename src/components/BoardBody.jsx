import React from 'react'
import Xicon from './icons/Xicon'
import Oicon from './icons/Oicon'
import { GameContext } from './context/GameContext';
import { useContext } from 'react';

const BoardBody = ({ user = 'null', active, index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`role shadow m-auto rounded bg__light ${
        active && user === "x" && "bg__blue"
      } ${active && user === "o" && "bg__yellow"}`}
   onClick={()=>handleSquareClick(index)}
    >
      {user === "x" && <Xicon color={active && "dark"} size={5} />}
      {user === "o" && <Oicon color={active && "light"} size={5} />}
    </div>
  );
}

export default BoardBody