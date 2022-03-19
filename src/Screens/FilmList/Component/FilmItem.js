import React from 'react';
import Title from '../../../GlobalComponent/Title';
import Description from '../../../GlobalComponent/Description';

function FilmItem(props) {
    return (
        <div className="film-item">
           <img src={props.image} alt={props.movieName}/>
           <Title text = {props.movieName} />  
           <Description text = {props.description} />

        </div>
    );
}

export default FilmItem;