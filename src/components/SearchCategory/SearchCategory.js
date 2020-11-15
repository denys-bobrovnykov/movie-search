import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HomePageContext } from '../HomePageContext';

import './SearchCategory.scss';

export const SearchCategory = (props) => {
  const { category, setCategory } = useContext(HomePageContext);
  const currentCategory = props.mediaType;
  const changeCategory = () => {
    if (category !== currentCategory) {
      setCategory(currentCategory);
    }
  };
  const { pathname } = useLocation();
  console.log(pathname);
  const style = {
    textDecoration: props.mediaType === category ? 'underline' : 'none',
  };
  return (
    <li onClick={changeCategory} style={style}>
      {props.name}
    </li>
  );
};
