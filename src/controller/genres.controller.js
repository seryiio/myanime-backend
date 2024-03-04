import { where } from "sequelize";
import { Genre } from "../models/genre.model.js"

export const getAllGenres = async (req, res) => {
    try {
        const genre = await Genre.findAll();
        res.json(genre);
    } catch (error) {
        console.error('Error al obtener generos:', error);
        res.status(500).json({ error: 'Error al obtener generos' });
    }
}

export const getGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genre.findOne({
            where: {
                id,
            }
        });

        if (!genre) { return res.status(404).json('Genre not found'); }
        res.json(genre);
    } catch (error) {
        console.error('Error al obtener generos:', error);
        res.status(500).json({ error: 'Error al obtener generos' });
    }
}

export const createGenre = async (req, res) => {
    const { name } = req.body;
    try {
        const newGenre = await Genre.create({
            name,
        })
        res.json(newGenre);
    } catch (error) {
        console.error('Error al obtener generos:', error);
        res.status(500).json({ error: 'Error al obtener generos' });
    }
}

export const updateGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const genre = await Genre.findByPk(id);
        genre.name = name;

        await genre.save();
        res.json(genre);

    } catch (error) {
        console.error('Error al obtener generos:', error);
        res.status(500).json({ error: 'Error al obtener generos' });
    }
}

export const deleteGenre = async (req, res) => {
    try {
        const { id } = req.params;
        await Genre.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al obtener generos:', error);
        res.status(500).json({ error: 'Error al obtener generos' });
    }
}