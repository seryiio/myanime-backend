import app from './app.js'
import { config } from 'dotenv'
import { sequelize } from './database/db.js'

config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(4000);
        console.log('Server RUN!');
        server.listen(port, () => {
            console.log(`port running on port http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();