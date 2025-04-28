import mongoose from 'mongoose';

const itemsSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemType: {
        type: String,
        required: true,
        index: true,
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
        index: true
    },
    itemNotes: {
        type: String,
    }
});

export default mongoose.model('Inventory', itemsSchema)