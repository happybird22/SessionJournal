// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import itemRoutes from './routes/itemRoutes.mjs';
import dmRoutes from './routes/dmRoutes.mjs';
import pcRoutes from './routes/pcRoutes.mjs';

//Imports for seeding
import inventoryItems from './utilities/itemsData.mjs';
import pcNotes from './utilities/pcData.mjs';
import dmNotes from './utilities/gmData.mjs';

import Inventory from './models/itemsSchema.mjs';
import PCNotes from './models/pcSchema.mjs';
import DMNotes from './models/dmSchema.mjs';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
connectDB();

//Routes
app.use('/api/inventory', itemRoutes);
app.use('/api/dmnotes', dmRoutes);
app.use('/api/pcnotes', pcRoutes)

// Seed Route
app.get('/api/seed', async (req, res) => {
    try {
        await Inventory.insertMany(inventoryItems);
        await PCNotes.insertMany(pcNotes);
        await DMNotes.insertMany(dmNotes);

        res.send('Database seeded');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error seeding database');
    }
});

// Err Middleware
app.use((err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Seems like we messed up somewhere...");
  });

// Listeners
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});