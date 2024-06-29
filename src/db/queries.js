const addUserQueries =
  'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';

const editUser =
  'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';

export { addUserQueries, editUser };
