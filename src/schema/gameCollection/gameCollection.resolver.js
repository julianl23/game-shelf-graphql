import GameCollectionApi from '../../connectors/GameCollectionApi';

export default {
  User: {
    async collection(root, args, context) {
      const collectionId = args.id || null;
      const { token } = context;

      // Eventually I need to be able to do things like filter by platform
      // i want to have something like an array of { platform_id: count }
      // Like:
      // [{ '50': 1001 }, { '2': 25 }];
      // Maybe that's what the count property should be

      try {
        const result = await GameCollectionApi.getGameCollection(
          collectionId,
          token
        );

        const collection = result.data;

        return {
          id: collection.id,
          owner: collection.user_id,
          items: collection.items
        };
      } catch (e) {
        return e;
      }
    }
  }
};
