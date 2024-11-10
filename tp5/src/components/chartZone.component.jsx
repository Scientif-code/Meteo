import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../assets/style/chartZone.style.css";

const LABELS = [
  "Janvier",
  "Fev",
  "Mar",
  "Avr",
  "Mai",
  "Jun",
  "Jul",
  "Aou",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ChartZone = ({ selectedtoput, favoritetoput }) => {
  const [chartData, setChartData] = useState(null);
  const [dataType, setDataType] = useState("temp_min");

  useEffect(() => {
    const updateChartData = () => {
      setChartData(buildData());
    };

    updateChartData();
  }, [selectedtoput, favoritetoput, dataType]);

  const buildData = () => {
    return {
      labels: LABELS,
      datasets: [
        {
          label: selectedtoput.city,
          data: selectedtoput.data.map((monthData) => monthData[dataType]),
          backgroundColor: "rgb(255,128,128)",
          borderColor: "rgba(0, 0, 0, 0.5)",
          borderWidth: 1,
        },
        {
          label: favoritetoput.city,
          data: favoritetoput.data.map((monthData) => monthData[dataType]),
          backgroundColor: "gold",
          borderColor: "rgba(0, 0, 0, 0.5)",
          borderWidth: 1,
        },
      ],
    };
  };

  const [isHidden, setIsHidden] = useState(false);
  const [chartTitle, setChartTitle] = useState("Température minimale (°C)");

  const toggleChart = () => {
    setIsHidden(!isHidden);
  };

  const changeDataType = (newType) => {
    setDataType(newType);
    switch (newType) {
      case "temp_min":
        setChartTitle("Température minimale (°C)");
        break;
      case "temp_max":
        setChartTitle("Température maximale (°C)");
        break;
      case "pluviometrie":
        setChartTitle("Pluviométrie (mm)");
        break;
      case "ensoleillement":
        setChartTitle("Ensoleillement (jours)");
        break;
      case "jours_gel":
        setChartTitle("Jours de gel (jours)");
        break;
      default:
        setChartTitle("");
    }
  };

  const calculateMin = () => {
    let hasNegativeValue = false;
    selectedtoput.data.forEach((monthData) => {
      if (monthData[dataType] < 0) {
        hasNegativeValue = true;
      }
    });
    favoritetoput.data.forEach((monthData) => {
      if (monthData[dataType] < 0) {
        hasNegativeValue = true;
      }
    });
    return hasNegativeValue ? -5 : 0;
  };

  const calculateMax = () => {
    let maxValue = 0;
    selectedtoput.data.forEach((monthData) => {
      if (monthData[dataType] > maxValue) {
        maxValue = monthData[dataType];
      }
    });
    favoritetoput.data.forEach((monthData) => {
      if (monthData[dataType] > maxValue) {
        maxValue = monthData[dataType];
      }
    });
    return Math.floor(maxValue + 5);
  };



  return (
    <div>
      <button onClick={toggleChart}>{isHidden ? "Afficher" : "Cacher"}</button>
      {!isHidden && (
        <div className="chartZone">
          <div className="buttons">
            <button onClick={() => changeDataType("temp_min")}>
              Température minimale (°C)
            </button>
            <button onClick={() => changeDataType("temp_max")}>
              Température maximale (°C)
            </button>
            <button onClick={() => changeDataType("pluviometrie")}>
              Pluviométrie (mm)
            </button>
            <button onClick={() => changeDataType("ensoleillement")}>
              Ensoleillement (jours)
            </button>
            <button onClick={() => changeDataType("jours_gel")}>
              Jours de gel (jours)
            </button>
          </div>
          {chartData && (
            <Bar
              data={chartData}
              options={{
                scales: {
                  y: {
                    min: calculateMin(),
                    max: calculateMax(),
                  },
                },
                animation: {
                  duration: 500,
                  easing: "easeIn",
                },
                plugins: {
                  title: {
                    display: true,
                    text: chartTitle,
                  },
                },
                legend: {
                  labels: {
                    fontSize: 20,
                  },
                },
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ChartZone;
