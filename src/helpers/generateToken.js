import jwt from 'jsonwebtoken'
import { Role } from '../models/role.model.js';
import { User } from '../models/user.model.js';

export const tokenSign = async (user) => {
    let roleNames = [];
    const userWithRoles = await User.findByPk(user.id, {
        include: { model: Role, as: 'roles' }
    });

    if (userWithRoles && userWithRoles.roles) {
        roleNames = userWithRoles.roles.map(role => role.name);
    } else {
        console.log('No se encontraron roles para el usuario.');
    }

    return jwt.sign(
        {
            id: user.id,
            role: roleNames
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
};


export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return null;
    }
}