import React, { useContext } from 'react'
import Xicon from './icons/Xicon';
import Oicon from './icons/Oicon';
import { GameContext } from './context/GameContext';

const Start = () => {
const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);
  return (
    <div className="start">
      <div className="start_header d-flex mx-auto justify-content-center col-12">
        <Xicon size={1} className={"m-1"} />
        <Oicon size={1} className={"m-1"} />
      </div>
      <div className="start-card text-center my-2 px-4 pt-4 shadow_gray shadow rounded">
        <h3 className="p-2">pick player 1'st mark</h3>
        <div className="start_players bg__dark  px-2  py-2 m-2 rounded">
          <span
            className={activeUser === "x" ? "active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={"dark"} size={5} />{" "}
          </span>

          <span
            className={activeUser === "o" ? "active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={"light"} size={5} />
          </span>
        </div>
        <h3 className="text-muted p-3">remember: x goes first</h3>
      </div>
      <div className="start_btns my-3 d-grid gap-2">
        <button
          className="btn bg__yellow p-2 shadow"
          onClick={() =>changePlayMode("cpu")}
        >
          new game (vs cpu)
        </button>
        <button
          className="btn bg__blue p-2 shadow "
          onClick={() => 
            changePlayMode('user')}
        >
          new game (vs player)
        </button>
      </div>
    </div>
  );
}

export default Start