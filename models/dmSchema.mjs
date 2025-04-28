import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    campaignName: {
        type: String,
        required: true,
    },
    sessionDate: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
    notes: {
        type: String,
        required: true,
    },
});

export default mongoose.model('DMNotes', dmSchema)