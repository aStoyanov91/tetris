import Board from "@/components/Board";
import GameController from "@/components/GameController";
import GameStats from "@/components/GameStats";
import Previews from "@/components/Previews";

import { useBoard } from "@/hooks/useBoard";
import { useGameStats } from "@/hooks/useGameStats";
import { usePlayer } from "@/hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <div></div>
      <Board board={board} />
      <div className="Info">
        <GameStats gameStats={gameStats} />
        <Previews tetrominoes={player.tetrominoes} />
      </div>
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
