import React, { useState } from 'react';
import stockImage1 from '../../../public/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg';
import stockImage2 from '../../../public/images/casey-lee-awj7sRviVXo-unsplash.jpg';
import stockImage3 from '../../../public/images/chad-montano-MqT0asuoIcU-unsplash.jpg';
import stockImage4 from '../../../public/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg';
import SearchBar from '../UI/SearchBar';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to update search results
  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <section id="home">
      {/* Add stock images */}
      <div className="image-container">
      <img id="stockImage" src={stockImage1} alt="Stock Image 1"
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
      <img id="stockImage" src={stockImage2} alt="Stock Image 2"
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
      <img id="stockImage" src={stockImage3} alt="Stock Image 3"
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
      <img id="stockImage" src={stockImage4} alt="Stock Image 4"
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
    </div>
    <SearchBar updateSearchResults={updateSearchResults} />

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div id="searchResults">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    <div id="homeDiv">
      <h2>SEARCH FOR YOUR RECIPE</h2>
      <h2>EXPLORE THE POSSIBILITIES!</h2>
      {/* Add main page content here */}
      </div>
    </section>
  );
};

export default Home;
