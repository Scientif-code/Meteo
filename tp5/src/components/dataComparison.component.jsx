import React from 'react';
import "../assets/style/dataComparison.style.css";
import "../assets/style/dataCell.style.css";

const DataComparison = ({ favoriteCityData, selectedCityData }) => {
  const selectedCityTempMinAvg = selectedCityData.data.reduce((acc, monthData) => acc + monthData.temp_min, 0) / selectedCityData.data.length;
  const selectedCityTempMaxAvg = selectedCityData.data.reduce((acc, monthData) => acc + monthData.temp_max, 0) / selectedCityData.data.length;

  const favoriteCityTempMinAvg = favoriteCityData.data.reduce((acc, monthData) => acc + monthData.temp_min, 0) / favoriteCityData.data.length;
  const favoriteCityTempMaxAvg = favoriteCityData.data.reduce((acc, monthData) => acc + monthData.temp_max, 0) / favoriteCityData.data.length;

  const selectedCityTotalPluviometrie = selectedCityData.data.reduce((acc, monthData) => acc + monthData.pluviometrie, 0);
  const selectedCityTotalEnsoleillement = selectedCityData.data.reduce((acc, monthData) => acc + monthData.ensoleillement, 0);
  const selectedCityTotalJoursGel = selectedCityData.data.reduce((acc, monthData) => acc + monthData.jours_gel, 0);

  const favoriteCityTotalPluviometrie = favoriteCityData.data.reduce((acc, monthData) => acc + monthData.pluviometrie, 0);
  const favoriteCityTotalEnsoleillement = favoriteCityData.data.reduce((acc, monthData) => acc + monthData.ensoleillement, 0);
  const favoriteCityTotalJoursGel = favoriteCityData.data.reduce((acc, monthData) => acc + monthData.jours_gel, 0);

  return (
    <div className="dataComparison">
      <div className="meteoData">
        <div className="dataCell favorite"></div>
        <div className="dataCell">Temp minimale</div>
        <div className="dataCell">Temp maximale</div>
        <div className="dataCell">Pluviométrie</div>
        <div className="dataCell">Ensoleillement</div>
        <div className="dataCell">Jours de gel</div>
      </div>
      <div className="meteoData">
        <div className="dataCell selected">{selectedCityData.city}</div>
        <div className="dataCell temperature">{selectedCityTempMinAvg.toFixed(1)}</div>
        <div className="dataCell temperature">{selectedCityTempMaxAvg.toFixed(1)}</div>
        <div className="dataCell mm">{selectedCityTotalPluviometrie}</div>
        <div className="dataCell h">{selectedCityTotalEnsoleillement}</div>
        <div className="dataCell jour">{selectedCityTotalJoursGel.toFixed(1)}</div>
      </div>
      <div className="meteoData favorite ">
        <div className="dataCell">{favoriteCityData.city}</div>
        <div className="dataCell temperature">{favoriteCityTempMinAvg.toFixed(1)}</div>
        <div className="dataCell temperature">{favoriteCityTempMaxAvg.toFixed(1)}</div>
        <div className="dataCell mm">{favoriteCityTotalPluviometrie}</div>
        <div className="dataCell h">{favoriteCityTotalEnsoleillement}</div>
        <div className="dataCell jour">{favoriteCityTotalJoursGel.toFixed(1)}</div>
      </div>
    </div>
  );
}

export default DataComparison;
