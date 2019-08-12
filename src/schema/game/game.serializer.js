const gameSerializer = game => {
  if (!game) {
    return null;
  }

  const {
    multiplayer_modes,
    release_date,
    game_modes,
    game_developers,
    game_publishers,
    igdb_id,
    ...rest
  } = game;

  const transformedGameDevelopers = game_developers.map(
    developer => developer.company
  );

  const transformedGamePublishers = game_publishers.map(
    publisher => publisher.company
  );

  return {
    multiplayerModes: multiplayer_modes,
    releaseDate: release_date,
    gameModes: game_modes,
    developers: transformedGameDevelopers,
    publishers: transformedGamePublishers,
    igdbId: igdb_id,
    ...rest
  };
};

export default gameSerializer;
