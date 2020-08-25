import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import BookInfo from './Componentes/BookInfo';
import BookImage from './Componentes/BookImage';

const Book = ({ Book }) =>(
    <article className="Book">
        <div className="Book-content">
            <BookImage image={Book} />
            <BookInfo info={Book} />
        </div>
        <Link to={"/"}>Mais Informações</Link>
    </article>
);

export default Book;