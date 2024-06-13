import pool from '../databases/config.js';

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    console.log(user);
  } catch (error) {
    res.json(error.message);
  }
};

export { createUser };
