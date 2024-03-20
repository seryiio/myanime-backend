import { verifyToken } from "../helpers/generateToken.js";
import { Role } from "../models/role.model.js";
import { User } from "../models/user.model.js";

export const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ error: 'No se proporcionó un token de autorización' });
        }

        const token = authorizationHeader.split(' ').pop();
        const tokenData = await verifyToken(token);
        let roleNames = [];
        const userRoleData = await User.findByPk(tokenData.id, {
            include: { model: Role, as: 'roles' }
        });

        if (userRoleData && userRoleData.roles) {
            roleNames = userRoleData.roles.map(role => role.name);
        } else {
            console.log('No se encontraron roles para el usuario.');
        }

        roleNames.map(roleName => {
            if ([].concat(roles).includes(roleName)) {
                next();
            } else {
                res.status(409).json({ error: 'No tienes los permisos suficientes' });
            }
        });
    } catch (error) {
        console.error('Error en la autenticación:', error);
        res.status(500).json({ error: 'Error en la autenticación' });
    }
}