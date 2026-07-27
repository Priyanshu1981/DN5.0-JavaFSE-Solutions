import React from 'react';

// Hands-on 9: Use ES6 map(), arrow functions and destructuring.
const players = [
  { name: 'Rohit Sharma', score: 45 },
  { name: 'Virat Kohli', score: 82 },
  { name: 'KL Rahul', score: 33 },
  { name: 'Shreyas Iyer', score: 21 },
  { name: 'Hardik Pandya', score: 58 },
  { name: 'Ravindra Jadeja', score: 15 },
  { name: 'MS Dhoni', score: 40 },
  { name: 'Jasprit Bumrah', score: 4 },
  { name: 'Mohammed Shami', score: 2 },
  { name: 'Kuldeep Yadav', score: 8 },
  { name: 'Yuzvendra Chahal', score: 0 }
];

// ES6 arrow function + destructuring of each player object inside map().
const ListofPlayers = () => (
  <div>
    <h1>Cricket Team — Batting Scorecard</h1>
    <ul>
      {players.map(({ name, score }, index) => (
        <li key={index}>
          {name} — {score} runs
        </li>
      ))}
    </ul>
  </div>
);

export default ListofPlayers;
