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
  const style = {
    backgroundImage: backgroundImage,
  };

  return (
    <section className="DetailsPage">
      <div className="banner" style={style}></div>
    </section>
  );
};
