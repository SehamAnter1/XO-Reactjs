import { useContext } from "react";
import Xicon from "../icons/Xicon";
import { GameContext } from "../context/GameContext";
import Oicon from "../icons/Oicon";

const Win = () => {
  const { winner, xnxt, handleQuit, handleNextRound } =
    useContext(GameContext);
    return (
      <div className="Win">
        <div className="Win__Content d-grid p-3">
          {/* {console.log(winner)} */}
          {winner !== "nowinner"  ? (           <>
            
              <strong className="fs-3 text-center">
                {/* {console.log(winner)}
            {console.log(Win.isWiner)} */}
                {xnxt ? <Xicon /> : <Oicon />} Teakes this round
                {/* {winner === "x" ? <Xicon /> : <Oicon />} Teakes this round */}
              </strong>
            </>
          ) : (
            <strong className="color-yellow fs-3">No Winner</strong>
          )}
          <div className=" d-flex gap-1 mx-auto">
            <button
              className="btn shadow bg__gray text__dark"
              onClick={handleQuit}
            >
              Quit
            </button>
            <button
              className="bg__yellow btn shadow text__dark popup-yellow{"
              onClick={handleNextRound}
            >
              play again!
            </button>
          </div>
        </div>
      </div>
    );
};

export default Win;
