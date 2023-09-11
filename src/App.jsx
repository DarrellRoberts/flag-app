import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Flag from "./components/Flag";

function App() {
  const [country, setCountry] = useState([]);

  const fetchCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountry(data);
  }

  useEffect(() => {
    fetchCountry()}, [])

    console.log(country);
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage/>}>Homepage</Route>
    <Route path="/flag" element={<Flag/>}> Flag </Route>
    </Routes>
    </>

  )
}

export default App
