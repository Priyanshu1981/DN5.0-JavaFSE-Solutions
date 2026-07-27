import React from 'react';

// Hands-on 10: Use JSX to create elements/attributes, render a list from an
// array of objects, and apply conditional CSS colour based on rent value.
const offices = [
  { id: 1, name: 'Downtown Suite', rent: 55000, address: 'MG Road, Bengaluru', image: 'https://via.placeholder.com/150?text=Office+1' },
  { id: 2, name: 'Tech Park Tower', rent: 72000, address: 'Whitefield, Bengaluru', image: 'https://via.placeholder.com/150?text=Office+2' },
  { id: 3, name: 'Riverside Office', rent: 48000, address: 'Kondapur, Hyderabad', image: 'https://via.placeholder.com/150?text=Office+3' }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Element to display the heading of the page */}
      <h1>Office Space Rental Listings</h1>

      {/* Attribute to display the image of an office space */}
      <img src={offices[0].image} alt={offices[0].name} width="150" />

      <ul>
        {offices.map((office) => (
          <li key={office.id} style={{ marginBottom: '10px' }}>
            <strong>{office.name}</strong> — {office.address} —{' '}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
