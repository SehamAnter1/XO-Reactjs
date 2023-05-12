import React, { useContext } from "react";
import Restart from "./Restart";
import Win from "./Win";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
  const { show, modalMode } = useContext(ModalContext);

  return (
    <>
      {show && (
        <div className="Win">
          {modalMode === "winner" && <Win />}
          {modalMode === "start" && <Restart />}
        </div> 
      )}
      {/* <button onClick={showModal}>Show</button> */}
    </>
  );
};

export default Modal;
