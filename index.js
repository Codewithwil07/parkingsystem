import express from 'express';
import { createUser } from './controllers/userController.js';
const app = express();

const port = 5000;

app.use(express.json())
app.use('/api/user', createUser);

app.listen(port, () => {
  console.log(`Server berhasil berjalan di port ${port}`);
});
