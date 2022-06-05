import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "React",
    "Vue",
    "Angular",
    "JavaScript",
    "typeScript",
    "Redux",
    "REST API",
  ],
  datasets: [
    {
      label: "Person A",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointborderColor: "#fff",
      data: [100, 50, 30, 90, 40, 20, 15],
    },
    {
      label: "Person B",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#ff1493",
      pointborderColor: "#fff",
      data: [10, 250, 30, 90, 20, 10, 15],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
