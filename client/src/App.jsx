import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Navigation from './components/Navigation';
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <Header/>
      <Navigation currentPage={currentPage} />
      <div className="container">
        <Outlet />
      </div>
      
      <Footer/>
   
    </>
  );
}

export default App;
