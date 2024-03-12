import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"
import { Genre } from "./genre.model.js";
import { Book } from "./book.model.js";

export const BookGenre = sequelize.define('book_genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });

Book.belongsToMany(Genre, { through: BookGenre, foreignKey: 'bookId' });
Genre.belongsToMany(Book, { through: BookGenre, foreignKey: 'genreId' });

// await Anime.sync();
// await Genre.sync();
// await AnimeGenre.sync();


//Cuando es MUCHOS A MUCHOS NO IMPORTA DONDE VA
// Anime.belongsToMany(Genre, {
//     through: 'anime_genre',
//     foreingKey: 'animeId',
//     otherKey: 'genreId',
// })