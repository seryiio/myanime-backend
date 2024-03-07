import { where } from 'sequelize';
import { Anime } from '../models/anime.model.js'
import { Season } from '../models/season.model.js';

//CRUD DE ANIMES

export const getAllAnimes = async (req, res) => {
    try {
        const animes = await Anime.findAll();
        res.json(animes);
    } catch (error) {
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'Error al obtener animes' });
    }
}

export const getAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findOne({
            where: {
                id,
            }
        });

        if (!anime) { return res.status(404).json('Anime not found'); }

        res.json(anime);
    } catch (error) {
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'Error al obtener animes' });
    }
}

export const createAnime = async (req, res) => {

    const { title_japanese, title_english, synopsis, logo_image, image } = req.body;

    try {
        const newAnime = await Anime.create({
            title_japanese, title_english, synopsis, logo_image, image
        })
        res.json(newAnime);
    } catch (error) {
        console.error('Error al crear anime:', error);
        res.status(500).json({ error: 'Error al crear anime' });
    }
}

export const updateAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const { title_japanese, title_english, synopsis, logo_image, image } = req.body;

        const anime = await Anime.findByPk(id);
        anime.title_japanese = title_japanese;
        anime.title_english = title_english;
        anime.synopsis = synopsis;
        anime.logo_image = logo_image;
        anime.image = image;

        await anime.save();
        res.json(anime);

    } catch (error) {
        console.error('Error al actualizar animes:', error);
        res.status(500).json({ error: 'Error al actualizar animes' });
    }
}

export const deleteAnime = async (req, res) => {
    try {
        const { id } = req.params;
        await Anime.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar animes:', error);
        res.status(500).json({ error: 'Error al eliminar animes' });
    }
}
