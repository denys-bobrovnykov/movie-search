import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { tmdb, Urls } from '../../util/Tmdb';
import './DetailsPage.scss';

export const DetailsPage = (props) => {
  const [state, setState] = useState({
    response: {},
    isLoaded: false,
  });
  const { type, id } = useParams();
  console.log(type, id);
  useEffect(() => {
    tmdb.getDetails(type, id).then((response) => {
      setState({ response, isLoaded: true });
    });
  }, []);
  const backgroundImage = state.isLoaded
    ? `url("${Urls.backdrop + state.response.backdrop_path}")`
    : '';
  const posterImage = state.isLoaded ? `${Urls.poster_w300 + state.response.poster_path}` : '';
  const style = {
    backgroundImage: backgroundImage,
    posterImage: posterImage,
  };

  return (
    <section className="DetailsPage">
      <div className="DetailsPage-banner" style={style}>
        <div className="DetailsPage-banner-inner-content">
          <img
            className="DetailsPage-banner-inner-content-poster"
            src={style.posterImage}
            alt="poster"
          />
          <div className="DetailsPage-banner-inner-content-info"></div>
        </div>
      </div>
    </section>
  );
};
