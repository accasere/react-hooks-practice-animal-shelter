import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  function handleChangeType(type) {
    setFilters({ type })
  }

  function handleFindPetsClick() {
    const URI = filters.type === 'all' ? 'http://localhost:3001/pets' : `http://localhost:3001/pets?type=${filters.type}`
    fetch(URI)
    .then(r => r.json())
    .then(setPets)
  }

  function handleAdoptPet(id) {
    setPets(pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true }
      }
      return pet;
    }))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;