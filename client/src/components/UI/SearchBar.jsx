import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Recipe data:', data);

      // Handle the data, update state, or perform other actions here
    } catch (error) {
      console.error('Error fetching recipe data:', error.message);
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div>
      <input id="searchBar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="searchButton" onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
