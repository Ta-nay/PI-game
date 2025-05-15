/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./square.css";

const Square = ({ value, index, focusIndex, handleChange, gameOver }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!gameOver && focusIndex === index && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focusIndex, index, gameOver]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 1 && /^[0-9]?$/.test(inputValue)) {
      handleChange(index, inputValue);
    }
  };

  return (
    <div className="sqr">
      <input
        type="number"
        value={value}
        ref={inputRef}
        disabled={gameOver}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Square;
