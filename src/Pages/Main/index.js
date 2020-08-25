import React, { Component } from 'react';
import { api, key } from '../../server/api';
import './styles.css';
import Book from './Componentes/Book';
import Button from './Componentes/Button';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            page: 0,
            totalPages: 0,
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = async (event, page = 0) => {
        event.preventDefault()

        const { value } = this.state;
        try {
            const { data: { items, totalItems } } = await api.get(`/volumes?q=${value}&printType=books&startIndex=${page * 40}&maxResults=40&:keyes&key=${key}`);

            this.setState({ books: items, totalPages: Math.ceil(totalItems / 40), page });
            this.activeButtons();
            this.scrollTop();
        } catch (error) {
            console.warn(error)
        }

    }

    scrollTop = () => window.scroll(0, 0);

    activeButtons = () => document.querySelector(".buttons").classList.remove("no-active");

    pageNext = e => {
        const { page, totalPages } = this.state;
        if (page + 1 < totalPages) {
            this.handleSubmit(e, page + 1);
        }
    }

    pagePrev = e => {
        const { page } = this.state;
        
        if (page > 0) {
            this.handleSubmit(e, page - 1);
        }
    }

    render() {
        return (
            <div className="Main">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" id="search" autoComplete="off" onChange={this.handleChange} placeholder="Informe o nome do livro" />
                    <Button type="submit" >Pesquisar</Button>
                </form>
                <div className="Books">
                    {this.state.books.map(({ volumeInfo, id }) => <Book key={id} Book={volumeInfo} />)}
                </div>
                <div className="buttons no-active">
                    <Button onClick={this.pagePrev}>Previus</Button>
                    <Button onClick={this.pageNext}>Next</Button>
                </div>
            </div>
        );
    }
}