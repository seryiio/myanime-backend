const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

// import app from './app.js'
// import { sequelize } from './database/db.js'

// async function main() {
//     try {
//         await sequelize.sync({force:false})
//         app.listen(4000);
//         console.log('Server RUN!');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// main();