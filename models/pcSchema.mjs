import mongoose from 'mongoose';

const pcSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
    },
    SessionDate: {
        type: Date,
        required: true,
    },
    Notes: {
        type: String,
        required: true,
    },
});

export default mongoose.model('PC Notes', pcSchema)