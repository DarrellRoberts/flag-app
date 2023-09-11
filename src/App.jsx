import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Flag from './components/Flag';
import Layout from './components/Layout';

function App() {
  return (
    <div className="app">
      <Flag />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/:country" element={<Flag />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
