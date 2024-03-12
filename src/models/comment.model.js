import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./user.model.js";
import { Anime } from "./anime.model.js";
import { Season } from "./season.model.js";
import { Book } from "./book.model.js";

export const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
    },
    date_time: {
        type: DataTypes.DATE,
    }
}, { timestamps: false });

User.belongsToMany(Anime, { through: Comment, foreignKey: 'userId' });
Anime.belongsToMany(User, { through: Comment, foreignKey: 'animeId' });

User.belongsToMany(Season, { through: Comment, foreignKey: 'userId' });
Season.belongsToMany(User, { through: Comment, foreignKey: 'seasonId' });

User.belongsToMany(Book, { through: Comment, foreignKey: 'userId' });
Book.belongsToMany(User, { through: Comment, foreignKey: 'bookId' });
