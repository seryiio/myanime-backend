import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { MyList } from "./mylist.model.js";

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
    chapter: {
        type: DataTypes.INTEGER,
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

Volume.hasMany(MyList, {
    foreignKey: 'volumeId',
    sourceKey: 'id'
})

MyList.belongsTo(Volume, {
    foreignKey: 'volumeId',
    targetKey: 'id'
})