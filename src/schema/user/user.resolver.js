// import mongoose from 'mongoose';

// import User from '../../app/user/model';
// import Platform from '../../app/platform/model';

// export default {
//   Query: {
//     async user(root, args) {
//       const { id } = args;
//       return await User.findOne({ id: mongoose.Types.ObjectId(id) }).populate(
//         'gameCollection'
//       );
//     },
//     async currentUser(root, args, context) {
//       const contextUser = context.user;

//       if (contextUser) {
//         const currentUser = await User.findOne({
//           id: mongoose.Types.ObjectId(contextUser.id)
//         })
//           .populate({
//             path: 'gameCollection',
//             populate: {
//               path: 'items.game'
//             }
//           })
//           .populate({
//             path: 'gameCollection',
//             populate: {
//               path: 'items.platform',
//               model: Platform.Model
//             }
//           });

//         // for (let gameCollectionItem of currentUser.gameCollection.items) {
//         //   try {
//         //     await gameCollectionItem.populate('game');
//         //     await gameCollectionItem.populate('game.developers');
//         //     await gameCollectionItem.populate('game.publishers');

//         //     console.log('it me, the game collection item', gameCollectionItem);
//         //   } catch (e) {
//         //     console.log(e);
//         //   }
//         // }

//         // for (let i = 0; i < currentUser.gameCollection.items.length; i++) {
//         //   await currentUser.populate(`gameCollection.items.${i}.game`);
//         //   await currentUser.populate(`gameCollection.items.${i}.developers`);
//         //   await currentUser.populate(`gameCollection.items.${i}.publishers`);
//         // }

//         return currentUser;
//       } else {
//         return null;
//       }
//     }
//   }
// };

export default {
  Query: {
    user() {
      return {};
    },
    currentUser() {
      return {};
    }
  }
};
