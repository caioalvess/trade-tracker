"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export function Chart() {
  const trades = [
    { tradeNumber: 1, amount: 1000 },
    { tradeNumber: 2, amount: 1100 },
    { tradeNumber: 3, amount: 950 },
    { tradeNumber: 4, amount: 1200 },
    { tradeNumber: 5, amount: 1150 },
    { tradeNumber: 6, amount: 1300 },
  ];

  const amounts = trades.map((trade) => trade.amount);
  const tradeNumbers = trades.map((trade) => trade.tradeNumber);

  const data = {
    labels: tradeNumbers,
    datasets: [
      {
        label: "Valor do Trade",
        data: amounts,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: "start",
        tension: 0.3,
        borderWidth: 2,
        pointBackgroundColor: "rgb(53, 162, 235)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: Math.min(...amounts),
        max: Math.max(...amounts),
        ticks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: function (value: any) {
            if (amounts.includes(Number(value))) {
              return value;
            }
            return "";
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line options={options} data={data} />
    </div>
  );
}
