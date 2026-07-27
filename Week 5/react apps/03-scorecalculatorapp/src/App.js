import React from 'react';
import CalculateScore from './Components/CalculateScore';

// Hands-on 3: Create a function component named "CalculateScore" which
// accepts Name, School, Total and Goal in order to calculate the average
// score of a student and display it.
function App() {
  return (
    <div>
      <CalculateScore Name="Priya Sharma" School="Cognizant Public School" Total={450} Goal={5} />
    </div>
  );
}

export default App;
