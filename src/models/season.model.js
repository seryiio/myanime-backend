import { DataTypes } from 'sequelize'
import { sequelize } from "../database/db.js";
import { Episode } from './episode.model.js';
import { Song } from './song.model.js';

export const Season = sequelize.define('season', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    number: {
        type: DataTypes.INTEGER,
    },

    title_japanese: {
        type: DataTypes.STRING,
    },

    title_english: {
        type: DataTypes.STRING,
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

    type: {
        type: DataTypes.STRING,
    },

    studio: {
        type: DataTypes.STRING,
    },

    image: {
        type: DataTypes.STRING,
    },

    cover_image: {
        type: DataTypes.STRING,
    },
    

    cover_image_secondary: {
        type: DataTypes.STRING,
    },

    url_trailer: {
        type: DataTypes.STRING,
    },

    status: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: true,
});

Season.hasMany(Episode, {
    foreingKey: 'seasonId',
    sourceKey: 'id'
})

Episode.belongsTo(Season, {
    foreingKey: 'seasonId',
    targetId: 'id'
})

Season.hasMany(Song, {
    foreingKey: 'seasonId',
    sourceKey: 'id'
})

Song.belongsTo(Season, {
    foreingKey: 'seasonId',
    targetId: 'id'
})