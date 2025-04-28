import mongoose from 'mongoose';

const itemsSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemType: {
        type: String,
        required: true,
        enum: [
            'weapon',
            'scroll',
            'potion',
            'armor',
            'tool',
            'instrument',
            'trinket',
            'book',
            'misc'
        ]
    },
    magic: {
        type: Boolean,
        required: true,
    },
    itemNotes: {
        type: String,
    },
    timestamp: true,
});

export default mongoose.model('Inventory', itemsSchema)