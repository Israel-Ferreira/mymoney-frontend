import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar'

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
