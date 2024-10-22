import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  // 반드시 uri라는 이름으로 가져와야 함!
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
          id
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
