import React from 'react';

// This component handles the search input and button
const SearchBox = ({ city, setCity, handleSearch, searchResult }) => {
    return (
        <section className="search-section">
            <h2>Search Weather by City</h2>
            <div className="search-controls">
                <input
                    type="text"
                    id="city-input"
                    placeholder="Enter city name (e.g., Delhi)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Update state on change
                    onKeyPress={(e) => { // Optional: Search by pressing Enter key
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button id="search-button" onClick={handleSearch}>
                    Search 
                </button>
            </div>
            
            {/* Display Search Results */}
            <div id="search-results-container">
                {searchResult.loading && <p>Loading weather data...</p>}
                {searchResult.error && <p className="error-message">{searchResult.error}</p>}
                
                {searchResult.data && (
                    <div className="weather-card">
                        <h3>Current Weather in {searchResult.data.name}</h3>
                        <p><strong>Temperature:</strong> {searchResult.data.temp}°C</p>
                        <p><strong>Condition:</strong> {searchResult.data.condition}</p>
                        <p><strong>Humidity:</strong> {searchResult.data.humidity}%</p>
                        <p><strong>Wind Speed:</strong> {searchResult.data.wind} m/s</p>
                    </div>
                )}

                {/* Initial state message */}
                {!searchResult.loading && !searchResult.error && !searchResult.data && (
                    <p className="initial-message">Enter a city name and click 'Search' to see the current forecast.</p>
                )}
            </div>
        </section>
    );
};

export default SearchBox;