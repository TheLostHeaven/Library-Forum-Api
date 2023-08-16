import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Otros opciones para el usuario
});

const User = mongoose.model('user', userSchema);

export default User;
