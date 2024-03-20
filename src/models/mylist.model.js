import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js"

export const MyList = sequelize.define('my_list', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    favorite: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    }
}, { timestamps: false });