import React from 'react';

// Hands-on 14: React Context API — avoids threading the "theme" prop
// through every intermediate component (App -> EmployeeList -> EmployeeCard).
const ThemeContext = React.createContext('light');

export default ThemeContext;
