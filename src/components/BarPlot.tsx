import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Tue", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverbackgroundColor: "5f9ea0",
      data: [50, 30, 70, 40, 20, 15, 20],
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarPlot;
