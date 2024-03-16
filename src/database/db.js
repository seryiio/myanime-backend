import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    // 'verceldb',
    // 'default',
    // '1LZzTysavI7P',
    // {
    //     host: 'ep-bitter-moon-a4zi37nh-pooler.us-east-1.aws.neon.tech',
    //     dialect: 'postgres',
    //     dialectOptions: {
    //         ssl: {
    //             require: true,
    //             rejectUnauthorized: false
    //         }
    //     }
    // }
    'dbanime',
    'postgres',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);
