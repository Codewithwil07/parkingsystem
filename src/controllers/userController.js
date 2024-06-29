import { addUserService } from '../services/userService.js';

const addUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const user = await addUserService(username, email, password);
    res.json(user).status(200);
  } catch (error) {
    console.error({ message: error.message });
  }
};

export { addUser };
