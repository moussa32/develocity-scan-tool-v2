import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About'
import { Token } from './Pages/Token/Token'
import './App.css';
import Tokens from './Pages/Tokens/Tokens';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='token/:contractAddress' element={<Token />} />
        <Route path='tokens' element={<Tokens />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;


