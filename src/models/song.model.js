import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Song = sequelize.define('song', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,
});