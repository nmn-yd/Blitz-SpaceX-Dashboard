import { Pie } from "react-chartjs-2";

const RocketSuccessFailureChart = ({ rockets }) => {
  const successCount = rockets.filter((rocket) => rocket.launch_success).length;
  const failureCount = rockets.length - successCount;

  const chartData = {
    labels: ["Success", "Failure"],
    datasets: [
      {
        data: [successCount, failureCount],
        backgroundColor: ["rgb(42, 39, 110)", "rgb(255, 196, 135)"],
      },
    ],
  };
  return (
    <div className="chart-container pie-chart">
      <h1>Rocket Launch Success/Failure Chart : </h1>
      <Pie data={chartData} />
    </div>
  );
};

export default RocketSuccessFailureChart;
