import  { useState } from "react";
import "./App.css";
import Square from "./Squares/Square";

const PI = "14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798";

const App = () => {
  const [box, setBox] = useState(new Array(100).fill(""));
  const [focusIndex, setFocusIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleChange = (index, value) => {
    const updatedBox = [...box];
    updatedBox[index] = value;

    if (value !== "") {
      if (value === PI[index]) {
        setBox(updatedBox);

        // Move focus to the next input only if the current input is correct
        if (index < box.length - 1) {
          setFocusIndex(index + 1);
        }
      } else {
        setGameOver(true);
        setFocusIndex(null); // Disable further focus
        alert(`Game Over! You entered a wrong digit at position ${index + 1}.`);
      }
    }
  };

  const handleRestart = () => {
    setBox(new Array(100).fill(""));
    setFocusIndex(0);
    setGameOver(false);
  };

  return (
    <div className="mainClass">
      <div>
        <h1 className="heading">PI Game</h1>
        <div className="py">3.</div>
        <div className="SquareWrapper">
          {box.map((item, index) => (
            <Square
              key={index}
              value={item}
              index={index}
              focusIndex={focusIndex}
              handleChange={handleChange}
              gameOver={gameOver}
            />
          ))}
        </div>
        {gameOver && (
          <div className="game-over">
            <button onClick={handleRestart}>Restart Game</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
