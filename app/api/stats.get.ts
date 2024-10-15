import { client } from '@/instances/ghql.instance';
import { Stat } from '@/types/stat.interface';
import { gql } from '@apollo/client';

interface StatQuery {
  stats: Stat[];
}

const GET_INITIAL_STATS = gql`
  query {
    stats {
      stat_id
      name
      count
      timestamp
    }
  }
`;

export const getStats = async () => {
  try {
    const response = client.query<StatQuery>({
      query: GET_INITIAL_STATS,
    });

    return response;
  } catch (error) {
    console.error('Error fetching initial stats:', error);
  }
};