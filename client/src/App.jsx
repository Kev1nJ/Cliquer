import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import YourRecipes from './components/YourRecipes';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/your-recipes" component={YourRecipes} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
