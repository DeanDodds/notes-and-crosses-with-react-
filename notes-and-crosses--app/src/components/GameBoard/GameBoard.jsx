export default function GameBoard(){
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => <li  className="game-row" key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li className="game-button-container" key={colIndex}>
                        <button>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )

} 