import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"
import { Anime } from "./anime.model.js";
import { Genre } from "./genre.model.js";

export const AnimeGenre = sequelize.define('animes_genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });
Anime.belongsToMany(Genre, { through: AnimeGenre, foreignKey: 'animeId' });
Genre.belongsToMany(Anime, { through: AnimeGenre, foreignKey: 'genreId' });

// await Anime.sync();
// await Genre.sync();
// await AnimeGenre.sync();


//Cuando es MUCHOS A MUCHOS NO IMPORTA DONDE VA
// Anime.belongsToMany(Genre, {
//     through: 'anime_genre',
//     foreingKey: 'animeId',
//     otherKey: 'genreId',
// })