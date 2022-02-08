import React from 'react';
import FilmItem from './Component/FilmItem';
import './style.css';

// const json = require("../../assets/FilmList.json")

// const json= require('../../asset/CourseList.json')

const FilmList = () => {

    // const sectionList = json.section;
    //inline json data :
    const sectionList = [
        {
            sectionName: "Thriller",
            filmList: [{

                "movieName": "The Dark Knight",
                "image": "https://source.unsplash.com/600x400/?knight",
                "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
            },
            {
                "movieName": "Inception",
                "image": "https://source.unsplash.com/600x400/?inception",
                "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
            },
            {

                "movieName": "Star Wars: Episode V - The Empire Strikes Back",
                "image": "https://source.unsplash.com/600x400/?starwars",
                "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."
            },
            {

                "movieName": "The Matrix",
                "image": "https://source.unsplash.com/600x400/?matrix",
                "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
            },
            {
                "movieName": "Spider-Man: No Way Home",
                "image": "https://source.unsplash.com/600x400/?spiderman",
                "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."

            }]
        },

        {
            sectionName: "Comedy",
            filmList: [{
                "movieName": "The Lion King",
                "image": "https://source.unsplash.com/600x400/?lion-king",
                "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."

            }, {
                "movieName": "Gladiator",
                "image": "https://source.unsplash.com/600x400/?gladiator",
                "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."

            }, {
                "movieName": "Avengers: Infinity War",
                "image": "https://source.unsplash.com/600x400/?avengers",
                "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."

            }, {

                "movieName": "WALL·E",
                "image": "https://source.unsplash.com/600x400/?cartoon",
                "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
            },
            {
                "movieName": "Joker",
                "image": "https://source.unsplash.com/600x400/?joker",
                "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."

            }]
        },

        {
            sectionName: "Sci-Fi",
            filmList: [{

                "movieName": "Star Wars: Episode I - The Phantom Menace",
                "image": "https://source.unsplash.com/600x400/?joker",
                "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."

            }, {
                "movieName": "Star Wars: Episode III - Revenge of the Sith",
                "image": "https://source.unsplash.com/600x400/?blackWidow",
                "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. This path brings him face-to-face with his alter-ego: the Joker."

            }, {

                "movieName": "Star Trek",
                "image": "https://source.unsplash.com/600x400/?Superhero",
                "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society."

            },

            {
                "movieName": "Star Trek: First Contact",
                "image": "https://source.unsplash.com/600x400/?Star",
                "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."
            },

            {
                "movieName": "Star Wars: Episode II - Attack of the Clones",
                "image": "https://source.unsplash.com/600x400/?Yoda",
                "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."

            }


            ]
        }];
    //       //the array of course-item for making courselist
    // }

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

// filmList.map(item => <Filmtem item {...item} 
