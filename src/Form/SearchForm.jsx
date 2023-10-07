import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    let history = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        history('/playsite/news/:search')
    };
    return (
        <div>
        <form onSubmit={handleSearch}>
        <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
            />   
        </form>
        </div>
    );
};

export default SearchForm;
