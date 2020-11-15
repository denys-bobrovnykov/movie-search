import React, { useContext, useEffect, useState } from 'react';

import { HomePageContext } from '../HomePageContext';
import { useParams } from 'react-router-dom';
import { CardSmall } from '../CardSmall/CardSmall';
import { tmdb } from '../../util/Tmdb';
import './ResultsPage.scss';
import { SearchBar } from '../SearchBar/SearchBar';

export const ResultsPage = (props) => {
  const params = useParams();
  const [state, setState] = useState({
    response: {},
    page: 1,
    isLoaded: false,
  });
  const { category } = useContext(HomePageContext);
  const option = category === 'tv' ? 'TV-Shows' : 'Movies';

  useEffect(() => {
    tmdb
      .search(category, params.search_text, state.page)
      .then((response) => setState({ response, isLoaded: true }))
      .catch((err) => setState({ isLoaded: false }));
  }, [category, params, state.page]);

  const displayResults = () => {
    if (state.isLoaded) {
      return state.response.results.map((item) => <CardSmall key={item.id} data={item} />);
    }
    return 'Loading...';
  };

  const totalResults = state.response.total_results || 0;
  return (
    <main>
      <SearchBar />
      <section className="ResultsPage">
        <div className="results-container">
          <div className="options">
            <ul className="options__list">
              <li className="options__query">
                <span className="options__query-text">Search results</span>
                <span className="options__list__item-category">{option}</span>
              </li>
              <li className="options__list__item">
                <span className="options__list__item-category">Total:</span>
                <span className="options__list__item-total">{totalResults}</span>
              </li>
            </ul>
          </div>
          <div className="results-list">{displayResults()}</div>
        </div>
      </section>
    </main>
  );
};
