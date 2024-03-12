import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"

export const Episode = sequelize.define('episode', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    duration: {
        type: DataTypes.TIME,
    },
    date: {
        type: DataTypes.DATEONLY,
    },
    puntuation: {
        type: DataTypes.FLOAT,
    },
}, {
    timestamps: true,
})