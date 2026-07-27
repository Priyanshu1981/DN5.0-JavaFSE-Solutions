import React from 'react';
import CohortCard from './components/CohortCard';

const cohorts = [
  { id: 1, name: 'Java Full Stack - Batch 12', mentor: 'Ananya Rao', status: 'Ongoing' },
  { id: 2, name: 'React Fundamentals - Batch 7', mentor: 'Vikram Iyer', status: 'Completed' },
  { id: 3, name: 'Spring Boot Microservices - Batch 4', mentor: 'Sneha Kulkarni', status: 'Ongoing' },
  { id: 4, name: 'Angular Essentials - Batch 9', mentor: 'Rahul Mehta', status: 'Completed' }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cognizant Academy — Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortCard
          key={cohort.id}
          name={cohort.name}
          mentor={cohort.mentor}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
