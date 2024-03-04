import { Episode } from "../models/episode.model.js";
import { Season } from "../models/season.model.js";

export const getAllSeasons = async (req, res) => {
    try {
        const seasons = await Season.findAll();
        res.json(seasons);
    } catch (error) {
        console.error('Error al obtener seasons:', error);
        res.status(500).json({ error: 'Error al obtener seasons' });
    }
}

export const getSeason = async (req, res) => {
    try {
        const { id } = req.params;
        const season = await Season.findOne({ where: { id, } });
        if (!season) { return res.status(404).json('Season not found'); }
        res.json(season);
    } catch (error) {
        console.error('Error al obtener seasons:', error);
        res.status(500).json({ error: 'Error al obtener seasons' });
    }
}

export const getSeasonEpisodes = async (req, res) => {
    try {
        const { id } = req.params;
        const episodes = await Episode.findAll({
            where: {
                seasonId: id,
            }
        });
        res.json(episodes);
    } catch (error) {

    }
}

export const createSeason = async (req, res) => {
    const { number, type,start_date, end_date, description, status, animeId } = req.body;
    try {
        const newSeason = await Season.create({ number, type,start_date, end_date, description, status, animeId })
        res.json(newSeason);
    } catch (error) {
        console.error('Error al crear seasons:', error);
        res.status(500).json({ error: 'Error al crear seasons' });
    }
}

export const updateSeason = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, type,start_date, end_date, description, status, animeId } = req.body;

        const season = await Season.findByPk(id);
        season.number = number;
        season.type = type;
        season.start_date = start_date;
        season.end_date = end_date;
        season.description = description;
        season.status = status;
        season.animeId = animeId;

        await season.save();
        res.json(season);
    } catch (error) {
        console.error('Error al actualizar seasons:', error);
        res.status(500).json({ error: 'Error al actualizar seasons' });
    }
}

export const deleteSeason = async (req, res) => {
    try {
        const { id } = req.params;
        await Season.destroy({
            where: {
                id,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar seasons:', error);
        res.status(500).json({ error: 'Error al eliminar seasons' });
    }
}