
import React from 'react';
import SectionHeader from '../../../GlobalComponent/SectionHeader';


const SectionList = ({ sectionList, onClickSection }) => {
    return (
    <div className='section-list responsive-section-list'>
        {sectionList.map((section, index) => <SectionHeader onClickSection={onClickSection}
         index={index} text={section.sectName} />)}
    </div>
    );
}

export default SectionList;