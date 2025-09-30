# Weather Dashboard Application (React)

This document serves as a brief but detailed overview of the real-time weather application, built in React to fulfill the assignment requirements. The finalized design utilizes a clean, card-based display for a modern user experience, consciously avoiding tabular formats.

## Project Summary & Features

The application is divided into two distinct, high-performance sections:

### 1. Predefined City Display (City Cards)
* *Cities:* Displays current weather for *Delhi, Mumbai, Bangalore, and Chennai*.
* *Presentation:* Data is shown using individual, responsive *City Cards*—a design choice made to improve mobile responsiveness and visual clarity.
* *Data Points:* Cards clearly show *Temperature ($\text{°C}$), Condition, Humidity ($\%$),* and *Wind Speed ($\text{m/s}$)*.
* *Initialization:* Data fetching for these four cities is triggered once when the component mounts using the useEffect hook.

### 2. Global City Search
* *Search Mechanism:* Users can query any city name via a controlled input field.
* *Result Handling:* Successful searches display the forecast in a dedicated *Weather Card* below the input area.
* *Error Handling:* Implements robust error handling to catch API failures (e.g., 404 "City not found") and network issues, displaying clear messages to the user.

---

## Technical Implementation Details

### A. Core Technologies

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| *Framework* | *React* | Component-based UI structure (App, CityCards, SearchBox). |
| *Data Fetching* | *Async JavaScript* | Uses the *fetch API with async/await* for efficient and readable handling of network requests. |
| *Styling* | *Custom CSS* | Ensures a professional look and implements a *CSS Grid* for the responsive, multi-column City Card layout. |

### B. React Hooks Usage

| Hook | Purpose |
| :--- | :--- |
| *useState* | Manages dynamic data (city input, search results, loading state) across the application. |
| *useEffect* | *Initial Fetch:* Executes the primary data loading for the four predefined cities only on application startup. |
| *useMemo* | *Performance/Stability:* Used to memoize the predefinedCities array, ensuring it remains stable and preventing potential React dependency warnings/infinite loops. |

---

## API & Setup

### API Service Used
* *Provider:* *OpenWeatherMap* (Current Weather Data endpoint).
* *Units:* All data is fetched in the *Metric system* by using the units=metric URL parameter.

### API Key
The application utilizes the following activated key, stored as a constant in src/App.js:
9d188553f1d2953e7d5cfd44444aad8d

### Setup Instructions

1.  *Install dependencies:*
    bash
    npm install 
    
2.  *Run the application:*
    bash
    npm start
    
    The app will launch at http://localhost:3000.
