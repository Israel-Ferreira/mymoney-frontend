import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Routes from './Routes';

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />

    </div>
  );
}

export default App;
