import React, { useState } from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const [animalType, setAnimalType] = useState('all')

  function handleChange(event) {
    onChangeType(event.target.value)
    setAnimalType(event.target.value);
  }

  function handleClick() {
    onFindPetsClick(animalType)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" value={animalType} onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;