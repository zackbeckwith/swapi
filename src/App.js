import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import StarshipDetail from './Pages/StarshipDetail/StarshipDetail';
import StarshipList from './Pages/StarshipList/StarshipList';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/:id' element={<StarshipDetail />} />
      </Routes>
    </>
  );
}

export default App;
