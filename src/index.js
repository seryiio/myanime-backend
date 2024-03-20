import app from './app.js'
import { config } from 'dotenv'
import { sequelize } from './database/db.js'
import http from 'http'

config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(4000);
        server.listen(port, () => {
            console.log(`port running on port http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();