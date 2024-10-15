'use client';

import { HomePage } from '@/pages/home.page';
import { useLoadingStatus } from '@/hooks/useLoadingStatus';
import Preloader from '@/components/preloader';
import { LoadingStates } from './types/loading-states.enum';
import { ApolloProvider } from '@apollo/client';
import { client } from './instances/ghql.instance';

function App() {
  const { loadingStatus } = useLoadingStatus();

  return (
    <ApolloProvider client={client}>
      {loadingStatus === LoadingStates.LOADING ? <Preloader /> : <HomePage />}
    </ApolloProvider>
  );
}

export default App;
