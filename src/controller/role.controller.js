import { Role } from "../models/role.model.js";

export const listRole = async (req, res) => {
    try {
        const listRole = await Role.findAll()
        res.json(listRole);
    } catch (error) {
        console.error('Error al listar los roles:', error);
        res.status(500).json({ error: 'Error al listar los roles' });
    }
}

export const createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const newRole = await Role.create({
            name,
        })
        res.json(newRole);
    } catch (error) {
        console.error('Error al crear el rol:', error);
        res.status(500).json({ error: 'Error al crear el rol' });
    }
}

export const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const role = await Role.findByPk(id);
        role.name = name;
        await role.save();
        res.json(role);
    } catch (error) {
        console.error('Error al actualizar el rol:', error);
        res.status(500).json({ error: 'Error al actualizar el rol' });
    }
}

export const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        await Role.destroy({
            where: { id, }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar el rol:', error);
        res.status(500).json({ error: 'Error al eliminar el rol' });
    }
}