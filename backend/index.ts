import 'reflect-metadata';

import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { Userresolver } from './src/resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [Userresolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();
