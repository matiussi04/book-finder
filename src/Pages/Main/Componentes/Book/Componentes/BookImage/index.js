import React from 'react';
import './styles.css';

const BookImage = ({ image }) => (
    <div className="BookImage">
        <img src={image.imageLinks ? image.imageLinks.thumbnail : ""} alt={image.title} />
    </div>
);

export default BookImage;