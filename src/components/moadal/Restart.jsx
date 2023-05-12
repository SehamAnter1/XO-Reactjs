import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { GameContext } from "../context/GameContext";

const Restart = () => {

   const {
     handleQuit,
   } = useContext(GameContext);
   // const squares=
   const { hideModal } = useContext(ModalContext);

  
  return (
    <div className="Restart">
      <div className="Restart__Content fs-3 d-grid">
        <strong className=""> Restart game ?</strong>
        <div className=" d-flex gap-1">
          <button
            className="btn shadow bg__gray text__dark"
            onClick={hideModal}
          >
            no, cancel
          </button>
          <button
            className="bg__yellow btn shadow text__dark popup-yellow"
            onClick={handleQuit}
          >
            yes, Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restart;
