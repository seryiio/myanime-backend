import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"
import { Genre } from "./genre.model.js";
import { Anime } from "./anime.model.js";

export const AnimeGenre = sequelize.define('anime_genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });

Anime.belongsToMany(Genre, { through: AnimeGenre, foreignKey: 'animeId' });
Genre.belongsToMany(Anime, { through: AnimeGenre, foreignKey: 'genreId' });