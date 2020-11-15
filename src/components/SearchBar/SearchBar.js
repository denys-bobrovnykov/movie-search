import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import './SearchBar.scss';


export const SearchBar = (props) => {
    const [inputVal, setInputVal] = useState('');

    const history = useHistory();

    const handleInput = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/results/${inputVal}`);
    };
    return (<div className="searchbar-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input onChange={handleInput} 
                                type="text" 
                                tabIndex="1" 
                                autoCorrect="off" 
                                autofill="off" 
                                autoComplete="off" 
                                spellCheck="false" 
                                placeholder="Search for a movie or tv show" 
                                value={ inputVal } />
                    </label>
                    <button>Search</button>
                </form>
            </div>
    );
}