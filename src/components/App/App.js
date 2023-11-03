import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComicDen from '../ComicDen/comicden';
import Login from '../Login/login';
import Preferences from '../Preferences/preferences';


function App() {
  
  const [token, setToken] = useState();

  if (token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/comicDen" element={<ComicDen />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
