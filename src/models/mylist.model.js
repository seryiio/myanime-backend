import { DataTypes } from "sequelize"
import { sequelize } from "../database/db.js"
import { Anime } from "./anime.model.js";
import { User } from "./user.model.js";

export const MyList = sequelize.define('MyList', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });

User.belongsToMany(Anime, { through: MyList, foreignKey: 'userId' });
Anime.belongsToMany(User, { through: MyList, foreignKey: 'animeId' });