import useState from 'react';

export default function Player({initialName, playerSymbol}) {
    return (
        <li>
            <span className="player">
                <span className="player-name">{initialName}</span>
                <span className="player-symbol">{playerSymbol}</span>
            </span>
                <button>Edit</button>
        </li>
    );
}