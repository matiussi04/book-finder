import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Book = ({ children }) =>(
    <article className="Book">
        { children }
        <Link>Mais Informações</Link>
    </article>
);

export default Book;