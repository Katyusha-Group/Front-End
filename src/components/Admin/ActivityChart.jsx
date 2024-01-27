import React from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useActivity } from "../../hooks/Admin/useActivity";
import Spinner from "react-bootstrap/Spinner";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: {
            size: 8,
            weight: 400,
          },
          color: "rgb(255,255,255)",
        },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: {
          font: {
            size: 10,
            weight: 400,
          },
          color: "rgb(255,255,255)",
        },
        border: { display: false },
      },
    },
    plugins: {
      datalabels: {
        display: false,
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          weight: "bold",
          size: 16,
        },
        color: "rgb(255,255,255)",
      },
      legend: {
        position: "bottom",
        align: "center",
        //   maxHeight: 20,
        labels: {
          boxHeight: 2,
          boxWidth: 15,
          font: {
            size: 10,
            weight: 500,
          },
          color: "rgb(255,255,255)",
        },
      },
  
      title: {
        display: true,
        text: "Activity",
        align: "center",
        font: {
          size: 10,
          weight: 500,
        },
        color: "rgb(255,255,255)",
      },
    },
  };

  
  export default function ActivityChart() {
    const dataOfChart = useActivity();
    console.log("🚀 ~ ActivityChart ~ dataOfChart:", dataOfChart)
    if (dataOfChart.loading) {
      return (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }
    const chartData = {
      labels: Object.keys(dataOfChart),
      datasets: [
        {
          label: "Activity",
          data: Object.values(dataOfChart.data),
          borderColor: "#775eba",
          backgroundColor: "#775eba",
          lineTension: 0.5,
        },
      ],
    };
  return (
     <Line options={options} data={chartData} style={{ padding: "1%" }} />
  )
}
