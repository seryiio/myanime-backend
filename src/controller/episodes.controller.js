import { Episode } from "../models/episode.model.js";

export const getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.findAll();
        res.json(episodes);
    } catch (error) {
        console.error('Error al obtener episodios:', error);
        res.status(500).json({ error: 'Error al obtener episodios' });
    }
}

export const getEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const episode = await Episode.findOne({
            where: { id, }
        });

        if (!anime) { return res.status(404).json('Anime not found'); }
        res.json(episode);
    } catch (error) {
        console.error('Error al obtener episodios:', error);
        res.status(500).json({ error: 'Error al obtener episodios' });
    }
}

export const createEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, title, synopsis, duration, date, seasonId } = req.body;

        const episode = await Episode.create({
            number, title, synopsis, synopsis, duration, date, seasonId
        })
        res.json(episode);

    } catch (error) {
        console.error('Error al obtener episodios:', error);
        res.status(500).json({ error: 'Error al obtener episodios' });
    }
}

export const updateEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, title, duration, date, seasonId } = req.body;
        const episode = await Episode.findByPk(id);
        episode.number = number;
        episode.title = title;
        episode.duration = duration;
        episode.date = date;
        episode.seasonId = seasonId;

        await Episode.save();
        res.json(episode);
    } catch (error) {
        console.error('Error al obtener episodios:', error);
        res.status(500).json({ error: 'Error al obtener episodios' });
    }
}

export const deleteEpisode = async (req, res) => {
    try {
        const { id } = req.params;
        await Episode.destroy({
            where: { id, }
        })
        res.status(204);
    } catch (error) {
        console.error('Error al obtener episodios:', error);
        res.status(500).json({ error: 'Error al obtener episodios' });
    }
}