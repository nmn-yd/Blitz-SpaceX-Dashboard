import BasicTable from "../Components/BasicTable";
import Spinner from "../Components/Spinner";

function LandingPage({ rockets, isLoading }) {
  return (
    <div className="wrapper">
      {isLoading ? <Spinner /> : <BasicTable rockets={rockets} />}
    </div>
  );
}

export default LandingPage;
