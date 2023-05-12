import { createContext, useContext, useEffect, useState } from "react";
import { calcBestRoute, whoIsWinner } from "../../logic/SquaresLogic";
import { ModalContext } from "./ModalContext";

const GameContext = createContext()
const GameState = (props) => {
  const { showModal, setModalMode, hideModal } = useContext(ModalContext);
  // start screen or board screen
  const [screen, setScreen] = useState("start");

  // x user or o user
  const [activeUser, setActiveUser] = useState("x");
  
  // user mode or cpu mode
   const [playMode, setPlayMode] = useState("user");
  const [squares , setSquares]=useState(new Array(9).fill(''))
  const [xnxt, setXnxt] = useState(false)
  
 
  const [winner, setWinner] = useState(null)
  const [winnerPoint, setWinnerPoint] = useState(null)
  const [wins,setWins]=useState({x:0,o:0,tie:0})
  
  const changePlayMode = (mode) => {
        setPlayMode(mode);
        setScreen('board')
  }
  
    const handleSquareClick = (idx) => {
      if (squares[idx] || winner) {
        return;
      } 
      const curUsr = xnxt ? 'o' : 'x';
        if (playMode === "cpu" && curUsr !== activeUser) {
          return;
        }
        let newSquares = [...squares]
        newSquares[idx] = !xnxt ? "x" : "o"
        setSquares(newSquares);
        setXnxt(!xnxt);
       
        // winner 
        checkWinner(newSquares);  
  };
  const checkWinner = (newSquares) => {
    const isWiner = whoIsWinner(newSquares);
    if (isWiner) {
      // console.log(win.winner);
      setWinner(isWiner.winner);
      setWinnerPoint(isWiner.point);
      
      const newWins = { ...wins };
      newWins[isWiner.winner] += 1;
      setWins(newWins);
      showModal();
      setModalMode("winner");
    } 
  }
  const handleQuit = () => {
    setSquares(new Array(9).fill(''))
    setXnxt(false)
    setWinner(null)
    setWinnerPoint(null)
    setActiveUser('x')
    setWins({ x: 0, o: 0 ,tie:0})
    hideModal()
    setScreen('start')

  }
  
  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setXnxt(winner === 'x')
      setWinner(null);
      setWinnerPoint(null);
      hideModal();

  }
  useEffect(() => { 
    noWinner();
    const cur=xnxt?'o':'x'
    if (playMode === 'cpu' && cur !== activeUser && !winner) {
      cpuNextCpu(squares)
    }

  }, [xnxt, winner, screen])
  
  const noWinner = () => {
    const empty = squares.filter(emp => emp === "")
    if (!(empty.length)) {
      setWinner('nowinner')     
      showModal()
      setModalMode('winner') 
      wins.tie += 1;
    }
  }
  
  // cpu logic
const cpuNextCpu = (square) => {
  setTimeout(() => {
    const bestRoute = calcBestRoute(square, activeUser === "x" ? "o" : "x");
    let newSquares = [...squares];
    newSquares[bestRoute] = !xnxt ? "x" : "o";
    setSquares(newSquares);
    setXnxt(!xnxt);
    checkWinner(newSquares);
  }, 500);
};

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        setActiveUser,
        changePlayMode,
        handleSquareClick,
        handleNextRound,
        handleQuit,
        xnxt,
        wins,
        squares,
        winner,
        winnerPoint,
        playMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export {GameContext,GameState}