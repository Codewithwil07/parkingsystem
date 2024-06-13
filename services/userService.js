import { createUser as createUserModel } from '../models/userModel.js';

const createUser = async (user) => {
  try {
    const userId = await createUserModel(user);
    return { userId, message: 'Berhasil membuat user' };
  } catch (error) {
    throw error;
  }
};

export { createUser };
