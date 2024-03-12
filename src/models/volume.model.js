import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Volume = sequelize.define('volume', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    puntuation: {
        type: DataTypes.FLOAT,
    }
}, {
    timestamps: true,
});
