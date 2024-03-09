import { DataTypes } from "sequelize"
import { sequelize } from "../database/db";

export const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });