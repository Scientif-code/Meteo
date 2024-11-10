import React, { useState, useEffect } from 'react';
import Choice from './Choice.component.jsx';
import meteoDataByCity from '../data/meteo-data.js';
import ChartZone from './chartZone.component.jsx';
import DataForCity from './dataForCity.component.jsx';
import DataComparison from './dataComparison.component.jsx';
import Favorite from './favorite.component.jsx';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(meteoDataByCity[0].city);
  const [cityData, setCityData] = useState(meteoDataByCity[0]);
  const [favoriteIndex, setFavoriteIndex] = useState(0);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    const selectedCityData = meteoDataByCity.find(data => data.city === city);
    setCityData(selectedCityData);
  };

  const handleFavoriteClick = (index) => {
    setFavoriteIndex(index);
  };

  return (
    <div>
      <Choice
        options={meteoDataByCity.map((data) => data.city)}
        onChange={handleCityChange}
      />
      <Favorite
        isSelected={favoriteIndex === meteoDataByCity.findIndex(data => data.city === selectedCity)}
        onClick={() => handleFavoriteClick(meteoDataByCity.findIndex(data => data.city === selectedCity))}
      />
      <p><strong>Data for {selectedCity}</strong></p>
      <DataForCity cityData={cityData} />
      <div style={{visibility: 'hidden' }}>.</div>
      <DataComparison
        favoriteCityData={meteoDataByCity[favoriteIndex]}
        selectedCityData={cityData}
      />

      <ChartZone
          selectedtoput={cityData}
          favoritetoput={meteoDataByCity[favoriteIndex]}
      />


    </div>
  );
};

export default App;
