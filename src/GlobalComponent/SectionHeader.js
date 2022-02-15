import React from 'react';


const SectionHeader = (props) => {

    const handleClick = () => {
        console.log('I m being clicked');
        props.onClickSection(props.index);

    }

    return (<h3 onClick={handleClick} className="section">{props.text}</h3>)
};


export default SectionHeader;