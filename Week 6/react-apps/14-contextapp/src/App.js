import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import EmployeeList from './components/EmployeeList';

const employees = [
  { id: 1, name: 'Ananya Rao', role: 'Software Engineer' },
  { id: 2, name: 'Vikram Iyer', role: 'QA Analyst' },
  { id: 3, name: 'Sneha Kulkarni', role: 'DevOps Engineer' }
];

function App() {
  const [theme, setTheme] = useState('light');

  return (
    // Provider makes "theme" available to every descendant, no matter how
    // deeply nested, without threading it through props.
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px' }}>
        <h1>Employee Management (Context API Theme)</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme (currently: {theme})
        </button>
        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
