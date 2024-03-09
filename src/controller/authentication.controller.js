import { compare } from "bcrypt";
import { encrypt } from "../helpers/handleBcrypt.js";
import { User } from "../models/user.model.js";
import { UserRole } from "../models/user_role.model.js";
import { Role } from "../models/role.model.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username, } });

        if (!user) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }

        if (user) {
            const checkPassword = await compare(password, user.password);

            if (checkPassword) {
                res.status(200).json({ data: user, message: 'Ingreso correctamente' });
            } else {
                res.status(409).json({ error: 'Datos incorrectos' });
            }
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
        res.status(500).json({ error: 'Error en la autenticación' });
    }
};


export const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const passwordHash = await encrypt(password);

        // Crea el usuario
        const newUser = await User.create({
            email,
            username,
            password: passwordHash
        });

        const userRole = await Role.findOne({ where: { name: 'USER' } });
        if (!userRole) {
            console.error('El rol "USER" no está definido en la base de datos.');
            return res.status(500).json({ error: 'Error al crear usuario' });
        }

        await UserRole.create({ userId: newUser.id, roleId: userRole.id });

        res.status(200).json({ data: newUser, message: 'Usuario creado correctamente' });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};
