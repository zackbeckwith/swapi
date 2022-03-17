import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import StarshipList from './Pages/StarshipList/StarshipList';

function App() {

  return (
    <>
      <Header />
      <StarshipList />
      <Routes>

      </Routes>
    </>
  );
}

export default App;
