import React from "react";
import { RadialGauge } from "react-canvas-gauges";

const MeterChart = () => {
  const options = {
    value: 70,
    width: 300,
    height: 300,
    minValue: 0,
    maxValue: 100,
    majorTicks: [
      "0",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "100",
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
      { from: 0, to: 30, color: "rgba(200, 50, 50, .75)" },
      { from: 30, to: 70, color: "rgba(255, 255, 50, .75)" },
      { from: 70, to: 100, color: "rgba(50, 200, 50, .75)" },
    ],
    highlightsWidth: 15,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
  };

  return (
    <RadialGauge options={options} />
  );
};

export default MeterChart;
