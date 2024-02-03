import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleClick = () => {
    setIsEditing((prevState) => !prevState);
    if(isEditing) {
      onChangeName(symbol, name)
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {!isEditing && name}
          {isEditing && (
            <input type="text" onChange={handleChange} value={name} required />
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
