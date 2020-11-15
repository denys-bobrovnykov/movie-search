import React, { useEffect, useState, useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import './HomePage.scss';

import { Banner } from '../Banner/Banner';
import { HomeSection } from '../HomeSection/HomeSection';

import { tmdb, baseUrls } from '../../util/Tmdb.js';
import { HomePageContext } from '../HomePageContext';


export const HomePage = () => {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [backdrop, setBackdrop] = useState('');
  const {category, setCategory} = useContext(HomePageContext);

  const renderLayout = (display) => {
    tmdb.getPopular(display).then(res => {
      const randomBackdropUrl = baseUrls.backdrop + res[Math.floor(Math.random() * 20)].backdrop_path;
      setPopular(res);
      setBackdrop(randomBackdropUrl);
      setCategory(display === 'tv' ? 'tv' : 'movie');
    });
    tmdb.getTrending().then(res => {
      setTrending(res);
    })
   };

  useEffect(() => {
    renderLayout(category)
  }, [category]);
  
  return (
    <>
      <Banner image={ backdrop }/>
      <HomeSection sectionTitle={'What is Popular'} items={ popular } category={category}/>
      <HomeSection sectionTitle={'Trending'} items={ trending }/>
    </>
  );
}