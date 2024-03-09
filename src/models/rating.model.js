import { DataTypes } from "sequelize"
import { sequelize } from "../database/db";

export const Rating = sequelize.define('rating',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });