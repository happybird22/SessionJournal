// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import dndRoutes from './routes/dndRoutes.mjs';


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
connectDB();
//Routes
app.use('/api/inventory', dndRoutes);
// app.get('/seed', async (req, res) => {
//     await inventoryItems.create
// })

// Err Middleware
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

// Listeners
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});