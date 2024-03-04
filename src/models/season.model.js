import { DataTypes } from 'sequelize'
import { sequelize } from "../database/db.js";
import { Episode } from './episode.model.js';

export const Season = sequelize.define('season', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    number: {
        type: DataTypes.INTEGER,
    },
    
    type: {
        type: DataTypes.STRING,
    },

    start_date: {
        type: DataTypes.DATEONLY,
    },

    end_date: {
        type: DataTypes.DATEONLY,
    },

    description: {
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