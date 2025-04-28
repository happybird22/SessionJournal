import mongoose from 'mongoose';
import DMNotes from '../models/dmSchema.mjs'; // Import your schema for reference

// Sample data for DM Notes
const dmNotes = [
    {
        campaignName: 'The Lost Mines of Phandelver',
        sessionDate: new Date('2025-04-01'),
        notes: 'The party entered the cave and fought against goblins. They discovered a hidden treasure chest.',
    },
    {
        campaignName: 'Curse of Strahd',
        sessionDate: new Date('2025-04-08'),
        notes: 'The players traveled to Barovia and encountered strange, mysterious figures. The fog started to close in.',
    },
    {
        campaignName: 'Waterdeep: Dragon Heist',
        sessionDate: new Date('2025-04-15'),
        notes: 'The players began investigating a missing noble. They spoke to a few shady characters in the city.',
    },
];

export default dmNotes;