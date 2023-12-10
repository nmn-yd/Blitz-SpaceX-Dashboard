import BarChart from "./BarChart";

function RocketChart({ rockets }) {
  const rocketStats = rockets.reduce((accumulator, rocket) => {
    const rocketName = rocket.rocket.rocket_name;
    const launchSuccess = rocket.launch_success;

    if (!accumulator[rocketName]) {
      accumulator[rocketName] = { success: 0, failure: 0 };
    }

    if (launchSuccess) {
      accumulator[rocketName].success++;
    } else {
      accumulator[rocketName].failure++;
    }

    return accumulator;
  }, {});

  const chartData = {
    labels: Object.keys(rocketStats),
    datasets: [
      {
        label: "Success",
        backgroundColor: "lightblue",
        data: Object.values(rocketStats).map((stats) => stats.success),
      },
      {
        label: "Failure",
        backgroundColor: "red",
        data: Object.values(rocketStats).map((stats) => stats.failure),
      },
    ],
  };
  return (
    <div className="chart-container">
      <h1>Rocket wise success/failure rate :</h1>
      <BarChart chartData={chartData} />
    </div>
  );
}

export default RocketChart;
