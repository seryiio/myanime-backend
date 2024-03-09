import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./user.model.js";
import { Role } from "./role.model.js";

export const UserRole = sequelize.define('user_role',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });

User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });