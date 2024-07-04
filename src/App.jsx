import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import Footer from './components/Footer';
import DashboardTrainer from './pages/entrenador/DashboardTrainer';

function App() {
  return (
    // <div className="w-screen">
    //   <Header />
    //   <MainContent />
    //   <Footer />
    // </div>

    <>
      <DashboardTrainer />
    </>
  );
}

export default App;