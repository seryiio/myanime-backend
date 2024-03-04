import Sequalize from 'sequelize';

export const sequelize = new Sequalize(
    'dbanime',
    'postgres',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);