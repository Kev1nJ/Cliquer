import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = 'da0e3f6fec6c40439fe09712588d4690';

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&number=15&query=${query}`);
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
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default Search;
