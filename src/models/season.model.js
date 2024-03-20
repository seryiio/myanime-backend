import { DataTypes } from 'sequelize'
import { sequelize } from "../database/db.js";
import { Episode } from './episode.model.js';
import { Song } from './song.model.js';
import { MyList } from './mylist.model.js';

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
    
    puntuation: {
        type: DataTypes.FLOAT,
    },

    cover_image_secondary: {
        type: DataTypes.STRING,
    },

    url_trailer: {
        type: DataTypes.STRING,
    },

    quantity_episodes: {
        type: DataTypes.INTEGER
    },

    day_emission: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: true,
});

Season.hasMany(Episode, {
    foreignKey: 'seasonId',
    targetKey: 'id'
})

Episode.belongsTo(Season, {
    foreignKey: 'seasonId',
    targetKey: 'id'
})

Season.hasMany(Song, {
    foreignKey: 'seasonId',
    sourceKey: 'id'
})

Song.belongsTo(Season, {
    foreignKey: 'seasonId',
    targetKey: 'id'
})

Season.hasMany(MyList, {
    foreignKey: 'seasonId',
    sourceKey: 'id'
})

MyList.belongsTo(Season, {
    foreignKey: 'seasonId',
    targetKey: 'id'
})