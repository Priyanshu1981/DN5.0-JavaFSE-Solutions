import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// Hands-on 2: Create a class component named Home, About and Contact and
// call/render all three components.
function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
