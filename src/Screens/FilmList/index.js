import FilmItem from './Component/FilmItem';
import './style.css';
import { getSectionList } from './utils';
import SectionList from './Component/SectionList';
import React, { useState, useRef } from 'react';
//import { sectionList } from '../../assets/FilmData';

const json = require("../../assets/FilmList.json")

const FilmList = () => {

    const filmListRef = useRef([]);

    const flatList = json.filmList;
    // console.log("this is json data", json);
    const sectionList = getSectionList(flatList);
    // console.log("this is section data", sectionList);
    // const [clickedSection, setClickedSection] = useState();

    const onClickSection = (sectionIndex) => {
    console.log("the clicked section index is", sectionIndex);
    filmListRef.current[sectionIndex].scrollIntoView();
    }


    return (
        <div className="film-list-container">

            <SectionList onClickSection={onClickSection} sectionList={sectionList} /> {
                sectionList.map((section, index) => (

                    <div ref={(ref) => {
                        filmListRef.current[index] = ref;
                    }}>

                    {/* <div className="section-container" id={section.sectName}> */}

                        <h3>{section.sectName}</h3>

                        <div className="film-item-container">
                            {section.filmData.map((item, index) =>
                                <FilmItem {...item} />)}
                        </div>
                        </div>
                    ) )
            }
            
        </div>
    )
}

export default FilmList;

