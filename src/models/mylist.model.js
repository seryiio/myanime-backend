import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js"
import { User } from "./user.model.js"
import { Anime } from "./anime.model.js"
import { Season } from "./season.model.js";
import { Book } from "./book.model.js";

export const MyList = sequelize.define('my_list', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    favorite: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    }
}, { timestamps: false });

User.belongsToMany(Anime, { through: MyList, foreignKey: 'userId' });
Anime.belongsToMany(User, { through: MyList, foreignKey: 'animeId' });

User.belongsToMany(Season, { through: MyList, foreignKey: 'userId' });
Season.belongsToMany(User, { through: MyList, foreignKey: 'seasonId' });

User.belongsToMany(Book, { through: MyList, foreignKey: 'userId' });
Book.belongsToMany(User, { through: MyList, foreignKey: 'bookId' });
