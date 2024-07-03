import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;