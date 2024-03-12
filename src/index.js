import app from './src/app.js'
import { sequelize } from './src/database.js'

async function main() {
    try {
        await sequelize.sync({force:false})
        app.listen(4000);
        console.log('Server RUN!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();