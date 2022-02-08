import React from 'react';
import Title from '../../../GlobalComponent/Title';
import Description from '../../../GlobalComponent/Description';

function FilmItem(props) {
    return (
        <div className="film-item" style={{ height: 300 }}>
           <img src={props.image} />
           <Title text = {props.movieName} />  
           <Description text = {props.description} />

        </div>
    );
}

export default FilmItem;