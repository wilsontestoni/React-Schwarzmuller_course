export default function GameOver({ winner, onStartRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner.toUpperCase()} won</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button onClick={onStartRematch}>Rematch!</button>
      </p>
    </div>
  );
}
