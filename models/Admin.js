import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: String,
  password: String,
});

export default mongoose.model('admin', AdminSchema);
