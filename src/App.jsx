import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const calculateTotalStrength = (team) => {
    return team.reduce((total, character) => total + character.strength, 0);
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((total, character) => total + character.agility, 0);
  };

  useEffect(() => {
    setTotalStrength(calculateTotalStrength(team));
    setTotalAgility(calculateTotalAgility(team));
  }, [team]);

  const handleAddFighter = (character) => {
    if (money >= character.price) {
      setTeam((prevTeam) => {
        const newTeam = [...prevTeam, character];
        setTotalStrength(calculateTotalStrength(newTeam));
        setTotalAgility(calculateTotalAgility(newTeam));
        return newTeam;
      });
      setMoney((prevMoney) => prevMoney - character.price);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (character) => {
    setTeam((prevTeam) => {
      const newTeam = prevTeam.filter((c) => c.name !== character.name);
      setTotalStrength(calculateTotalStrength(newTeam));
      setTotalAgility(calculateTotalAgility(newTeam));
      return newTeam;
    });
    setMoney((prevMoney) => prevMoney + character.price);
  };

  return (
    <div>
      <h1>Zombie Apocalypse Team</h1>
      <h2>Available Characters</h2>
      <p>Money Left: {money}</p> 
      <ul>
        {zombieFighters.map((character) => (
          <li key={character.name}>
            <img src={character.img} alt={character.name} />
            <p>Name: {character.name}</p>
            <p>Price: {character.price}</p>
            <p>Strength: {character.strength}</p>
            <p>Agility: {character.agility}</p>
            <button onClick={() => handleAddFighter(character)}>Add to Team</button>
          </li>
        ))}
      </ul>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((character) => (
            <li key={character.name}>
              <img src={character.img} alt={character.name} />
              <p>Name: {character.name}</p>
              <p>Price: {character.price}</p>
              <p>Strength: {character.strength}</p>
              <p>Agility: {character.agility}</p>
              <button onClick={() => handleRemoveFighter(character)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total Team Strength: {totalStrength}</h2> 
      <h2>Total Team Agility: {totalAgility}</h2> 
      <h2>Money Left: {money}</h2> 
    </div>
  );
}

export default App;