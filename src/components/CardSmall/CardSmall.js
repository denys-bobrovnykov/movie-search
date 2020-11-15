import React, { useContext } from 'react';
import { HomePageContext } from '../HomePageContext';
import { Link } from 'react-router-dom';
import date from 'date-and-time';
import { Urls } from '../../util/Tmdb';

import './CardSmall.scss';

export const CardSmall = (props) => {
  const { category } = useContext(HomePageContext);
  const {
    id,
    poster_path,
    overview,
    title,
    original_name,
    first_air_date,
    release_date,
  } = props.data;
  const dataDate = release_date || first_air_date || '';
  const dataTitle = title || original_name || '';
  const imageSrc = Urls.poster + poster_path;
  const releaseDate = dataDate ? date.format(new Date(dataDate), 'MMMM D, YYYY') : '';

  return (
    <div className="card-small">
      <div className="image">
        <Link to={`/details/${category}/${id}`}>
          <img src={imageSrc} alt="poster" />
        </Link>
      </div>
      <div className="info">
        <h2 className="title">{dataTitle}</h2>
        <span className="release-date">{releaseDate}</span>
        <div className="description">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
