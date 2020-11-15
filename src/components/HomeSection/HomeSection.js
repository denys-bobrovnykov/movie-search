import React from 'react';

import './HomeSection.scss';
import { Card } from '../Card/Card';
import { Urls } from '../../util/Tmdb';

const baseUrl = Urls.backdrop; 

export const HomeSection = (props) => {

    return (
        <section className="popular-section">
            <h2>{props.sectionTitle}</h2>
            <div className="scroller">
                {props.items.map(
                    item => <Card key={item.id} 
                                        itemId = {item.id} 
                                        title={item.name || item.title} 
                                        image={baseUrl + item.poster_path}
                                        info={item.overview}
                                        rating={item.vote_average}
                                        category={props.category || item.media_type}
                                        />
                )}
                <div className="scroller-spacer"></div>
            </div>
        </section>
    );
}

