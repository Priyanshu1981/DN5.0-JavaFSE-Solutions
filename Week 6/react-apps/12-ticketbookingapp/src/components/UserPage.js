import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <p>Welcome back! You can now book a ticket for any of the listed flights.</p>
      <button onClick={() => alert('Ticket booked successfully!')}>Book Ticket</button>
    </div>
  );
}

export default UserPage;
