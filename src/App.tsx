import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './components/pages/HomeScreen';
import MainLayout from './components/MainLayout';


const getMainLayout = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </MainLayout>
  )
}

function App() {
  return (
   <>
   {getMainLayout()}
   </>
  );
}

export default App;
