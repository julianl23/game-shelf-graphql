import { ApolloServer } from 'apollo-server';

// Load a file to handle .env imports. See src/.env.js for more info
import './env';
import { typeDefs, resolvers } from './schema';

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server
  .listen({
    host,
    port
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
