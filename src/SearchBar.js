import React from 'react';
import './style.css';

const SearchBar = () => (
    <div className="searchBox">
        <input type='search' name="search" placeholder="Buscá por nombre y/o autor" />
        <span className="fas fa-search"></span>
    </div>
)

export default SearchBar;