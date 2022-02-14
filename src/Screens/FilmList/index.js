import React from 'react';
import FilmItem from './Component/FilmItem';
import './style.css';
import { getSectionList } from './utils';
//import { sectionList } from '../../assets/FilmData';
 const json = require("../../assets/FilmList.json")

const FilmList = () => {

    const flatList = json.filmList;
    console.log("this is json data", json);
    // console.log(sectionList);
    const sectionList = getSectionList (flatList);
    console.log("The sectioned data I got is: ", sectionList);

    return (
        <div className="film-list-container">
            {
                sectionList.map((section, index) => (
                    <div className="section-container" id={section.sectionName}>
                        
                        <h3>{section.sectionName}</h3>

                        <div className="film-item-container">
                            {section.filmList.map(item => <FilmItem {...item} />)}
                        </div>
                    </div>
                    //... used only in arrays with homogenous items
                )
                )
            }
        </div>
    );

}

export default FilmList;

