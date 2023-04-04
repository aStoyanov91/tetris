import { useRef, useEffect } from "react";
import { Action, actionForKey, actionIsDrop } from "/src/business/Input";
import { playerController } from "/src/business/PlayerController";

import { useDropTime } from "/src/hooks/useDropTime";
import { useInterval } from "/src/hooks/useInterval";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  });
  const inputRef = useRef(null);

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener(
        "click",
        () => inputRef?.current && inputRef.current.focus()
      );
    }, 100);

    return document.removeEventListener(
      "click",
      () => inputRef?.current && inputRef.current.focus()
    );
  }, []);

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <input
      className="GameController"
      id="input-ref"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
      ref={inputRef}
    />
  );
};

export default GameController;