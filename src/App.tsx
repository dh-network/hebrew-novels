import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Topnav from './Topnav';
import Home from './Home';
import Readings from './Readings';
import Novels from './Novels';
import Reading from './Reading';
import Novel from './Novel';
import './App.css';

function App() {
  return (
    <div style={{padding: '20px'}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Topnav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/novels" element={<Novels/>} />
          <Route path="/novels/:id" element={<Novel/>} />
          <Route path="/readings" element={<Readings/>} />
          <Route path="/readings/:id" element={<Reading/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
