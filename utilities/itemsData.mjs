import mongoose from 'mongoose';
import Inventory from '../models/itemsSchema.mjs';

// Sample data for Inventory Items
const inventoryItems = [
    {
        itemName: 'Sword of Sharpness',
        itemType: 'weapon',
        magic: true,
        itemNotes: 'A magical sword that increases in power as it slays enemies.',
    },
    {
        itemName: 'Potion of Healing',
        itemType: 'potion',
        magic: true,
        itemNotes: 'Restores 2d4+2 hit points when consumed.',
    },
    {
        itemName: 'Scroll of Fireball',
        itemType: 'scroll',
        magic: true,
        itemNotes: 'A magical scroll that casts a Fireball spell upon reading.',
    },
    {
        itemName: 'Silver Necklace',
        itemType: 'trinket',
        magic: false,
        itemNotes: 'A decorative silver necklace, worth 50 gold pieces.',
    },
    {
        itemName: 'Leather Armor',
        itemType: 'armor',
        magic: false,
        itemNotes: 'Provides basic protection with light weight and flexibility.',
    },
];

export default inventoryItems;