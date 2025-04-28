import mongoose from 'mongoose';
import PCNotes from '../models/pcSchema.mjs';

const pcNotes = [
    {
        playerName: 'Aragorn',
        sessionDate: new Date('2025-04-01'),
        notes: 'Defeated a group of orcs and found a mysterious sword.',
    },
    {
        playerName: 'Legolas',
        sessionDate: new Date('2025-04-03'),
        notes: 'Discovered a hidden path through the forest. Gained new archery skills in level up!',
    },
    {
        playerName: 'Gimli',
        sessionDate: new Date('2025-04-10'),
        notes: 'Shared tales of the dwarves while bonding with the party. Lost my axe but recovered it.',
    },
];

export default pcNotes