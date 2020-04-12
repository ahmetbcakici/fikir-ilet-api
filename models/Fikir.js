import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FikirSchema = new Schema({
    gonderenIsim: String,
    emailAdres: String,
    fikirTuru: String,
    fikir: String,
})

export default mongoose.model('fikir', FikirSchema);