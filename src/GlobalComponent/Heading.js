import React from 'react';
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import './style.css';
import Header from './Header';

function Heading(props) {

    return (

            <header className="home-header">
                <div className="logo" onClick={() => scroll.scrollToTop()}>

                    {/* <Header/> */}
                </div>

                <ul className="links">
                    <li>
                        <Link to="Thriller" smooth={true} duration={1000}>
                            Thriller
                        </Link>
                    </li>
                    <li>
                        <Link to="Comedy" smooth={true} duration={1000}>
                            Comedy
                        </Link>
                    </li>
                    <li>
                        <Link to="Sci-Fi" smooth={true} duration={1000}>
                            Sci-Fi
                        </Link>
                    </li>
                </ul>
            </header>

        
    );

}

export default Heading;



