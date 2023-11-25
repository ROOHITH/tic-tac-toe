import logo from "./logo.svg";
import "./App.css";
import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [player, setCurrentPlayer] = useState("x");
  const [score2, setScore2] = useState(Array(9).fill(null));

  const updateScore = (newValue, ind) => {
    const newScore = [...score2];
    newScore[ind] = newValue;

    setScore2(newScore);
    let ans = winner(score2);
    console.log(ans);
    if (ans.status === true) {
      alert("winner is " + ans.p);
    }
  };

  function winner(scoreArray) {
    let arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [5, 8, 2],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < arr.length; i++) {
      let [a, b, c] = arr[i];
  
      if (
        scoreArray[a] !== null &&
        scoreArray[a] === scoreArray[b] &&
        scoreArray[a] === scoreArray[c]
      ) {
        return { status: true, p: scoreArray[a] };
      }
    }
  
    return { status: false, p: null };
  }
  

  function onClickSetPlayer(e) {
    if (player === "x") {
      setCurrentPlayer("o");
    } else {
      setCurrentPlayer("x");
    }
  }

  return (
    <>
      
        <h1>Tic tac toe game</h1>

        <h2>Current Player is {player}</h2>
       
        <div className="board">
          <div className="board-row">
            <Square
              updateScore={updateScore}
              num={0}
              row_={0}
              col_={0}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={1}
              row_={0}
              col_={1}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={2}
              row_={0}
              col_={2}
              onClick={onClickSetPlayer}
              player={player}
            />
          </div>
          <div className="board-row">
            <Square
              updateScore={updateScore}
              num={3}
              row_={1}
              col_={0}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={4}
              row_={1}
              col_={1}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={5}
              row_={1}
              col_={2}
              onClick={onClickSetPlayer}
              player={player}
            />
          </div>
          <div className="board-row">
            <Square
              updateScore={updateScore}
              num={6}
              row_={2}
              col_={0}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={7}
              row_={2}
              col_={1}
              onClick={onClickSetPlayer}
              player={player}
            />
            <Square
              updateScore={updateScore}
              num={8}
              row_={2}
              col_={2}
              onClick={onClickSetPlayer}
              player={player}
            />
          </div>
        </div>
     
    </>
  );
}

export default App;

