import React, { useState } from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';
import Home from './components/pages/Home';
import YourRecipes from './components/pages/Recipes';
import Register from './components/pages/Register';
import { useLocation, Outlet } from 'react-router-dom';

function App() {
  const currentPage = useLocation().pathname;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform actions related to search using the searchTerm state
    console.log('Searching for:', searchTerm);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case '/recipes':
        return <YourRecipes />;
      case '/register':
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="container">
        
        {renderPageContent()}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
