import React from 'react';
import './TopContent.css'
export const TopContent = ({ title, paragraph }) => {
    return (
        <>
            <h2 className='top__title'> {title}</h2>
            <p className='top__paragraph'> {paragraph}</p>
        </>
    );
};

TopContent.defaultProps = {
    title: 'Lorem Ipsum is simply dummy text of the printing and.',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
};

export default TopContent;