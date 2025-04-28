import express from 'express';
import PCNotes from '../models/pcSchema.mjs';

const router = express.Router();

// --- PC Notes Routes ---
// Create
router.post('/pcnotes', async (req, res, next) => {
    const newNote = await PCNotes.create(req.body);
    res.status(201).json(newNote);
});

// Read All
router.get('/pcnotes', async (req, res, next) => {
    const notes = await PCNotes.find();
    res.json(notes);
});

// Read One
router.get('/pcnotes/:id', async (req, res, next) => {
    const note = await PCNotes.findById(req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Investigation check failed, no note found!'});
    }
    res.json(note);
});

// Update
router.put('/pcnotes/:id', async (req, res, next) => {
    const updatedNote = await PCNotes.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedNote) {
        return res.status(404).json({ message: 'Investigation check failed, no note found!'});
    }
    res.json(updatedNote);
});

// Delete
router.delete('/pcnotes/:id', async (req, res, next) => {
    const deletedNote = await PCNotes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
        return res.status(404).json({ message: 'Crit success! No note found so there is nothing to delete'});
    }
    res.json({ message: 'Session note successfully deleted.'});
});

export default router;