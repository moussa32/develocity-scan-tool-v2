import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About'
import { Token } from './Pages/Token/Token'
import './App.css';
import Tokens from './Pages/Tokens/Tokens';
import Changelog from './Pages/Changelog/Changelog';

function App() {
  return (
    <React.Suspense fallback={null} > 
      <BrowserRouter >
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route  path='token/:contractAddress' element={<Token />} />
          <Route path='tokens' element={<Tokens />} />
          <Route path='Changelog' element={<Changelog />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );

}

export default App;


