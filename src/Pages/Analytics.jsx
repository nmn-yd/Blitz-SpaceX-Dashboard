import RocketChart from "../Components/Charts/RocketChart";
import RocketLaunchCountChart from "../Components/Charts/RocketLaunchCountChart";
import RocketSuccessFailureChart from "../Components/Charts/RocketSuccessFailureChart";
import YearlyLaunchChart from "../Components/Charts/YearlyLaunchChart";
import Spinner from "../Components/Spinner";

function Analytics({ rockets, isLoading }) {
  return (
    <div className="charts-wrapper">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bar-charts">
          <RocketChart rockets={rockets} />
          <YearlyLaunchChart rockets={rockets} />
          <RocketLaunchCountChart rockets={rockets} />
          <RocketSuccessFailureChart rockets={rockets} />
        </div>
      )}
    </div>
  );
}

export default Analytics;
