import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Genre = sequelize.define('genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    timestamps: false,
});
