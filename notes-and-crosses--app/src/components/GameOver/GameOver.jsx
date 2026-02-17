export default function GameOver({ winner, isDraw, onGameRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{ winner } won!</p>}
      {isDraw && <p>It's a draw!</p>}
      <p>
        <button onClick={onGameRestart}>Rematch</button>
      </p>

    </div>
  );
}