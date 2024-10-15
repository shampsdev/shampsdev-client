import { Stat } from '@/types/stat.interface';
import { gql, useSubscription } from '@apollo/client';

export interface StatSubscription {
  statCreated: Stat[];
}

const STAT_CREATED_SUBSCRIPTION = gql`
  subscription {
    statCreated {
      stat_id
      name
      count
      timestamp
    }
  }
`;

export const useStats = () => {
  const { data, loading } = useSubscription<StatSubscription>(
    STAT_CREATED_SUBSCRIPTION
  );

  return { data, loading };
};
