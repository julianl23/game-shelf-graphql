import { UserInputError } from 'apollo-server';

import GameCollectionApi from '../../connectors/GameCollectionApi';
import userSerializer from './user.serializer';

export default {
  Query: {
    async user(root, args) {
      if (!args.id) {
        return null;
      }

      const { id } = args;
      const result = await GameCollectionApi.getUser(id);
      return userSerializer(result.data);
    },
    async currentUser(root, args, context) {
      const { token } = context;
      const result = await GameCollectionApi.getCurrentUser(token);
      return userSerializer(result.data);
    },
  },
  Mutation: {
    async Login(root, args, context, info) {
      const { email, password } = args;
      const result = await GameCollectionApi.login({
        email,
        password,
      });

      if (result.status !== 200) {
        throw new UserInputError(result.data);
      }

      const token = result.headers.authorization;

      return userSerializer({
        ...result.data,
        token,
      });
    },
  },
};
