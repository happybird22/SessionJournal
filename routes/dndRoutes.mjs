import express from 'express';
import Inventory from '../models/itemsSchema.mjs';
import PCNotes from '../models/pcSchema.mjs';

const router = express.Router();

// --- Inventory Routes ---
// Create
router.post('/inventory', async (req, res, next) => {
    const newItem = await Inventory.create(req.body);
    res.status(201).json(newItem);
});

// Read All
router.get('/inventory', async (req, res, next) => {
    const items = await Inventory.find();
    res.json(items);
});

// Read One
router.get('/inventory/:id', async (req, res, next) => {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Investigation check failed, no item found!'});
    }
    res.json(item);
});

// Update
router.put('/inventory/:id', async (req, res, next) => {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) {
        return res.status(404).json({ message: 'Investigation check failed, no item found!'});
    }
    res.json(updatedItem);
});

// Delete
router.delete('/inventory/:id', async (req, res, next) => {
    const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
        return res.status(404).json({ message: 'Investigation check failed, no item found!'});
    }
    res.json({ message: 'Item deleted successfully'});
});

// --- PC Notes Routes ---
// Create
router.post('/pcnotes', async (req, res, next) => {
    const newNote = await PCNotes.create(req.body);
    res.status(201).json(newNote);
});

// Read All

// Read One

// Update

// Delete

// --- DM Notes Routes ---
// Create

// Read All

// Read One

// Update

// Delete
