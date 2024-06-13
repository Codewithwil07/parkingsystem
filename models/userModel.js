import pool from '../config/config.js';
import bcrypt from 'bcrypt';

const createUser = async (user) => {
  let { username, email, password } = user;
  let hashPassword = bcrypt.hashSync(password, 10);
  try {
    const { rows } = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3  ) RETURNING id',
      [username, email, hashPassword]
    );
    return rows[0].id;
  } catch (error) {
    throw error;
  }
};

export { createUser };
