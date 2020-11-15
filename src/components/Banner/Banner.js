import React, { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

import './Banner.scss';


export const Banner = (props) => {

    const style = {
        backgroundImage: `url("${props.image}")`
    }

    return (
        <div className="wrapper" style={style}>
            <div className="banner">
                <SearchBar />
            </div>
        </div>
    )
}