import BarChart from "./BarChart";

function YearlyLaunchChart({ rockets }) {
  const yearStats = rockets.reduce((accumulator, rocket) => {
    const launchYear = rocket.launch_year;
    const launchSuccess = rocket.launch_success;

    if (!accumulator[launchYear]) {
      accumulator[launchYear] = { success: 0, failure: 0 };
    }

    if (launchSuccess) {
      accumulator[launchYear].success++;
    } else {
      accumulator[launchYear].failure++;
    }

    return accumulator;
  }, {});

  const chartData = {
    labels: Object.keys(yearStats),
    datasets: [
      {
        label: "Success",
        backgroundColor: "lightblue",
        data: Object.values(yearStats).map((stats) => stats.success),
      },
      {
        label: "Failure",
        backgroundColor: "red",
        data: Object.values(yearStats).map((stats) => stats.failure),
      },
    ],
  };
  return (
    <div className="chart-container">
      <h1>Year wise success/failure rate :</h1>
      <BarChart chartData={chartData} />
    </div>
  );
}

export default YearlyLaunchChart;
