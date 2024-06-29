import pool from 'pg';
const { Pool } = pool;

const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'parkingsystem',
  password: 'postgres',
  port: 5432,
});

const connection = () => {
  try {
    client.connect();
    console.log('connection good👍');
  } catch (error) {
    console.error(error.message);
  }
};

connection();

export default client;
