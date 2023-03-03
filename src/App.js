import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  return (
    <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to our app</h1>} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
  );
};

export default App;
