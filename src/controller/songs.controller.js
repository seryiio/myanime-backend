import { Song } from "../models/song.model.js";

export const getAllSongsBySeasonId = async (req, res) => {
    try {
        const { id } = req.params;
        const songs = await Song.findAll(
            {
                where: {
                    seasonId: id,
                }
            }
        );
        if (!songs) { return res.status(404).json('Song not found') };
        res.json(songs);
    } catch (error) {
        console.error('Error al obtener canciones:', error);
        res.status(500).json({ error: 'Error al obtener canciones' });
    }
}

export const getAllsongs = async (req, res) => {
    try {
        const song = await Song.findAll();
        res.json(song);
    } catch (error) {
        console.error('Error al obtener canciones:', error);
        res.status(500).json({ error: 'Error al obtener canciones' });
    }
}

export const createSong = async (req, res) => {
    const { number, title, type, link, seasonId } = req.body;
    try {
        const newSong = await Song.create({
            number,
            title,
            type,
            link,
            seasonId,
        })
        res.json(newSong);
    } catch (error) {
        console.error('Error al crear la canción:', error);
        res.status(500).json({ error: 'Error al crear la canción' });
    }
}

export const updateSong = async (req, res) => {
    try {
        const { idSong } = req.params;
        const { number, title, type, link, seasonId } = req.body;
        const song = await Song.findByPk(idSong);
        song.number = number;
        song.title = title;
        song.type = type;
        song.link = link;
        song.seasonId = seasonId;

        await song.save();
        res.json(song);
    } catch (error) {
        console.error('Error al actualizar la canción:', error);
        res.status(500).json({ error: 'Error al actualizar canción' });
    }
}

export const deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        await Song.destroy({
            where: { id, },
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar la canción:', error);
        res.status(500).json({ error: 'Error al eliminar la canción' });
    }
}