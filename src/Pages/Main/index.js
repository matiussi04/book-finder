import React, { Component } from 'react';
import { api,key } from '../../server/api';
import './styles.css';
import Book from './Componentes/Book';

 export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            page: 0,
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        const {value, page} = this.state;
        try {
            const response = await api.get(`/volumes?q=${value}&printType=books&startIndex=${page * 40}&maxResults=40&:keyes&key=${key}`);
            this.setState({books: response.data.items});
        } catch (error) {
            console.warn(error)
        }

        console.log(this.state.books)
    }

    render(){
        return (
            <div className="Main">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" id="search" autoComplete="off" onChange={this.handleChange} placeholder="Informe o nome do livro" />
                    <button type="submit" id="button" >Pesquisar</button>
                </form>
                <div className="Books">
                    {this.state.books.map(({ volumeInfo, id }) => (
                        <Book key={id}>
                            <h2>{ volumeInfo.title }</h2>
                            <div className="Book-img">
                                <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ""} alt={volumeInfo.title}></img>
                            </div>
                            <div className="Book-info">
                                <p><span>Autor:</span> {volumeInfo.authors === undefined ? "Desconhecido" : volumeInfo.authors.join(", ")}</p>
                                <p><span>Publicado:</span> {volumeInfo.publishedDate === undefined ? "Desconhecido" : volumeInfo.publishedDate.split("-").reverse().join("-")}</p>
                            </div>
                        </Book>
                    ))}                    
                </div>
            </div>
        );
    }
}