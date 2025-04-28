// Imports
import express from 'express';
import dotenv from 'dotenv';
import inventoryItems from './utilities/data.mjs';


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

//Routes
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