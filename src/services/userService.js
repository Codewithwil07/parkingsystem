import pool from '../db/config.js';
import { addUserQueries } from '../db/queries.js';
import bcrypt from 'bcrypt';

const addUserService = (username, email, password_hash) => {
  try {
    const salt = 10;
    let password = bcrypt.hashSync(password_hash, salt);
    const user = pool.query(addUserQueries, [username, email, password]);
    return user;
  } catch (error) {
    throw error;
  }
};

export { addUserService };
