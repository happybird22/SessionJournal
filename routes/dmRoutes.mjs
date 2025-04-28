import express from 'express';
import DMNotes from '../models/dmSchema.mjs'

const router = express.Router();

// --- DM Notes Routes ---
// Create
router.post('/dmnotes', async (req, res, next) => {
    const newNote = await DMNotes.create(req.body);
    res.status(201).json(newNote);
});

// Read All
router.get('/dmnotes', async (req, res, next) => {
    const notes = await DMNotes.find();
    res.json(notes);
});

// Read One
router.get('/dmnotes/:id', async (req, res, next) => {
    const note = await DMNotes.findById(req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Investigation check failed, no note found!'});
    }
    res.json(note);
});
// Update
router.put('/dmnotes/:id', async (req, res, next) => {
    const updatedNote = await DMNotes.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedNote) {
        return res.status(404).json({ message: 'Investigation check failed, no note found!'});
    }
    res.json(updatedNote);
});

// Delete
router.delete('/dmnotes/:id', async (req, res, next) => {
    const deletedNote = await DMNotes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
        return res.status(404).json({ message: 'Investigation check failed, no note found!'});
    }
});

export default router