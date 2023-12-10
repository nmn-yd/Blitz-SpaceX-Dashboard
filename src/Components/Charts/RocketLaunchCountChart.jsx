import { Pie } from "react-chartjs-2";
function RocketLaunchCountChart({ rockets }) {
  const rocketTypesCount = rockets.reduce((count, rocket) => {
    const rocketType = rocket.rocket.rocket_name;
    count[rocketType] = (count[rocketType] || 0) + 1;
    return count;
  }, {});

  const chartData = {
    labels: Object.keys(rocketTypesCount),
    datasets: [
      {
        data: Object.values(rocketTypesCount),
        backgroundColor: ["red", "indigo", "#2e3d"],
      },
    ],
  };
  return (
    <div className="chart-container pie-chart">
      <h1>Each rocket launch count : </h1>
      <Pie data={chartData} />
    </div>
  );
}

export default RocketLaunchCountChart;
