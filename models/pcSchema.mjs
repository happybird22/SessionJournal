import mongoose from 'mongoose';

const pcSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
    },
    SessionDate: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
    Notes: {
        type: String,
        required: true,
    },
});

export default mongoose.model('PCNotes', pcSchema)