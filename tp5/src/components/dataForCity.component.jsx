import React from 'react';
import "../assets/style/dataForCity.style.css";
import "../assets/style/dataCell.style.css";
const DataForCity = ({ cityData }) => {
  return (
    <div className="dataForCity">
      <div className="meteoData">
          <div className="dataCell"></div>
        <div className="dataCell">Temp minimale</div>
        <div className="dataCell">Temp maximale</div>
        <div className="dataCell">Pluviométrie</div>
        <div className="dataCell">Ensoleillement</div>
        <div className="dataCell">Jours de gel</div>
      </div>
      {cityData.data.map((monthData, index) => (
        <div key={index} className="meteoData">
          <div className="dataCell">{monthData.pour}</div>
          <div className="dataCell temperature">{monthData.temp_min}</div>
          <div className="dataCell temperature">{monthData.temp_max}</div>
          <div className="dataCell mm">{monthData.pluviometrie}</div>
          <div className="dataCell h">{monthData.ensoleillement}</div>
          <div className="dataCell jour">{monthData.jours_gel}</div>
        </div>
      ))}
    </div>
  );
};

export default DataForCity;
