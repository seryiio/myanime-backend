import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { MyList } from "./mylist.model.js";

export const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
    },
    username: {

        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    timestamps: false,
});

User.hasMany(MyList, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

MyList.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
})
