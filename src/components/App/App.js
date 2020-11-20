import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from '../HomePage/HomePage';
import { Header } from '../Header/Header';
import { DetailsPage } from '../DetailsPage/DetailsPage';
import './App.scss';
import { ResultsPage } from '../ResultsPage/ResultsPage';

import { HomePageContext } from '../HomePageContext';

function App() {
  const [category, setCategory] = useState('movie');

  return (
    <Router>
      <HomePageContext.Provider value={{ category, setCategory }}>
        <Header />
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route path="/details/:type/:id" children={<DetailsPage />} />
          <Route path="/results/:search_text" children={<ResultsPage />} />
        </Switch>
      </HomePageContext.Provider>
    </Router>
  );
}

export default App;
