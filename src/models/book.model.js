import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Anime } from './anime.model.js'
import { Volume } from './volume.model.js'

export const Book = sequelize.define('book', {
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

    year: {
        type: DataTypes.INTEGER,
    },

    season_year: {
        type: DataTypes.STRING,
    },

    book_type: {
        type: DataTypes.STRING,
    },

    author: {
        type: DataTypes.STRING,

    },
    status: {
        type: DataTypes.STRING,

    },
    puntuation: {
        type: DataTypes.FLOAT,
    },
}, {
    timestamps: false,
});

Book.hasMany(Anime, {
    foreignKey: 'bookId',
    sourceKey: 'id'
});

Anime.belongsTo(Book, {
    foreignKey: 'bookId',
    targetKey: 'id'
});

Book.hasMany(Volume, {
    foreignKey: 'bookId',
    sourceKey: 'id'
});

Volume.belongsTo(Book, {
    foreignKey: 'bookId',
    targetKey: 'id'
})