import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PageNav from "./Components/PageNav";
import { Suspense, lazy, useEffect, useState } from "react";
import Spinner from "./Components/Spinner";
const Analytics = lazy(() => import("./Pages/Analytics"));

function App() {
  const [rockets, setRockets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch("https://api.spacexdata.com/v3/launches", {
          signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route
          path="/"
          element={<LandingPage rockets={rockets} isLoading={isLoading} />}
        />

        <Route
          path="/analytics"
          element={
            <Suspense fallback={<Spinner />}>
              <Analytics rockets={rockets} isLoading={isLoading} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
