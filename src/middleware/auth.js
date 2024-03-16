import { verifyToken } from "../helpers/generateToken.js";

export const checkAuth = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        
        if (!authorizationHeader) {
            return res.status(401).json({ error: 'No se proporcionó un token de autorización' });
        }

        const token = authorizationHeader.split(' ').pop();
        const tokenData = await verifyToken(token);
        
        if (tokenData.id) {
            next();
        } else {
            res.status(403).json({ error: 'No tienes los permisos suficientes' });
        }
    } catch (error) {
        console.error('Error en verificar permisos:', error);
        res.status(500).json({ error: 'Error en verificar permisos' });
    }
};