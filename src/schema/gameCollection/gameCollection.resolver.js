// lol i dunno what is this

// import mongoose from 'mongoose';
// import GameCollection from '../../app/game_collection/model';

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
//         }).populate('gameCollection');r

//         return currentUser;
//       } else {
//         return null;
//       }
//     }
//   }
// };
