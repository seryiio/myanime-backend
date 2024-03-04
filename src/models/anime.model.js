import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

import { Genre } from './genre.model.js'
import { Season } from './season.model.js';

export const Anime = sequelize.define('anime', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.DATEONLY,
    },
    image: {
        type: DataTypes.STRING,

    },
    cover_image: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    url_trailer: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false,
});

//Cuando es UNO A MUCHOS LA FUNCION VA EN EL PADRE
Anime.hasMany(Season, {
    foreingKey: 'seasonId',
    sourceKey: 'id'
})

Season.belongsTo(Anime, {
    foreingKey: 'seasonId',
    targetId: 'id'
})