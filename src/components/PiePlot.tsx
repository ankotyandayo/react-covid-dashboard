import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      data: [90, 7, 3],
      backgroundColor: ["#1e90ff", "#ff0000", "#ffff00"],
      hoverBackgroundColor: ["#f0f8ff", "#ffc0cb", "#fffacd"],
      borderColor: ["transparent", "transparent", "transparent"],
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PiePlot;
