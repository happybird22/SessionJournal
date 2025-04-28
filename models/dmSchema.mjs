import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    campaignName: {
        type: String,
        required: true,
        index: true
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

dmSchema.index({ sessionDate: 1 });

export default mongoose.model('DMNotes', dmSchema)