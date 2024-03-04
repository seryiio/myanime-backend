import { where } from 'sequelize';
import { Anime } from '../models/anime.model.js'
import { Season } from '../models/season.model.js';

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

export const getAnimeSeasons = async (req, res) => {
    try {
        const { id } = req.params;
        const seasons = await Season.findAll({
            where: {
                animeId: id,
            }
        });
        res.json(seasons);
    } catch (error) {
        console.error('Error al obtener las temporadas del anime:', error);
        res.status(500).json({ error: 'Error al obtener las temporadas del anime' });
    }
}

export const createAnime = async (req, res) => {

    const { title, type, description, year, image, cover_image, url, url_trailer, status } = req.body;

    try {

        const newAnime = await Anime.create({
            title, type, description, year, image, cover_image, url, url_trailer, status
        })

        res.json(newAnime);

    } catch (error) {
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'Error al obtener animes' });
    }
}


export const updateAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, year, image, cover_image, url, url_trailer, status } = req.body;

        const anime = await Anime.findByPk(id);
        anime.title = title;
        anime.description = description;
        anime.year = year;
        anime.image = image;
        anime.cover_image = cover_image;
        anime.url = url;
        anime.url_trailer = url_trailer;
        anime.status = status;

        await anime.save();
        res.json(anime);

    } catch (error) {
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'Error al obtener animes' });
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
        console.error('Error al obtener animes:', error);
        res.status(500).json({ error: 'Error al obtener animes' });
    }
}
