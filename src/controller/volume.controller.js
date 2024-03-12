import { Book } from '../models/book.model.js';
import { Volume } from '../models/volume.model.js'


export const ListVolumeByBookId = async (req, res) => {
    try {
        const { id } = req.params;
        const listVolumeByBookId = await Volume.findAll({
            where: {
                bookId: id,
            }
        });
        res.json(listVolumeByBookId);
    } catch (error) {
        console.error('Error al obtener lista de los volumenes del manga:', error);
        res.status(500).json({ error: 'Error al obtener lista de los volumenes del manga' });
    }
}

//CRUD
export const ListVolume = async (req, res) => {
    try {
        const listVolume = await Volume.findAll();
        res.json(listVolume);
    } catch (error) {
        console.error('Error al obtener lista de los volumenes del manga:', error);
        res.status(500).json({ error: 'Error al obtener lista de los volumenes del manga' });
    }
}

export const CreateVolume = async (req, res) => {
    try {
        const { number, image, status, puntuation, bookId } = req.body;
        const createvol = await Volume.create({
            number, image, status, puntuation, bookId,
        })
        res.json(createvol);
    } catch (error) {
        console.error('Error al crear un volumen de manga:', error);
        res.status(500).json({ error: 'Error al crear un volumen de manga' });
    }
}

export const UpdateVolume = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, image, status, puntuation, bookId } = req.body;
        const updatevol = await Volume.findByPk(id);
        updatevol.number = number;
        updatevol.image = image;
        updatevol.status = status;
        updatevol.puntuation = puntuation;
        updatevol.bookId = bookId;
        await updatevol.save();
        res.json(updatevol);
    } catch (error) {
        console.error('Error al editar un volumen de manga:', error);
        res.status(500).json({ error: 'Error al editar un volumen de manga' });
    }
}

export const DeleteVolume = async (req, res) => {
    try {
        const { id } = req.params;
        await Volume.destroy({
            where: { id, },
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar un volumen de manga:', error);
        res.status(500).json({ error: 'Error al eliminar un volumen de manga' });
    }
}