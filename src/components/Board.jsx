import React, { useContext } from "react";
import Xicon from "./icons/Xicon";
import Oicon from "./icons/Oicon";
import BoardBody from "./BoardBody";
import { GameContext } from "./context/GameContext";
import { ModalContext } from "./context/ModalContext";

const Board = () => {
  const {
    squares,
    xnxt,
    wins,
    winner,
    winnerPoint,
    playMode,
    activeUser,
    tieCount,
  } = useContext(GameContext);
  // const squares=
  const { showModal, setModalMode } = useContext(ModalContext);
  const handleReset = () => {
    showModal();
    setModalMode("start")
  }
  const checkUser = (user) => {
    if (playMode === 'cpu') {
      console.log(activeUser)
      if (user === activeUser) {
        return "you";
      }
      else 
        return "cpu";
    }
  }
  return (
    <div className="board p-3">
      <div className="board__header  w-100  width-fit-content d-flex p-2 my-4 ">
        <div className="logo">
          <Xicon size={3} />
          <Oicon size={3} />
        </div>
        <div className="turn  bg__light shadow p-2 px-3 ">
          {!xnxt && <Xicon color={"light"} />}
          {xnxt && <Oicon color={"light"} />}
          &nbsp; turn
        </div>
        <div
          onClick={handleReset}
          className="restart shadow p-2 px-3  rounded "
        >
          <i class="fas fa-redo"></i>
        </div>
      </div>
      <div className="board__body m-auto">
        {squares.map((u, idx) => (
          <BoardBody
            key={idx}
            index={idx}
            user={u}
            active={winner && winnerPoint && winnerPoint.includes(idx)}
          />
        ))}
      </div>

      <div className="board__statistics d-flex my-3">
        <div className="x_you shadow p-2 bg__blue rounded">
          <span>x {checkUser("x")}: </span> <strong>{wins.x}</strong>
        </div>
        <div className="ties shadow p-2 bg__light rounded">
          <span>
            <strong>Ties:{ wins.tie }</strong>{" "}
          </span>
        </div>
        <div className="o_cpu shadow p-2 bg__yellow rounded">
          <span>O {checkUser("o")}: </span> <strong>{wins.o}</strong>
        </div>
      </div>
    </div>
  );
};

export default Board;
