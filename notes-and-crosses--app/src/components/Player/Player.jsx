import {useState} from 'react';



export default function Player({initialName, playerSymbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false); 
    
    function handleEditClick() {
    setIsEditing((editing => !editing));
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        EditablePlayerName = <input type="text" onChange={handleNameChange} value={playerName} />;
    }
    
    return (
        <li>
            <span className="player">
                {EditablePlayerName}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
                <button onClick={handleEditClick}>{isEditing? "Save" : "Edit" }</button>
        </li>
    );
}