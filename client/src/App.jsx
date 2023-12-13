import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';
import Home from './componenets/pages/Home'
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <Header/>
      <Home currentPage={currentPage}/>
      <Navigation  />
      <div className="container">
        <Outlet />
      </div>
      
      <Footer/>
   
    </>
  );
}

export default App;
