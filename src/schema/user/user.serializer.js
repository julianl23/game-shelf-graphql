const userSerializer = user => {
  if (!user) {
    return null;
  }

  const { created_at, updated_at, first_name, last_name, ...rest } = user;

  return {
    firstName: first_name,
    lastName: last_name,
    createdAt: created_at,
    updatedAt: updated_at,
    ...rest
  };
};

export default userSerializer;
