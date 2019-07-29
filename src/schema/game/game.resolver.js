// import mongoose from 'mongoose';
// import { ApolloError, AuthenticationError } from 'apollo-server';

// import Game from '../../app/game/model';
// import User from '../../app/user/model';
// import GameCollection from '../../app/game_collection/model';

// export default {
//   Query: {
//     async games(root, args, context) {
//       const { query, size = 20, from = 0 } = args;

//       const contextUser = context.user;
//       let results = await Game.search({ q: query, size, from });

//       if (contextUser) {
//         let currentUser = await User.findOne({
//           id: mongoose.Types.ObjectId(contextUser.id)
//         })
//           .populate('gameCollection')
//           .populate('items');

//         const collection = currentUser.gameCollection.items;
//         const collectionIds = collection.map(item => {
//           return item.game.id.toString();
//         });

//         results.forEach(resultItem => {
//           resultItem.inCollection = collectionIds.includes(resultItem.id);
//         });
//       }

//       return results;
//     },
//     async game(root, args) {
//       const { id } = args;
//       return await Game.findOne({ id: mongoose.Types.ObjectId(id) });
//     }
//   },
//   Mutation: {
//     AddGameToCollection: async function(root, args, context) {
//       const contextUser = context.user;
//       let currentUser;

//       if (contextUser) {
//         currentUser = await User.findOne({
//           id: mongoose.Types.ObjectId(contextUser.id)
//         });
//       } else {
//         return AuthenticationError('User not authenticated');
//       }

//       try {
//         return await GameCollection.addGame(
//           currentUser.gameCollection,
//           args.input
//         );
//       } catch (e) {
//         throw new ApolloError(e, 400);
//       }
//     }
//   }
// };

import GameCollectionApi from '../../connectors/GameCollectionApi';
import gameSerializer from './game.serializer';

export default {
  Query: {
    async games() {
      return {};
    },
    async game(root, args) {
      const { id } = args;
      const game = await GameCollectionApi.getGame(id);

      // TODO: ERROR HANDLE HERE

      return gameSerializer(game.data);
    }
  },
  Mutation: {
    AddGameToCollection: () => {
      return {};
    }
  }
};
