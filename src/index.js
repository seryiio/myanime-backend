import app from './app.js'
import { sequelize } from './database/db.js'

async function main() {
    try {
        await sequelize.sync({force:true})
        app.listen(4000);
        console.log('Server RUN!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();