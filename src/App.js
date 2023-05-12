import { Container, Row } from 'react-bootstrap';
import './style/Main.css';
import './style/Start.css';
import './style/Board.css';
import './style/modal.css';
import Board from './components/Board';
import Modal   from "./components/moadal/Modal";
import { useContext } from 'react';
import { GameContext } from './components/context/GameContext';
import Start from './components/Start';

function App() {
  const {screen} = useContext(GameContext)
  return (
    <>
      <div className="App  d-flex align-items-center justify-content-center">
        <Container className="p-3  width-fit-content align-items-center justify-content-center col-8 col-sm-6  col-md-5 col-lg-5 col-xl-5 ">
          <Row>
            {screen === "start" && <Start />}
            {screen === "board" && <Board />}
            <Modal />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
