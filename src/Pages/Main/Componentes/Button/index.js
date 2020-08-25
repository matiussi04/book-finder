import React from 'react';
import './styles.css';

const Button = ({ children, onClick, type = "button" }) => (
    <button type={type} className="Button" onClick={onClick}>{ children }</button>
);

export default Button;