import React from 'react';
import './styles.css';

const BookInfo = ({ info }) =>(
    <div className="BookInfo">
        <h2>{info.title}</h2>
        <p><span>Autor: </span>{info.authors ? info.authors.join(", ") : "Desconhecido" }</p>
        <p><span>Publicado: </span>{info.publishedDate ? info.publishedDate.split("-").reverse().join("-") : "Desconhecido" }</p>
    </div>
);

export default BookInfo;