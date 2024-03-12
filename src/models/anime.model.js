import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'
import { Season } from './season.model.js';

export const Anime = sequelize.define('anime', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_japanese: {
        type: DataTypes.STRING,
        unique: true
    },
    title_english: {
        type: DataTypes.STRING,
        unique: true
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    logo_image: {
        type: DataTypes.STRING,
    },
    puntuation: {
        type: DataTypes.FLOAT,
    },
}, {
    timestamps: false,
});

//Cuando es UNO A MUCHOS LA FUNCION VA EN EL PADRE
Anime.hasMany(Season, {
    foreingKey: 'animeId',
    sourceKey: 'id'
})

Season.belongsTo(Anime, {
    foreingKey: 'animeId',
    targetKey: 'id'
})