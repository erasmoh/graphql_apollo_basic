import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hola Erasmo",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await server.listen({ port: 9000 });

console.log(`Server running at ${url}`);
