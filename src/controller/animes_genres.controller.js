import { Anime } from "../models/anime.model.js"
import { AnimeGenre } from "../models/anime_genre.model.js"
import { Genre } from "../models/genre.model.js";

export const getAllAnimeGenres = async (req, res) => {
    try {
        const animes = await Anime.findAll({
            include: {
                model: Genre,
            }
        });
        res.json(animes);
    } catch (error) {
        console.error('Error al obtener generos del anime:', error);
        res.status(500).json({ error: 'Error al obtener generos del anime' });
    }
}

export const getAllGenreAnimes = async (req, res) => {
    try {
        const genres = await Genre.findAll({
            include: {
                model: Anime,
            }
        });
        res.json(genres);
    } catch (error) {
        console.error('Error al obtener animes de este genero:', error);
        res.status(500).json({ error: 'Error al obtener animes de este genero' });
    }
}


export const getAnimeGenresByID = async (req, res) => {
    try {
        const { id } = req.params;
        const animes = await Anime.findByPk(id, {
            include: {
                model: Genre,
            }
        });
        res.json(animes);
    } catch (error) {
        console.error('Error al obtener generos del anime:', error);
        res.status(500).json({ error: 'Error al obtener generos del anime' });
    }
}

export const getGenreAnimesByID = async (req, res) => {
    try {
        const { id } = req.params;
        const genres = await Genre.findByPk(id, {
            include: {
                model: Anime,
            }
        });
        res.json(genres);
    } catch (error) {
        console.error('Error al obtener animes de este genero:', error);
        res.status(500).json({ error: 'Error al obtener animes de este genero' });
    }
}

export const createAnimeGenres = async (req, res) => {
    const { animeId, genreId } = req.body;
    try {
        const newAnimeGenres = await AnimeGenre.create({
            animeId, genreId
        })
        res.json(newAnimeGenres);
    } catch (error) {
        console.error('Error al obtener generos del anime:', error);
        res.status(500).json({ error: 'Error al obtener generos del anime' });
    }
}

export const updateAnimeGenres = async (req, res) => {
    try {
        const { id } = req.params;
        const { animeId, genreId } = req.body;

        const animeGenres = await AnimeGenre.findByPk(id);
        animeId.animeId = animeId,
            animeGenres.genreId = genreId

        await animeGenres.save();
        res.json(animeGenres);
    } catch (error) {
        console.error('Error al obtener generos del anime:', error);
        res.status(500).json({ error: 'Error al obtener generos del anime' });
    }
}

export const deleteAnimeGenres = async (req, res) => {
    try {
        const { id } = req.params;
        await AnimeGenre.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al obtener generos del anime:', error);
        res.status(500).json({ error: 'Error al obtener generos del anime' });
    }
}