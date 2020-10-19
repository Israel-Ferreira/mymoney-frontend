import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Routes from './Routes';
import Messages from './components/layout/msg/Messages'

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  );
}

export default App;
