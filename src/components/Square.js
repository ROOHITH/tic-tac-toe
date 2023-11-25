import { useState } from "react";

function Square(props) {
  const [takenBy, setTakenBy] = useState(null);

  function onclciFun(e) {
    if (takenBy === null) {
      props.onClick();
      setTakenBy(props.player);
      props.updateScore(props.player, props.num);
    }
  }

  return (
    <button className="sqaure" onClick={onclciFun} value={takenBy}>
      {takenBy}
    </button>
  );
}

export default Square;
