import { getAuth, updatePassword, deleteUser, signOut } from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);

export const changePassword = (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};

export const logout = () => {
  return signOut(auth);
};

export const deleteAccount = () => {
  return deleteUser(auth.currentUser);
};