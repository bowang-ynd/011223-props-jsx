import React from 'react'
import PersonCard from "./components/PersonCard";
import personCards from "./data/personCard";

const App = () => {
  return (
    <div className="container my-3">
    {personCards.map((person, idx) => (
          <PersonCard
            key={idx}
            lastName={person.lastName}
            firstName={person.firstName}
            age={person.age}
            hairColor={person.hairColor}
          />
      ))}
  </div>
  )
}

export default App
