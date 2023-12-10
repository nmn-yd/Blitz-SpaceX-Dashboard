import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const destroyChart = () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };

    destroyChart();

    // Cleanup function
    return destroyChart;
  }, []);

  return <Bar ref={chartRef} data={chartData} />;
}

export default BarChart;
