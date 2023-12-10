import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';
import Home from './pages/Home';
import YourRecipes from './pages/YourRecipes';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/your-recipes" component={YourRecipes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
