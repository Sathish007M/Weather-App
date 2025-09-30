import React from 'react';

// This component will display the table of the four fixed cities
const CityTable = ({ weatherData }) => {
    // Check if data is available (initially it will be null or empty)
    if (!weatherData || weatherData.length === 0 || weatherData.some(city => !city.name)) {
        return (
            <section className="city-table-section">
                <h2>Current Weather in Key Cities</h2>
                <div className="loading-message">
                    {/* Display a message based on the issue */}
                    {weatherData.length === 0 
                        ? "Loading weather data..." 
                        : "Waiting for API Key activation (401 Unauthorized error detected). Please wait a few hours and refresh."
                    }
                </div>
            </section>
        );
    }

    return (
        <section className="city-table-section">
            <h2>Current Weather in Key Cities</h2>
            <div className="table-scroll-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (°C)</th>
                            <th>Condition</th>
                            <th>Humidity (%)</th>
                            <th>Wind (m/s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.map((city, index) => (
                            <tr key={index}>
                                <td>{city.name}</td>
                                <td>{city.temp ? `${city.temp}°C` : 'N/A'}</td>
                                <td className="condition-cell">{city.condition || 'N/A'}</td>
                                <td>{city.humidity ? `${city.humidity}%` : 'N/A'}</td>
                                <td>{city.wind ? `${city.wind} m/s` : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CityTable;