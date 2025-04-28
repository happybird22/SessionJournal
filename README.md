🧙‍♂️ D&D Session Journal API
A Node.js, Express, and MongoDB RESTful API to manage Dungeons & Dragons session data, including party inventory, Dungeon Master (DM) notes, and player session notes.

🏗️ Technologies Used
Node.js

Express.js

MongoDB + Mongoose

JavaScript (ES Modules)

dotenv (for environment variables)

📚 API Routes
Inventory Items

Method	Route	Description
GET	/api/inventory	Get all inventory items
POST	/api/inventory	Add a new inventory item
PUT	/api/inventory/:id	Update an inventory item
DELETE	/api/inventory/:id	Delete an inventory item
Player Notes

Method	Route	Description
GET	/api/pcnotes	Get all player notes
POST	/api/pcnotes	Add a new player note
PUT	/api/pcnotes/:id	Update a player note
DELETE	/api/pcnotes/:id	Delete a player note
DM Notes

Method	Route	Description
GET	/api/dmnotes	Get all DM notes
POST	/api/dmnotes	Add a new DM note
PUT	/api/dmnotes/:id	Update a DM note
DELETE	/api/dmnotes/:id	Delete a DM note

🌱 Seeding Sample Data
To seed sample data into the database, hit the following route in a browser or Postman:

bash
Copy
Edit
GET /api/seed
This will insert example inventory items, player notes, and DM notes into your database.

📝 Notes
All routes accept and return JSON.

Error handling middleware catches general server errors and returns a simple 500 message.

MongoDB indexes have been created for efficient querying.

Sample data is stored inside the /utilities/ folder.

📖 Future Enhancements
Add user authentication (for DMs vs Players).

Implement session-based sorting or filtering (e.g., by session date).

Build a frontend React app to connect to this API.

🛡️ License
This project is for educational purposes only.