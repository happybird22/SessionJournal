import mongoose from 'mongoose';

const pcSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
        index: true
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

pcSchema.index({ sessionDate: 1 });

export default mongoose.model('PCNotes', pcSchema)