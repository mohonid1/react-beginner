import fetch from 'node-fetch'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:8090/v1/graphql',
  fetch: fetch
})

export default client
