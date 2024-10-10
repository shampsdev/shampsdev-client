import { HomePage } from "@/pages/home.page";
import { useLoadingStatus } from "./hooks/useLoadingStatus";
import Preloader from "./components/preloader";
import { LoadingStates } from "./types/loading-states.enum";

function App() {
  const { loadingStatus } = useLoadingStatus();

  return (
    <>
      {loadingStatus === LoadingStates.LOADING ? <Preloader /> : <HomePage />}
    </>
  );
}

export default App;
