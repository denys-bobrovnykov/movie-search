import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchCategory } from '../SearchCategory/SearchCategory';
import { searchCategories } from '../../util/Tmdb';

import './Header.scss';
import logoUrl from './logo_head.png';

// "This product uses the TMDb API but is not endorsed or certified by TMDb."

export const Header = () => {
  const { pathname } = useLocation();
  const detailsPage = pathname.includes('/details/');
  // Hide categories selector on /details/ page
  const style = {
    transform: detailsPage ? `translateX(500px)` : `translateX(0)`,
    disabled: detailsPage ? 'true' : 'false',
  };

  return (
    <header className="header">
      <div className="content">
        <div className="submedia">
          <Link to="/">
            <img src={logoUrl} alt="The Movie Database (TMDb)" width="104" height="60" />
          </Link>
          <b style={{ color: 'red' }}>
            This product uses the TMDb API but is not endorsed or certified by TMDb.
          </b>
          <ul style={style}>
            {searchCategories.map((item) => (
              <SearchCategory
                key={item.id}
                categoryId={item.id}
                name={item.name}
                mediaType={item.mediaType}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
