import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"

export const Episode = sequelize.define('episode', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    duration: {
        type: DataTypes.TIME,
    },
    start_date: {
        type: DataTypes.DATEONLY,
    },
}, {
    timestamps: true,
})