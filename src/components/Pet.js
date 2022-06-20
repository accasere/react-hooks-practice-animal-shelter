import React from "react";

function Pet({ pet, onAdoptPet }) {
  const {id, type, gender, age, weight, name, isAdopted} = pet
  
  function handleAdoption() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isAdopted: true })
    })
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'female' ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
      {isAdopted ?
        <button className="ui disabled button">Already adopted</button>
        :
        <button className="ui primary button" onClick={handleAdoption}>Adopt pet</button>
      }
      </div>
    </div>
  );
}

export default Pet;