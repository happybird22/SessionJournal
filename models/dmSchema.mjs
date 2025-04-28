import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    campaignName: {
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

export default mongoose.model('DM Notes', dmSchema)