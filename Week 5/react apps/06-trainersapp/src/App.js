import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import TrainerList from './components/TrainerList';
import TrainerDetail from './components/TrainerDetail';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainerList />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
