"use client";
import { useRef, useEffect, useState } from "react";
import type { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const initialLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const initialData = [
  1902, 893, 1293, 723, 2341, 2113, 236, 578, 912, 2934, 345, 782,
];

function createGradient(ctx: CanvasRenderingContext2D) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 250);

  gradient.addColorStop(0, "rgba(0, 97, 215, 0.8)");
  gradient.addColorStop(0.5, "rgba(0, 150, 230, 0.4)");
  gradient.addColorStop(1, "rgba(0, 200, 255, 0.1)");

  return gradient;
}

export function AreaChart() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: initialLabels,
    datasets: [
      {
        data: initialData,
        borderColor: "#3182ce",
        backgroundColor: "", // Inicialize o backgroundColor como uma string vazia
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart && chart.ctx) {
      // Apenas crie o gradiente quando o contexto estiver disponível
      const gradientBackground = createGradient(chart.ctx);
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: gradientBackground,
        })),
      }));
    }
  }, []);

  const addDataPoint = () => {
    setChartData((prevData) => {
      const newData = Math.floor(Math.random() * 3000); // Novo valor aleatório para exemplo
      const newLabel = (prevData.labels?.length || 0) + 1;

      return {
        ...prevData,
        labels: [...(prevData.labels || []), newLabel],
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: [...dataset.data, newData],
        })),
      };
    });
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 1.5,
      },
      point: { radius: 0 },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value: any) => value,
        },
      },
    },
  };

  return (
    <div>
      <button
        onClick={addDataPoint}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Adicionar Ponto de Dados
      </button>
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </div>
  );
}
