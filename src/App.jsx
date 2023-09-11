import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Flag from './components/Flag';
import Layout from './components/Layout';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Layout setSearchValue={setSearchValue} searchValue={searchValue} />
          }
        >
          <Route index element={<Homepage searchValue={searchValue} />} />

          <Route
            path="/:country"
            element={
              <Flag setSearchValue={setSearchValue} searchValue={searchValue} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
