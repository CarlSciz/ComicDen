import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import comicDen from '../ComicDen/comicDen';
import Preferences from '../Preferences/preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/comicDen" element={<comicDen />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
