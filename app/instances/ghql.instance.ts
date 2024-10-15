import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const wsLink = new WebSocketLink(
  new SubscriptionClient(
    process.env.BACKEND_URL ?? 'wss://api.shamps.dev/graphql',
    {
      reconnect: true,
    }
  )
);

export const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});
