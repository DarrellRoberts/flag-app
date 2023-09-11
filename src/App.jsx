import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Flag from './components/Flag';
import Layout from './components/Layout';

function App() {
  const [country, setCountry] = useState([]);

  const fetchCountry = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    setCountry(data);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  console.log(country);
  return (
    <div className="app">
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
