import app from './app.js'
import { config } from 'dotenv'
import { sequelize } from './database/db.js'

config();

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(4000);
        console.log('Server RUN!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();